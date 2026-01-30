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
                       req.flash('success', 'login success');
      
        return res.redirect('/')

    
}

exports.logOut = async (req,res)=>{
    try {
        res.clearCookie('user')
        res.redirect('/user/login')
    } catch (error) {
        console.log(error)
    }
}