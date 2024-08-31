import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector,useDispatch } from "react-redux";
import { ImPriceTag } from "react-icons/im";
import {decreaseQuantity,increaseQuantity,removeItem} from "../redux/slices/cartSlice"
import CartContainer from "../components/CartContainer";
import {Link} from 'react-router-dom'
import CartTotalContainer from "../components/CartTotalContainer";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  // const items=useSelector(state=>state.cart)
  
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
    
      
  console.log('Items',cartItems)
  
  return (
    <div>
      <Navbar showButton={true} />
      <div className="w-full flex flex-col md:flex-row gap-0 ">
        <div className="flex m-0 justify-center md:w-[70%]">
          <CartContainer cartItems={cartItems} src="cart" handleDecrease={handleDecrease} handleIncrease={handleIncrease} handleRemove={handleRemove}/>
        </div>
        <div className="md:flex w-full md:w-[50%] justify-start">
          <div className="md:w-full bg-[#f0f0f7] m-8 mt-0 md:mt-20 md:ml-0 p-4 pt-1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-lg">
            
            
            <CartTotalContainer cartItems={cartItems} src="cart"/>
            <Link to="/checkout">
              <button className="w-full bg-[#DB4444] text-white rounded-lg p-2 mt-4">
                Checkout
              </button>
              </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
