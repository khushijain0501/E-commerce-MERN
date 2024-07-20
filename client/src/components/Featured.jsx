import React, { useState } from 'react'
import newArrival from '../data/newArrival'
import SingleNew from './SingleNew'
import new1 from "../assets/new1.png"
import new2 from "../assets/new2.png"
import new3 from "../assets/new3.png"
import new4 from "../assets/new4.png"

const Featured = () => {
    const image=[new1,new2,new3,new4]
    
  return (
    <div className='overflow-hidden'>
      <div className="mt-8 flex flex-col overflow-hidden pb-6 border-b-[1px] border-[#D3D3D3]">
      <div className="flex items-center justify-between overflow-hidden">
        <div className="flex items-center  gap-1">
        <div className="h-8 w-4 bg-[#DB4444] ml-4 my-2 mr-1 rounded-sm"></div>
        <div className="text-[#DB4444] text-sm font-semibold">Featured</div>
        </div>
      </div>
      <div className='flex justify-between items-center overflow-hidden'>
      <div className="text-xl font-bold ml-4 overflow-hidden">New Arrival</div>
      </div>
      <div className='flex justify-center items-center m-2 h-[350px]'>
        <div className='w-1/2 m-3 h-[350px]'>
            <SingleNew prod={newArrival[0]} prodImg={image[0]} small={false} />
        </div>
        <div className='flex flex-col w-1/2 h-[350px]'>
            <div className='h-[60%]'>
            <SingleNew prod={newArrival[1]} prodImg={image[1]} small={false} />
            </div>
            <div className='flex h-[40%] mt-2'>
                <div className='w-1/2 mr-1'>
                <SingleNew prod={newArrival[2]} prodImg={image[2]} small={true}/>
                </div>
                <div className='w-1/2 ml-1'>
                <SingleNew prod={newArrival[3]} prodImg={image[3]} small={true}/>
                </div>
            </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Featured
