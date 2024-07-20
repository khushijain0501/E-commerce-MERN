import React, { useEffect, useRef } from 'react'
//import banners from "../data/bannerData"
import Slider from  "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from '../assets/banner1.1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import { MdArrowRight } from "react-icons/md";
import { MdArrowLeft } from "react-icons/md";

const BannerSlider = () => {
    const sliderRef=useRef(null);
    useEffect(()=>{
        console.log(sliderRef)
    },[])
    /*function SampleNextArrow(props){
        const { className, style, onClick } = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`}>
                <button>
          
           </button>
           </div>
        )
    }
    function SamplePrevArrow(props){
        const { className, style, onClick } = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`}>
           <MdArrowLeft className="arrows"/>
           </div>
        )
    }*/
    //console.log(banners)
    const banners = [banner2, banner1, banner3];
    const settings={
        dots:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        infinte:true,
        autoplay:false,
        autoplaySpeed:2000,
    };
  return (
    <div className='mt-12 xl:mt-14 flex items-center gap-0 h-[30vh] md:h-[35vh] lg:h-[37vh] xl:h-[40vh] sm:relative'>
        <div className='flex justify-end items-center gap-0'>
        <MdArrowLeft size= {48} onClick={()=>sliderRef.current.slickPrev()} className='cursor-pointer'/>
        
        </div>
        <div className='flex justify-center'>
      <Slider {...settings} ref={sliderRef} className='w-[400px] sm:w-[380px] md:w-[520px] lg:w-[700px] xl:w-[1000px]  xl:mt-6 '>
      
        {banners.map((banner,index)=>{
            return (<div key={index} className='inline-block'>
                
                <img src={banner} alt={banner} className='object-cover w-full h-[170px] sm:h-[180px] lg:h-[250px] xl:h-[300px] xl:mt-5' />
                
            </div>)
        })}

       </Slider>
       </div>
       <div>
       <MdArrowRight size= {46}/>
       </div>
    </div>
  )
}

export default BannerSlider
