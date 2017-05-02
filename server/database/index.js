const knex = require('./knex')

function getCategories () {
  return knex('categories')
}

function addCategory (category) {
  return knex('categories')
    .insert({
      id: category.categoryId + 1,
      category_name: category.categoryName})
    .catch(error => {
      callback(error)
    })
}

module.exports = {
  getCategories,
  addCategory
}
