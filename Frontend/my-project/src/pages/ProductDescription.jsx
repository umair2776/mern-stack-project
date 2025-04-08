import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from "../components/Footer";

const ProductDescription = () => {
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const [product, setProduct] = useState(null); // Initially set to null
  const [error, setError] = useState(null);

  // Increase count
  const increase = () => {
    setCount(count + 1);
  };

  // Decrease count
  const decrease = () => {
    setCount(count > 1 ? count - 1 : 1);
  };

  // Fetch product details
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/admin/product/get/single/${id}`);
      setProduct(response.data.product);
    } catch (error) {
      console.error("Error fetching product:", error);
      setError("Error loading product");
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (error) {
    return <div>{error}</div>; // Display error if present
  }

  if (!product) {
    return <div>Loading product...</div>; // Show loading state if no product yet
  }

  // Add to Cart function
 
  return (
    <>
      <div className="bg-slate-100 flex py-5 px-8 justify-center max-w-fit mt-8 ms-8">
        <div className="flex">
          <div>
            <img src={product.image} className="h-[370px] px-4 py-4 max-w-[300px]" />
          </div>
          <div>
            <div className="w-[250px] break-words whitespace-normal">
              <h1 className="text-lg mt-12 font-semibold">
                {product.name} with high density (250)
              </h1>
            </div>

            <div className="flex mt-5 text-sm h-4 gap-1 w-4">
              {/* Add relevant icons here */}
            </div>
            <div>
              <p className="mt-4 w-[500px]">{product.description}</p>
              <p className="text-xl mt-4 font-semibold whitespace-normal break-words w-[350px]">
                {product.category}: Meclay London | More Hair Care From Meclay London
              </p>
              <h1 className="mt-4 text-xl text-orange-500">{product.price}</h1>
              <hr />
            </div>
            <div className="flex items-center mt-8 gap-4 justify-center">
              <button onClick={decrease} className="bg-blue-100 px-3 py-1 rounded text-lg hover:bg-blue-300">
                -
              </button>
              <h1 className="text-xl font-semibold">{count}</h1>
              <button onClick={increase} className="bg-blue-100 px-3 py-1 rounded text-lg hover:bg-blue-300">
                +
              </button>
            </div>
            <div className="flex justify-center mt-8">
              <button  className="bg-orange-500 py-2 px-5 rounded-md items-center hover:bg-orange-800">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </>
  );
};

export default ProductDescription;
