
const express = require('express')
const { deshbord, addstudentpage, addstudent, deletestudent, editstudent, updatestudent } = require('../controller/student.controller');
const upload = require('../middleware/imageupload');

const routes = express.Router()

routes.get('/', deshbord)

routes.get('/addstudent', addstudentpage)
routes.post('/add-student',upload.single('profileImage'),addstudent)
routes.get('/deletestudent/:id',deletestudent)
routes.get('/editstudent/:id',editstudent)
routes.post('/update-student/:id', upload.single('profileImage'), updatestudent)



module.exports = routes
