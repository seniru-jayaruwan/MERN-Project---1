import express from "express";
import  mongoose from "mongoose";
import bodyParser from "body-parser";
import studentRouter from "./routers/studentRouter.js";
import userRouter from "./routers/userRouter.js";
import jwt from "jsonwebtoken";


const app = express()
app.use(bodyParser.json())

app.use(
    (req,res,next)=>{
        const value = req.header("Authorization")
        if(value != null){       
            const token = value.replace("Bearer ","")
            jwt.verify(
                token,
                "cbc-6503",
                (err,decoded)=>{
                    if(decoded == null){
                        res.status(403).json({
                            message : "Unauthorized"
                        })
                    }else{
                        req.user = decoded
                        console.log(decoded)                 
                        next()
                    }                    
                }
            )
        }else{
            next()
        }        
    }
)



const connenctionString ="mongodb+srv://admin:123@cluster0.0bkifia.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(connenctionString).then(
    ()=>{
        console.log("connected to database")
    }
).catch(
    ()=>{
        console.log("failed to connect database")
    }
)


app.use("/students",studentRouter)
app.use("/users",userRouter)




app.listen( 5000, 
    ()=>{
    console.log("server started")
} 
)