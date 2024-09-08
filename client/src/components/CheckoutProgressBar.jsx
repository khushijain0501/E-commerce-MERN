import React from 'react'
import { FaCheckCircle } from "react-icons/fa";


const CheckoutProgressBar = ({currentStep}) => {
    const steps=[1,2,3]
    console.log(currentStep)

  return (
    <div className='flex justify-center'>
    <div className="flex justify-between items-center w-full py-4 px-10 max-w-[900px]">
        {steps.map((step,index)=>{
            return <React.Fragment key={index}>
                <div  className={`w-8 h-8 flex items-center justify-center rounded-full ${
                    currentStep >= step ? 'bg-[#DB4444] text-white':'border border-[#DB4444] text-blue-500'
                }`}>
                {currentStep>step ?(
                    <FaCheckCircle className='bg-[#DB4444]'/>
                ):currentStep===step?(
                    <div className="w-2 h-2 flex justify-center items-center font-semibold bg-[#DB4444] rounded-full">{currentStep}</div>
                ):null}
                </div>
                {index !== steps.length - 1 && (
            <div
              className={`flex-1 border-t-2 ${
                currentStep > step ? 'border-[#DB4444]' : 'border-gray-300'
              }`}
            ></div>
          )}
            </React.Fragment>
        })}
    </div>
    </div>
  )
}

export default CheckoutProgressBar
