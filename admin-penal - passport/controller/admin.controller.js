const adminModel = require('../model/admin.model')
const bcrypt = require('bcrypt')
const path = require('path')
const fs = require('fs')


exports.addAdminepage =async (req,res)=>{
    // res.clearCookie('hello');
    if(req.cookies && req.cookies.user && req.cookies.user._id){

        res.render('admin/addAdmin')
    }else{
        res.redirect('/user/login')
    }
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
        //   console.log(req.cookies)
        const user = req.cookies.user

    try {
        let search = req.query.search ? req.query.search:"";
        let aseorder = req.query.aseorder

        // pagenation

        let page = parseInt(req.query.page) || 1
        let limit = 5
        let skip = Math.ceil(page -1) * limit 
        let totaleadmin = await adminModel.countDocuments()
        let totalpage = Math.ceil(totaleadmin/limit)
        
        let order  = 1;
        if(aseorder =="ase"){
   order = 1
        }else if(aseorder =="des"){
            order = -1
        }

        
        let admins = await  adminModel.find( {
            $or:[
                {
                    "firstname":{$regex:search,$options:"i"}
                },
                {
                    "lastname":{$regex:search,$options:"i"}
                }
            ]
        }).skip(skip).limit(limit).sort({firstname:order})
        


    //   if(order){
    //     admins = await adminModel.find().sort({firstname:order})
    //   }
        if(req.cookies && req.cookies.user && req.cookies.user._id){
 res.render('admin/viewadmin',{
        admins,
        totalpage,
        currantPage:page,
        user
        })
        } else{
            res.redirect('/user/login')
        }
       
        
    } catch (error) {
        console.log(error)
    }
}


exports.editAdmin = async(req,res)=>{
    let id  = req.params.id;
        const user = req.cookies.user

    try {
        let admin = await adminModel.findById(id)
         if(req.cookies && req.cookies.user && req.cookies.user._id){

             res.render('admin/editAdmin',{admin,user})
         }else{
            res.redirect('/user/login')
         }
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