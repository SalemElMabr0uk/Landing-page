"use client"
{/**forum  section*/ }
import React, { useState, useEffect } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Button from '../Button';

const Section8 = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(formData); // You can handle form submission logic here
  };

  return (
    <>
      <div className='p-8 pt-16'>

        <div className='p-8'>

          <span className='text-4xl  font-[450] text-white text-center md:text-left'>  Confused About  </span><span className="text_color_variation sm:text-4xl sm:font-[600] text-4xl font-[450] "> Career Choices?</span>
          <h2 className='text-[#A3A3A3] text-2xl '>Talk to Our Industry Experts</h2>
        </div>


        <div className="flex justify-center items-center">

        <div className=" p-8  w-[50%] ">
              <img
                src="./forums.png"
                alt="Placeholder"
                className="w-full h-full object-cover"
              />
            </div>

          <div className="flex flex-row w-[50%] max-w-4xl">
            <div className="w-[80%] p-4 ">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/**name input */}
                <div className="flex flex-col p-2">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Name'
                    className="p-2 bg-[#1F1F3B] border-gray-600 border-2  text-white rounded-lg"
                  />
                </div>
                {/**phone input */}
                <div className="flex flex-col ">
                  <div className="flex items-center  text-[#A3A3A3]  ">
                    <select
                      name="countryCode"
                      id="countryCode"
                      className=" text-[#A3A3A3] bg-[#1F1F3B] border-gray-600  rounded-lg p-2 m-2"
                      onChange={handleChange}
                    >

                      <option value="+1" className='text-[#A3A3A3] bg-[#1F1F3B] border-gray-600  rounded-lg p-2 m-2'>+1 </option>
                      <option value="+91" className='text-[#A3A3A3] bg-[#1F1F3B] border-gray-600  rounded-lg p-2 m-2'>+91 </option>
                      <option value="+216" className='text-[#A3A3A3] bg-[#1F1F3B] border-gray-600  rounded-lg p-2 m-2'>+216 </option>
                  
                    </select>

                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      className="border  bg-[#1F1F3B] border-gray-600 rounded-lg  p-2 flex-1"
                    />
                  </div>
                </div>
                {/**email input */}


                <div className="flex flex-col p-2">
                
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Email ID'
                    className="border bg-[#1F1F3B] border-gray-600  rounded-lg p-2"
                  />
                </div>


                <div className="flex justify-center p-8">
                  <Button type="button" title="Submit Details" variant="btn_pink_orange" />
                </div>
              </form>
            </div>

           
          </div>
        </div>

      </div>
    </>
  );
};

export default Section8;
