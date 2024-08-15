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
  </Routes>
  </BrowserRouter>
  </Provider>
)
