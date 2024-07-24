import React from 'react'
import { RxCross2 } from "react-icons/rx";


const PincodeChecker = ({setCheckPin}) => {
  return (
    <div className='fixed inset-0  bg-black bg-opacity-70 top-0 right-0 bottom-0 left-0 flex justify-center items-center p-6 py-4 z-50 h-full'>
        <div className='flex flex-col gap-3 bg-white p-6 rounded-md'>
        <div className='relative pb-1'>
        <RxCross2 size={22} 
        className='absolute right-0 cursor-pointer'
        onClick={()=>setCheckPin(false)}/>
        </div>
      <div className='font-semibold text-lg'>Check availability for your pincode</div>
      <input type='text' className='border-[1px] border-black p-1 py-1.5 rounded-sm' placeholder='Enter your pincode'/>
      <div className='flex items-center justify-center'>
      <button className='bg-[#34B233] px-4 py-1 rounded-sm text-white '>Check</button>
      </div>
      </div>
    </div>
  )
}

export default PincodeChecker
