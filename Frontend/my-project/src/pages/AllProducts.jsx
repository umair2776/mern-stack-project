import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const AllProducts = () => {
    const [product,allProduct]=useState([])
    const fetchData=async()=>{
        const response=await axios.get("http://localhost:3000/api/admin/product/get")
        allProduct(response.data.product)
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <>
    <div className='mt-5 flex justify-center'>
        <h1 className='text-4xl font-semibold'>All Products Here</h1>
    </div>
    <div className="grid grid-cols-1 mt-12 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8">
      
    {product.map((product, index) => (
      <Link to={`/product/${product._id}`} key={index}>
        <div className="bg-white w-full hover:shadow-lg rounded-md p-4 transition-transform duration-300 transform hover:scale-105">
          <div className="overflow-hidden rounded-md">
            <img
              src={product.image}
              className="h-48 w-full object-cover rounded-lg"
              alt="Product Image"
            />
          </div>
          <div className="mt-4 text-center">
            <h1 className="text-lg font-semibold">{product.name}</h1>
            <p className=" text-sm truncate">{product.description}</p>
            <h1 className="text-sm font-bold mt-2">Rs. {product.price}</h1>
            <p className="text-gray-500 text-sm">{product.rating} ⭐</p>
          </div>
        </div>
      </Link>
    ))}
  </div>
  <div className='mt-12'>
    <Footer/>
  </div>
  </>
);
};

export default AllProducts
