const knex = require('./knex')

function getCategories () {
  return knex('categories')
}

function addCategory (category) {
  return knex('categories')
    .insert({
      category_id: category.category_id,
      category: category.category})
}

module.exports = {
  getCategories,
  addCategory
}
