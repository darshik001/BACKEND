const express = require('express')
const { deshboard, profilepage, changepasswordpage, changepassword, forgetpassword, otpvarifecationpage, verifyotp, resetpasswordpage, resetpassword } = require('../controller/index.controller')
const passport = require('passport')
const routes = express.Router()


routes.get('/',passport.checkAuthenticated, deshboard)
routes.get('/profile',passport.checkAuthenticated, profilepage)
routes.get('/change-password',passport.checkAuthenticated,changepasswordpage)
routes.post('/change-password',passport.checkAuthenticated,changepassword)
routes.post('/forget-password',forgetpassword)
routes.get('/reset-password',resetpasswordpage)
routes.post('/reset-password',resetpassword)


routes.get('/otpvarifecation',otpvarifecationpage)
routes.post('/verify-otp',verifyotp)
routes.use('/admin',require('./admine.routes'))
routes.use('/blog',require('./blog.routes'))
routes.use('/user',require('./auth.routes'))
module.exports = routes