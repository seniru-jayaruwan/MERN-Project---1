import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    firstname : {
        type : String,
        required :true
    },
    lastname : {
        type : String,
        required : true 
    },
    email : {
        type : String,
        required : true,
        unique : true 
    },
    password : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        default : "NOT GIVEN"
    },
    isBlocked : {
        type : Boolean,
        default : false
    },
    role : {
        type : String,
        default : "User"
    },
    isEmailverified : {
        type : Boolean,
        default : false
    },
    image : {
        type : String,
        default : "https://www.istockphoto.com/photos/user-profile"
    },

    salt : String

})


const User = mongoose.model("users",userSchema)

export default User;