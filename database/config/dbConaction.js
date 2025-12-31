const mongoose = require('mongoose')

const dbConaction = ()=>{
    mongoose.connect('mongodb://localhost:27017/StudentManagment')
    .then(()=>console.log("db is Connected!!!!!"))
    .catch((err)=>console.log(err))
}


module.exports = dbConaction