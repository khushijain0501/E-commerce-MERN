import { useCallback, useEffect, useState } from 'react'
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
import { useDispatch, useSelector } from "react-redux";
import { logout, setCredentials } from './redux/slices/authSlice'
import { addItem,clearCart } from './redux/slices/cartSlice'

function App() {
  const navigate=useNavigate();
  const [cookies,removeCookie]=useCookies([]);
  const [name,setName]=useState("");
  const dispatch=useDispatch()
  // dispatch(clearCart())
  const [loggedIn,setLoggedIn]=useState(false);
  const {userInfo}=useSelector(state=>state.auth || [])
  console.log(userInfo)
  const {cartItems}= useSelector(state=>state.cart)
  // const {cartItems}= localStorage.getItem('cartItems')?localStorage.getItem('cartItems'):[]
  useEffect(()=>{
    const verifyCookie=async ()=>{
      if(!cookies.token){
        // navigate("/Login");
        return;
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
        dispatch(setCredentials({user}))
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
      // navigate("/Login");
    }
    };
    verifyCookie();
  },[cookies.token,navigate,removeCookie]);

  useEffect(()=>{
    const savedUserInfo=localStorage.getItem('userInfo');
    if(savedUserInfo){
      dispatch(setCredentials({...JSON.parse(savedUserInfo)}));
      setLoggedIn(true);
  }},[dispatch])
  //   const response=axios.get("http:localhost:5000/getCart",{userId:userInfo._id})
  //   .catch((err)=>{
  //     console.log(err)
  //   })
  //   const savedCartInfo=
  //   if(savedUserInfo){
  //     dispatch(setCredentials({...JSON.parse(savedUserInfo)}));
  //     setLoggedIn(true);
  //   }
  // },[dispatch])

  const handleLogout=useCallback(async (cartItems)=>{
    console.log("logging out...")
    removeCookie("token");
    setLoggedIn(false);
    dispatch(logout())
    navigate("/")
    // const {cartItems}= useSelector(state=>state.cart)
    // const cartVal=localStorage.getItem('cartItems')
    const userId=userInfo?.user?._id || userInfo?._id
    const cartVal = cartItems.length ? cartItems : JSON.parse(localStorage.getItem('cartItems')) || [];
    // const cartVal=cartItems
    console.log(`Cart before ${cartVal}`)
    // console.log(userInfo)
    try{
    const response=await axios.post("http://localhost:5000/saveCart",{cartVal,userInfo:{user:{_id:userId}}},{withCredentials:true});
    if (response.data.success) {
      console.log("Cart saved successfully");
    } else {
      console.error("Error saving cart:", response.data.message);
    }
    }
    catch(err){
      console.log("Error saving cart to server",err)
    }
    console.log(`Cart after ${cartItems}`)
    dispatch(clearCart())
    
    console.log("logout clicked")
    // navigate("/login")
    setName("")
  },[removeCookie,navigate,dispatch])

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
      <Navbar showButton={true} logout={()=>handleLogout(cartItems)} loggedIn={loggedIn} name={name}/>
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
