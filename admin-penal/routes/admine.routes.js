const express = require('express')
const {addAdminepage } = require('../controller/admin.controller')
const routes = express.Router()

routes.get('/add-admin',addAdminepage)

module.exports =routes