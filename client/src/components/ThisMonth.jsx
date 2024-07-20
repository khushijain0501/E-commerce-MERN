import React from 'react'
import BestSellSlider from './BestSellSlider'

const ThisMonth = () => {
  return (
    <div className='overflow-hidden'>
      <div className="mt-8 flex flex-col overflow-hidden pb-6 border-b-[1px] border-[#D3D3D3]">
      <div className="flex items-center justify-between overflow-hidden">
        <div className="flex items-center  gap-1">
        <div className="h-8 w-4 bg-[#DB4444] ml-4 my-2 mr-1 rounded-sm"></div>
        <div className="text-[#DB4444] text-sm font-semibold">This Month</div>
        </div>
      </div>
      <div className='flex justify-between items-center overflow-hidden'>
      <div className="text-xl font-bold ml-4  overflow-hidden">Best Selling Products</div>
      <button className='bg-[#DB4444] p-2 text-white rounded-md px-8 mr-4 text-sm'>
        View All 
    </button>
      </div>
      <BestSellSlider/>
    </div>
    </div>
  )
}

export default ThisMonth
