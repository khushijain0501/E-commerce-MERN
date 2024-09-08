import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartContainer from "../components/CartContainer";
import { useSelector } from "react-redux";
import CartTotalContainer from "../components/CartTotalContainer";
import CheckoutProgressBar from "../components/CheckoutProgressBar";
import CheckoutCustomerInfo from "../components/CheckoutCustomerInfo";
import CheckoutDeliveryAddress from "../components/CheckoutDeliveryAddress";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CheckoutPayment from "../components/CheckoutPayment";

const Checkout = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const addresses = userInfo.user.address;
  
  // const handleAddAddress = (e) => {};
  const steps=["Customer Info","Delivery Address","Payment"]
  const [currentStep,setCurrentStep]=useState(1)
  const [prevStatus,setPrevStatus]=useState(false)
  console.log(userInfo)
  console.log(addresses);

  const handleNextStep=()=>{
    if(!prevStatus){
      // console.log("Please save the details before proceeding!")
      toast.warn("Please save the details before proceeding!",{
        position:"top-right",
        autoClose:3000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:true,
        draggable:true
        });
      }
    else{
      setCurrentStep(prev=>prev+1)
    }
  }
  

  return (
    <div>
      <Navbar showButton={true} />
      <div className="flex flex-col md:flex-row w-full xl:p-10">
        <div className="flex w-full justify-center">
          <CartContainer cartItems={cartItems} src="checkout" />
        </div>
        <div className="md:mt-20 md:w-[70%] px-10 md:pl-0 pb-4 w-full justify-center">
          <CartTotalContainer cartItems={cartItems} src="checkout" />
        </div>
      </div>
      <div className="mx-14 mb-2 p-6 rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <CheckoutProgressBar currentStep={currentStep} />
        {currentStep===1 && <CheckoutCustomerInfo userInfo={userInfo} prevStatus={prevStatus} setPrevStatus={setPrevStatus}/>}
        {currentStep===2 && <CheckoutDeliveryAddress addresses={addresses} prevStatus={prevStatus} setPrevStatus={setPrevStatus}/>}
        {currentStep===3 && <CheckoutPayment  prevStatus={prevStatus} setPrevStatus={setPrevStatus}/>}
        <div className={`flex ${currentStep>1?"justify-between":"justify-end"} mx-4 mt-4 p-1`} >
        {currentStep>1 && <FaCircleArrowLeft
          size={22} 
          onClick={()=>setCurrentStep(prev=>prev-1>0?prev-1:prev)}
          className="text-[#DB4444] cursor-pointer hover:scale-150" />}
        <FaCircleArrowRight 
          size={22} 
          onClick={handleNextStep}
          className="text-[#DB4444] cursor-pointer hover:scale-150"/>
       
        </div>
      </div>
      <Footer />
      <ToastContainer/>
    </div>
  );
}

export default Checkout;
