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
routes.use('/admin',passport.checkAuthenticated,require('./admine.routes'))
routes.use('/user',require('./auth.routes'))
routes.use('/category',passport.checkAuthenticated,require('./category.routes'))
routes.use('/subcategory',passport.checkAuthenticated,require('./subcategory.routes'))
module.exports = routes