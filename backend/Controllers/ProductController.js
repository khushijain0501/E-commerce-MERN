
const {ProductModel}=require("../Models/ProductModel")
const mongoose=require('mongoose')
const express=require('express')
const algoliasearch=require('algoliasearch')

// const {insertProducts}=require("../Models/ProductModel");
// insertProducts()
// .then(()=>console.log("Data inserted successfully"))
// .catch(()=>console.error("Error inserting data:", err));

const client = algoliasearch('1LEB1B4TIL', '1c3470cb4f3dccfe535dc6168a991d52');
const index = client.initIndex('products');
// Function to fetch data from the database and index to Algolia
const indexProductsInAlgolia = async () => {
    try {
      // Fetch data from MongoDB
      const products = await ProductModel.find(); // Adjust this query as needed
  
      // Format data for Algolia (Algolia requires a unique "objectID" for each entry)
      const formattedProducts = products.map((product) => ({
        objectID: product._id.toString(),  // MongoDB's _id becomes the objectID in Algolia
        title: product.title,
        price: product.price,
        thumbnail:product.thumbnail,
        description: product.description,
      }));
  
      // Push data to Algolia
      await index.saveObjects(formattedProducts);
      console.log('Data indexed successfully!');
    } catch (error) {
      console.error('Error indexing data:', error);
    }
  };
  
  // Run the indexing function
  indexProductsInAlgolia();

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
        const page=parseInt(req.query.page)||1;
        const limit=parseInt(req.query.limit)||10;
        const skip=(page-1)*limit;

        let products=[];
        let totalCount=0;
        let totalPages=0;
        if(tag=="bestSellCaro"){
        products=await ProductModel.find({rating:{$gt:4}})
            .skip(skip)
            .limit(limit);
            totalCount=await ProductModel.find({rating:{$gt:4}}).countDocuments();
            totalPages=Math.ceil(totalCount/limit);
        }
        if(tag=="saleProdCaro"){
            products=await ProductModel.find({discountPercentage:{$gt:15}})
            .skip(skip)
            .limit(limit);
            totalCount=await ProductModel.find({discountPercentage:{$gt:15}}).countDocuments();
            totalPages=Math.ceil(totalCount/limit);
        }
        if(tag=="allProdCaro"){
            products=await ProductModel.find()
            .skip(skip)
            .limit(limit);
            totalCount=await ProductModel.find().countDocuments();
            totalPages=Math.ceil(totalCount/limit);
        }
        //return products;
        // const totalCount=await ProductModel;
        // const totalPages=Math.ceil(totalCount/limit);
        res.status(200).json({products,currentPage:page,totalPages,totalProducts:totalCount});
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