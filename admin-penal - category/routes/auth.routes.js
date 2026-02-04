const express = require('express')
const { loginpage, loginuser, logOut } = require('../controller/auth.controller')
const routes = express.Router()
const passport = require('passport')

routes.get('/login',loginpage)
routes.post('/login',passport.authenticate('local',{failureRedirect:'/user/login'}), loginuser)
routes.get('/logout',logOut)
module.exports = routes