const mongoose = require('mongoose')
const {URLS} =require('./db')
const express = require('express')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));






mongoose.connect(URLS,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
mongoose.connection.on('connected',()=>{
    console.log("connected Successfully to database");
})

mongoose.connection.on('error',()=>{
    console.log("Error");
})






require('./schema/UserSch')
require('./schema/contact')
require('./schema/Talks')
require('./schema/replyCom')
app.use(require('./route/auth'))
app.use(require('./route/post'))









app.listen(8000,()=>{
    console.log(`connected to 8000`)
})