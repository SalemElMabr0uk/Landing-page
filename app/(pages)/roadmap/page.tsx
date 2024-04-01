
"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';


interface roadmap {
  _id: string;
  id: number;
  title: string;
  image: string;
  videoUrl: string;
  rating: number;
  techStack: {
    title: string;
    image: string; // This can be a URL pointing to the image for the tech stack
    _id: string;
  }[];
  weekWiseDetails: {
    weekNumber: number;
    title: string;
    description: string;
    _id: string;
  }[];
  pageContent: {
    duration: string;
    mainLine: string;
    points: string[];
  };
}

const roadmap: React.FC = () => {
  const [randomIndex, setRandomIndex] = useState<number | null>(null);
  const [roadmaps, setRoadmaps] = useState<roadmap[]>([]);  
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchRoadmaps = async () => {
      try {
        const response = await axios.get('https://api.sqilco.com/api/roadmaps'); 
        console.log(response.data.data);
          setRoadmaps(response.data.data); 
       
      
      } catch (error) {
        console.error('Error fetching roadmaps:', error);
      }
    };

    fetchRoadmaps();
  }, []);


  useEffect(() => {
    const selectRandomRoadmap = () => {
      if (roadmaps.length > 0) {
        const index = Math.floor(Math.random() * roadmaps.length);
        setRandomIndex(index);
      }
    };
    selectRandomRoadmap();
  }, [roadmaps]);


  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i}>
          <img src={i < rating ? "/star-16.png" : "/star-17.png"} alt="star" />
        </span>
      );
    }
    return stars;
  };

  return (
    <>
    <div className='grid p-5 m-5'>
      <h1 className='bg-gradient-to-r text-4xl md:text-6xl text-center font-bold from-pink-300 via-orange-500 to-pink-200 inline-block text-transparent bg-clip-text'>
        WELCOME WITH ROADMAPS
      </h1>
      <h3 className='text-white  text-center p-4 m-4'>With Roadmap you can be precise with your journey.</h3>
    </div>
    <div className='flex justify-center'>
      <button onClick={() => setIsDialogOpen(true)} className="text-white bg-gradient-to-br from-[#312E81] to-[#A5B4FC] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pin font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2">
        How Roadmap Helps
      </button>
    </div>
    {/** in dialog  */}
   {/* Video dialog */}
   {isDialogOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
        <div className="bg-white p-6 mt-6 rounded-lg shadow-lg w-200 md:w-800">
          <video autoPlay controls className="w-90 ">
            <source src={"https://www.youtube.com/watch?v=66tfvFeALBQ&t=22s"} type="video/mp4" />
         
          </video>
        
          <button onClick={() => setIsDialogOpen(false)} className="flex  text-white bg-gradient-to-br from-[#312E81] to-[#A5B4FC] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none font-medium rounded-lg text-sm p-2 m-2 text-center">
            Close Dialog
          </button>
        </div>
      </div>
    )}
    {/* Random choices  when the component mounts or updates*/}
    {randomIndex !== null && roadmaps.length > 0 && (
        <div className="flex flex-col md:flex-row overflow-hidden shadow-md">
          <div className="md:w-1/2 bg-gradient-to-br p-6">
         
            <h2 className="text-xl md:text-3xl font-semibold p-2 m-6 text-white">{roadmaps[randomIndex].title}</h2>
            <div className='flex p-2 m-6 space-x-1'>{renderStars(roadmaps[randomIndex].rating)}</div>
            <h1 className='flex p-2 ml-6 text-[#CBD5E1] text-sm md:text-base'>{roadmaps[randomIndex].pageContent.mainLine}</h1>
            <Link href={`/roadmap/${roadmaps[randomIndex]._id}`} prefetch={false} className="ml-12 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#312e81] to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Know more
              </span>
            </Link>
          </div>
          <div className="md:w-1/2">
            <Link href={`/roadmap/${roadmaps[randomIndex]._id}`} prefetch={false}>
              <div>
                <video controls className="w-full md:w-400 h-450">
                  <source src={roadmaps[randomIndex].videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Link>
          </div>
        </div>
      )}
      {/* Render other parts of your component using the roadmaps data */}
      <div className="p-6 m-2 rounded-md">
        <div className="flex flex-nowrap justify-start w-screen overflow-x-auto hide-scrollbar  hover:shadow-lg overflow-hidden ">
          {roadmaps.map((item, index) => (
            <div key={index} className=" w-[90%] sm:w-1/2 md:w-1/3 lg:w-1/4 flex-none h-[500px]  m-6  bg-[#D8B4FE] bg-opacity-20 rounded-lg  p-1 dev transform transition-transform hover:ring-2 hover:ring-[#FF8ED0] shadow-sm">
              <div className='h-[30%]'> <img src={item.image} alt={`${item.title} image`} className=" flex w-full h-full object-cover rounded" /></div>
              <div className='space-x-1 flex ml-6 p-2'>{renderStars(item.rating)}</div>
              <h2 className="text-2xl  text-white font-semibold text-center mt-2 p-2 h-[15%]">{item.title}</h2>
              <p className='text-[#CBD5E1] text-sm h-[20%] p-4'> {item.pageContent.mainLine}</p>
              <Link href={`/roadmap/${item._id}`} className='inline-flex items-center px-3 h-[40%] text-sm font-medium text-center text-[#FB8971]'>
                View more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
  </>
  );
};

export default roadmap;