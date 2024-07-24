import React, { useEffect } from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import saleProd1 from  "../assets/saleProd1.webp"
import saleProd2 from "../assets/saleProd2.jpg"
import saleProd3 from "../assets/saleProd3.jpg"
import saleProd4 from '../assets/saleProd4.webp'
import saleProd5 from "../assets/saleProd5.webp"
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const SingleSaleProd = ({prod,prodImg}) => {
    const stars=Array(5).fill(0);
    const colors={
        on:"#FFAD33",
        off:"#7D8184",
    }
    console.log(prodImg)
    
  return (
    <div className='relative w-48 h-60 sm:w-52 md:w-48 lg:w-52 xl:mx-8 bg-[#F5F5F5] p-2 my-2 flex flex-col'>
      <div className='flex justify-between my-2'>
        <div className='p-1 absolute left-0 text-white text-xs bg-[#DB4444] ml-2 rounded-sm'>-{prod.discountPercentage}%</div>
        <IoMdHeartEmpty size={20} className='cursor-pointer absolute right-0 mr-2 '/>
      </div>
      
      <div className='group flex flex-col mt-6 justify-center items-center'>
        {/*console.log(`../assets/saleProd${prod.thumbnail}.png`)*/}
        {console.log(prod._id)}
        <div>
          <Link to={ `/product/${prod._id}`} state= {{ id: prod._id } }>
        <img src={prodImg} alt={prod.thumbnail} className='w-24 h-24'/>
        </Link>
        </div>
        <div className='invisible py-0.5 group-hover:cursor-pointer bg-black text-white w-full text-center text-xs group-hover:visible'>Add to Cart</div>
      </div>
      <Link to={ `/product/${prod._id}`} state= {{ id: prod._id } }>
      <div className='flex flex-col text-xs mt-2  font-semibold'>
        <div>{prod.title}</div>
        <div className='flex gap-2'>
            <div className='text-[#7D8184] line-through'>₹{prod.price}</div>
            <div className='text-[#DB4444] '>₹{Math.round(prod.price*((100-parseInt(prod.discountPercentage))/100))}</div>
        </div>
        <div className='flex mt-1 items-center'>
        {stars.map((_,index)=>{
          console.log(prod.rating)
          console.log(index)
            return (
                <div key={index}>
                <FaStar 
                
                color={prod.rating>index?colors.on:colors.off}/>
                </div>
            )

        })}
        {/* <span className='ml-1 text-[#7D8184]'>( {prod.reviews} )</span> */}
        </div>
      </div>
      </Link>
    </div>
  )
}

export default SingleSaleProd
