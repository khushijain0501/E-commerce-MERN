import {React,useState} from 'react'
import { FaUserCircle } from "react-icons/fa";
import { PiPackage } from "react-icons/pi";
import { MdLogout } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { logout } from '../redux/slices/authSlice';
import { clearCart } from '../redux/slices/cartSlice';

const ProfileDropdown = ({handleMouseEnter,handleMouseLeave,setShowDropdown,logout,name}) => {
  const {userInfo}=useSelector(state=>state.auth)
  console.log(userInfo)
  const dispatch=useDispatch()
  // const handleLogout=()=>{
  //   dispatch(clearCart())
  //   // logout()
  // }
  return (
    <div className='absolute right-10 mt-1 top-full bg-white p-2 px-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
    onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <ul className='text-sm gap-y-4' onMouseEnter={(handleMouseEnter)}
      onMouseLeave={handleMouseLeave}>
        <li className='p-1 text-[16px] border-b-[1px] border-b-gray-300'>
            {!userInfo && <div className='flex gap-2'>
                <p>New User?</p>
                <Link to="/SignUp" className='text-[#DB4444]'>Sign Up</Link>
            </div>}
            {userInfo && <p>Hello <span className='text-[#DB4444]'>{userInfo.user.name}</span>!</p>}
        </li>
        <li className='hover:bg-gray-100 p-1'>
            <div className='flex items-center gap-1 my-1'>
            <FaUserCircle size={20}/>
            <p>Your Profile</p>
            </div>
        </li>
        <li className='hover:bg-gray-100 p-1'>
            <div className='flex items-center gap-1 my-1'>
            <PiPackage size={20}/>
            <p>Your Orders</p>
            </div>
        </li>
        <li className='hover:bg-gray-100 p-1'>
            <div className='flex items-center gap-1 my-1'>
            <MdLogout size={20}/>
            <p onClick={logout} className='cursor-pointer'>Log Out</p>
            </div>
        </li>
      </ul>
    </div>
  )
}

export default ProfileDropdown
