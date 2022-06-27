const mongoose = require('mongoose');
const usersch  = new mongoose.Schema({
    name:{
        type:String,
        required:true
        
    },
    email:{
        type:String,
        required:true
        
    },
    comment:{
        type:String,
        required:true
        
    }

})

mongoose.model("contact",usersch)