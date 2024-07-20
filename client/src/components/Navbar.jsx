import {React,useState} from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import  ReactDOM  from 'react-dom';
import ProfileDropdown from './ProfileDropdown';
import { Link } from 'react-router-dom';

const Navbar = ({showButton,loggedIn,name,logout}) => {
  const [showDropdown, setShowDropdown] =useState(false)
  const [showMenu,setShowMenu]=useState(false)
  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };
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
        <IoCartOutline size={20} className='cursor-pointer'/>
        {showButton && <Link to={!loggedIn?"/Login":"/"}><button
        onMouseEnter={handleMouseEnter}
        className='flex items-center gap-1 bg-[#DB4444] p-1.5 rounded-md text-white'>
        <FaRegUser size={14} className='cursor-pointer'/>
        {!loggedIn && <p className='text-xs'>Login</p>}
        {loggedIn && <p className='text-xs'></p>}
        <IoIosArrowDown size={14} className={showDropdown?"rotate-180":"rotate-0"}/>
        </button>
        </Link>}
        
        <BsThreeDotsVertical size={19} 
        className='cursor-pointer'
        onMouseEnter={()=>setShowMenu(true)}
        onClick={()=>setShowMenu(!showMenu)}
       />
      </div>
      {showDropdown && <ProfileDropdown handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} setShowDropdown={setShowDropdown} logout={logout} name={name} loggedIn={loggedIn} />}
      {showMenu && (
      <div className='absolute right-2 mt-1 top-full bg-white p-2 px-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
      onMouseEnter={()=>setShowMenu(true)}
        onMouseLeave={()=>setShowMenu(false)}
        >
        <ul onMouseEnter={()=>setShowMenu(true)}
        onMouseLeave={()=>setShowMenu(false)}>
          <li className='hover:bg-gray-100 p-1 cursor-pointer'>Home</li>
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
