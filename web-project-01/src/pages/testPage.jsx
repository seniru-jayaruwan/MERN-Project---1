import { useState } from "react";

export default function TestPage() {

    const[count,setCount]=useState(0)

    function increament() {
         setCount(9);
        
    }

    function decreament() {
        setCount(5);
        
    }
    return (
        <div className="w-full h-screen bg-amber-200 flex justify-center items-center">
            <div className="w-[400px] h-[400px] bg-white flex-col justify-center items-center">
                <h1 className="text-5xl font-bold">{count}</h1>
                <div className="w-full flex justify-center items-center border h-[100px]">
                    <button onClick={decreament} className="w-[100px] bg-blue-500 h-[45px] text-3xl mx-2 flex justify-center items-center text-white rounded-full">
                        -
                    </button>

                    <button onClick={increament} className="w-[100px] bg-blue-500 h-[45px] text-3xl mx-2 flex justify-center items-center text-white rounded-full">
                        + 
                    </button>
                </div>

            </div>
            
        </div>
    )
}