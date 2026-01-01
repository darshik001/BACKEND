const mongoose = require('mongoose')

const Studentschema = mongoose.Schema({
      name: {
        type:String
      },
        email:{
            type:String
        },
        mobile: {
            type:String
        },
        gender: {
            type:String
        },
        dob: {
            type:String
        },
        course: {
            type:String
        }
})

module.exports = mongoose.model ('Students',Studentschema)