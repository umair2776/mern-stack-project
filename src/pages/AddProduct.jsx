import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    rating: '',
    price: '',
    image: '',
  });

  const { name, category, description, rating, price, image } = formData;

  // Handle input changes
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleCreateProduct = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('name', name);
    form.append('category', category);
    form.append('description', description);
    form.append('rating', rating);
    form.append('price', price);
    form.append('image', image); // Image is a file

    try {
      const response = await axios.post("http://localhost:3000/api/admin/product/create", form, {
        headers: {
          'Content-Type': 'multipart/form-data', // This is necessary for file uploads
        },
      });
      console.log(response.data);
      toast.success("Product created successfully")
    } catch (err) {
      console.log(err);
      alert('Product not created');
    }
  };

  return (
    <div className="max-w-3xl mt-8 mx-auto p-8 bg-gray-100 shadow-lg rounded-xl">
      <h2 className="text-3xl text-center font-semibold text-gray-900 mb-6">Add Product</h2>
      <form onSubmit={handleCreateProduct} className="space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={name}
          onChange={onChange}
          className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={category}
          onChange={onChange}
          className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={description}
          onChange={onChange}
          className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          required
        />

        <input
          type="text"
          name="rating"
          placeholder="Rating"
          value={rating}
          onChange={onChange}
          className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={price}
          onChange={onChange}
          className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        <input
          type="file"
          name="image"
          onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
          className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white text-lg rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
