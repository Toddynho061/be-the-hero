const connection = require('./../database/connection')
module.exports = {
    async index(req, res){
        //Buscando dados da ong logada
        const ong_id = req.headers.authorization;

        //Buscar os incidents
        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');

        return res.json(incidents)
    }
}