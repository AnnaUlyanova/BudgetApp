var express = require('express')

var db = require('../database')

var router = express.Router()

router.get('/categories', function(req, res) {
  db.getCategories()
    .then(function(categories) {
      res.json({categories: categories})
    })
    .catch(function(err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
