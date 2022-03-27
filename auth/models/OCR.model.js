const mongoose = require("mongoose");

const OCRSchema = new mongoose.Schema({
  offer:{
    type:String,
    default:"10%"
  },
  description:{
    type:String,
    default:""
  },
  companyName:{
    type:String,
    default:"hdfc"
  }
});

const OCR = mongoose.model("OCR", OCRSchema);

module.exports = OCR;
