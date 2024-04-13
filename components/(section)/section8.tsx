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
    console.log(formData);
  };

  return (
    <>
      <div className='p-8 pt-16 pb-3'>

        <div className='p-4'>

          <span className='text-4xl  font-[450] text-white text-center md:text-left'>  Confused About  </span><span className="text_color_variation sm:text-4xl sm:font-[600] text-4xl font-[450] "> Career Choices?</span>
          <h2 className='text-[#A3A3A3] md:text-2xl text-lg '>Talk to Our Industry Experts</h2>
        </div>

        <div className=" text-white ">
          <div className=" mx-auto px-4 py-12">
            <div className="flex flex-wrap items-center -mx-4">

              <div className="lg:block lg:w-1/2  mb-8 lg:mb-0">
                <img
                  src="./forums.png"
                  alt="Placeholder"
                  className="w-full h-full object-cover"
                />      
              </div>

              <div className="w-full lg:w-1/2 px-4">
                <div className="max-w-md mx-auto">
                  <div className=" ">
                    <form>
                      {/**name input */}
                      <div className="mb-4">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder='Name'
                          className="w-full bg-[#1F1F3B] border-gray-600 border-2  text-white rounded-lg p-3  focus:ring-2 focus:ring-purple-100 focus:outline-none"
                        />
                      </div>
                      {/**select phone */}
                      <div className="mb-4 flex gap-4">
                     
                          <select name="countryCode" id="countryCode" title='country' className="w-[35%] border  bg-[#1F1F3B] border-gray-600 rounded-lg p-2  focus:ring-2 focus:ring-purple-100 focus:outline-none">

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
                          placeholder="Phone Number"
                          className=" w-full border  bg-[#1F1F3B] border-gray-600 rounded-lg p-2  focus:ring-2 focus:ring-purple-100 focus:outline-none"
                        />
                      </div>
                      {/**email input */}
                      <div className='mb-6'>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder='Email ID'
                          className=" w-full border bg-[#1F1F3B] border-gray-600  p-3 rounded-md focus:ring-2 focus:ring-purple-100 focus:outline-none" />

                      </div>


                      <div className="flex justify-center p-2">
                        <Button type="button" title="Submit Details" variant="btn_pink_orange" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Section8;
