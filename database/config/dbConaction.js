// mongoose.connect('mongodb+srv://darshik111:dj123456@cluster0.h9zcb.mongodb.net/StudentMangament')
require('dotenv').config()

const mongoose = require('mongoose')

const dbConaction = ()=>{
    mongoose.connect(process.env.DB_URL)
    .then(()=>console.log("db is Connected!!!!!!"))
    .catch((err)=>console.log(err))
}


module.exports = dbConaction