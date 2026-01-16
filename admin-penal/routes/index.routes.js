const express = require('express')
const { deshboard } = require('../controller/index.controller')
const { loginpage } = require('../controller/auth.controller')
const routes = express.Router()


routes.get('/',deshboard)
routes.use('/admin',require('./admine.routes'))
routes.use('/blog',require('./blog.routes'))
routes.use('/user',require('./auth.routes'))
module.exports = routes