import Product from "../models/product.js";
import { isAdmin } from "./userController.js";
export async function createProduct(req,res) {

    if(! isAdmin(req)){
        return res.status(403).json({ message: "Access denied. Admin Only." });
    }
    
    const product = new Product(req.body)
    
    try {
        const response = await product.save()
        res.json({
            message : "Product created successfully",
            product : response
        })
    } catch (error) {
        console.error("Error creating product:", error);
        return res.status(500).json({ message: "Failed to create product" });
    }
}

export async function getProducts(req,res) {
   try {
    
    if(isAdmin(req)){
        const products = await Product.find()
        return res.json(products);
    }else{
        const products = await Product.find({isAvailable : true})
        return res.json(products);
    }
   } catch (error) {
        console.error("Error getting products:", error);
        return res.status(500).json({ message: "Failed to get products" });
   }
}
     
export async function deleteProduct(req,res) {
    if(! isAdmin(req)){
        return res.status(403).json({ message: "Access denied. Admin Only." });
    }
   try {
        const productID = req.params.productID
        await Product.deleteOne({
            productID : productID
        })

        res.json({message : "Product deleted successfully"})

   } catch (error) {
        console.error("Error deleting product:", error);
        return res.status(500).json({ message: "Failed to delete product" });
   }
}

export async function updateProduct(req,res) {
    if(! isAdmin(req)){
        return res.status(403).json({ message: "Access denied. Admin Only." });
    }
    const data = req.body;
    const productID = req.params.productID;
    data.productID = productID
    try {
        await Product.updateOne({productID : productID},data)
        res.json({message : "Product updated successfully"})
    } catch (error) {
        console.error("Error updating product:", error);
        return res.status(500).json({ message: "Failed to update product" });
    }
}

export async function getProductInfo(req,res) {
    try {
        const productID = req.params.productID
        const product = await Product.findOne({productID : req.params.productID})
        if(product == null){
            return res.status(404).json({ message: "Product not found" });
        }
        if(isAdmin(req)){
            res.json(product);
              
        }else{
            if(product.isAvailable){
                res.json(product);
            }else{
                return res.status(404).json({ message: "Product is not Available" });
            }
        }
    } catch (error) {
        console.error("Error getting product info:", error);
        return res.status(500).json({ message: "Failed to get product info" });
    }
}