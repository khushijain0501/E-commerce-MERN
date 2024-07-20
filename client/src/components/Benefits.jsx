import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import { AiOutlineSafety } from "react-icons/ai";



const Benefits = () => {
  return (
    <div className='flex justify-center items-center px-6 py-4'>
        <div className='flex flex-col justify-center items-center m-4 gap-1 w-1/3'>
        <div className= 'flex justify-center items-center w-12 h-12 rounded-[50%] bg-[#2F2E30] border-[6px] border-[#979797]'>
            <TbTruckDelivery size={26} className='z-10 text-white '/>
        </div>
        
            <p className='text-sm text-center'>FREE AND FAST DELIVERY</p>
            <p className='text-xs  text-center'>Free delivery for all orders above ₹999</p>
        
        </div>
        <div className='flex flex-col justify-center items-center m-4 gap-1 w-1/3'>
        <div className= 'flex justify-center items-center w-12 h-12 rounded-[50%] bg-[#2F2E30] border-[6px] border-[#979797]'>
            <RiCustomerServiceLine size={26} className='z-10 text-white'/>
        </div>
        
            <p className='text-sm text-center'>24/7 CUSTOMER SERVICE</p>
            <p className='text-xs text-center'>Friendly 24/7 customer support</p>
        
        </div>
        <div className='flex flex-col justify-center items-center m-4 gap-1 w-1/3'>
        <div className= 'flex justify-center items-center w-12 h-12 rounded-[50%] bg-[#2F2E30] border-[6px] border-[#979797]'>
            <AiOutlineSafety size={26} className='z-10 text-white'/>
        </div>
        
            <p className='text-sm text-center'>MONEY BACK GUARANTEE</p>
            <p className='text-xs text-center'>We reurn money within 30 days</p>
        
        </div>
      

    </div>
  )
}

export default Benefits
