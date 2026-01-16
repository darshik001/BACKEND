const express = require('express')
const { loginpage, loginuser, logOut } = require('../controller/auth.controller')
const routes = express.Router()

routes.get('/login',loginpage)
routes.post('/login',loginuser)
routes.get('/logout',logOut)
module.exports = routes