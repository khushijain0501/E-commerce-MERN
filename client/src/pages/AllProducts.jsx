import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
import axios from 'axios';
import SingleBestSell from '../components/SingleBestSell';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";


const AllProducts = () => {
    const location = useLocation();
    const caller = location.state.caller;
    const tag=location.state.category;
    console.log(tag)
    const [products,setProducts]=useState([])
    const [page,setPage]=useState(1);
    const [totalPage,setTotalPage]=useState(1);
    const limit=8;
    console.log(caller)

    const fetchProducts=(page)=>{
      const endpoint = caller
      ? `http://localhost:5000/products/${caller}?page=${page}&limit=${limit}`
      : `http://localhost:5000/products/product/category/${tag[0]}?page=${page}&limit=${limit}`;
      axios.get(endpoint)
        .then(res => {
            setProducts(res.data.products);
            setTotalPage(res.data.totalPages)
            console.log(res.data.totalPages)
        })
        .catch(e=>{
            console.log("Error fetching products for all products carousal",error);
        })
    }
    
    // if(caller){
    //   useEffect(()=>{
    //     ,[]);}
    // else{
    //   useEffect(()=>{
    //   axios.get(`http://localhost:5000/products/product/category/${tag[0]}`)
    //     .then(res => {
    //         setProducts(res.data)
    //     })
    //     .catch(e=>{
    //         console.log("Error fetching products for all products carousal",error);
    //     })
    // },[]);
    // }
    useEffect(() => {
      fetchProducts(page);
    }, [page]);
    const handlePageChange = (newPage) => {
      if (newPage >= 1 && newPage <= totalPage) {
        setPage(newPage);
      }
    };
    console.log(products)
  return (
    <div>
      <Navbar showButton={true}/>
      <div className="flex flex-col ">
            <div className="pt-16 p-4 font-semibold">
                <span className='text-[#A9A9A9] hover:text-black cursor-pointer'>Account/</span>
                <span className="text-[#A9A9A9] hover:text-black cursor-pointer">
                Our products/
                </span>
                <span className="text-black cursor-pointer">{caller?caller:tag[0]}</span>
            </div>
            <div className='w-full'>
            <div className='px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 align-center my-6 gap-y-4'>
                {products.map((prod) => {
                return <SingleBestSell prod={prod} prodImg=""/>
                })}
            </div>
            </div>
            <div className="flex justify-center items-center my-4">
          <button
            className=""
            disabled={page === 1}
            onClick={() => handlePageChange(page - 1)}
          >
            <MdKeyboardArrowLeft size={36}/>

          </button>
          <span className="px-4 py-2  rounded-md">{`Page ${page} of ${totalPage}`}</span>
          <button
            className=""
            disabled={page === totalPage}
            onClick={() => handlePageChange(page + 1)}
          >
            <MdKeyboardArrowRight size={36}/>

          </button>
        </div>
        </div>
      <Footer/>
    </div>
  )
}

export default AllProducts
