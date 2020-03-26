const connection = require('../database/connection')

module.exports = {

    async index(req, res){
        //esquema de paginação
        const { page = 1} = req.query;

        //Total de casos
        const [count] = await connection('incidents').count()
        res.header('X-Total-Count', count['count(*)']); //Informando total de casos no header com o nome X-Total-Count

        const incidents = await connection('incidents')
            .join('ongs', 'ong_id', '=', 'incidents.ong_id')
            .limit(5) //Limite de registros em uma page
            .offset(( page - 1) * 5) //Na page 1 vai pular 0 registros, a partir do dois vai pular 5 e diante
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);

       

        return res.json(incidents)
    },

    async create(req, res){
        const { title, description, value} = req.body;
        const ong_id = req.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        })

        res.json({ id })
    },

    async delete(req, res){
        //Identificando id do caso
        const { id } = req.params;
        const ong_id = req.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id) //Buscar o caso especifico, apartir do ID
            .select('ong_id') //Apenas a coluna 'ong_id'
            .first(); //Vai retornar apenas um resultado

        //Verificacao se ong_id (responsavel pelo caso) diferente do ong_id (ong quer deletar o caso)
        if(incident.ong_id !== ong_id){
            return res.status(401).json({ error: 'Operação não permitida. / Operation not permitted.'})
        }

        //Deletando da tabela
        await connection('incidents').where('id', id).delete();

        //Retornar uma resposta que nao ha conteudo (204) e o send para eviar o conteudo
        return res.status(204).send();
    }
}