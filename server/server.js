var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var server = express()

const routes = require('./routes')

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/', routes)

module.exports = server
