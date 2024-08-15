import { createSlice } from "@reduxjs/toolkit";

// localStorage.removeItem('cartItems')
const initialState={cartItems:localStorage.getItem('cartItems')?
// JSON.parse(localStorage.getItem('cartItems')):
JSON.parse(localStorage.getItem('cartItems')):
[]}
// console.log(initialState.cartItems.length)

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem: (state,action)=>{
            // state.cartItems.push(action.payload)
            console.log(JSON.stringify(state.cartItems))
            console.log(action.payload)
           
            // const existingItem=state.cartItems.prod?state.cartItems.find(i=>i.prod.prod_id===action.payload.prod._id):null;
            const existingItem=state.cartItems.find(i=>i.prod.prod._id===action.payload.prod._id);
            // console.log((existingItem).length)
            if(existingItem){
                existingItem.quantity+=1;
            }
            else{
            // state.cartItems=[...state.cartItems,action.payload]
            console.log("in else")
            // state.cartItems.push({...action.payload,quantity:1})
            state.cartItems=[...state.cartItems,{prod:action.payload,quantity:1}]
            console.log(JSON.stringify(state.cartItems).length)
            }
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
            // console.log()
        },
        clearCart:(state)=>{
            state.cartItems=[];
            console.log(state.cartItems.length)
            // localStorage.removeItem('cartItems')
        },
        setCart:(state,action)=>{
            state.cartItems=action.payload;
            
        },
        increaseQuantity:(state,action)=>{
            console.log(JSON.stringify(state.cartItems))
            console.log(action.payload)
            const item=state.cartItems.find(i=>i.prod.prod._id===action.payload.id);
            console.log(item)
            if(item)
                item.quantity+=1;
        },
        decreaseQuantity:(state,action)=>{
            const item=state.cartItems.find(i=>i.prod.prod._id===action.payload.id);
            if(item && item.quantity>1)
                item.quantity-=1;
            else
            state.cartItems=state.cartItems.filter(i=>i.prod.prod._id!==action.payload.id)
        },
        removeItem:(state,action)=>{
            console.log(JSON.stringify(state.cartItems))
            console.log(action.payload)
            state.cartItems = state.cartItems.filter(i => i.prod.prod._id !== action.payload.id);
            console.log(JSON.stringify(state.cartItems))
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        }
    },
});

export const {addItem,clearCart,setCart,decreaseQuantity,increaseQuantity,removeItem}=cartSlice.actions;

export default cartSlice.reducer;