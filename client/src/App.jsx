import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import SlideSideBar from './components/SlideSideBar'
import BannerSlider from './components/BannerSlider'
import TodaysSection from './components/TodaysSection'
import Categories from './components/Categories'
import ThisMonth from './components/ThisMonth'
import Banner from './components/Banner'
import OurProducts from './components/OurProducts'
import Featured from './components/Featured'
import Benefits from './components/Benefits'
import Footer from './components/Footer'
import { useNavigate } from 'react-router-dom'
import {useCookies} from 'react-cookie'
import axios from "axios";
import { ToastContainer,toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function App() {
  const navigate=useNavigate();
  const [cookies,removeCookie]=useCookies([]);
  const [name,setName]=useState("");
  const [loggedIn,setLoggedIn]=useState(false);

  useEffect(()=>{
    const verifyCookie=async ()=>{
      if(!cookies.token){
        navigate("/login");
      }
      try{
      const {data}=await axios.post("http://localhost:5000",{},{
        withCredentials:true
      });
      const {status,user}=data;
      console.log(status)
      if(status){
        setName(user);
        setLoggedIn(true)
      }
      else{
        removeCookie("token");
        //navigate("/login")
      }
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"))
    }
    catch (error) {
      console.error("Error occurred:", error);
      removeCookie("token");
      navigate("/login");
    }
    };
    verifyCookie();
  },[cookies,navigate,removeCookie]);

  const logout=()=>{
    removeCookie("token");
    setLoggedIn(false);
    //navigate("/login")
    setName("")
  }

  const [width,setWidth] = useState(window.innerWidth);
  function handleResize() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize',handleResize)
    //return () => window.removeEventListener('resize', handleResize);
  },[])
  const breakpoint=640
  return (
    <>
      <Navbar showButton={true} logout={logout} loggedIn={loggedIn} name={name}/>
      <ToastContainer/>
      <div className='flex overflow-hidden'>
      <div className='w-[200px] sm:w-[250px] md:w-[300px] text-sm lg:w-[350px] md:text-md lg:pl-6 lg:text-md'>
        {width > breakpoint ? <SideBar /> : <SlideSideBar/>}
      </div>
      <div className='flex justify-center w-[600px] md:w-[850px] lg:w-[900px] xl:w-[1000px]'>
        <BannerSlider/>
      </div>
      </div>
      <TodaysSection/>
      <Categories/>
      <ThisMonth/>
      <Banner/>
      <OurProducts/>
      <Featured/>
      <Benefits/>
      <Footer/>
      
    </>
  )
}

export default App
