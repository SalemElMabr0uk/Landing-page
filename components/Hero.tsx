import Image from 'next/image';
import React from 'react';
import Button from './Button';
import hero from '../public/hero.png';
import Link from 'next/link';
import "../app/globals.css";
import Card from './(cards)/grayherocard'; // Adjust the import path as per your directory structure

const Hero = () => {
  const items = [
    { title: 'Students Placed', count: 300, icon: '/student.png' },
    { title: 'Topics Covered', count: 6, icon: '/topic.png' },
    { title: 'Available Resources', count: 500, icon: '/resource.png' },
  ];
  return (
    <>
      {/**hero page */}
      <section className='max-container padding-container flex flex-col md:gap-28 lg:py-20 xl:flex-row'>
        {/* Mobile: Image at the Top */}
        <div className='relative z-60 flex h-20 flex-1 flex-col xl:w-1/4 md:hidden'>
          <div className='relative z-40  flex-col gap-8 rounded-3xl px-6  '>
            <Image
              src={hero}
              alt="map"
              width={450}
              height={450}
            />
          </div>
        </div>

        {/* LEFT */}
        <div className='relative flex flex-1  sm:m-8'>
          <div className='relative z-40 flex-row gap-8 rounded-3xl lg:px-6 sm:flex-row'>
            <h1 className='lg:text-4xl lg:bold-80 text-white p-2 sm:text-4xl sm:text-bold'>
              <span>Get free </span>
              <span className="text-pink-10 ">Learning Resources </span>
              <span>Work on</span>
              <span className="text-orange-10"> Real Projects</span>
            </h1>

            <div className='text-wrap flex flex-row md:flex-row md:justify-between '>

              <div className="flex flex-col md:flex-row justify-center md:space-x-40 space-y-8 md:space-y-0 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-90">
                <div className='items-center text-center md:text-left'>
                  <img src='/icon_project.png' alt='Project Icon' className='w-20 h-[40%] mx-auto md:mx-0' />
                  <p className="text-[#A3A3A3] lg:p-2  md:text-left lg:text-lg text-wrap justify-center text-center  h-[50%] sm:p-4 sm:text-sm">
                    Work on <span className="text-[#FB8971]">real projects</span> at{' '}
                    <span className="text-[#FE8ECE] inline-flex">real companies</span> <span>, get</span> <span className='inline-flex'>mentorship along the way</span>
                  </p>
                  <Link href='/project' className='flex gap-8  sm:flex-row '>
                    <Button type='button' title='Go to Projects' variant='btn_pink_orange' className='w-[40px] h-[20px]' />
                  </Link>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center md:space-x-40 space-y-8 md:space-y-0 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-90">
                <div className='items-center text-center md:text-left'>
                  <img src='/icon_roadmap.png' alt='Roadmap Icon' className='w-20 h-[40%] mx-auto md:mx-0 ' />
                  <p className="text-[#A3A3A3] lg:p-4   md:text-left  lg:text-lg justify-center text-center lg:text-wrap h-[50%]   sm:text-sm">
                    <span className='inline-flex'>Get up-to-date ready </span> <span className='inline-flex'> made </span><span className="text-[#FE8ECE]"> roadmaps</span> to{' '}
                    <span className="text-[#FB8971]">streamline</span> your<br/> learning  journey
                  </p>
                  <Link href='/roadmap' className='flex gap-4 ml-4 sm:flex-row items-start'>
                    <Button type='button' title='Explore Programs' variant='btn_pink_orange' />
                  </Link>
                </div>
              </div>
            </div>
          </div>


        </div>


        {/* Desktop: Image on the Right */}
        <div className='relative z-60  h-20 flex-1 flex-col xl:w-1/4 hidden md:flex'>
          <div className='relative z-40  flex-col gap-8 rounded-3xl px-6  '>
            <Image
              src={hero}
              alt="map"
              width={450}
              height={450}
            />
          </div>
        </div>
      </section>

      <div >
        <div className="flex justify-center items-stretch flex-wrap gap-4 pb-14 p-8 ">
          {items.slice(0.3).map((item, index) => (
            <Card key={index} title={item.title} count={item.count} icon={item.icon} />
          ))}
        </div>
      </div>

    </>
  );
};

export default Hero;
