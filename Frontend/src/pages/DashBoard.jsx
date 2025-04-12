import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { MdAdd } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Check if user is logged in
  const token = localStorage.getItem('token');

  // If no token, redirect to login page
  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      fetchProducts(); // Fetch products if logged in
    }
  }, [token, navigate]);

  const fetchProducts = () => {
    axios.get('http://localhost:3000/api/admin/product/get')  // Your backend API URL
      .then(response => {
        setProducts(response.data.product);  // Assuming response.data is array of products
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/api/admin/product/delete/single/${id}`)
      .then(() => {
        setProducts(prev => prev.filter(product => product._id !== id));
        toast.success("Product deleted successfully");
      })
      .catch(error => {
        toast.warning("Delete failed");
      });
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token on logout
    toast.success("You have been logged out successfully!");
    navigate('/login'); // Redirect to login page
  };

  // Column configuration for data table
  const columns = [
    {
      name: 'Name',
      selector: row => `${row.name}`,
      sortable: true,
    },
    {
      name: 'Price',
      selector: row => `$${row.price}`,
      sortable: true,
    },
    {
      name: 'Category',
      selector: row => `${row.category}`,
    },
    {
      name: 'Actions',
      cell: row => (
        <>
          <button className='bg-red-500 p-1 px-3 rounded-md' onClick={() => handleDelete(row._id)} style={{ marginRight: '5px' }}>Delete</button>
          <Link to={`/update/${row._id}`}>
            <button className='bg-blue-500 p-1 px-3 rounded-md'>Update</button>
          </Link>
        </>
      ),
    }
  ];

  return (
    <>
  
    <div className='mt-20' style={{ padding: '20px' }}>
      <div className='flex justify-end'>
        <div className='flex bg-blue-600 px-4 py-1 me-14 rounded-md'>
          <MdAdd className='mt-1' />
          <Link to="/add" className="text-white">
            Add Product
          </Link>
        </div>
      </div>
      <div className='mt-8'>
      {token && (
      <button className="bg-red-600 px-4 py-2 rounded-md" onClick={handleLogout}>
        Logout
      </button>
    )}
        <h2>Product Dashboard</h2>
        {/* Show logout button if user is logged in */}
       
        <DataTable
          columns={columns}
          data={products}
          pagination
          highlightOnHover
        />
      </div>
    </div>
    </>
  );
};

export default ProductTable;
