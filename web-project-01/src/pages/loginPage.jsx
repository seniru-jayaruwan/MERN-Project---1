import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    function Login() {
        console.log(email,password);
        axios.post(import.meta.env.VITE_BACKEND_URL+"/api/users/login",{
            email:email,
            password:password
        }).then(
            (res)=>{
            console.log(res.data);
            localStorage.setItem("token",res.data.token);

            // const token = localStorage.getItem("token");
            toast.success("Login Success");
            if (res.data.role == "Admin") {
                navigate("/admin");

            }else if (res.data.role == "User") {
                navigate("/");

            }
        }
    ).catch(
            (err)=>{
            console.log(err);
            toast.error("Login Failed");
        }
    )
        
    }

    return(
        <div className="w-full h-screen bg-[url(./loginbg.jpg)] bg-cover bg-center flex justify-center items-center">
            <div className="w-[500px] h-[500px] backdrop-blur-sm shadow-2xl rounded-[30px] relative border-2 border-white flex flex-col items-center justify-center">
                <h1 className=" absolute top-[20px] text-4xl font-bold text-center text-white my-3">Login</h1>
                <div className="w-[350px] flex flex-col ">
                    <span className="text-lg text-white">Email</span>
                     <input onChange={
                        (e)=>{
                            setEmail(e.target.value)
                        }
                     } 
                       type="text" className="w-[350px] h-[60px] rounded-full text-center border-2 border-white shadow-2xl"/>
                </div>
                    
                <div className="w-[350px] flex flex-col my-3">
                    <span className="text-lg text-white">Password</span>
                     <input onChange={
                        (e) =>{
                            setPassword(e.target.value)
                        }
                    } 
                        type="text" className="w-[350px] h-[60px] rounded-full text-center border-2 border-white shadow-2xl"/>
                </div>

            <button onClick={Login} className="w-[350px] h-[60px] rounded-full text-center  my-3 text-lg font-bold text-white bg-blue-500 hover:bg-blue-700">
                Login
            </button>
            <p>Don't have an account? <Link to="/register" className="text-blue-500 hover:underline" >Sign Up</Link>
            </p>
               
            </div>
            

        </div>
        
    )
}