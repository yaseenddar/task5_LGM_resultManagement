const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors());
require("dotenv").config();
app.get('/', (req,res)=>{
    res.send("this is server frist ");   
});
const teacherLogin = require('./routes/teacherLogin');
const studentLogin= require('./routes/studentLogin');
//
app.use('/api/student',studentLogin);
app.use('/api/teacher',teacherLogin);

//connection to the server
app.listen(process.env.PORT,()=>{
    console.log(`The server is ready ${process.env.PORT}`);
})
//db connection 
const database = require('./config/database');
database();

