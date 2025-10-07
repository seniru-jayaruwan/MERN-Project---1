import { Link, Route, Routes } from "react-router-dom";
import { FaBagShopping } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import ProductsAdminPage from "./admin/productsAdminPage";
import AddProductAdminPage from "./admin/addProductAsdminPage";
export default function AdminPage() {
    return(
        <div className="w-full h-screen flex bg-gray-300">
            <div className="w-[300px] h-full flex flex-col items-center bg-blue-500"> 
                <span className="text-3xl font-bold my-5">Admin Page</span>
            <Link className="flex flex-row h-[60px] w-full items-center text-xl text-black-500 gap-[7px] p-[20px]  hover:bg-gray-700 hover:text-amber-50 rounded-l-3xl" to={"/admin/products"}><FaBagShopping/>Products</Link>
            <Link className="flex flex-row h-[60px] w-full items-center text-xl text-black-500 gap-[7px] p-[20px]  hover:bg-gray-700 hover:text-amber-50 rounded-l-3xl" to={"/admin/orders"}><FaShoppingCart />Orders</Link>
            <Link className="flex flex-row h-[60px] w-full items-center text-xl text-black-500 gap-[7px] p-[20px]  hover:bg-gray-700 hover:text-amber-50 rounded-l-3xl" to={"/admin/users"}><FaUserFriends />Users</Link>
            <Link className="flex flex-row h-[60px] w-full items-center text-xl  text-black-500 gap-[7px] p-[20px] hover:bg-gray-700 hover:text-amber-50 rounded-l-3xl" to={"/admin/settings"}><IoSettings />Settings</Link>

            
            </div>
            <div className="w-[calc(100%-300px)] h-full">
                <Routes path="/">
                    <Route path="/" element={<h1>Dashboard</h1>}/>
                    <Route path="/products" element={<ProductsAdminPage/>}/>
                    <Route path="/newProduct" element={<AddProductAdminPage/>}/>
                    <Route path="/orders" element={<h1>Orders</h1>}/>
                </Routes>
            </div>
        </div>
    )
}