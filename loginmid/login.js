const mongoose = require('mongoose');
const tok  = require('jsonwebtoken');
const {seckey} = require('../db')
const Mental = mongoose.model('mental_user');

module.exports = (req,res,next)=>{
    const {authorization}  = req.headers;
    if(!authorization)return res.json({error:"Please authorize yourself"});
    const token = authorization.replace("Kush ","");
    tok.verify(token,seckey,(error,payload)=>{
        if(error)
        {
            return res.json({error:"Please authenicate yourself please"});
        }
        const {_id} = payload
    
        Mental.findById({_id}).then(presentdata=>{
            req.user = presentdata;
            next();
        })
    })
}