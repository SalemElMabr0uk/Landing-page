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
    <nav >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center h-8">
            <Image
              src="/sqilco.svg"
              alt="Sqilco-logo"
              width={74}
              height={29}
            />
          </Link>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button className="text-white focus:outline-none" onClick={toggleDropdown}>
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
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/entrepreneur" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md font-medium">
              For entrepreneurs
            </Link>
            <Link href="/Register" className="nav-link flex space-x-5 p-3 sm:pr-5" aria-current="page">
              <p style={{ color: 'white', fontWeight: 'bold' }}>Register</p>
            </Link>
            <Link href="/Login" className="nav-link flex space-x-4" aria-current="page">
              <Button type="button" title="Login" variant="btn_pink_orange" />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isDropdownOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/entrepreneur" className="block px-3 py-2 rounded-md text-white hover:bg-gray-700">For entrepreneurs</Link>
              <Link href="/Register" className="nav-link flex space-x-5 p-3 sm:pr-5" aria-current="page">
                <p style={{ color: 'white', fontWeight: 'bold' }}>Register</p>
              </Link>
              <Link href="/Login" className="nav-link flex space-x-4" aria-current="page">
                <Button type="button" title="Login" variant="btn_pink_orange" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
