const express = require('express')
const { addblogpage, addblog, viewblog, editblog, deleteblog } = require('../controller/blog.controller')
const upload = require('../middalwear/uploadImage')
const routes = express.Router()

routes.get('/add-blog',addblogpage)
routes.post('/add-blog',upload.single('profileImage'), addblog)
routes.get('/view-blog',viewblog)
routes.get('/edit-blog/:id',editblog)
routes.get('/delete-blog/:id',deleteblog)
module.exports = routes