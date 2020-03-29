//Importando o banco de dados
const connection = require('./../database/connection');

//Importando as funcionalidades do pacote crypto, usado para criptografia
const crypto = require('crypto');

module.exports = {

    async index (req, res){
    //Selecionar todos os campos e registros da tabela 'ongs'
        const ongs = await connection('ongs').select('*');
    
        return res.json(ongs);
    },


    async create(req, res){
        //Para acessar algum dado da requisitado no corpo
    // Armazenar cada dado em uma variavel separada por isso {...} (desestruturação)
    //Para evitar que o usuario envia um dado que nao pode
        const { name, email, whatsapp, city, uf } = req.body;

        //Gerando aleatoriamente caracteres para o 'id'.... Vai gerar 4 bytes de caractere hexadecimais
        const id = crypto.randomBytes(4).toString('HEX');

        //Inserindo dados na table
        //Quando node chegar nesse code, ele vai aguarda até ser finalizado
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        return res.json({ id });
    },


}