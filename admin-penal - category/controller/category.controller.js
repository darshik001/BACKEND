const categoryModel = require('../model/category.model')
const path = require("path")
const fs = require("fs")
exports.addCategorypage = async(req,res)=>{
   try {
    res.render('category/addcategory')
   } catch (error) {
    console.log(error)
   }
}


exports.addCategory = async(req,res)=>{
    try {
        let imagepath = req.file ?`/uploads/${req.file.filename}` :""

        let category = await categoryModel.create({
            ...req.body,
            categoryImage:imagepath
        })
        req.flash('success',"category Added")
        res.redirect('/category/add-category')
    } catch (error) {
        console.log(error)
        res.redirect('/category/add-category')
    }
}



exports.viewCategorypage = async(req,res)=>{
   try {
    let categoryes = await categoryModel.find()
    res.render('category/viewcategory',{categoryes})
   } catch (error) {
    console.log(error)
   }
}


exports.editCategorypage = async(req,res)=>{
   try {
    let id = req.params.id
    let category= await categoryModel.findById(id)

    res.render('category/editcategory',{category})
   } catch (error) {
    console.log(error)
   }
}

exports.updateCategory = async(req,res)=>{
   try {
    let id = req.params.id
    let category= await categoryModel.findById(id)
    let imagepath = category.categoryImage
    if(req.file){
        if(imagepath != ''){
            let deletepath = path.join(__dirname,"..",imagepath)
            await fs.unlinkSync(deletepath)
        }
        imagepath = `/uploads/${req.file.filename}`
    }

        await categoryModel.findByIdAndUpdate(id,{
            ...req.body,
            categoryImage:imagepath
        },{new:true})
        req.flash('success',"Category Update!!!!")
    res.redirect('/category/view-category')
   } catch (error) {
    console.log(error)
   }
}



exports.deleteCategory = async(req,res)=>{
   try {
    let id = req.params.id
    let category= await categoryModel.findById(id)
    let imagepath = category.categoryImage
   
        if(imagepath != ''){
            let deletepath = path.join(__dirname,"..",imagepath)
            await fs.unlinkSync(deletepath)
        }
        await categoryModel.findByIdAndDelete(id)
        req.flash('sucess',"Category Deleted!!!!")
    res.redirect('/category/view-category')
   } catch (error) {
    console.log(error)
   }
}