const adminModel = require('../model/admin.model')
const bcrypt = require('bcrypt')
const path = require('path')
const fs = require('fs')
exports.addAdminepage =async (req,res)=>{
    res.render('admin/addAdmin')
}


exports.addAdmin = async(req,res)=>{
    let imagepath = ""
    if(req.file){
        imagepath = `/uploads/${req.file.filename}`
    }

    let haspassword = await bcrypt.hash(req.body.password,10)
   try {
     await adminModel.create({
        ...req.body,
        password:haspassword,
        profileImage:imagepath
     })
     res.redirect('/admin/view-admin')
   } catch (error) {
    console.log(error)
     res.redirect('/admin/add-admin')

   }  
}


exports.viewAdmin = async(req,res)=>{
    try {
        let search = req.query.params? req.query.params:"";
        console.log(search)
        let admins = await  adminModel.find({
            $or:[
                {
                    "fistname":{$regex:search,$options:"i"}
                },
                {
                    "lastname":{$regex:search,$options:"i"}
                }
            ]
        })
        res.render('admin/viewadmin',{admins})
        
    } catch (error) {
        console.log(error)
    }
}


exports.editAdmin = async(req,res)=>{
    let id  = req.params.id;
    try {
        let admin = await adminModel.findById(id)
     
        res.render('admin/editAdmin',{admin})
    } catch (error) {
        console.log(error)
    }
}

exports.updateAdmin = async(req,res)=>{
    let id  = req.params.id;
    

try {
    let admin = await adminModel.findById(id)
        let imagepath = admin.profileImage;
        if(req.file){
             if(admin.profileImage !== ""){
                let imageurl = path.join(__dirname,"..",imagepath)
                await fs.unlinkSync(imageurl)
             }
             imagepath = `/uploads/${req.file.filename}`
        }
     await adminModel.findByIdAndUpdate(id,{
        ...req.body,
        profileImage:imagepath
     },{new:true})
        res.redirect('/admin/view-admin')
    } catch (error) {
        console.log(error)
        res.redirect('/admin/view-admin')
    }
}


exports.deleteAdmin = async(req,res)=>{
    let id  = req.params.id
    try {
        let admin = await adminModel.findById(id)
        if(admin.profileImage !==""){
            let imageurl = path.join(__dirname,"..",admin.profileImage)
            await fs.unlinkSync(imageurl)
        }

        await adminModel.findByIdAndDelete(id)
        res.redirect('/admin/view-admin')

    } catch (error) {
        console.log(error)
    }
}