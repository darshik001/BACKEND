const express = require('express')
const app = express()

const middalwer = (req,res,next)=>{
    // console.log(req.query.age)
    if(req.query.age >=18){
        next()
    }else{
        res.end('You are Not eligibale')
    }
}

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

app.use(express.urlencoded())
app.use(express.json())
// app.use(middalwer)  
app.use(express.static("public"))
app.get('/',(req,res)=>{
    res.render('dashboard')
})

// app.get('/',middalwer,(req,res)=>{
//     res.render('index',{students})
// })

app.post('/add-student',(req,res)=>{
    students.push(req.body)
    res.redirect('/')
})

app.get('/delete-student/:id',(req,res)=>{
    // console.log(req.params.id)
    let id = req.params.id
    students = students.filter((stud)=>stud.id !==id)
    res.redirect('/')
})

app.get('/edit-student/:id',(req,res)=>{
    let id  = req.params.id;
    let stude = students.find((stud=> stud.id ==id))
    res.render('editStud',{stude})
})
app.post('/update-student/:id',(req,res)=>{
    let id  = req.params.id;
    console.log(id)
   let update =  students.map((stude)=>{
        if(stude.id == id){
            return{
                ...req.body,
                id:id,
            }
        }else{
            return stude
        }
    })

    students = update
    res.redirect('/')
})
app.use((req, res) => {
  res.status(404).send('Default Route: Page Not Found')
})


app.listen(8080,()=>{
    console.log(`http://localhost:8080`)
})


//ejs,pug,hbs,