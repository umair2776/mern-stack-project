import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaPlusCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
const Navbar = () => {

  return (
    <>
   <nav>
    <div className=' bg-pink-400 max-w-screen-2xl'>
        <div className='container mx-auto '>
            <div className='text-white flex justify-between py-5'>
                <div>
                    <h1 className='text-xl font-bold'>ApniShop</h1>
                </div>
           <div>
            <marquee behavior="scroll" direction="left">
            Use code ‘freedelivery' at checkout to get free delivery on prepaid orders.
            </marquee>
           </div>
               
<p className='font-semibold text-xl'>
    +921 34567987
</p>
            </div>
        </div>
    </div>
   </nav>
      
   <div className='bg-black flex items-center justify-between py-2 text-white mt-2'>
    <div>

    </div>
                    <ul className='flex gap-8 font-bold'>
                        <li>
                            <Link to={"/"}>
                            Home
                            </Link>
                        </li>
                        
                        <li>
                        <Link to={"/cosmatics"}>
                            Cosmatics
                        </Link>

                        </li>
                        <li>
                            <Link to={'/all'}>
                            All Product
                            </Link>
                        </li>
                        <li>
                            <Link to={'/contact'}>
                            Contact
                            </Link>
                        </li>
                    </ul>
                    <div className='flex text-2xl  gap-4 py-2 me-6'>
                <FaCartPlus />
                <Link to="/signup">
  <FaRegUser />
</Link>
<Link to="/dashboard">
  <FaPlusCircle size={30} color="green" />
</Link>



                </div>
                </div>
  

 </>


  )
}

export default Navbar
