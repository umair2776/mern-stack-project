import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { MdAdd } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      fetchProducts();
    }
  }, [token, navigate]);

  const fetchProducts = () => {
    axios.get('http://localhost:3000/api/admin/product/get')
      .then(response => {
        setProducts(response.data.product);
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
      .catch(() => {
        toast.warning("Delete failed");
      });
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success("You have been logged out successfully!");
    navigate('/login');
  };

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
        <div className="flex flex-wrap gap-2">
          <button
            className='bg-red-500 text-white p-1 px-3 rounded-md'
            onClick={() => handleDelete(row._id)}
          >
            Delete
          </button>
          <Link to={`/update/${row._id}`}>
            <button className='bg-blue-500 text-white p-1 px-3 rounded-md'>Update</button>
          </Link>
        </div>
      ),
    }
  ];

  return (
    <div className='min-h-screen bg-white px-4 md:px-10 pt-20 relative z-10'>
      
      {/* Top Buttons */}
      <div className='flex flex-wrap justify-end items-center gap-3 mb-4'>
        <Link to="/add" className='flex items-center bg-blue-600 text-white px-3 py-2 rounded-md'>
          <MdAdd className='mr-1' />
          Add Product
        </Link>
        {token && (
          <button
            className="bg-red-600 text-white px-3 py-2 rounded-md"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>

      {/* Heading */}
      <h2 className='text-xl font-semibold mb-4'>Product Dashboard</h2>

      {/* Data Table */}
      <div className="overflow-x-auto">
        <DataTable
          columns={columns}
          data={products}
          pagination
          highlightOnHover
          responsive
        />
      </div>
    </div>
  );
};

export default ProductTable;
