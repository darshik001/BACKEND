const express = require('express')

const app = express()

app.use(express.urlencoded())
let students = [
    {
        'id':'101',
        "name":'rohit',
        'email':'rohit@gmail.com'
    },
    {
        'id':'102',
        "name":'gill',
        'email':'gill@gmail.com'
    },
    {
        'id':'103',
        "name":'virat',
        'email':'virat@gmail.com'
    },


]

app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
    res.render('index',{students})
})

app.post('/add-student',(req,res)=>{
    students.push(req.body)
    res.redirect('/')
})

app.post('/delete-student/:id',(req,res)=>{
    console.log(req.params.id)
    // students = students.filter((stud)=>stud.id !==req.params.id)
    res.redirect('/')
})


app.use((req, res) => {
  res.status(404).send('Default Route: Page Not Found')
})

app.listen(8080,()=>{
    console.log(`http://localhost:8080`)
})


//ejs,pug,hbs,