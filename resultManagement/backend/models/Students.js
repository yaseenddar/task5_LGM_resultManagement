const mongoose = require("mongoose")


const studentSchema = new mongoose.Schema({
  name: String,
  roll:{
    type: Number,
  unique: true,
  },
  math: String,
  english: String,
  science: String,
  ss: String,
  lang: String,
  status : String
});
module.exports = mongoose.model("Student", studentSchema);