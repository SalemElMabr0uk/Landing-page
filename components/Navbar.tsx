"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center h-8 p-2">
            <Image
              src="/sqilco.svg"
              alt="Sqilco-logo"
              width={74}
              height={29}
            />
          </Link>
          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button className="text-white focus:outline-none" title='menu button' onClick={toggleDropdown}>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>



          {/* Links */}
          <div className='hidden md:flex justify-start md:items-center flex-grow p-6'>
            <Link href="/roadmap" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md font-medium">
              Roadmaps
            </Link>
            <Link href="/#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md font-medium">
              Projects
            </Link>
            <Link href="/#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md font-medium">
              About Us
            </Link>
          </div>

          {/* Buttons */}
          <div className=' items-center hidden md:flex '>
            <Link href='/entrepreneur' className='text-[#FB8971] p-8 text-sm '>Hire Talent from us {'>'}</Link>
            <Link href="/Register" prefetch={false} className="nav-link md:flex space-x-4 items-center mt-2 p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#FF8ED0] to-[#FB8971] hover:text-white dark:text-white focus:ring-4 focus:outline-none">
              <span className="nav-link flex space-x-4 px-6 py-3 text-bold transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Sign up
              </span>
            </Link>
            <Link href="/Login" className="nav-link flex space-x-4 p-2" aria-current="page">
              <Button type="button" title="Login" variant="btn_pink_orange" />
            </Link>
          </div>

        </div>

        {/* Mobile Menu Dropdown */}
        {isDropdownOpen && (
          <div className="md:hidden justify-center flex bg-[#232336]  rounded-md">
            <div className="grid place-items-center ">
              <div >

                <div className='flex'>
                  <Link href="/entrepreneur" className="block p-2  rounded-md text-white hover:bg-gray-700"> Roadmaps</Link>
                </div>
                <div className='flex'>
                  <Link href="/#" className="block p-2 rounded-md text-white hover:bg-gray-700"> Projects</Link>
                </div>
                <div className='flex'>
                  <Link href="/#" className="block p-2 text-center rounded-md text-white hover:bg-gray-700">About us</Link>
                </div>
              </div>

              <div  >
                
                <div className='grid place-items-center '>
                <Link href='/entrepreneur' className='text-[#FB8971]  p-4 text-sm flex text-center'>Hire Talent from us {'>'}</Link>
                <Link href="/Login" className="nav-link flex space-x-2 p-4 " aria-current="page">
                  <Button type="button" title="Login" variant="btn_pink_orange" />
                </Link>
                </div>

              <div className='grid place-items-center '>
                <Link href="/Register" prefetch={false} className=" w-[60%] flex items-center mt-2 p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#FF8ED0] to-[#FB8971] hover:text-white dark:text-white focus:ring-4 focus:outline-none">
                  <span className=" flex  py-2 justify-center w-full text-bold transition-all ease-in duration-75  bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Sign up
                  </span>
                </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
