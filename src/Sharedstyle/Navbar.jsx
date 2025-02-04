import React from 'react';
import { RiDownloadCloud2Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import resume from '../../src/assets/SADIA AFRIN MIM cv.pdf'

const Navbar = () => {
  const navItems = (
    <>
      <li className='bg-purple-600 text-white rounded-full'><a href='#home' >Home</a></li>            
   <li  className='bg-purple-600 text-white rounded-full'><a  href='#about'>About</a></li>
   <li  className='bg-purple-600 text-white rounded-full'><a href='#skills'>Skills</a></li>
   <li  className='bg-purple-600 text-white rounded-full'><a href='#project'>Projects</a></li>
   <li  className='bg-purple-600 text-white rounded-full'><a href='#education'>Education</a></li>
   <li  className='bg-purple-600 text-white rounded-full'><a href='#contact'>Contact</a></li>
    </>
  );

  return (
    <header className="shadow-md bg-white sticky top-0 z-50">
      <nav className="navbar bg-base-100 font-bold">
        {/* Left Section: Logo & Dropdown */}
        <div className="navbar-start">
          {/* Dropdown for small screens */}
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              aria-label="Open navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 space-y-2 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          {/* Logo */}
          <a href="/" className="btn btn-ghost text-2xl font-extrabold text-purple-600">
          <img className='w-12 rounded-md' src="https://i.ibb.co.com/hsSdkVM/Screenshot-122.png" alt="" srcset="" />
           SAM
          </a>
        </div>

        {/* Right Section: Navigation & Toggle */}
        
        <div className="navbar-center">
          {/* Navigation for larger screens */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal space-x-4">{navItems}</ul>
          </div>

         
         
        </div>
        <div className='navbar-end'>
           <a href={resume} download=''>
          <button className='border items-center justify-center gap-2 inline-flex border-purple-700 text-purple-700 py-1 rounded-full px-4 '>Resume <RiDownloadCloud2Line className='text-2xl' /></button>
          </a>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
