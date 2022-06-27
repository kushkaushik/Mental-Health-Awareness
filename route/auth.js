const express = require('express');
const mongoose = require('mongoose');
const route = express.Router();
const Mental = mongoose.model("mental_user")
const CONTACT = mongoose.model("contact")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {seckey} = require('../db')
const {RESET} = require('../db')
const _ = require('lodash')


const MAILGUN = require('mailgun-js')


const mg = MAILGUN({apiKey: '994fa22e2be1e4cbb4bb819f5877c772-523596d9-ae9bc528', domain:  'sandboxf57e4fee604445caa03490b401b2930c.mailgun.org'});



route.post('/signin',(req,res)=>{
    const {email ,password} = req.body;
    if(!email || !password){
        res.json({error:"Please enter something"});
    }
    else{
        Mental.findOne({email:email}).then(mydata=>{
            if(!mydata) return res.json({error:'please enter a valid email address'});
        
      

        bcrypt.compare(password,mydata.password).then(datahere=>{
            if(datahere){
               
                const token = jwt.sign({_id:mydata._id},seckey);
                const {_id , name , email} = mydata;
                return res.json({token,user:{_id, name , email}});

            }
            else
            res.json({error:"Password not match"});

        }) 
      
        
        

    })
    }
    



})








route.post('/signup',(req,res)=>{
    const {name , email , password} = req.body;
    if(!name || !email || !password){
         res.json({error:"Please enter something"});
    }
    else{
        Mental.findOne({email:email})
    .then(mydata=>{
        if(mydata){
        return res.json({error:"Already Present"});
        }


        const token = jwt.sign({name , email , password},seckey)
        const URLS = "http://localhost:3000";
        
        
            const data = {
                from: 'noreply@mr-perfect',
                to: email,
                subject: 'Account activation Link',
                html: `<h2>Please Click on the given Link</h2>
                <p>${URLS}/authentication/activate/${token}</p>
                `
            };
            mg.messages().send(data, function (error, body) {
                if(error){
                    console.log(error)
                }
        
                // const {name , email , password} = mydata;
        
              res.json({token:token,user:{name,email,password}});
            });


        // bcrypt.hash(password,12).then(hashpass=>{
        //     const temp = new Mental({
        //         name , email , password:hashpass
        //     })
        
        //     temp.save().then(data=>{
        //         res.status(200).json({message:"Saved Successfully"})
        //     })
        // })
    
      

})

}

})








route.post('/contact',(req,res)=>{
    const {name , email , comment} = req.body;
    if(!name || !email || !comment){
         res.json({error:"Please enter something"});
    }
    else{
        CONTACT.findOne({email:email})
    .then(mydata=>{
      
          const temp = new CONTACT({
            name , email , comment
          })
          temp.save().then((here)=>{
            res.json({message:"Data saved successfully"})
          })
    
        
    

    

})



}

})






route.put('/forgot',(req,res)=>{
    const {email} = req.body;
    Mental.findOne({email:email}).then((user)=>{
     console.log(user)
        if(!user){
           return  res.status(404).json({error:"User doesn't exist"});
        }
            
const token = jwt.sign({_id:user._id},RESET)
const URLS = "http://localhost:3000";


    const data = {
        from: 'noreply@mr-perfect',
        to: email,
        subject: 'Reset-Password',
        html: `<h2>Please Click on the given Link</h2>
        <p>${URLS}/reset-Password/${token}</p>
        `
    };

    return Mental.updateOne({resetLink:token},function(err,success){
        if(err) {return res.status(404).json({error:"Reset passwork link error"})}
        else{

            mg.messages().send(data, function (err, body) {
                if(err){
                  return  res.status(404).json({error:"Something wrong here"})
                }
        

        // res.json({message:"Msg Send Successfully"})
res.json({resetLink:token});
            });


        }
    }).clone().catch(function(err){ console.log(err)})


        

    }).catch(err=>{
        res.json({error:"Something went wrong"})
    })
   

})














route.post('/email-activate',(req,res)=>{
    const {token} = req.body;
  
    if(token){
       jwt.verify(token,seckey,(error, payload)=>{
        if(error){ return res.json({error:"Wrong"});}

        const {name , email  , password} = payload;


        Mental.findOne({email}).then(mydata=>{
            if(mydata)
            {
            return res.json({error:"User is already present"});
             }
    
  
            bcrypt.hash(password,12).then(hashpass=>{
            const temp = new Mental({
                name , email , password
            })
        
            temp.save().then(data=>{
                res.status(200).json({message:"Saved Successfully"})
            })
        })
    




       })
       })

    }


    else{
        res.json({error:"Wrong"});
    }
})





route.post('/res_pass',(req,res)=>{
    const {resetLink,newPass} = req.body
    console.log(resetLink + "\n" + newPass)
    if(resetLink){
        jwt.verify(resetLink,RESET,(err,user)=>{
            if(err){
                return res.json({error:err})
            }
            Mental.findOne({resetLink},(error,here)=>{
                if(err || !here){
                    return res.json({error:"Error here"})
                }
              

               const obj = {
                password:newPass
               }

                here = _.extend(here,obj);
                here.save((err,data)=>{
                    if(err){
                        return res.json({error:"err Here in data section"})
                    }
                    res.json({message:"Password-Changed" , data})
                })
            })
        })
    }else{
        res.json({error:"Error Here"})
    }
})













module.exports =  route;

