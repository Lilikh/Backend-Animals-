
const mongoose=require("mongoose");
const animalSchema=new mongoose.Schema({
    name:String,
    type:String,
    isMammal:Boolean,
    weight:Number
})

const Animal=mongoose.model("Animal",animalSchema)
module.exports=Animal;