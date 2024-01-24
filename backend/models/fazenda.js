const mongoose = require("mongoose")
const {Schema} = mongoose;

const fazendaSchema = new Schema({
  car :{
    type: String,
    required : true,
  },
  quantityMale: {
    type: Number,
    required : true,
  },
  quantityFemale: {
    type: Number,
    required : true,
  },
  nameFamer : {
    type: String,
    
  },
  location :{
    type: String,
    
  },
  totalArea :{
    type: String,
    
  },
  nativeVegetacionArea: {
    type: Number,
    
  },
  pasture:{
    type: Number
  },
  annualProducition:{
    type: Number
  },
  capture: {
    type: Number,
    
  },
  emission:{
    type: Number
  },
  score:{
    type: Number
  }
},{timestamps: true})

const Fazenda = mongoose.model("Fazenda", fazendaSchema);

module.exports = Fazenda;