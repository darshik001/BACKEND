const express = require('express')
const { deshboard, profilepage, changepasswordpage, changepassword, forgetpassword, otpvarifecation, otpvarifecationpage, verifyotp, resetpasswordpage, resetpassword } = require('../controller/index.controller')
const { loginpage } = require('../controller/auth.controller')
const { route } = require('./admine.routes')
const routes = express.Router()


routes.get('/',deshboard)
routes.get('/profile',profilepage)
routes.get('/change-password',changepasswordpage)
routes.post('/change-password',changepassword)
routes.post('/forget-password',forgetpassword)
routes.get('/reset-password',resetpasswordpage)
routes.post('/reset-password',resetpassword)


routes.get('/otpvarifecation',otpvarifecationpage)
routes.post('/verify-otp',verifyotp)
routes.use('/admin',require('./admine.routes'))
routes.use('/blog',require('./blog.routes'))
routes.use('/user',require('./auth.routes'))
module.exports = routes