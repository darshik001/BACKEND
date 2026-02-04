const express = require('express')
const { addSubCategorypage, addSubCategory } = require('../controller/subcategory.controller')

const route = express.Router()

route.get('/add-subcategory',addSubCategorypage)


route.post('/add-subcategory',addSubCategory)
// route.get('/view-category',viewCategorypage)
// route.get('/edit-category/:id',editCategorypage)
// route.post('/update-category/:id',upload.single('categoryImage'),updateCategory)
// route.get('/delete-category/:id',deleteCategory)

module.exports = route
