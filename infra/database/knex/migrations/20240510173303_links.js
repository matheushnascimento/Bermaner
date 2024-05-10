exports.up = knex => knex.schema.createTable('links', table => {
  table.increments('id');
  table.text('original_link')
  table.text('shortened_link')
  table.timestamp('created_at').default(knex.fn.now());
  table.timestamp('updated_at').default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable('links');
