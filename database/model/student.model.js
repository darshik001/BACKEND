const mongoose = require('mongoose')

const Studentschema = mongoose.Schema({
    name:{
        type:String,
        minLangth:5
    },
    email:{
        type:String,
                unique:true

    }
})

module.exports = mongoose.model ('Students',Studentschema)