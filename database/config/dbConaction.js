// mongoose.connect('mongodb+srv://darshik111:dj123456@cluster0.h9zcb.mongodb.net/StudentMangament')
const mongoose = require('mongoose')

const dbConaction = ()=>{
    mongoose.connect('mongodb://localhost:27017/StudentManagment')
    .then(()=>console.log("db is Connected!!!!!!"))
    .catch((err)=>console.log(err))
}


module.exports = dbConaction