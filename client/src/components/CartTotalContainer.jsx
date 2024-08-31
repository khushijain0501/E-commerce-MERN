import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const CartTotalContainer = ({ cartItems,src }) => {
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    {
      if (cartItems.length === 0) {
        setTotal(0);
        setDiscount(0);
      }
      let newTotal = 0;
      let newDiscount = 0;
      cartItems.forEach((item) => {
        const prod = item.prod?.prod;
        console.log(prod);
        if (prod) {
          const itemTotal = Math.round(prod.price * 83 * item.quantity);
          newTotal += itemTotal;
          newDiscount += Math.round(
            (itemTotal * prod.discountPercentage) / 100
          );
        }
        setTotal(newTotal);
        console.log(total);
        //later add promo code discout to this discount
        setDiscount(newDiscount);
      });
    }
  }, [cartItems, dispatch]);

  return (
    <div className="mt-4 text-sm">
      {src==="cart" && src!=="checkout" && <div className="relative p-2 border-b-[1px] border-[#D3D3D3]">
        <div className="font-semibold">Promo code</div>
        <input
          type="text"
          className="w-full m-1 p-1.5 bg-transparent border-[#D3D3D3] border-[0.5px] rounded-xl"
        />
        <button className="absolute bg-[#DB4444] text-white p-1.5 text-sm rounded-lg px-6 mx-2 right-0 top-[40%] cursor-pointer">
          Apply
        </button>
      </div>}
      <div className="flex justify-between">
        <div>Subtotal</div>
        <div>₹ {total}</div>
      </div>
      <div className="flex justify-between">
        <div>Discount</div>
        <div>-₹ {discount}</div>
      </div>
      {src==="checkout" && src!=="cart" && 
      <div className="flex justify-between">
        <div>Shipping Charges</div>
        <div>₹100</div>
      </div>}
      <div className="flex justify-between font-semibold mt-2 ">
        <div>Total</div>
        <div>₹ {total - discount+100}</div>
      </div>
      {src==="checkout" && src!=="cart" && 
      <div className="relative p-2 border-b-[1px] border-[#D3D3D3]">
        <div className="font-semibold text-md">Promo code</div>
        <input
          type="text"
          className="w-full p-1.5 bg-transparent border-[#D3D3D3] border-[0.5px] rounded-xl"
        />
        <button className="absolute bg-[#DB4444] text-white p-1.5 text-sm rounded-lg px-6 right-0 top-[40%] cursor-pointer">
          Apply
        </button>
      </div>}
    </div>
  );
};

export default CartTotalContainer;
