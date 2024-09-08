import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import AllProducts from './pages/AllProducts.jsx'
import Cart from './pages/Cart.jsx'
import {Provider} from "react-redux"
import {store} from "./redux/store.js"
import MyProfile from './pages/MyProfile.jsx'
import Checkout from './pages/Checkout.jsx'
import Page404 from './pages/Page404.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={store}>
 <BrowserRouter>
  <Routes>
  <Route path="/" element={<React.StrictMode>
    <App />
  </React.StrictMode>}/>
  <Route path="/SignUp" element={<SignUp/>}/>
  <Route path="/Login" element={<Login/>}/>
  <Route path='/product/:id' element={<ProductDetail/>}/>
  <Route path="/allProducts" element={<AllProducts/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path="/profile" element={<MyProfile/>}/>
  <Route path="/checkout" element={<Checkout/>}/>
  <Route path='*' element={<Page404/>}/>
  </Routes>
  </BrowserRouter>
  </Provider>
)
