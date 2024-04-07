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
                            <img src='/icon_roadmap.png' alt='Roadmap Icon' width={90} height={90} />
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
            <div >
                <div className="flex justify-center flex-wrap gap-4 pb-14">
                    {items.slice(0.3).map((item, index) => (
                        <Card key={index} title={item.title} count={item.count} icon={item.icon} />
                    ))}
                </div>
            </div>

        </>
    );
};

export default Hero;
