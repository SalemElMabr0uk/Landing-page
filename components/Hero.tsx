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
      <section className='max-container  flex flex-col   lg:py-10 md:flex-row'>
        {/* Mobile: Image at the Top */}
        <div className='justify-center flex h-[30%] flex-1 md:hidden'>
          <div className='    gap-8 rounded-3xl px-6  '>
            <Image
              src={hero}
              alt="map"
              width={450}
              height={450}
            />
          </div>  
        </div>

        {/* LEFT */}
        <div className=' flex flex-1 m-4  sm:m-8'>
          <div className=' font-semibold flex-row gap-8 rounded-3xl lg:px-6 sm:flex-row'>
            <h1 className='md:text-4xl lg:bold-80 text-white p-2 text-3xl sm:text-bold'>
              <span>Get free </span>
              <span className="text-pink-10 ">Learning Resources </span>
              <span>Work on</span>
              <span className="text-orange-10"> Real Projects</span>
            </h1>

            
            <div className='text-wrap flex gap-2 md:justify-between'>

<div className="flex flex-col max-w-[50%]  justify-center md:flex-1 md:space-x-40 space-y-8 md:space-y-0 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-90">
  <div className='items-center text-center min-h-[200px] flex justify-center md:items-start flex-col min-w-full md:min-w-[100%] md:text-left md:h-full'>
    <img src='/icon_project.png' alt='Project Icon' className='w-20 min-h-[30%] mx-auto md:mx-0 object-contain' />
    <p className="text-[#A3A3A3] josefin-sans-font leading-tight md:leading-normal lg:p-2  md:text-left lg:text-lg text-wrap justify-center text-center  min-h-[50%] sm:p-4 sm:text-sm">
      Work on <span className="text-[#FB8971]">real projects</span> at{' '}
      <span className="text-[#FE8ECE] inline-flex">real companies</span> <span>, get</span> <span className='inline-flex'>mentorship along the way</span>
    </p>
    <div className='flex justify-center md:justify-start'> {/* New div for button alignment */}
      <Link href='/project' className='flex gap-8  sm:flex-row '>
        <Button type='button' title='Go to Projects' variant='btn_pink_orange'  />
      </Link>
    </div>
  </div>
</div>

<div className="flex flex-col max-w-[50%] justify-center md:flex-1 md:space-x-40 space-y-8 md:space-y-0 transition-all  ease-in duration-75 rounded-md group-hover:bg-opacity-90">
<div className='items-center text-center min-h-[200px] flex justify-center md:items-start flex-col min-w-full md:min-w-[100%] md:text-left md:h-full'>
    <img src='/icon_roadmap.png' alt='Roadmap Icon' className='w-20 min-h-[30%] mx-auto md:mx-0 object-contain ' />
    <p className="text-[#A3A3A3] josefin-sans-font leading-tight md:leading-normal lg:p-2  md:text-left lg:text-lg text-wrap justify-center text-center  min-h-[50%] sm:p-4 sm:text-sm">
      <span className='inline-flex'>Get up-to-date ready </span> <span className='inline-flex'> made </span><span className="text-[#FE8ECE]"> roadmaps</span> to{' '}
      <span className="text-[#FB8971]">streamline</span> <span>your learning  journey</span>
    </p>
    <div className='flex justify-center md:justify-start'> {/* New div for button alignment */}
      <Link href='/roadmap' className='flex gap-4  sm:flex-row items-start'>
        <Button type='button' title='See Roadmaps' variant='btn_pink_orange' />
      </Link>
    </div>
  </div>
</div>
</div>



          </div>


        </div>


        {/* Desktop: Image on the Right */}
        <div className='  flex-1 flex-col  hidden md:flex items-center justify-center'>
          <div className='   flex-col gap-8 rounded-3xl px-6  '>
            <Image
              src={hero}
              alt="map"
              className='w-full h-full'
            />
          </div>
        </div>
      </section>

      <div >
        <div className="flex justify-around md:justify-center items-stretch flex-wrap gap:2 md:gap-4 pb-14 ">
          {items.slice(0.3).map((item, index) => (
            <Card key={index} title={item.title} count={item.count} icon={item.icon} />
          ))}
        </div>
      </div>

    </>
  );
};

export default Hero;
