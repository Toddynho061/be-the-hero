//Criação da tabela
exports.up = function(knex) {
    //Criando uma tabela e nomeando como 'ongs' e passando um callback
    return knex.schema.createTable('ongs', function(table) {
        table.string('id').primary(); //definindo essa coluna como principal
        table.string('name').notNullable(); // notNullable quer dizer que nn pode ser vazio
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable(); //Numero 2, o tamanho do texto armazenado
    })
  
};
//Se houver algum erro na tabela, geralmente para deletar
exports.down = function(knex) {
  return knex.schema.dropTable('ongs')
};
