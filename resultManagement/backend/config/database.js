require("dotenv").config();
const mongoose = require('mongoose');
const connectDB=()=>{
    mongoose.connect(process.env.DATABASE_URL,{ 
    }).then(console.log("DB connected"))
    .catch((err)=>{
        console.log("Received error in DB")
        console.error(err);
        process.exit(1);
    });
}
module.exports = connectDB;