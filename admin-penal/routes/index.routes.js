const express = require('express')
const { deshboard } = require('../controller/auth.controller')
const routes = express.Router()

routes.get('/',deshboard)
routes.use('/admin',require('./admine.routes'))

module.exports = routes