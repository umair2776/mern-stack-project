import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from "./components/Home"
import Contact from './pages/Contact'
import Cosmatics from './pages/Cosmatics'
import MainNavbar from './components/MainNavbar'
import ProductDescription from './pages/ProductDescription'
import AllProducts from './pages/AllProducts'
import Login from './pages/Login'
import Singup from './pages/Singup'
import DashBoard from './pages/DashBoard'
import { ToastContainer, toast,Zoom } from 'react-toastify';

import UpdateBlog from './pages/UpdateBlog'
import AddProduct from './pages/AddProduct'
import PrivateRoute from './components/PrivateRoute'
import VideoComponent from './components/Video'

const App = () => {
  return (
    <div>
      <MainNavbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cosmatics' element={<Cosmatics/>}/>
        <Route path='/all' element={<AllProducts/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Singup/>}/>
        <Route path='/dashboard' element={
  <PrivateRoute>
    <DashBoard />
  </PrivateRoute>
} />
        <Route path='/update/:id' element={<UpdateBlog />} />
       <Route path='/add' element={<AddProduct/>}/>
       <Route path='/video' element={<VideoComponent/>}/>


        <Route path='/product/:id' element={<ProductDescription/>}/>

      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
    </div>
  )
}

export default App
