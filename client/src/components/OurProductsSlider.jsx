import {React,useRef,useEffect, useState} from 'react'
import SingleBestSell from './SingleBestSell';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowRight } from "react-icons/md";
import { MdArrowLeft } from "react-icons/md";
import allProd from "../data/allProd";
import allProd1 from "../assets/allProd1.jpg"
import allProd2 from "../assets/allProd2.jpg"
import allProd3 from "../assets/allProd3.jpg"
import allProd4 from "../assets/allProd4.webp"
import allProd5 from "../assets/allProd5.webp"
import allProd6 from "../assets/allProd6.webp"
import allProd7a from "../assets/allProd7a.webp"
import allProd7b from "../assets/allProd7b.jpg"
import allProd7c from "../assets/allProd7c.jpg"
import axios from 'axios';

const OurProductsSlider = () => {
    const images=[allProd1,allProd2,allProd3,allProd4,allProd5,allProd6,allProd7a,allProd7b,allProd7c]
    const [products,setProducts]=useState([]);
    const sliderRef=useRef(null);
    useEffect(()=>{
        // console.log(sliderRef)
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
                    slidesToShow:6,
                }
            },
        ],
    }
    useEffect(()=>{
        axios.get(`http://localhost:5000/products/allProdCaro`)
        .then(res => {
            setProducts(res.data)
        })
        .catch(e=>{
            console.log("Error fetching products for all products carousal",error);
        })
    },[]);

  return (
    <div className=''>
        <div className='flex justify-end gap-0 p-0 '>
        <MdArrowLeft size={32} className='p-0 m-0 buttons cursor-pointer' onClick={()=>sliderRef.current.slickPrev()}/>
        <MdArrowRight size={32} className='p-0 m-0 buttons cursor-pointer'  onClick={() => sliderRef.current.slickNext()}/>
        </div>
    <div className=''>
        {/* {console.log(products)} */}
        
        <Slider ref={sliderRef} {...settings} className='mx-4 '>
            {products.map((prod,index)=>{
                // {console.log(images[index])}
                return <SingleBestSell key={prod.id} prod={prod} prodImg={images[index]}  />
            })}
        </Slider>
        
    </div>
    </div>
  )
}

export default OurProductsSlider
