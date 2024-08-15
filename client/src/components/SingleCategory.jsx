import React from 'react'
import { FaMobileAlt } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { BsSmartwatch } from "react-icons/bs";
import { FaCamera } from "react-icons/fa";
import { ImHeadphones } from "react-icons/im";
import { MdSpeaker } from "react-icons/md";
import { IoLogoGameControllerB } from "react-icons/io";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { Link } from 'react-router-dom';


const SingleCategory = ({category}) => {
    const Icon=category.icon
    // console.log(Icon)
  return (
    <Link to="/allProducts" state={{category:category.tag}}>
    <div className='flex flex-col gap-2 justify-center items-center w-24 h-24 xl:w-36 xl:h-36 border-2 rounded-md border-[#7D8184] hover:bg-[#DB4444] hover:border-none hover:text-white'>
      <div className=''>{category.icon}</div>
      <div className='text-xs text-center'>{category.name}</div>
    </div>
    </Link>
  )
}

export default SingleCategory
