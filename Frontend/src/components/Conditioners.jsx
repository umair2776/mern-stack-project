import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "./Loader";
// import Loader from "../components/Loader";

const Conditioners = () => {
  const [product, setProduct] = useState([]); 
  const [loader,setLoader]=useState(false);

  const fetchData = async () => {
    setLoader(true)
    const response = await axios.get(
      "http://localhost:3000/api/admin/product/get?category=conditioner"
    );
    console.log(response.data);
    setProduct(response.data.product.slice(0, 4));
    setLoader(false)
  };

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <>
    {
      loader ? <Loader/> : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-4 md:px-8">
        {product.map((product, index) => (
          <Link to={`/product/${product._id}`} key={index}>
            <div className="bg-white w-full hover:shadow-xl rounded-lg p-4 transition-transform duration-300 transform hover:scale-105">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  className="h-48 w-full object-cover rounded-lg"
                  alt={product.name}
                />
              </div>
              <div className="mt-4 text-center">
                <h1 className="text-lg font-semibold">{product.name}</h1>
                <p className="text-pink-400 text-sm truncate">{product.description}</p>
                <h1 className="text-sm font-bold mt-2">Rs. {product.price}</h1>
                <p className="text-gray-500 text-sm">{product.rating} ⭐</p>
                <p className="text-gray-400 text-xs">{product.category}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      )
    }
       
    </>

  );
};

export default Conditioners;
