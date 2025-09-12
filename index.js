import express from "express";
import  mongoose from "mongoose";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";
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



const connenctionString ="mongodb+srv://senirusennath_db_user:2006@cluster0.mpmawcd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(connenctionString).then(
    ()=>{
        console.log("connected to database")
    }
).catch(
    ()=>{
        console.log("failed to connect database")
    }
)


app.use("/api/users",userRouter)
app.use("/api/products",productRouter)


app.listen( 5000, 
    ()=>{
    console.log("server started")
} 
) 