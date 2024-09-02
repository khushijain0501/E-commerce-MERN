import { createSlice } from "@reduxjs/toolkit";

const initialState={orderDetails:localStorage.getItem('orderDetails')?
    JSON.parse(localStorage.getItem('orderDetails')):
    []}

const orderSlice=createSlice({
    name:"order",
    initialState,
    reducers:{
        addCustomerInfo:(state,action)=>{
            state.orderDetails=action.payload
            console.log(state.orderDetails)
        },
        addAddress:(state,action)=>{
            state.orderDetails={...state.orderDetails,
                address:action.payload.address,
                city:action.payload.city,
                state:action.payload.state
            }
            console.log(state.orderDetails)
        }
    }
})

export const {addCustomerInfo,addAddress}=orderSlice.actions
export default orderSlice.reducer;