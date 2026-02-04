const categoryModel = require('../model/category.model')
const subcategoryModel = require('../model/subcategory.model')


exports.addSubCategorypage = async(req,res)=>{
   try {
    let category = await categoryModel.find()
    res.render('subcategory/addSubcategory',{category})
   } catch (error) {
    console.log(error)
   }
}


exports.addSubCategory = async(req,res)=>{
    try {
        let subcategory = await subcategoryModel.create(req.body)
        req.flash('success',"sub Category Added")
        res.redirect('/subcategory/add-subcategory')
    } catch (error) {
        console.log(error)
        res.redirect('/category/add-category')
    }
}



// exports.viewCategorypage = async(req,res)=>{
//    try {
//     let categoryes = await categoryModel.find()
//     res.render('category/viewcategory',{categoryes})
//    } catch (error) {
//     console.log(error)
//    }
// }


// exports.editCategorypage = async(req,res)=>{
//    try {
//     let id = req.params.id
//     let category= await categoryModel.findById(id)

//     res.render('category/editcategory',{category})
//    } catch (error) {
//     console.log(error)
//    }
// }

// exports.updateCategory = async(req,res)=>{
//    try {
//     let id = req.params.id
//     let category= await categoryModel.findById(id)
//     let imagepath = category.categoryImage
//     if(req.file){
//         if(imagepath != ''){
//             let deletepath = path.join(__dirname,"..",imagepath)
//             await fs.unlinkSync(deletepath)
//         }
//         imagepath = `/uploads/${req.file.filename}`
//     }

//         await categoryModel.findByIdAndUpdate(id,{
//             ...req.body,
//             categoryImage:imagepath
//         },{new:true})
//         req.flash('success',"Category Update!!!!")
//     res.redirect('/category/view-category')
//    } catch (error) {
//     console.log(error)
//    }
// }



// exports.deleteCategory = async(req,res)=>{
//    try {
//     let id = req.params.id
//     let category= await categoryModel.findById(id)
//     let imagepath = category.categoryImage
   
//         if(imagepath != ''){
//             let deletepath = path.join(__dirname,"..",imagepath)
//             await fs.unlinkSync(deletepath)
//         }
//         await categoryModel.findByIdAndDelete(id)
//         req.flash('sucess',"Category Deleted!!!!")
//     res.redirect('/category/view-category')
//    } catch (error) {
//     console.log(error)
//    }
// }