
const express = require('express')
const StudentModel = require('../model/student.model');
const { deshbord, addstudentpage, addstudent, deletestudent, editstudent, updatestudent } = require('../controller/student.controller');

const routes = express.Router()

routes.get('/', deshbord)

routes.get('/addstudent', addstudentpage)
routes.post('/add-student',addstudent)
routes.get('/deletestudent/:id',deletestudent)
routes.get('/editstudent/:id',editstudent)

routes.post('/update-student/:id', updatestudent)



module.exports = routes
