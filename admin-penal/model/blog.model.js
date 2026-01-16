const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
name:{
    type:String
},
title:{
    type:String
},
blog:{
    type:String
},
date:{
    type:String
},
profileImage:{
    type:String
}
})


module.exports = mongoose.model('blogs',blogSchema)