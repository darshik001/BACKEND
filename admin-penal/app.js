const express = require('express');
const routes = require('./routes/index.routes');
const app = express();
const prot = 8080

//middleware 
app.set('view engine','ejs')


app.use(express.static('public'))

app.use('/',routes)

app.listen(prot,()=>{
    console.log(`server start at http://localhost:${prot}`)
})