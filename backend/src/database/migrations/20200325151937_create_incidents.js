
exports.up = function(knex) {
    //Criando a table de CASOS
    return knex.schema.createTable('incidents', function(table) {
      table.increments() //Cria uma chave primaria automaticamente: 1,2,3,4...

      table.string('title').notNullable(); 
      table.string('description').notNullable();
      table.decimal('value').notNullable();

      table.string('ong_id').notNullable();
       //Chave estrangeira... Quer dizer que a coluna 'ong_id' esta referindo a coluna da 'id' da tabala 'ongs'
      table.foreign('ong_id').references('id').inTable('ongs')
  })
};

exports.down = function(knex) {
    //Deletando a tabela se houver erro
  return knex.schema.dropTable('incidents')
};


