import {React,useRef,useEffect,useState} from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bestSellingData from '../data/bestSellingData'
import bestSell1 from "../assets/bestSell1.jpg"
import bestSell2 from "../assets/bestSell2.jpg"
import bestSell3 from "../assets/bestSell3.jpg"
import bestSell4 from "../assets/bestSell4.jpg"
import bestSell5 from "../assets/bestSell5.jpg"
import SingleBestSell from "./SingleBestSell"
import { MdArrowRight } from "react-icons/md";
import { MdArrowLeft } from "react-icons/md";
import axios from 'axios';

const BestSellSlider = () => {
    const images=[bestSell1,bestSell2,bestSell3,bestSell4,bestSell5]
    const sliderRef=useRef(null);
    const [products,setProducts]=useState([]);
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
                    slidesToShow:5,
                }
            },
        ],
    }
    useEffect(()=>{
        axios.get(`http://localhost:5000/products/bestSellCaro`)
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
                return <SingleBestSell key={prod.proId} prod={prod} prodImg={images[index]}/>
            })}
        </Slider>
    </div>
    </div>
  )
}

export default BestSellSlider
