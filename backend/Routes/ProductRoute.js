const express=require('express');

const {createProduct,fetchAllProducts, fetchCarousalProducts,getProductById, getProductByCategory}=require("../Controllers/ProductController")
const {ProductModel}=require("../Models/ProductModel");

const router=express.Router();

router.post('/',createProduct)
//get all products
router.get("/",fetchAllProducts)
router.get("/:tag",fetchCarousalProducts)
// ?id=${productId}
router.get("/product/:id",getProductById);
router.get("/product/category/:tag",getProductByCategory)
module.exports = router;