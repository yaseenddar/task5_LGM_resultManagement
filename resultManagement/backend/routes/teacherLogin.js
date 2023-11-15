var express = require("express");
const router = express.Router();
const Student = require("../models/Students");


router.post("/login", (req, res) => {
    const {username,password}= req.body;
   
    // if(!adminPassword){
    //     res.json({
           
    //         message:"please enter password",
    //     })
    // }
     if(username === "yaseen@admin" && password === "123456"){
       return res.send({
        username:username,
        password:password
       })
    }
    else{
      return res.json({
        login:false,
        message:"password didn't  match",
        
      })
    }
});

router.post("/add", async (req, res) => {
    const singleStudent = new Student({
        name : req.body.name,
        roll : req.body.roll,
        math : req.body.math,
        english : req.body.english,
        science : req.body.science,
        status : req.body.status
    })
    try {
        const newStudent = await singleStudent.save();
        res.status(200).json({
            success:true,
            message:"result added"
        })
      } catch {
        res.status(200).json({
            success:false,
            message:"error in adding the result"
        })
    }
});

router.delete('/delete',async(req,res)=>{
        const rollNumber = req.body.roll;
        const record = await Student.findOne({roll: rollNumber });
        if(record){
      try{
         await Student.deleteOne({ roll: rollNumber });
          res.send({
            message:"deleted success"
          })
      }catch(err){
        res.send({
            error:err,
            message:"error occured",
           
        })
      }}
      else{
        res.send({
            message:"No record found"
        })
      }
})

router.get('/fetch',async(req,res)=>{
  
  try{
    const data = await Student.find();
    if(data){
      res.send(data)
    }
    else{
      res.send({
        message:"NO data found"
      })
    }
  }catch(err){
    res.send({
      error:err,
      message:"error occured in fetching result",
     
  })
  }
})
module.exports = router;