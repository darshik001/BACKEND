const express = require('express')
const {addAdminepage, addAdmin, viewAdmin, editAdmin, updateAdmin, deleteAdmin } = require('../controller/admin.controller')
const upload = require('../middalwear/uploadImage')
const routes = express.Router()

routes.get('/add-admin',addAdminepage)
routes.post('/add-admin',upload.single("profileImage"), addAdmin)
routes.get('/view-admin',viewAdmin)
routes.get('/edit-admin/:id',editAdmin)
routes.post('/update-admin/:id',upload.single('profileImage'),updateAdmin)
routes.get('/delete-admin/:id',deleteAdmin)
module.exports =routes