import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export function createuser(req,res){

    const passwordHash = bcrypt.hashSync(req.body.password,10)

    const userData = {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        password : passwordHash,

    }
    const user = new User(userData)

    user.save().then(()=>{
        res.json({
            message : "User create successfully"
        })
    }).catch(()=>{
        res.json({
            message : "Failed to create user"
        })
    })



}

 export function loginUser(req,res){
    const email = req.body.email
    const password = req.body.password

    User.findOne(
        {
            email : email
        }
    ).then((user)=>{
        if(user == null){
            res.status(404).json({
                messsage : "User not found"
            })
        }else{
            const isPassswordCorrect = bcrypt.compareSync(password,user.password)
            if(isPassswordCorrect){

                //Encrption code    
                const token =jwt.sign(
                    {
                        email : user.email,
                        firstname : user.firstname,
                        lastname : user.lastname,
                        role : user.role,
                        isblocked : user.isBlocked,
                        isEmailverified : user.isEmailverified,
                        image : user.image
                    },
                    "cbc-6503"
                )
                res.json({
                    token : token,
                    message : "Login succesful"
                })
            }else{
                res.status(403).json({
                    message : "Incorrect password"
                })
            }
        }
    })
 }


 