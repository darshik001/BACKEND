const express = require('express')
const { addProductPage,addProduct,viewProducts,getallsubcategory,getallextracategory } = require('../controller/product.controller')
const upload = require('../middalwear/uploadImage')
const routes = express.Router()

routes.get('/add-product',addProductPage)
routes.post('/add-product',upload.single('productImage'), addProduct)
routes.get('/view-product',viewProducts)


//get subcategory and extracategory onchange

routes.get('/subcategory/:id',getallsubcategory)
routes.get('/extracategory/:id',getallextracategory)

module.exports = routes