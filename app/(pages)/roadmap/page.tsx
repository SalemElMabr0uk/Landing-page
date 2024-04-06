
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
      <div className='grid p-16'>
        <h1 className='text-white flex justify-center text-6xl font-bold'>Curated Paths for you to</h1>
        <span className=' text-6xl md:text-3xl p-4 text-center font-bold bg-gradient-to-l from-pink-200 via-orange-500 to-pink-400 inline-block text-transparent bg-clip-text'>Follow and Learn</span>
        <div className='flex justify-center'>
          <p className=' text-white text-sm'>
            <span className=' flex justify-center'>Best resources sourced from all over the internet,</span>
            <span className=' flex justify-center'>so you don't have to spend time finding and</span>
            <span className=' flex justify-center'>planning your learning journey.</span>
          </p>
        </div>
      </div>


      {/* Render other parts of your component using the roadmaps data */}
      <div className="rounded-md bg-white ">
        <h2 className='text-3xl flex p-4 justify-center font-bold m-4 '>Start Learning</h2>
       
        <div className="rounded-md bg-white flex flex-wrap justify-center  ">
          {roadmaps.map((item, index) => (
            <div key={index} className="w-80 m-8 bg-[#9ca3af] bg-opacity-10 rounded-lg p-2 shadow-md transform transition-transform hover:ring-2 hover:ring-[#66686b] overflow-hidden">
              <h2 className="text-2xl text-[#162E4F] font-semibold text-center mt-2 p-2">{item.title}</h2>
             
              <div className='p-4 overflow-hidden justify-center flex '>
              <h1 className='text-[#FB8971] text-xs ml-8'>{item.pageContent.duration}</h1>
                <Link href={`/roadmap/${item._id}`} className='inline-flex items-center px-3 text-xs font-medium  text-[#FB8971] ml-8'>
                  View Details
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=''>
        <span className='text-white text-4xl justify-center '>Why </span> 
        <span className='text-4xl p-2 bg-gradient-to-l from-pink-200 via-orange-500 to-pink-400 inline-block text-transparent bg-clip-text'>Roadmaps?</span>
      </div>





    </>
  );
};

export default roadmap;