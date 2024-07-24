import {React,useState} from 'react'
import Countdown from './Countdown'
import SaleProducts from './SaleProducts'
import { Link } from 'react-router-dom';

const TodaysSection = () => {
  const [countdownType,setcountdownType]=useState("todays");

  return (
    <div className='flex flex-col overflow-hidden pb-6 border-b-[1px] border-[#D3D3D3]'>
    <div className='flex items-center gap-1 '>
      <div className='h-8 w-4 bg-[#DB4444] m-4 mr-1 rounded-sm'>
      </div>
      <div className='text-[#DB4444] text-sm font-semibold'>Today's</div>
    </div>
    <div className='flex items-center gap-8 ml-4'>
        <div className='font-semibold text-lg sm:text-xl lg:text-2xl'>Flash Sale</div>
        <Countdown type={countdownType}/>
    </div>
    <SaleProducts/>
    <div className='flex justify-center mt-10'>
      <Link to="/allProducts" state={{caller:"saleProdCaro"}}>
    <button className='bg-[#DB4444] p-2 text-white rounded-md px-8'>
        View All Products
    </button>
    </Link>
    </div>
    </div>
  )
}

export default TodaysSection
