"use client"
import React, { useState, useEffect } from 'react';
import roadmap from '../page';
import Button from '@/components/Button';
import Link from 'next/link';
import { SOCIALS } from '@/constant';
import Image from 'next/image'





const DetailPage: React.FC<any> = ({ id }) => {

  const [roadmap, setRoadmap] = useState<roadmap | null>(null);
  console.log(id)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.sqilco.com/api/roadmaps/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data)
        setRoadmap(data.data); // Assuming API response matches Choice interface
      } catch (error) {
        console.error('Error fetching data:', error);
        setRoadmap(null);
      }
    };

    fetchData();
  }, [id]);

  if (!roadmap) {
    return <div>Choice not found</div>;
  }


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
      <div className='bg-[#151523]'>

        <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 gap-4 p-2 ">
          <div className="justify-center pt-8 md:ml-24 ">
            {/** description  */}
            <div className='space-x-1 flex ml-6 p-4 justify-start '>{renderStars(roadmap.rating)}</div>

            <h1 className="font-bold lg:text-5xl text-white p-2 ">
              <span className=" m-4 p-4 "> {roadmap.title} </span>
            </h1>
            <p className="text-lg mb-4 p-4 justify-start">{roadmap.pageContent.mainLine}</p>
            <div className='flex justify-between mb-4 p-4 text-[#FB8971] font-bold  relative'>{roadmap.pageContent.duration}
              <Link href="/Modulepage" aria-current="page">
                <Button type="button" title="Get started" variant="btn_pink_orange" />
              </Link>
            </div>
          </div>

          {/** image  */}
          <div className=" items-start hidden md:block ">
            <div className="h-full w-full relative z-20 p-8 flex-col ">
              <img src={roadmap.image} alt={`${roadmap.title} image`} className="w-full h-full object-cover mb-2 rounded data-twe-animation-delay" />
            </div>
          </div>

          {/** learn more  */}
          <div className=' flex justify-start'>
            <h1 className=" text-3xl  font-bold">
              What you’ll <span className="text-pink-10 text-3xl">Learn</span>{' '}
            </h1>
            <div className='flex justify-start mt-4 p-8'>
              <ul className="list-disc list-inside text-lg">
                {roadmap.pageContent.points.slice(0, 3).map((point, index) => (
                  <li className="flex items-center mb-2" key={index}>
                    <svg className="w-4 h-4 me-2 text-green-500 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>


          </div>
        </div>

        {/** course Modules */}
        <div className='bg-white'>
          <h1 className=" p-8 mt-4 justify-start text-3xl text-[#151523] font-bold ">
            Course <span className="text-[#FF8ED0] text-3xl">Modules</span >{' '}
          </h1>
          <ul className="my-4 p-8 space-y-3">
            <li>
              <Link href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-white">
                <img src={roadmap.image} alt={`${roadmap.title} image`} className='h-20 w-20' />
                <span className="flex-1 ms-3 whitespace-nowrap text-black-30">get data from weekWiseDetails</span>
                <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium ">
                  <svg className="w-2 h-4 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                  </svg>
                </span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-white">
                <img src={roadmap.image} alt={`${roadmap.title} image`} className='h-20 w-20' />
                <span className="flex-1 ms-3 whitespace-nowrap text-black-30">get data from weekWiseDetails</span>
                <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium ">
                  <svg className="w-2 h-4 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                  </svg>
                </span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-white">
                <img src={roadmap.image} alt={`${roadmap.title} image`} className='h-20 w-20' />
                <span className="flex-1 ms-3 whitespace-nowrap text-black-30">get data from weekWiseDetails</span>
                <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium ">
                  <svg className="w-2 h-4 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                  </svg>
                </span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-white">
                <img src={roadmap.image} alt={`${roadmap.title} image`} className='h-20 w-20' />
                <span className="flex-1 ms-3 whitespace-nowrap text-black-30">get data from weekWiseDetails</span>
                <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium ">
                  <svg className="w-2 h-4 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                  </svg>
                </span>
              </Link>
            </li>
          </ul>
        </div>

      

      </div>
    </>
  );
};

export default DetailPage;
