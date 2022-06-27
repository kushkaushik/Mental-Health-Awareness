const express = require('express');
const route = express.Router();
const mongoose = require('mongoose')
const COMMENT = mongoose.model('talk')
const REPCOM = mongoose.model("replycomm")
const login = require('../loginmid/login')


route.post('/commentpass',login,(req,res) => {
    const {comment} = req.body;
    if(!comment) {
        return res.json({error:'Please Enter Something'})
    }else{
        const temp = new COMMENT(
            {
                comment ,postedBy:req.user
            }
        )
        temp.save().then(data=>{
            res.json({data})
        })
    }
})




route.get('/showcomment',login,(req,res)=>{
    
    COMMENT.find({}).populate("postedBy","id name").populate("comments.postedBy","_id name").then(data=>{
     
        res.json({data:data})
    }).catch(err=>{
        console.log(err)
    })

})







route.put('/commentreply',login,(req,res)=>{
    const mycomm = {  
        text:req.body.text,
        postedBy:req.user._id
    }

    COMMENT.findByIdAndUpdate(req.body.postId , {
        $push:{comments:mycomm}
    },{new : true}
    ).populate("comments.postedBy" , "_id name").exec((err , data) => {
        if(err) return res.json({error:err})
        else{
            res.json(data)
        }
    })
    
})



route.delete("/del/:_id",login,(req,res)=>{
    COMMENT.findByIdAndDelete(req.params._id).then(mydata=>{
        res.json(mydata)
    })


})





module.exports = route