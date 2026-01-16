const express = require('express');
const routes = require('./routes/index.routes');
const dbconnection = require('./Config/dbConnection')
const cookieparser = require('cookie-parser')
const app = express();
const prot = 8080

//middleware 

app.use(express.urlencoded())
app.use(express.static('public'))
app.use('/uploads', express.static('uploads'))
app.use(cookieparser())
app.set('view engine','ejs')

app.use('/',routes)

app.listen(prot,()=>{
    console.log(`server start at http://localhost:${prot}`)
})