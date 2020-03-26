const knex = require('knex');
//Importando as configuracoes do banco de dados
const configuration = require('./../../knexfile');
//Criando a conexao, passando como parametro de desenvolvimento do arquivo knexfile
const connection = knex(configuration.development)

module.exports = connection