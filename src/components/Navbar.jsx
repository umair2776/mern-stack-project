import React, { useState } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaPlusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {/* Top Bar */}
      <nav className='relative'>
        <div className='bg-pink-400 max-w-screen-2xl'>
          <div className='container mx-auto'>
            <div className='text-white flex justify-between py-5'>
              <div>
                <h1 className='text-xl font-bold'>ApniShop</h1>
              </div>
              <div className='w-full max-w-lg mx-4'>
                <marquee behavior="scroll" direction="left">
                  Use code ‘freedelivery' at checkout to get free delivery on prepaid orders.
                </marquee>
              </div>
              <p className='font-semibold text-xl'>+921 34567987</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Nav */}
      <div className='bg-black mt-2 text-white'>
        <div className='flex items-center justify-between py-3 px-4'>
          {/* Desktop Menu */}
          <div className='hidden md:flex gap-8'>
            <ul className='flex gap-8 font-bold'>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cosmatics">Cosmatics</Link>
              </li>
              <li>
                <Link to="/all">All Product</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Mobile Toggle */}
          <div className='md:hidden'>
            {showMenu ? (
              <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer" size={30} />
            ) : (
              <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer" size={30} />
            )}
          </div>

          {/* Icons */}
          <div className='flex text-2xl gap-4'>
            <FaCartPlus />
            <Link to="/signup">
              <FaRegUser />
            </Link>
            <Link to="/dashboard">
              <FaPlusCircle size={30} color="green" />
            </Link>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {showMenu && (
          <div className="md:hidden bg-white text-black w-full absolute left-0 shadow-md z-50">
            <ul className="flex flex-col gap-4 px-6 py-4 font-bold">
              <li>
                <Link to="/" onClick={toggleMenu}>Home</Link>
              </li>
              <li>
                <Link to="/cosmatics" onClick={toggleMenu}>Cosmatics</Link>
              </li>
              <li>
                <Link to="/all" onClick={toggleMenu}>All Product</Link>
              </li>
              <li>
                <Link to="/contact" onClick={toggleMenu}>Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;

