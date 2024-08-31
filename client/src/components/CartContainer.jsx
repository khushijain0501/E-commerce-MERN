import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const CartContainer = ({cartItems,src,handleDecrease,handleIncrease,handleRemove}) => {
  return (
    <div className="w-full md:w-[80%] mt-20 m-8 md:ml-0 p-4 md:mr-0 shadow-[0_3px_10px_rgb(0,0,0,0.25)] rounded-lg">
            {src==="cart" &&  <div className="text-lg font-semibold ">Cart</div>}
            <div className="flex mt-3 mx-2">
              <div className="text-[14px] w-[60%]">Product</div>
              {src==="cart" && <div className="text-[14px] w-[20%]">Quantity</div>}
              <div className="text-[14px] w-[20%]">Price</div>
            </div>
            <div className="max-h-[200px] overflow-y-scroll">
              {cartItems.map((item,index)=>{
                const prod=item.prod?.prod
               console.log(prod)
              return (<div key={index} className="flex mt-3 rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] flex p-3">
                <img
                  src={prod.thumbnail?prod.thumbnail:" "}
                  alt="thumbnail"
                  className="rounded-md w-[15%] md:h-20 h-24 bg-gray-200"
                />
                <div className="p-2 text-sm md:text-xs lg:text-sm  w-[45%] font-semibold flex items-center">
                  {prod.title}
                </div>
                {src==="cart" && <div className="flex items-center w-[18%]">
                  <IoMdAdd
                    size={25}
                    className="border-[1px] border-[#A9A9A9] p-1 rounded-[50%]"
                    // onClick={() => setQuantity((prev) => prev + 1)}
                    onClick={
                      ()=>handleIncrease(prod._id)
                      }
                  />
                  <div className="text-center font-semibold text-sm md:text-xs lg:text-sm p-1 px-2">
                    {item.quantity}
                  </div>
                  <RiSubtractFill
                    size={25}
                    className="border-[0.5px] border-[#A9A9A9] p-1 rounded-[50%]"
                     onClick={
                    ()=>handleDecrease(prod._id)
                    }
                  />
                </div>}
                <div className="p-2 font-semibold flex text-sm md:text-xs lg:text-sm  items-center w-[18%]">
                 ₹ {Math.round(prod.price*83*item.quantity)}
                </div>
                {src==="cart" && <div className="flex justfy-center items-center">
                  <RxCross2 size={20} color="red" onClick={()=>handleRemove(prod._id)}/>
                </div>}
              </div>)
              })}
            </div>
          </div>
  )
}

export default CartContainer
