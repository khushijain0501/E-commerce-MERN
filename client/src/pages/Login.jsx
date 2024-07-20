import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import image1 from "../assets/signup/signup.png";
import image2 from "../assets/signup/signup2.png";
import Footer from "../components/Footer";
import {ToastContainer,toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
    const [input,setInput]=useState({
      email:"",
      password:"",
    })
    const navigate=useNavigate();
    const {email,password}=input;
    const handleChange=(e)=>{
      const {name,value}=e.target;
      setInput({
        ...input,
        [name]:value,
      });
    };
    const handleError=(err)=>{
      toast.error(err,{
        position:"bottom-left",
      });
    }
    const handleSuccess=(msg)=>{
      toast.success(msg,{
        position:"bottom-right",
      });
    };
    
    const handleSubmit = async(e)=>{
      e.preventDefault();
      try{
        const {data}=await axios.post("http://localhost:5000/login",{
          ...input,
        },{withCredentials:true}
      );
      console.log(data);
      const {success,message}=data;
      if(success){
        handleSuccess(message);
        setTimeout(()=>{
          navigate("/");
        },1000);
      }
      else{
        handleError(message);
      }
      }
      catch(err){
      console.log(err);
      }
      setInput({
        ...input,
        email:"",
        password:"",
      });
    };

    const [image,setImage]=useState(image1);
useEffect(()=>{
    const interval=setInterval(()=>{
        setImage(prevImage => prevImage === image1 ? image2 : image1);
    return ()=>clearInterval(interval);
},1000)},[])
  
  return (
    <div className="overflow-y-hidden">
      <Navbar showButton={false} />
      <div className="flex justify-center align-center px-20 pt-20 md:pb-20 xl:px-24 bg-[#FFCBD1] md:bg-[#F3EEEE]">
        <div className="w-full md:mt-10 md:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] xl:w-[70%] md:flex md:justify-center md:items-center md:bg-white md:h-[70%] ">
          <div className="flex flex-col md:pb-6 bg-white h-[60%] justify-center mt-8 px-6 md:pr-16 w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] md:shadow-none">
            <p className="text-[24px] font-bold p-1 lg:text-[32px]">Login to UrbanHive</p>
            <p className="p-1">Enter your details below</p>
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-4 mt-4 p-1"
            >
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
                className="border-b-2 border-b-gray-300"
              />
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
                className="border-b-2 border-b-gray-300"
              />
              <div className="flex justify-between items-center">
            <button className="bg-[#DB4444] p-2 text-white rounded-md mt-6 m-1">
              Login
            </button>
            <p className="text-sm text-[#DB4444] text-center mt-6 m-1">Forgot Password?</p>
            </div>
            <p className="mt-2 p-1 text-sm">
              Don't have an account?
              <Link to="/SignUp" className="pl-1 underline text-[#DB4444]">
                Sign Up
              </Link>
            </p>
            </form>
            
          </div>
          <div className="md:flex md:justify-center md:items-center">
            <div className="invisible md:visible bg-[#FFCBD1] h-[70%] ">
              <img
                src={image}
                className="h-[397px] w-[800px] -translate-x-[50px] object-fit"
              />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
      <Footer />
    </div>
  );
}

export default Login
