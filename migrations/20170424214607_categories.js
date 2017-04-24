exports.up = knex => {
  return knex.schema.createTable('categories', table => {
    table.increments('id').primary()
    table.string('category_name')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('categories')
}
