import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useSelector,useDispatch } from "react-redux";
import { ImPriceTag } from "react-icons/im";
import {decreaseQuantity,increaseQuantity,removeItem} from "../redux/slices/cartSlice"

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  // const items=useSelector(state=>state.cart)
  const [total,setTotal]=useState(0);
  const [discount,setDiscount]=useState(0);
  const dispatch=useDispatch();
  const {cartItems}=useSelector(state=>state.cart)

  const handleDecrease=(id)=>
  {
    dispatch(decreaseQuantity({id}))
  }
  const handleIncrease=(id)=>
    {
      dispatch(increaseQuantity({id}))
    }
    const handleRemove=(id)=>
      {
        dispatch(removeItem({id}))
      }
    
      useEffect(()=>{{
        if(cartItems.length===0){
          setTotal(0);
          setDiscount(0)
        }
        let newTotal=0;
        let newDiscount=0;
        cartItems.forEach((item)=>{
          const prod=item.prod?.prod
          console.log(prod)
          if(prod){
            const itemTotal= Math.round(prod.price * 83 * item.quantity);
            newTotal+=itemTotal
            newDiscount+=Math.round(itemTotal * prod.discountPercentage / 100);
          }
          setTotal(newTotal);
          console.log(total)
          //later add promo code discout to this discount
          setDiscount(newDiscount)

        })
      }},[cartItems,dispatch])
  
  console.log('Items',cartItems)
  
  return (
    <div>
      <Navbar showButton={true} />
      <div className="w-full flex flex-col md:flex-row gap-0 ">
        <div className="flex m-0 justify-center md:w-[70%]">
          <div className="w-full md:w-[80%] mt-20 m-8 md:ml-0 p-4 md:mr-0 shadow-[0_3px_10px_rgb(0,0,0,0.25)] rounded-lg">
            <div className="text-lg font-semibold ">Cart</div>
            <div className="flex mt-3 mx-2">
              <div className="text-[14px] w-[60%]">Product</div>
              <div className="text-[14px] w-[20%]">Quantity</div>
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
                <div className="flex items-center w-[18%]">
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
                </div>
                <div className="p-2 font-semibold flex text-sm md:text-xs lg:text-sm  items-center w-[18%]">
                 ₹ {Math.round(prod.price*83*item.quantity)}
                </div>
                <div className="flex justfy-center items-center">
                  <RxCross2 size={20} color="red" onClick={()=>handleRemove(prod._id)}/>
                </div>
              </div>)
              })}
            </div>
          </div>
        </div>
        <div className="md:flex w-full md:w-[50%] justify-start">
          <div className="md:w-full bg-[#f0f0f7] m-8 mt-0 md:mt-20 md:ml-0 p-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-lg">
            <div className="font-semibold">Promo code</div>
            <div className="relative p-2 border-b-[1px] border-[#D3D3D3]">
              <input
                type="text"
                className="w-full m-1 p-1.5 bg-transparent border-[#D3D3D3] border-[0.5px] rounded-xl"
              />
              <button className="absolute bg-[#DB4444] text-white p-1.5 text-sm rounded-lg px-6 mx-2 right-0 top-[23%] cursor-pointer">
                Apply
              </button>
            </div>
            <div className="mt-4 text-sm">
              <div className="flex justify-between">
                <div>Subtotal</div>
                <div>Rs {total}</div>
              </div>
              <div className="flex justify-between">
                <div>Discount</div>
                <div>-Rs {discount}</div>
              </div>
              <div className="flex justify-between font-semibold mt-2 ">
                <div>Total</div>
                <div>Rs {total-discount}</div>
              </div>
              <button className="w-full bg-[#DB4444] text-white rounded-lg p-2 mt-4">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
