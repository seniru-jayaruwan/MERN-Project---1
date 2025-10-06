import { useState } from "react";
import { Link } from "react-router-dom";


export default function AddProductAdminPage() {
    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [alternativeName, setAlternativeName] = useState("");
    const [labledPrice, setLabledPrice] = useState("");
    const [price, setPrice] = useState("");
    const [Images, setImages] = useState("");
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState("");
    const [isAvailable, setIsAvailable] = useState("");
    const [category, setCategory] = useState("");

    function handleSubmit() {
        const altNamesInArray = alternativeName.split(",");
        const productData ={
            productId:productId,
            productName:productName,
            alternativeName:alternativeName,
            labledPrice:labledPrice,
            price:price,
            Images:[],
            description:description,
            stock:stock,
            isAvailable:isAvailable,
            category:category
        }
        console.log(productData);
        
    }
    return(
        <div className="w-full h-full flex justify-center items-center">
            
            <div className="w-[600px] border-[3px] rounded-[15px] p-[40px] flex flex-wrap justify-between">
                <div className="w-[200px flex flex-col gap-[5px]">
                    <label className="text-sm font-semibold">Product ID</label>
                    <input type="text" onChange={(e)=>{setProductId(e.target.value)}} className="full border-[1px] h-[40px] rounded-md"/>
                </div>

                <div className="w-[300px flex flex-col gap-[5px]">
                    <label className="text-sm font-semibold">Product Name</label>
                    <input type="text" onChange={(e)=>{setProductName(e.target.value)}} className="full border-[1px] h-[40px] rounded-md"/>
                </div>

                <div className="w-[500px flex flex-col gap-[5px]">
                    <label className="text-sm font-semibold">Alternative Name</label>
                    <input type="text" onChange={(e)=>{setAlternativeName(e.target.value)}} className="full border-[1px] h-[40px] rounded-md"/>
                </div>

                <div className="w-[200px flex flex-col gap-[5px]">
                    <label className="text-sm font-semibold">Labled Price</label>
                    <input type="number" onChange={(e)=>{setLabledPrice(e.target.value)}} className="full border-[1px] h-[40px] rounded-md"/>
                </div>

                <div className="w-[200px flex flex-col gap-[5px]">
                    <label className="text-sm font-semibold">Price</label>
                    <input type="number" onChange={(e)=>{setPrice(e.target.value)}} className="full border-[1px] h-[40px] rounded-md"/>
                </div>

                <div className="w-[100px flex flex-col gap-[5px]">
                    <label className="text-sm font-semibold">Images</label>
                    <input type="text" onChange={(e)=>{setImages(e.target.value)}} className="full border-[1px] h-[40px] rounded-md"/>
                </div>

                <div className="w-[200px flex flex-col gap-[5px]">
                    <label className="text-sm font-semibold">Description</label>
                    <textarea type="text" onChange={(e)=>{setDescription(e.target.value)}} className="full border-[1px] h-[100px] rounded-md"/>
                </div>

                <div className="w-[200px flex flex-col gap-[5px]">
                    <label className="text-sm font-semibold">Stock</label>
                    <input type="number" onChange={(e)=>{setStock(e.target.value)}} className="full border-[1px] h-[40px] rounded-md"/>
                </div>

                <div className="w-[200px flex flex-col gap-[5px]">
                    <label className="text-sm font-semibold">Is Available</label>
                    <select onChange={(e)=>{setIsAvailable(e.target.value === "true")}} className="full border-[1px] h-[40px] rounded-md">
                        <option value={true}>Available</option>
                        <option value={false}>Not Available</option>
                    </select>
                </div>

                <div className="w-[200px flex flex-col gap-[5px]">
                    <label className="text-sm font-semibold">Category</label>
                    <select onChange={(e)=>{setCategory(e.target.value)}} className="full border-[1px] h-[40px] rounded-md">
                        <option value={"Cream"}>Cream</option>
                        <option value={"Face Wash"}>Face Wash</option>
                        <option value={"Soap"}>Soap</option>
                        <option value={"Shampoo"}>Fragrance</option>
                    </select>
                    
                </div>
                <div className="w-[500px] flex justify-center flex-row py-[30px]">
                    <Link to="/admin/products" className="flex flex-row h-[60px] w-[200px] justify-center items-center text-xl gap-[7px] p-[20px] text-amber-50 bg-gray-500 hover:bg-gray-700 hover:text-amber-50 rounded-3xl">Cancel</Link>
                    <button onClick={handleSubmit} className="flex flex-row h-[60px] w-[200px] justify-center items-center text-xl gap-[7px] p-[20px] text-amber-50 bg-gray-500 hover:bg-gray-700 hover:text-amber-50 rounded-3xl">Add Product</button>
                </div>

            </div>
        </div>
    )
}