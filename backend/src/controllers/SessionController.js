const connection = require('../database/connection')

module.exports = {
    async create(req, res) {
        //ID da ong que esta tentando fazer LOGIN
        const { id } = req.body;

        //Pegando as informações da ong
        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first()

        //Verificando se a ONG esta registrada no banco de dados
        if(!ong){
            return res.status(400).json({ error: 'ONG não encontrada com esse ID. / No ONG found with this ID' })
        }

        return res.json(ong)
    }
}