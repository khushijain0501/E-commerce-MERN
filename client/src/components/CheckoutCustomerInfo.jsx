import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCustomerInfo } from "../redux/slices/orderSlice";
import { FaHandshake } from "react-icons/fa";

const CheckoutCustomerInfo = ({ userInfo, prevStatus, setPrevStatus }) => {
  //   const [firstName, setFirstName] = useState(userInfo.user.firstName?userInfo.user.firstName:"");
  //   const [lastName,setLastName]=useState(userInfo.user.lastName?userInfo.user.lastName:"");
  //   const [phone, setPhone] = useState(userInfo.user.mobile?userInfo.user.mobile:"");
  //   const [email,setEmail]=useState(userInfo.user.email?userInfo.user.email:"")
  const [details, setDetails] = useState({
    firstName: userInfo.user.firstName ? userInfo.user.firstName : "",
    lastName: userInfo.user.lastName ? userInfo.user.lastName : "",
    phone: userInfo.user.mobile ? userInfo.user.mobile : "",
    email: userInfo.user.email ? userInfo.user.email : "",
    message: "",
  });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPrevStatus(false);
    setDetails({
      ...details,
      [name]: value,
    });
  };
  const handleSave = () => {
    dispatch(addCustomerInfo(details));
    setPrevStatus(true);
  };
  return (
    <div>
      <div className="text-xl font-semibold pb-3">Customer Info</div>
      <div className="flex flex-col gap-4 mb-4 ">
        <div className="flex flex-col sm:flex-row px-6 gap-4 sm:justify-between">
          <div>
            <label className="p-1 pr-2 text-sm">First Name*</label>
            <br />
            <input
              type="text"
              value={details.firstName}
              name="firstName"
              onChange={handleInputChange}
              required
              className="border border-[1px]  text-sm p-1 w-[70%] sm:w-full"
            />
          </div>
          <div>
            <label className="p-1 pr-2 text-sm">Last Name*</label>
            <br />
            <input
              type="text"
              value={details.lastName}
              name="lastName"
              onChange={handleInputChange}
              required
              className="border border-[1px] text-sm p-1 w-[70%] sm:w-full"
            />
          </div>
        </div>
        <div className="flex flex-col px-6 sm:flex-row gap-4 sm:justify-between ">
          <div>
            <label className="p-1 pr-2 text-sm">Phone no.*</label>
            <br />
            <input
              type="text"
              value={details.phone}
              name="mobile"
              onChange={handleInputChange}
              required
              className="border border-[1px] text-sm p-1 w-[70%] sm:w-full"
            />
          </div>
          <div>
            <label className="p-1 pr-2 text-sm">Email*</label>
            <br />
            <input
              type="email"
              value={details.email}
              name="email"
              onChange={handleInputChange}
              required
              className="border border-[1px] text-sm p-1 w-[70%] sm:w-full"
            />
          </div>
          </div>
          <div className="flex flex-col px-6  ">
            <label className="p-1 pr-2 text-sm">Message</label>
            <textarea className="border border-[1px] text-sm p-1 w-[70%] sm:w-full" />
          </div>
          <div className="px-6  ">
            <button
              className="bg-[#DB4444] mt-3 text-white p-1.5 text-sm rounded-lg px-6 cursor-pointer"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        
      </div>
    </div>
  );
};

export default CheckoutCustomerInfo;
