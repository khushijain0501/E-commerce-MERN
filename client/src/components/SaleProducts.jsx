import React, { useRef,useEffect,useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import saleData from '../data/saleProductData.js'
import saleProd1 from  "../assets/saleProd1.webp"
import saleProd2 from "../assets/saleProd2.jpg"
import saleProd3 from "../assets/saleProd3.jpg"
import saleProd4 from '../assets/saleProd4.webp'
import saleProd5 from "../assets/saleProd5.webp"
import SingleSaleProd from './SingleSaleProd.jsx'
import { MdArrowRight } from "react-icons/md";
import { MdArrowLeft } from "react-icons/md";
import "../assets/saleProd1.png"
import axios from 'axios';

const SaleProducts = () => {
    const images=[saleProd1,saleProd2,saleProd3,saleProd4,saleProd5]
    const sliderRef=useRef(null);
    const [data,setData]=useState([])
    useEffect(()=>{
        console.log(sliderRef)
    },[])
    useEffect(()=>{
        axios.get("http://localhost:5000/products")
        .then((res)=>{setData(res.data)})
        .catch(e=>{
            console.log("Error fetching products for all products carousal",error);
             })
    },[])
    const settings={
        dots:true,
        speed:700,
        slidesToShow:2,
        slidesToScroll:1,
        infinte:true,
        autoplay:false,
        autoplaySpeed:3000,
        responsive:[
            {
                breakpoint:400,
                settings:{
                    slidesToShow:2,
                }
            },
            {
                breakpoint:600,
                settings:{
                    slidesToShow:2,
                }
            },
            {
                breakpoint:800,
                settings:{
                    slidesToShow:3,
                }
            },
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:4,
                }
            },
            {
                breakpoint:1300,
                settings:{
                    slidesToShow:4,
                }
            },
            {
                breakpoint:1500,
                settings:{
                    slidesToShow:5,
                }
            },
            {
                breakpoint:2000,
                settings:{
                    slidesToShow:5,
                }
            },
        ],
    }
  return (
    <div className=''>
        <div className='flex justify-end gap-0 p-0 '>
        <MdArrowLeft size={32} className='p-0 m-0 buttons cursor-pointer' onClick={()=>sliderRef.current.slickPrev()}/>
        <MdArrowRight size={32} className='p-0 m-0 buttons cursor-pointer'  onClick={() => sliderRef.current.slickNext()}/>
        </div>
    <div className=''>
        {console.log(saleData)}
        <Slider ref={sliderRef} {...settings} className='mx-4 '>
            {saleData.map((prod,index)=>{
                {console.log(images[index])}
                return <SingleSaleProd key={prod.proId} prod={prod} prodImg={images[index]}/>
            })}
        </Slider>
      
    </div>
    </div>
  )
}

export default SaleProducts
