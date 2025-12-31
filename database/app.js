const express = require('express')
const dbConnection = require('./config/dbConaction')
const Studentsmodel = require('./model/student.model')
const port  = 8000;
const app = express()
app.set('view engine','ejs')
app.use(express.urlencoded())


//connection
dbConnection()
app.get('/',(req,res)=>{
    // res.end('Wellcome to Server')
    return res.render("index")
})

app.post('/add-student',async(req,res)=>{
    // console.log(req.body)
    try {
        
        await Studentsmodel.create(req.body)
    } catch (error) {
        console.log(error.errmsg)
    }
res.redirect('/')
})
app.listen(port,()=>{
    console.log(`server start at http://localhost:${port}`)
})