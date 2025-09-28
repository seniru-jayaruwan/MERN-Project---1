import { Link, Route, Routes } from "react-router-dom";
import { FaBagShopping } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
export default function AdminPage() {
    return(
        <div className="w-full h-screen flex ">
            <div className="w-[300px] h-full flex flex-col items-center"> 
                <span className="text-3xl font-bold my-5">Admin Page</span>
            <Link className="flex flex-row h-[60px] w-full items-center text-xl text-red-500 gap-[7px] p-[20px]" to={"/admin/products"}><FaBagShopping/>Products</Link>
            <Link className="flex flex-row h-[60px] w-full items-center text-xl text-red-500 gap-[7px] p-[20px]" to={"/admin/orders"}><FaShoppingCart />Orders</Link>
            <Link className="flex flex-row h-[60px] w-full items-center text-xl text-red-500 gap-[7px] p-[20px]" to={"/admin/users"}><FaUserFriends />Users</Link>
            <Link className="flex flex-row h-[60px] w-full items-center text-xl hover:border-2 text-red-500 gap-[7px] p-[20px]" to={"/admin/settings"}><IoSettings />Settings</Link>

            
            </div>
            <div className="w-[calc(100%-300px)] h-full">
                <Routes path="/">
                    <Route path="/" element={<h1>Dashboard</h1>}/>
                    <Route path="/products" element={<h1>Products</h1>}/>
                    <Route path="/orders" element={<h1>Orders</h1>}/>
                </Routes>
            </div>
        </div>
    )
}