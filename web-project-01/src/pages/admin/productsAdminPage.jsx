import { FaPlus, FaPlusCircle, FaPlusSquare, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProductsAdminPage() {
    return(
        <div className="w-full h-full border-[3px]">
            <Link to="/admin/newProduct" className="fixed right-[60px] bottom-[60px] text-white bg-blue-500 rounded-full shadow-2xl cursor-pointer">
                 <FaPlus className="text-5xl"/>
                
            </Link>

            Testing Product admin Page

        </div>
    )
    
}