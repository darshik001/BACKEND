const mongoose = require('mongoose')

const dbconnaction = ()=>{
    mongoose.connect('mongodb://localhost:27017/admin-panel')
    // mongoose.connect('mongodb+srv://darshik111:dj123456@cluster0.h9zcb.mongodb.net/admin-penal')

    .then(()=>console.log("DB Is Connected!!!!"))
    .catch((err)=>console.log(err))
}


module.exports = dbconnaction();