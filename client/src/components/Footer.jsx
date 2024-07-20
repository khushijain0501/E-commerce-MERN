import React from 'react'
import { LuSendHorizonal } from "react-icons/lu";
import { BsQrCode } from "react-icons/bs";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import googlePlay from "../assets/GooglePlay.png"
import appleStore from "../assets/AppStore.png"
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-black py-8 px-8 flex text-white gap-4 justify-center sm:gap-6 md:px-20 md:gap-10 lg:gap-2 lg:px-24 xl:px-48'>
        <div className='flex flex-col gap-2 w-1/5'>
            <div className='font-semibold text-md lg:text-xl'>UrbanHive</div>
            <div className='text-sm lg:text-lg'>Subscribe</div>
            <div className=''>
                <p className='text-xs mb-2'>Get 10% off your first order</p>
                <label className='relative flex items-center'>
                <input type='email' placeholder='Enter your email' className='text-[7px] sm:text-[10px] md:text-[10px] lg:text-[14px] w-full md:w-[90%] xl:w-[60%] border-2 pl-2 p-1 border-white bg-transparent'/>
                <LuSendHorizonal className='absolute right-[3px]  w-3 md:right-[14px] sm:w-4 lg:w-6 lg:right-[20px] xl:right-[90px]'/>
                </label>
            </div>
        </div>
        <div className='flex flex-col gap-2 w-1/5'>
            <div className=' text-md lg:text-lg'>Support</div>
            <div className='text-xs lg:text-sm'>143, Street 11,<br/> Mumbai, India</div>
            <div className='text-xs lg:text-sm'>urbanhive@info</div>
            <div className='text-xs lg:text-sm'>1800-0456-5627</div>
        </div>
        <div className='flex flex-col gap-2 w-1/5'>
            <div className=' text-md lg:text-lg'>Account</div>
            <div className='text-xs lg:text-sm'>My Account</div>
            <div className='text-xs  lg:text-sm'>Login/ Register</div>
            <div className='text-xs  lg:text-sm'>Cart</div>
            <div className='text-xs  lg:text-sm'>Wishlist</div>
            <div className='text-xs lg:text-sm'>Shop</div>
        </div>
        <div className='flex flex-col gap-2 w-1/5'>
            <div className=' text-md lg:text-lg'>Quick Link</div>
            <div className='text-xs lg:text-sm'>Privacy Policy</div>
            <div className='text-xs lg:text-sm'>Terms of Use</div>
            <div className='text-xs lg:text-sm'>FAQ</div>
            <div className='text-xs lg:text-sm'>Contact</div>
        </div>
        <div className='flex flex-col gap-2 w-1/5'>
            <div className=' text-md lg:text-lg'>Download APP</div>
            <div className='text-[8px] lg:text-[12px]'>Save $3 with App New User Only</div>
            <div className='flex gap-1 w-full'>
                <div className='w-[35%]'>
                <BsQrCode className='w-full h-full'/>
                </div>
                <div className='flex flex-col w-[55%]'>
                    <img src={googlePlay}/>
                    <img src={appleStore}/>
                </div>
            </div>
            <div className='flex justify-between mt-2'>
            <FaFacebookF className='cursor-pointer'/>
            <FaXTwitter className='cursor-pointer'/>
            <FaInstagram className='cursor-pointer'/>
            <FaLinkedin className='cursor-pointer'/>

            </div>
            
        </div>
      
    </div>
  )
}

export default Footer
