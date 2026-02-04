const passport = require('passport')
const localstrategies = require('passport-local').Strategy;
const adminmodel = require('../model/admin.model')
const bcrypt = require('bcrypt')

passport.use(new localstrategies(
    {
        usernameField: 'email'
    },

    async (email, password, cb) => {
        try {
            let admin = await adminmodel.findOne({ email: email })
            if (!admin) {
             return   cb(null, false)
            }

            let matchpassword = await bcrypt.compare(password, admin.password)
            if (!matchpassword) {
              return  cb(null, false)
            }

            return   cb(null, admin)
        } catch (error) {
            console.log("error", error)
        }
    }
))

passport.serializeUser((user,cb)=>{
    cb(null,user.id)
})

passport.deserializeUser(async(id,cb)=>{
    const admin = await adminmodel.findById(id)
    if(admin){
        cb(null,admin)
    }
})


passport.checkAuthenticated  = (req,res,next)=>{
    if(req.isAuthenticated()){
        next()
    } else{
        res.redirect('/user/login')
    }
}

passport.isAuthenticated = (req,res,next)=>{
    if(req.isAuthenticated()){
        res.locals.user = req.user
    }
    next()
}




module.exports = passport