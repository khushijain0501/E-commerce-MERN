import React from 'react'

const SortComponent = ({sortBy,setSortBy}) => {
  return (
    <div className='z-20 absolute w-[150px] right-2 mt-1 top-[14%] bg-white p-2 px-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
      <ul>
        <li onClick={()=>setSortBy("priceAsc")} className='text-xs font-semibold py-2 hover:bg-gray-100'>Price (lowest first)</li>
        <li onClick={()=>setSortBy("priceDesc")} className='text-xs font-semibold py-2 hover:bg-gray-100'>Price (highest first)</li>
        <li onClick={()=>setSortBy("ratingDesc")} className='text-xs font-semibold py-2 hover:bg-gray-100'>Rating (highest first)</li>
      </ul>
    </div>
  )
}

export default SortComponent
