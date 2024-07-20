import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import image1 from "../assets/signup/signup.png";
import image2 from "../assets/signup/signup2.png";
import Footer from "../components/Footer";
import axios from "axios"
import {ToastContainer,toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [input,setInput]=useState({
    name:"",
    email:"",
    password:"",
  })
  const {name,email,password}=input;
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const {data}= await axios.post("http://localhost:5000/signup",{
        ...input,
      },{withCredentials:true});
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
      console.log(err)
    }
    setInput({
      ...input,
      name:"",
      email:"",
      password:"",

    })
  };

  const [image, setImage] = useState(image1);
  useEffect(() => {
    const interval = setInterval(() => {
      setImage((prevImage) => (prevImage === image1 ? image2 : image1));
      return () => clearInterval(interval);
    }, 1000);
  }, []);
  return (
    <>
    <div className="overflow-y-hidden">
      <Navbar showButton={false} />
      <div className="flex justify-center align-center px-20 pt-20 md:pb-20 xl:px-24 bg-[#FFCBD1] md:bg-white">
        <div className="w-full md:mt-10 md:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] xl:w-[70%] md:flex md:justify-center md:items-center md:bg-white md:h-[70%] ">
          <div className="flex flex-col md:pb-6 bg-white h-[60%] justify-center mt-8 px-6 md:pr-16 w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] md:shadow-none">
            <p className="text-[24px] font-bold p-1 lg:text-[32px]">
              Create an account
            </p>
            <p className="p-1">Enter your details below</p>
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-4 mt-4 p-1"
            >
              <input
                type="name"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="Full Name"
                className="active:border-none border-b-2 border-b-gray-300"
              />
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

            <button type="submit" className="bg-[#DB4444] p-2 text-white rounded-md mt-6 m-1">
              Create Account
            </button>
            
            <p className="mt-2 p-1">
              Already have ann account?
              <Link to="/Login" className="pl-1 underline text-[#DB4444]">
                Login
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
      <ToastContainer bodyClassName="toastBody"/>
      <Footer />
    </div>
    
    </>
  );
};

export default SignUp;
