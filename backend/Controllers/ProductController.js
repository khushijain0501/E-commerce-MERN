const {ProductModel}=require("../Models/ProductModel")
const mongoose=require('mongoose')
const express=require('express')
// const {insertProducts}=require("../Models/ProductModel");
// insertProducts()
// .then(()=>console.log("Data inserted successfully"))
// .catch(()=>console.error("Error inserting data:", err));

exports.createProduct= async (req,res)=>{
    const product =await ProductModel.create(req.body);
    product.discount=Math.round(product.price*(1-product.discountPercent/100));
    try{
        const doc=await product.save();
        res.status(201).json(doc);
    }
    catch(err){
        res.status(400).json(err);
    }
}

exports.fetchAllProducts= async(req,res)=>{
    try{
        const products=await ProductModel.find();
        res.status(200).json(products);
    }
    catch(e){
        console.log("error fetching",e)
        res.status(500).send('Server error');
    }
}
exports.fetchCarousalProducts= async(req,res)=>{
    try{
        // console.log(req.params.tag)
        const tag=req.params.tag;
        let products=[]
        if(tag=="bestSellCaro"){
        products=await ProductModel.find({rating:{$gt:4}}).limit(10);
        }
        if(tag=="saleProdCaro"){
            products=await ProductModel.find({discountPercentage:{$gt:15}}).limit(10);
        }
        if(tag=="allProdCaro"){
            products=await ProductModel.find({discountPercentage:{$lt:1}}).limit(10);
        }
        //return products;
        res.status(200).json(products);
    }
    catch(e){
        res.status(500).send('Server error');
    }
}
exports.getProductById=async (req,res)=>{
    console.log(req.params)
    if (!mongoose.Types.ObjectId.isValid(req.params)) {
        return res.status(400).json({ message: "Invalid Product ID" });
      }
    try{
        const product=await ProductModel.findById(req.params.id)
        console.log(typeof(product))
        return res.status(200).send(product)
    }
    catch(e){
        console.log(e);
        res.status(500).json({message:"Server Error"});
    }
};
exports.getProductByCategory=async (req,res)=>{
    console.log(req.params.tag)
    try{
        const products=await ProductModel.find({category:req.params.tag})
        console.log(products.length)
        return res.status(200).json(products);
    }
    catch(e){
        res.status(500).send('Server error');
    }
}