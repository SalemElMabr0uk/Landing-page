import Image from 'next/image';
import React from 'react';
import Button from './Button';
import hero from '../public/hero.png';
import Link from 'next/link';
import "../app/globals.css";

const Hero = () => {
    return (
        <>
            {/**hero page */}
            <section className='max-container padding-container flex flex-col  justify-center md:gap-28 lg:py-20 xl:flex-row'>
        

                <div className='relative z-60 flex h-20 flex-1 flex-col xl:w-1/4'>
                    <h1 className='bold-4 text-4xl 0 lg:bold-30 text-white p-2 '>
                        <span>Get free </span><span className="text-pink-10">Learning Resources </span><span>Work on</span> <span className="text-orange-10"> Real Projects</span>
                    </h1>
                    <div className='container text-wrap flex flex-col md:flex-row md:justify-between'>
                        <div className=' flex-col gap-2 md:flex justify-start'>
                            <img src='/icon_project.png' alt='Project Icon' width={90} height={90} />
                            <p className="text-[#A3A3A3] p-2">
                                Work on <span className="text-[#FB8971]">real projects</span> at{' '}
                                <span className="text-[#FE8ECE] inline-flex">real companies</span> <span> , get</span> <span className='inline-flex'>mentorship along the way</span>
                            </p>
                            <Link href='/project' className='flex w-full gap-3 ml-4 sm:flex-row'>
                                <Button type='button' title='Go to Projects' variant='btn_pink_orange' />
                            </Link>
                        </div>

                        <div className='inline-flex flex-col gap-2 md:flex'>
                            <img src='/icon_roadmap.png' alt='Roadmap Icon' width={90} height={90}  />
                            <p className="text-[#A3A3A3] p-2">
                                <span className='inline-flex'>Get up-to-date ready </span> <span className='inline-flex'> made </span><span className="text-[#FE8ECE]"> roadmaps</span> to{' '}
                                <span className="text-[#FB8971]">streamline</span> your learning journey
                            </p>

                            <Link href='/roadmap' className='flex w-full gap-3 ml-4 sm:flex-row'>
                                <Button type='button' title='Explore Programs' variant='btn_pink_orange' />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className='relative flex flex-1 items-start'>
                    <div className=' relative z-20  flex-col gap-8 rounded-3xl px-6  '>
                        <Image
                            src={hero}
                            alt="map"
                            width={450}
                            height={450}
                        />
                    </div>
                </div>
            </section>

            {/* Gray background divs */}
            <div className=" pb-6  pt-0 justify-center flex flex-wrap">
                <div className="flex  h-[150px] p-0.5 me-8 w-[350px] overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#FF8ED0] to-[#FB8971] hover:text-white dark:text-white focus:ring-4 focus:outline-none">
                    <div className="flex justify-center   w-[350px] space-x-40  transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-90">
                        <div className='items-center'>
                            <img src="/student.png" alt="Icon" className="w-20 h-25 mx-auto" />
                            <h2 className="bg-gradient-to-r text-l md:text-3xl text-center flex justify-center font-bold from-pink-300 via-orange-500 to-pink-300 text-transparent bg-clip-text">300+</h2>
                            <p className="text-white flex justify-center">Students Placed</p>
                        </div>
                    </div>
                </div>
                <div className="flex  h-[150px] p-0.5 me-8 w-[350px] overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#FF8ED0] to-[#FB8971] hover:text-white dark:text-white focus:ring-4 focus:outline-none">
                    <div className="flex justify-center  w-[350px]  transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-90">
                        <div className='items-center'>
                            <img src="/topic.png" alt="Icon" className="w-20 h-25 mx-auto" />
                            <h2 className="bg-gradient-to-r text-l md:text-3xl text-center flex justify-center font-bold from-pink-300 via-orange-500 to-pink-300 text-transparent bg-clip-text">6+</h2>
                            <p className="text-white flex justify-center">Topics Covered</p>
                        </div>
                    </div>
                </div>

                <div className="flex  h-[150px] p-0.5 me-8 w-[350px] overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#FF8ED0] to-[#FB8971] hover:text-white dark:text-white focus:ring-4 focus:outline-none">
                    <div className="flex justify-center  w-[350px] transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-90">
                        <div className='items-center'>
                            <img src="/resource.png" alt="Icon" className="w-20 h-20 mx-auto" />
                            <h2 className="bg-gradient-to-r text-l md:text-3xl text-center flex justify-center font-bold from-pink-300 via-orange-500 to-pink-300 text-transparent bg-clip-text">500+</h2>
                            <p className="text-white flex justify-center">Available Resources</p>
                        </div>
                    </div>
                </div>


            

             
            </div>
        </>
    );
};

export default Hero;
