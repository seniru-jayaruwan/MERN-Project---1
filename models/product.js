import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    
    productID : {

    type :String,
    required : true,
    unique : true

},

name:{
    type:String,
    required : true
},
altNames : {
    type : [String],
    default : []
},
LabelledPrice : {
    type : Number,
    required : true
},
price : {
    type : Number,
    required : true
},

images:{
    type : [String],
    default : ["default.jpg"]
},
description:{
    type : String,
    required : true
},
stock :{
    type : Number,
    required : true,
    default : 0
},
isAvailable : {
    type : Boolean,
    default : true
},
category : {
    type : String,
    required : true,
    default : "Cosmatics"
}
})

const product = mongoose.model("products",productSchema)

export default product;