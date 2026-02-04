const bcrypt = require('bcrypt')
const adminModel = require('../model/admin.model')
const otpgenerator = require('otp-generator')
const sendMail = require('../middalwear/sendmail')

exports.deshboard = (req,res)=>{
       let user = req.user;
       console.log("user",user)
        res.render('deshboard')
 
}


exports.profilepage = async(req,res)=>{
         let user = req.user
        res.render('profile',{user})
   
}


exports.changepasswordpage = async(req,res)=>{
   
        
        let user  = req.user
        res.render('changepass',{user})
    
    
}


exports.changepassword = async(req,res)=>{
    let {oldpassword,newpassword,confirmpassword}= req.body
        const user = req.user
   
    try {

            //   if(req.cookies && req.cookies.user && req.cookies.user._id){
                       let matchpassword =await bcrypt.compare(oldpassword,user.password)
                       if(!matchpassword){
                        console.log("old password are not match")
                        return res.redirect('/change-password')
                       }

                       if(oldpassword == newpassword){
                        console.log("old password and new password are same")
                       return res.redirect('/change-password')
                       }

                       if(newpassword !== confirmpassword){
                        console.log("conform Password not Match")
                       return res.redirect('/change-password')
                       }
                       
                       let haspassword = await bcrypt.hash(newpassword,10)
                       await adminModel.findByIdAndUpdate(user._id,{password:haspassword},{new:true})
                       req.flash('success', 'Change password Success');
                        return res.redirect('/')
            //    }
    } catch (error) {
        console.log(error)
    }
}



exports.forgetpassword = async(req,res)=>{
    try {
        let otp  = otpgenerator.generate(6,{upperCaseAlphabets:false,lowerCaseAlphabets:false,specialChars:false})
        let admin = await adminModel.findOne({email:req.body.email})
        if(!admin){
            console.log("user Not Found")
            return res.redirect('/user/login')
        }
    let message = {
        from:"darshikshekhada07@gmail.com",
        to:req.body.email,
        subject:'reset password OTP',
        html:`
          <h2>reset Password OTP Is ${otp}</h2>
        `
    }
    res.cookie('email',admin.email)
    res.cookie('userotp',otp)
          sendMail(message)  
        return res.redirect('/otpvarifecation')
    } catch (error) { 
        console.log("Error",error)
    }
}


exports.otpvarifecationpage = async(req,res)=>{
  return  res.render('otpverification')
}


exports.verifyotp = async(req,res)=>{
    try {
        let userotp = req.body.otp
        let otp = req.cookies.userotp

       if(userotp !=otp){
        res.redirect('/otpvarifecation')
       }
       res.clearCookie('userotp')
       res.redirect('/reset-password')
    } catch (error) {
        console.log(error)
    }
}

exports.resetpasswordpage = async(req,res)=>{
    try {
        res.render('reset-password')
    } catch (error) {
        console.log(error)
    }
}

exports.resetpassword = async(req,res)=>{
    try {
        let email = req.cookies.email
        if(req.body.newpassword !== req.body.confirmpassword){
            console.log("Password Not Match")
            res.redirect('/reset-password')
        }
        let haspassword = await bcrypt.hash(req.body.newpassword,10)
         await adminModel.findOneAndUpdate({email:email},{
            password:haspassword
         },{new:true})
       res.clearCookie('email')
         res.redirect('user/login')
    } catch (error) {
        console.log(error)
    }
}