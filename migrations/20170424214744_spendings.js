exports.up = knex => {
  return knex.schema.createTable('spendings', table => {
    table.increments('id').primary()
    table.string('category_name').references('categories.category_name')
    table.integer('amount')
    table.timestamp('date').defaultTo(knex.fn.now());
  })
}

exports.down = knex => {
  return knex.schema.dropTable('spendings')
}
