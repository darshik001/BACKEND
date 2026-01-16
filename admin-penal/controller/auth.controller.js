const adminModel = require('../model/admin.model')
const bcrypt = require('bcrypt');
exports.loginpage = async(req,res)=>{
    try {
         if(req.cookies && req.cookies.user && req.cookies.user._id){
            res.redirect('/')
        }else{

            return res.render('login')
        }
    } catch (error) {
        console.log(error)
    }
}

exports.loginuser = async(req,res)=>{
    try {
       
       let admin = await adminModel.findOne({ email: req.body.email })
        if(!admin){
            console.log("User Not Found")
            return res.redirect('/user/login')
        }
  
        let matchpassword = await bcrypt.compare(req.body.password,admin.password)
        
        if(!matchpassword){
            console.log("Invalid password!!!!")
           return res.redirect('/user/login')
        }

        res.cookie('user',admin)

        return res.redirect('/')


    } catch (error) {
        console.log(error)
    }
}

exports.logOut = async (req,res)=>{
    try {
        res.clearCookie('user')
        res.redirect('/user/login')
    } catch (error) {
        console.log(error)
    }
}