import React,{useState} from 'react'

const CheckoutDeliveryAddress = ({addresses}) => {
    const [selectedAddress, setSelectedAddress] = useState("");
  const [addNew, setAddNew] = useState(false);
  const [newAddress, setNewAddress] = useState("");
  const [newAddressCity, setNewAddressCity] = useState("");
  const [newAddressState, setNewAddressState] = useState("");
  return (
    <div>
      <div className="text-lg font-semibold">Delivery Address</div>
        {addresses.length > 0 &&
          addresses.map((address, index) => {
            return (
              <div className="p-1.5 text-sm">
                <input
                  type="radio"
                  id={index}
                  value={address.address}
                  checked={selectedAddress === address.address}
                  onChange={() => setSelectedAddress(address)}
                  className=""
                />
                <label htmlFor={index} className="px-1.5">
                  {" "}
                  {address.address}
                  <br />{" "}
                  <span className="ml-6">
                    {address.city ? address.city : ""},{" "}
                    {address.state ? address.state : ""}
                  </span>
                </label>
              </div>
            );
          })}
        <div className="flex justify-start m-4 text-lg text-gray-500">
          <button type="button" onClick={() => setAddNew(true)} className="">
            + Add Address
          </button>
        </div>
        {addresses.length < 0 ||
          (addNew && (
            <div className="bg-[#f0f0f7] p-2 rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <div className="w-full flex my-2">
                <label className="w-1/3 sm:w-[14.5%] p-1 pr-2">Address</label>
                <input
                  type="text"
                  id="address"
                  value={newAddress}
                  onChange={(e) => setNewAddress(e.target.value)}
                  className="border border-[1px] border-gray-300 w-full p-1 bg-transparent"
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
                    value={newAddressCity}
                    onChange={(e) => setNewAddressCity(e.target.value)}
                    className="border w-full p-1 border-gray-300 border-[1px] bg-transparent"
                  />
                </div>
                <div className="w-full sm:w-1/2 flex my-2">
                  <label htmlFor="state" className="w-1/3 p-1 pr-2">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    value={newAddressState}
                    onChange={(e) => setNewAddressState(e.target.value)}
                    className="border w-full p-1 border-gray-300  border-[0.5px] bg-transparent"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button className="bg-[#DB4444] text-white p-1.5 text-sm rounded-lg px-6 mx-2 right-0 top-[40%] cursor-pointer">
                  Save changes
                </button>
              </div>
            </div>
          ))}
    </div>
  )
}

export default CheckoutDeliveryAddress
