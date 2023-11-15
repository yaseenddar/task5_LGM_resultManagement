var express = require("express");
const router = express.Router();
const Student = require("../models/Students");

router.get("/login/:roll", async (req, res) => {
   try{
     const rollNumber = req.params.roll;
    
    const individualStudent = await Student.findOne({roll: rollNumber });
    if(!individualStudent){
      res.json({
        success:false,
        message:"Enter valid credentials",
        data:individualStudent
      })
    }
    else{
        res.status(200).json({
            result:individualStudent,
        })
    }
   }catch(err){
    console.error(err),
    res.status(500).json({
        success:false,
        message:"Error in getting the result",
    })
   }
   
    
});

router.post('/result',async(req,res)=>{
  const rollNumber = req.body.roll;

try{
   const record = await Student.findOne({roll: rollNumber });
   if(record){
    res.json(record)
  }
  
}catch(err){
  res.send({
      error:err,
      message:"error occured in gettin the result",
     
  })
}

})
module.exports = router;