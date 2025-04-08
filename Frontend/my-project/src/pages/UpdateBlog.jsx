import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const UpdateBlog = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    rating: '',
    category: '',
    image: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/api/admin/product/get/single/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log('Error fetching product:', err));
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduct({ ...product, image: file });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('price', product.price);
    formData.append('rating', product.rating);
    formData.append('category', product.category);
    formData.append('image', product.image);

    axios.put(`http://localhost:3000/api/admin/product/update/single/${id}`, formData)
      .then(() => toast.success("Product updated successfully"))
      .catch(err => toast.warning("Error updating product:", err));
  };

  return (
    <div className="max-w-3xl mt-8 mx-auto p-8 bg-gray-100 shadow-lg rounded-xl">
      <h2 className="text-3xl text-center font-semibold text-gray-900 mb-6">Update Product</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input 
          type="text" 
          name="name" 
          placeholder="Product Name" 
          value={product.name} 
          onChange={handleChange} 
          className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
          required 
        />
        
        <textarea 
          name="description" 
          placeholder="Description" 
          value={product.description} 
          onChange={handleChange} 
          className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none" 
          required 
        />
        
        <input 
          type="text" 
          name="price" 
          placeholder="Price" 
          value={product.price} 
          onChange={handleChange} 
          className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
          required 
        />
        
        <input 
          type="text" 
          name="rating" 
          placeholder="Rating" 
          value={product.rating} 
          onChange={handleChange} 
          className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
          required 
        />
        
        <input 
          type="text" 
          name="category" 
          placeholder="Category" 
          value={product.category} 
          onChange={handleChange} 
          className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
          required 
        />
        
        <input 
          type="file" 
          name="image" 
          accept="image/*"
          onChange={handleImageChange} 
          className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
          required 
        />
        
        <button 
          type="submit" 
          className="w-full py-3 bg-indigo-600 text-white text-lg rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateBlog;
