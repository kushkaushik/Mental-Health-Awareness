const mongoose = require('mongoose');
const {ObjectId} = mongoose.Types
const usersch  = new mongoose.Schema({
    comments:[{
        text:String,
        postedBy:{type:ObjectId,ref:"mental_user"}
    }],

    postedBy:{
        type:ObjectId,
        ref:"mental_user"
    }

})

mongoose.model("replycomm",usersch)