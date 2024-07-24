import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
import axios from 'axios';
import SingleBestSell from '../components/SingleBestSell';

const AllProducts = () => {
    const location = useLocation();
    const caller = location.state.caller;
    const [products,setProducts]=useState([])
    console.log(caller)
    useEffect(()=>{
        axios.get(`http://localhost:5000/products/${caller}`)
        .then(res => {
            setProducts(res.data)
        })
        .catch(e=>{
            console.log("Error fetching products for all products carousal",error);
        })
    },[]);
    console.log(products)
  return (
    <div>
      <Navbar showButton={true}/>
      <div className="flex flex-col">
            <div className="pt-16 p-4 font-semibold">
                <span className='text-[#A9A9A9] hover:text-black cursor-pointer'>Account/</span>
                <span className="text-[#A9A9A9] hover:text-black cursor-pointer">
                Our products
                </span>
                {/* <span className="text-black cursor-pointer">{prod.title}</span> */}
            </div>
            <div className='px-8 grid grid-cols-4 align-center my-6 gap-y-4'>
                {products.map((prod) => {
                return <SingleBestSell prod={prod} prodImg=""/>
                })}
            </div>
        </div>
      <Footer/>
    </div>
  )
}

export default AllProducts
