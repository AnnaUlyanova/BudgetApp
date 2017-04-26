const express = require('express')

const db = require('../database')

const router = express.Router()

let nextId = 4

router.get('/categories', function(req, res) {
  db.getCategories()
    .then(function(categories) {
      res.json({categories: categories})
    })
    .catch(function(err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/', function(req, res) {
  const category = {
    categoryId: nextId++,
    categoryName: req.body.newCategory
  }
  db.addCategory(category, (error, category) => {
    if (error) {
      res.status(500).send(error)
    } else {
      res.json(category)
    }
  })
})

module.exports = router
