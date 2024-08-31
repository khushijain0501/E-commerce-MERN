import React from 'react'

const CheckoutCustomerInfo = ({name,setName,phone,setPhone}) => {
  return (
    <div>
    <div className="text-xl font-semibold pb-3">Customer Info</div>
        <div className="flex gap-4 mb-4">
          <div>
            <label className="p-1 pr-2 text-sm">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border border-[1px] text-sm"
            />
          </div>
          <div>
            <label className="p-1 pr-2 text-sm">Phone no.</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="border border-[1px] text-sm"
            />
          </div>
        </div>
        </div>
  )
}

export default CheckoutCustomerInfo
