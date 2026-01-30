const express = require('express');
const dbconnection = require('./Config/dbConnection')
const cookieparser = require('cookie-parser')
const app = express();
const prot = 8080
const passport = require('passport')
const session = require('express-session')
require('./middalwear/localstrategies')
const flesh = require('connect-flash')
const fleshmessage = require('./middalwear/fleshMessage');

//middleware 

app.use(express.urlencoded())
app.use(express.static('public'))
app.use('/uploads', express.static('uploads'))
app.use(cookieparser())
app.set('view engine','ejs')
// session & passport  middleware
app.use(session({
    name:'adminsession',
    secret:'devl',
    saveUninitialized:false,
    resave:true,
    cookie:{
        maxAge :1000 *60 *60
    }
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(passport.isAuthenticated)
app.use(flesh())
app.use(fleshmessage)


app.use('/',require('./routes/index.routes'))

app.listen(prot,()=>{
    console.log(`server start at http://localhost:${prot}`)
})