import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { FaStar } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiReload } from "react-icons/tfi";
import "../assets/saleProd2.jpg";
import bestSell2 from "../assets/bestSell2.jpg";
import bestSell3 from "../assets/bestSell3.jpg";
import bestSell4 from "../assets/bestSell4.jpg";
import bestSell5 from "../assets/bestSell5.jpg";
import PincodeChecker from "../components/PincodeChecker";
import { useDispatch, useSelector } from "react-redux";
import {addItem} from "../redux/slices/cartSlice"

const ProductDetail = () => {
  const location = useLocation();
  const id = location.state.id;
  const dispatch=useDispatch()
  const {cartItems} =useSelector(state=>state.cart)
  const [prod, setProd] = useState({});
  const stars = Array(5).fill(0);
  const colors = {
    on: "#FFAD33",
    off: "#7D8184",
  };
  const [quantity, setQuantity] = useState(1);
  const [checkPin,setCheckPin]=useState(false);
  const [currImg,setCurrImg]=useState("")
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/product/${id}`)
      .then((res) => {
        setProd(res.data);
      })
      .catch((e) => {
        console.log("Error fetching product detail");
      });
  }, [id]);
  console.log(prod.images);
  const images=prod.images || [];
  console.log(images)
  return (
    <div>
      <Navbar showButton={true} />
      <div className="flex flex-col ">
        <div className="pt-16 p-4 font-semibold">
          <span className="text-[#A9A9A9] hover:text-black cursor-pointer">
            Account/
          </span>
          <span className="text-[#A9A9A9] hover:text-black cursor-pointer">
            {prod.category}/
          </span>
          <span className="text-black cursor-pointer">{prod.title}</span>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-8 p-10 justify-between align-center ">
          <div className="w-full md:w-[60%]">
            {images.length>1 && (<div className="w-full flex flex-col md:flex-row">
              <div className="w-full md:w-[30%] flex md:flex-col justify-center items-center">
              {console.log(prod)}
              {images && (images).map((image,index)=> {
                return (<img src={image} key={index} onClick={()=>setCurrImg(image)} className="h-[120px] hover:bg-gray-100"/>);
                
              })}
            </div>
            <div className="md:w-[70%] flex justify-center items-center">
            <img src={currImg!==""?currImg:prod.thumbnail} alt="thumbnail" />
            </div>
            </div>)}
            {images.length<=1 && 
            (<div className="w-full flex justify-center items-center">
            <img src={prod.thumbnail} alt="thumbnail" className="pt-10" />
            </div>)}
          
          </div>
          <div className="md:w-1/2 flex flex-col gap-2 ">
            <div className="font-semibold text-xl">{prod.title}</div>
            <div className="flex mt-1 items-center">
              {stars.map((_, index) => {
                return (
                  <div key={index}>
                    <FaStar
                      color={prod.rating > index ? colors.on : colors.off}
                    />
                  </div>
                );
              })}
            </div>
            <div>{prod.description}</div>
            <div className="font-semibold">₹ {Math.round(prod.price*83)}</div>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center w-[100px]">
                <IoMdAdd
                  size={25}
                  className="border-[1px] border-[#A9A9A9] p-1 w-[30%]"
                  onClick={() => setQuantity((prev) => prev + 1)}
                />
                <div className="border-[0.5px] border-[#A9A9A9] text-center font-semibold text-xs p-1 w-[33%]">
                  {quantity}
                </div>
                <RiSubtractFill
                  size={25}
                  className="border-[0.5px] border-[#A9A9A9] p-1 w-[30%]"
                  onClick={() =>
                    setQuantity((prev) => (prev - 1 >= 1 ? prev - 1 : 1))
                  }
                />
              </div>
            </div>
            <div className="flex items-center gap-4 lg:w-3/4 xl:w-1/2">
              <button 
              className="rounded-sm bg-[#DB4444] text-white p-2 px-3 text-xs w-[70%] cursor-pointer"
              onClick={(e)=>{
                for (let i=0;i<quantity;i++)
                dispatch(addItem({prod})) 
            }}
              >
                
                Add To Cart
              </button>
              <CiHeart size={30} />
            </div>
            <div className="border-[1px] border-black flex flex-col rounded-sm lg:w-3/4 xl:w-1/2 my-4">
                  <div className="flex p-3 border-[0.5px] gap-2 border-black items-center">
                    <TbTruckDelivery size={48} className=""/>
                    <div className="flex flex-col">
                      <div className="font-bold text-md">Free Delivery</div>
                      <div className="underline text-xs cursor-pointer" onClick={()=>setCheckPin(true)}>Enter your pincode for delivery availability</div>
                    </div>
                  </div>
                  <div className="flex p-3  border-[0.5px] gap-3 border-black items-center">
                    <TfiReload size={30} className="font-bold"/>
                    <div className="flex flex-col">
                      <div className="font-bold text-md">Return/Exchange</div>
                      <div className="text-xs">Free 30 days return/exchange</div>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {checkPin && <PincodeChecker setCheckPin={setCheckPin}/>}
    </div>
  );
};

export default ProductDetail;
