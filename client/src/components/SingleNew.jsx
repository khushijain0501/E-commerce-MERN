import React from 'react'

const SingleNew = ({prod,prodImg,small}) => {
  // {console.log(small)}
  return (
    <div className='relative bg-black w-full h-full'>
        <div className='absolute bottom-0 right-0 w-full flex justify-end'>
        
      <img src={prodImg} className={` ${small ? "w-[90%] sm:w-[75%] md:w-[53%] lg:w-[50%] xl:w-[30%]" : " sm:w-[85%] md:w-[65%] lg:w-[60%] xl:w-[40%]"}`}/>
      
      </div>
      <div className={`absolute bottom-0 left-0 flex flex-col text-[#FAFAFA] p-4 ${small ? "gap-1 w-[80%]" : "gap-2  w-[65%] xl:w-[55%]"}`}>
        <div className={small ? "text-xs md:text-sm lg:text-md xl:text-xl font-semibold" : "text-md md:text-lg lg:text-xl xl:text-2xl font-semibold"}>
            {prod.prodName}
        </div>
        <div className={small ? "text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px]" : "text-[10px] md:text-[13px] lg:text-[14px] xl:text-[18px]"}>
            {prod.prodDesc}
        </div>
        <div className={`underline ${small ? "text-xs" : "text-sm"}`}>
            Shop Now
        </div>
      </div>
    </div>
  )
}

export default SingleNew
