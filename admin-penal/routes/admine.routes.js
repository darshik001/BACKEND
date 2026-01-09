const express = require('express')
const {addAdminepage, addAdmin, viewAdmin } = require('../controller/admin.controller')
const upload = require('../middalwear/uploadImage')
const routes = express.Router()

routes.get('/add-admin',addAdminepage)
routes.post('/add-admin',upload.single("profileImage"), addAdmin)
routes.get('/view-admin',viewAdmin)
module.exports =routes