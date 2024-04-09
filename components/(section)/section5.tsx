import React from "react"
import Section6 from "./section6";

{/**"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";

interface Mentor {
  _id: string;
  name: string;
  image: string;
  post: string;
  // Add other properties as needed
}

const Section5= () => {
  const [mentors, setMentors] = useState<Mentor[]>([]);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await axios.get("https://api.example.com/mentors");
        setMentors(response.data);
      } catch (error) {
        console.error("Error fetching mentors:", error);
      }
    };

    fetchMentors();
  }, []);

  return (
    <>
      <div className="bg-white">
        <h1 className="p-8 mt-4 justify-start text-3xl font-bold">
        <span className='text-3xl  font-[450]  text-center md:text-left'>Get Mentored  </span><span className="text_color_variation sm:text-3xl sm:font-[600] text-3xl font-[450] "> By the Best</span> 

        </h1>

        <div className="p-6 m-2 rounded-md">
          <div className="flex flex-nowrap justify-start w-screen overflow-x-auto hide-scrollbar overflow-hidden">
            {mentors.map((mentor) => (
              <div
                key={mentor._id}
                className="sm:w-1/2 md:w-1/3 lg:w-1/4 flex-none h-[300px] m-6 shadow-md bg-white bg-opacity-40 rounded-lg p-1 dev transform transition-transform hover:ring-2 hover:ring-[#FF8ED0]"
              >
                <div className="h-[60%]">
                  <img
                    src={mentor.image}
                    className="flex h-full object-cover rounded"
                    alt={mentor.name}
                  />
                </div>
                <h2 className="">jaweher </h2>
                <h2 className="flex text-2xl justify-center font-semibold text-center h-[10%]">{mentor.name}</h2>
                <p className="flex text-[#CBD5E1] text-sm h-[10%] justify-center">{mentor.post} </p>

                <div className="flex justify-center gap-2">
                  <span className=" [&>svg]:h-5 [&>svg]:w-5 flex p-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" fill="#FB8971" />
                    </svg>
                  </span>

                  <span className=" [&>svg]:h-5 [&>svg]:w-5 flex p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" fill="#FB8971" />
                    </svg>
                  </span>
                  <span className=" [&>svg]:h-5 [&>svg]:w-5 flex p-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" fill="#FB8971" />
                    </svg>
                  </span>
                  <span className=" [&>svg]:h-5 [&>svg]:w-5 flex p-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" fill="#FB8971" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
 */}
const Section5 = () => {
  return (
    <>
      <div className="bg-white ">
        {/** meet our mentors*/}
     
        <div className="p-6 pb-0">
                    <span className='text-4xl  font-[450]  text-center md:text-left'>  Get Mentored By </span>
                    <span className="text_color_variation sm:text-4xl sm:font-[600] text-4xl font-[450] ">The Best </span>
                  
                </div>

        <div className="p-6 m-2 rounded-md ">
          <div className="flex flex-nowrap justify-start w-screen overflow-x-auto hide-scrollbar overflow-hidden  ">

            <div className="h-[400px] sm:w-1/2 md:w-1/3 lg:w-1/6 flex-none   m-6 shadow-md bg-white bg-opacity-40 rounded-lg  p-1 dev transform transition-transform hover:ring-2 hover:ring-[#FF8ED0] ">
              <div className='h-[60%] '> <img src={'https://media.istockphoto.com/id/940475680/photo/close-up-portrait-of-cheerful-brunet-young-man-in-jeans-shirt-crossing-hands-and-look-at.jpg?s=612x612&w=0&k=20&c=FFduZf0U7qxwIfkrzAPHXgxK2LoZf86i74rFtex6cLw='} className=" flex h-full object-cover rounded" /></div>
              <h2 className="flex text-2xl justify-center font-semibold text-center   h-[10%]">Name</h2>
              <p className='flex text-[#CBD5E1] text-sm h-[10%] justify-center'>Post</p>


              <div className=' flex justify-center'>
                <span className=" [&>svg]:h-5 [&>svg]:w-5 flex p-2 ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" fill="#FB8971" /></svg>

                </span>

                <span className=" [&>svg]:h-5 [&>svg]:w-5 flex p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" fill="#FB8971" /></svg>
                </span>
                <span className=" [&>svg]:h-5 [&>svg]:w-5 flex p-2 ">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" fill="#FB8971" /></svg>
                </span>
                <span className=" [&>svg]:h-5 [&>svg]:w-5 flex p-2 ">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" fill="#FB8971" /></svg>
                </span>

              </div>


            </div>

          </div>
        </div>
        <Section6/>
      </div>
    </>

  );
};

export default Section5;