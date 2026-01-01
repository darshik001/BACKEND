const express = require('express')
const dbConnection = require('./config/dbConaction')
const Studentsmodel = require('./model/student.model');
const studentModel = require('./model/student.model');
const port  = 8000;
const app = express()
app.set('view engine','ejs')
app.use(express.urlencoded())


//connection
dbConnection()
app.get('/',async(req,res)=>{
    
    let students  = await studentModel.find()
    return res.render("index",{students})
})
app.get('/addstudent',(req,res)=>{
    return res.render('addstudent')
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
app.get('/deletestudent/:id',async(req,res)=>{
    let id  = req.params.id
    await Studentsmodel.findByIdAndDelete(id)
    return res.redirect('/')

})
app.get('/editstudent/:id',async(req,res)=>{
    let id = req.params.id
    let student  =await Studentsmodel.findById(id)
    console.log(student)
    return res.render('editstudent',{student})
})

app.post('/update-student/:id',async(req,res)=>{
    let id  = req.params.id
   await studentModel.findByIdAndUpdate(id,req.body,{new:true})
   return res.redirect('/')
})
app.listen(port,()=>{
    console.log(`server start at http://localhost:${port}`)
})