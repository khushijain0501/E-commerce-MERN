import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaUserLarge } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";

const MyProfile = () => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);
  const [profileImg, setProfileImg] = useState("");
  const [upload, setUpload] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [addresses,setAddresses]=useState([{address:"",city:"",state:""}])
  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log(firstName)
    console.log(lastName)
    console.log(email)
    console.log(phone)
    console.log(addresses)
  };

  const handleAddAddress=()=>{
    if(addresses.length<3){
        setAddresses([...addresses,{address:"",city:"",state:""}])
    }
  }
  const handleAddressChange = (index, field, value) => {
    const updatedAddresses = addresses.map((addr, idx) =>
      idx === index ? { ...addr, [field]: value } : addr
    );
    setAddresses(updatedAddresses);
  };

  //     const handleUpload=(e)=>{
  //         const file = e.target.files[0];
  //         //setFiles([...e.target.files]);
  //         if(file){
  //         // const imageUrl = URL.createObjectURL(file);
  //         // console.log(imageUrl)
  //         // setProfileImg(imageUrl);
  //         // dispatch(setProfileImg(imageUrl))
  //         const reader=new FileReader();
  //         reader.onloadend=()=>{
  //             const base64string=reader.result;
  //             console.log(base64string)
  //             dispatch(setProfileImg(base64string))
  //         }
  //         reader.readAsDataURL(file);
  //         }
  //         else
  //         console.error('No file selected or file is invalid');

  // }
  return (
    <div>
      <Navbar showButton={true} />
      <div className="flex flex-col ">
        <div className="pt-16 p-4 font-semibold">
          <span className="text-[#A9A9A9] hover:text-black cursor-pointer">
            Home/
          </span>
          <span className="text-[#A9A9A9] text-black cursor-pointer">
            Profile
          </span>
        </div>
        <div className="flex flex-col p-4">
          {/* <div className="md:w-[30%] flex flex-col p-6 gap-2">
                <div className='flex justify-center'>
                {userInfo?.profileImg? (
                <img src={userInfo.profileImg} alt="profile" className="w-40 h-40 border rounded-[50%] "/>):
                <FaUserLarge size={54} />
                }
                </div>
                <div className='flex justify-center gap-2'>
                <input type='file' accept='image/*' onClick={handleUpload} id="profileImg" className='hidden'/>
                <label htmlFor='profileImg'>
                <MdOutlineEdit size={18}/>
                </label>
                <MdDeleteOutline size={18}/>

                </div>
            </div> */}
          <div className="text-[30px] font-bold">
            Hi <span className="text-[#DB4444] ">{userInfo.user.name}</span> !
          </div>
          <div>
            <form onSubmit={handleSubmit} className="">
              <div className="sm:flex w-full my-2 mb-4">
                <div className="w-full sm:w-1/2 flex my-2">
                  <label htmlFor="firstName" className="w-1/3  p-1 pr-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="border w-full"
                  />
                </div>
                <div className="w-full sm:w-1/2 flex my-2">
                  <label htmlFor="lastName" className="w-1/3 p-1 pr-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="border w-full"
                  />
                </div>
              </div>
              <div className="sm:flex w-full my-2 mb-4">
                <div className="w-full sm:w-1/2 flex my-2">
                  <label htmlFor="email" className="w-1/3 p-1 pr-2">
                    Email id
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border w-full"
                  />
                </div>
                <div className="w-full sm:w-1/2 flex my-2">
                  <label htmlFor="phone" className="w-1/3 p-1 pr-2">
                    Mobile no
                  </label>
                  <input
                    type="phone"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border w-full"
                  />
                </div>
              </div>

              { addresses.map((address,index)=>(
                <div key={index}>
                <div className="w-full flex my-2">
                <label className="w-1/3 sm:w-[14.5%] p-1 pr-2">Address {index+1}</label>
                <input
                    type="text"
                    id="address"
                    value={address.address}
                    onChange={(e)=>handleAddressChange(index,"address",e.target.value)}
                    className="border w-full"
                  />
              </div>
              <div className="sm:flex w-full my-2 mb-4">
              <div className="w-full sm:w-1/2 flex my-2">
                  <label htmlFor="city" className="w-1/3 p-1 pr-2">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    value={address.city}
                    onChange={(e)=>handleAddressChange(index, "city", e.target.value)}
                    className="border w-full"
                  />
                </div>
                <div className="w-full sm:w-1/2 flex my-2">
                  <label htmlFor="state" className="w-1/3 p-1 pr-2">
                   State
                  </label>
                  <input
                    type="text"
                    id="state"
                    value={address.state}
                    onChange={(e)=> handleAddressChange(index, "state", e.target.value)}
                    className="border w-full"
                  />
                </div>
                </div>
                </div>
                ))
            }
            {
                addresses.length < 3 && (
                    <div className="flex justify-center my-4 text-lg text-gray-500">
                        <button type="button" onClick={handleAddAddress} className="">+ Add Address</button>
                    </div>
                )
            }
                <div className="flex justify-center">
                    <button type="submit" className="bg-[#DB4444] text-white p-2 rounded-md">
                        Save Changes
                    </button>
                </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyProfile;
