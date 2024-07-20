import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleCategory from './SingleCategory'
import { FaMobileAlt } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { BsSmartwatch } from "react-icons/bs";
import { FaCamera } from "react-icons/fa";
import { ImHeadphones } from "react-icons/im";
import { MdSpeaker } from "react-icons/md";
import { IoLogoGameControllerB } from "react-icons/io";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { MdArrowRight } from "react-icons/md";
import { MdArrowLeft } from "react-icons/md";

const CategorySlider = () => {
    const categories=[
        {name:"Phones",
        icon:<FaMobileAlt className="w-8 h-6 xl:h-8 xl:w-10 "/> },
        {name:"Computers",
        icon:<MdComputer className="w-8 h-6 xl:h-10 xl:w-10"/>},
        {name:"SmartWatch",
        icon:<BsSmartwatch className="w-8 h-6 xl:h-14"/>},
        {name:"Camera",
        icon:<FaCamera className="w-8 h-6 xl:h-14"/>},
        {name:"Headphones",
        icon:<ImHeadphones className="w-8 h-6 xl:h-14"/>},
        {name:"Gaming",
        icon:<IoLogoGameControllerB className="w-8 h-6 xl:h-14"/>},
        {name:"Television",
        icon:<PiTelevisionSimpleBold className="w-8 h-6 xl:h-14"/>},
        {name:"Speakers",
        icon:<MdSpeaker className="w-8 h-6 xl:h-14"/>}
    ]
    const settings={
        dots:true,
        speed:700,
        slidesToShow:4,
        slidesToScroll:1,
        infinte:true,
        autoplay:false,
        autoplaySpeed:3000,
        nextArrow:(
            <div className='z-50'> 
                <div className='next-slick-arrow z-50 w-10'>
                    <MdArrowRight className='w-10 text-black'/>
                </div>
            </div>
        ),
        prevArrow: (
            <div>
                <div className='next-slick-arrow'>
                    <MdArrowLeft/>
                </div>
            </div>
        ),
        responsive:[
            {
                breakpoint:400,
                settings:{
                    slidesToShow:4,
                }
            },
            {
                breakpoint:600,
                settings:{
                    slidesToShow:4,
                }
            },
            {
                breakpoint:800,
                settings:{
                    slidesToShow:5,
                }
            },
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:5,
                }
            },
            {
                breakpoint:1300,
                settings:{
                    slidesToShow:6,
                }
            },
            {
                breakpoint:1500,
                settings:{
                    slidesToShow:6,
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
  return (
    <div className='ml-4 my-3 '>
      <Slider {...settings} className='ml-4 xl:ml-20 pb-4'>
        {categories.map((category,index)=>{
            return <SingleCategory key={index} category={category}/>
        })}
      </Slider>
    </div>
  )
}

export default CategorySlider
