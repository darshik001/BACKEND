const blogModel = require('../model/blog.model')
const path = require('path')
const fs = require('fs')
exports.addblogpage = async(req,res)=>{
    res.render('blog/addblog')
}


exports.addblog = async(req,res)=>{
    try {
        let imagepath = '';
        if(req.file){
            imagepath = `/uploads/${req.file.filename}`
        }
          await blogModel.create({
            ...req.body,
            profileImage:imagepath,
            date:(new Date().toLocaleDateString("en-IN",{
  month: "short",
  day: "2-digit",
  year: "numeric"
}))
        })
          res.redirect('/blog/view-blog')
    } catch (error) {
        console.log(error)
    }
}


exports.viewblog = async(req,res)=>{
    try {
        let blogs = await blogModel.find()
        res.render('blog/viewblog',{blogs})
    } catch (error) {
        console.log(error)
    }
}


exports.deleteblog = async(req,res)=>{
    try {
        let id = req.params.id
      let blog  = await blogModel.findById(id)
      if(blog.profileImage !=""){
         let imagepath = path.join(__dirname,"..",blog.profileImage)                                   
         console.log(imagepath)
         await fs.unlinkSync(imagepath)
      }

      await blogModel.findByIdAndDelete(id)
      res.redirect('/blog/view-blog')
    } catch (error) {
        console.log(error)
    }
}

exports.editblog = async(req,res)=>{
    try {
         let id = req.params.id
      let blog  = await blogModel.findById(id)
      res.render('fff',{blog})
    } catch (error) {
        console.log(error)
    }
}