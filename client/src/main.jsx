import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'
import ProductDetail from './pages/ProductDetail.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<React.StrictMode>
    <App />
  </React.StrictMode>}/>
  <Route path="/SignUp" element={<SignUp/>}/>
  <Route path="/Login" element={<Login/>}/>
  <Route path='/product/:id' element={<ProductDetail/>}/>
  </Routes>
  </BrowserRouter>
)
