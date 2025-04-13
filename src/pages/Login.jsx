import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Login = () => {
    const navigate=useNavigate()
    const [formData,setFormData]=useState({
        email:"",
        password:"",
        confirmPassword:"",
    })
const {email,password,confirmPassword}=formData;

const onchange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
}

const handlesubmit=async(e)=>{
    e.preventDefault();
    try{
        const response = await axios.post("http://localhost:3000/api/admin/user/login", formData);
        localStorage.setItem("token", response.data.token);
        console.log(response); // ✅ Console me bhi check karein
            toast.success(response.data.message); // ✅ Backend message show karega
            navigate("/dashboard")
        } 
        catch (err) {
            console.log(err.response); // ✅ Backend response check karein
            toast.warning(err.response?.data?.message || "Something went wrong"); // ✅ Error alert me show karega
        }
        
    }



  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div className=' max-w-md bg-white shadow-md rounded-lg p-10'>
            <form onSubmit={handlesubmit}>
                <div className='className="font-semibold text-xl text-slate-400'>
                    <label>Email :</label>
                    <input type='email' name='email' value={email} onChange={onchange} placeholder='Enter your email' className="w-full p-2 rounded-md border mb-4"/>
                    <label>Password :</label>
                    <input type='password' name='password' value={password} onChange={onchange} placeholder='Enter your password' className="w-full p-2 rounded-md border mb-4"/>
                  
                </div>
                <div className='flex justify-center '>
            <button type='submit' className='bg-blue-500 w-full py-1 px-3 rounded-md'>Login</button>
            </div>
            <div className='flex justify-center'>
                <p>Already have account? <Link to={"/signup"}><span className='text-blue-500'>Signup</span></Link></p>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Login