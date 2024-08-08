import {React,useEffect,useState,useMemo} from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import  ReactDOM  from 'react-dom';
import ProfileDropdown from './ProfileDropdown';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { addItem,setCart,clearCart } from "../redux/slices/cartSlice";


const Navbar =({showButton,loggedIn,name,logout}) => {
  const [showDropdown, setShowDropdown] =useState(false)
  const [showMenu,setShowMenu]=useState(false);
  const dispatch=useDispatch();
  

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };
  const handleMouseLeave = () => {
    setShowDropdown(false);
  };
  // const items=useSelector((state)=>state)

  const {cartItems}=useSelector(state=>state.cart)
  
  const {userInfo}=useSelector(state=>state.auth)
  console.log(cartItems)

  //   useEffect(()=>{
  //   const savedCartInfo=localStorage.getItem('cartItems');
  //   if(savedCartInfo){
  //     // savedCartInfo.map((item)=>{
  //     // dispatch(addItem({item:JSON.parse(item)}))
  //     // })
  //     dispatch(setCart(JSON.parse(savedCartInfo)))
  //   }
  // },[dispatch])

  // useEffect(()=>{},cartItems)
  return (
    <>
    <div className="fixed z-10 bg-white w-full pt-1 px-4 pb-1.5 xl:pt-2 flex justify-between items-center border-b-[1px] border-[#D3D3D3] md:px-10 lg:px-16 center md:gap-7">
      <div className='font-extrabold xl:text-xl'>
        UrbanHive
      </div>
        <ul className="hidden md:flex md:gap-10 md:gap-6 md:text-sm">
        <li className='hover:border-b-2 hover:border-b-[#7D8184] cursor-pointer xl:text-[16px] xl:font-semibold'>Home</li>
        <li className='hover:border-b-2 hover:border-b-[#7D8184] cursor-pointer xl:text-[16px] xl:font-semibold'>Contact</li>
        <li className='hover:border-b-2 hover:border-b-[#7D8184] cursor-pointer xl:text-[16px] xl:font-semibold'>About</li>
        </ul>
      
      <div className="flex items-center gap-3 md:gap-5">
        <label className='relative border-[1px]'>
        <input 
        type="text" 
        placeholder="What are you looking for?"
        className='p-2 text-xs sm:text-sm'/>
        <IoIosSearch size={20} className='absolute right-[7px] top-[5px] sm:top-[8px] cursor-pointer'/>
        </label>
        
        <IoMdHeartEmpty size={20} className='cursor-pointer'/>
        <Link to="/cart">
        <div className='relative'>
        <IoCartOutline size={20} className='cursor-pointer m-1'/>
        <div className='absolute top-0 right-0 w-3.5 h-3.5 rounded-[50%] bg-[#DB4444] text-white text-xs text-center'>{cartItems.length}</div>
        </div>
        </Link>
        {showButton && <Link to={!userInfo?"/Login":"/"}><button
        onMouseEnter={handleMouseEnter}
        className='flex items-center gap-1 bg-[#DB4444] p-1.5 rounded-md text-white'>
        <FaRegUser size={14} className='cursor-pointer'/>
        {userInfo==null && <p className='text-xs'>Login</p>}
        {userInfo && <p className='text-xs'></p>}
        <IoIosArrowDown size={14} className={showDropdown?"rotate-180":"rotate-0"}/>
        </button>
        </Link>}
        
        <BsThreeDotsVertical size={19} 
        className='cursor-pointer'
        onMouseEnter={()=>setShowMenu(true)}
        onClick={()=>setShowMenu(!showMenu)}
       />
      </div>
      {showDropdown && <ProfileDropdown handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} setShowDropdown={setShowDropdown} logout={logout} name={name} />}
      {showMenu && (
      <div className='absolute right-2 mt-1 top-full bg-white p-2 px-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
      onMouseEnter={()=>setShowMenu(true)}
        onMouseLeave={()=>setShowMenu(false)}
        >
        <ul onMouseEnter={()=>setShowMenu(true)}
        onMouseLeave={()=>setShowMenu(false)}>
          <Link to="/"><li className='hover:bg-gray-100 p-1 cursor-pointer'>Home</li></Link>
          <li className='hover:bg-gray-100 p-1 cursor-pointer'>Contact
          </li>
          <li className='hover:bg-gray-100 p-1 cursor-pointer'>About</li>
        </ul>
      </div>)}
    </div>
    
    </>
  )
}

export default Navbar
