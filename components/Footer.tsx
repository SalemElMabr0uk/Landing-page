"use client"
import { FOOTER_CONTACT_INFO, SOCIALS } from '@/constant';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [roadmaps, setRoadmaps] = useState<any[]>([]);


  useEffect(() => {
    const fetchRoadmaps = async () => {
      try {
        const response = await axios.get('https://sqilco-api.onrender.com/api/roadmaps');
        console.log(response.data.data);
        setRoadmaps(response.data.data);


      } catch (error) {
        console.error('Error fetching roadmaps:', error);
      }
    };

    fetchRoadmaps();
  }, []);

  const [projects, setProjects] = useState<any[]>([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://sqilco-api.onrender.com/api/projects');
        console.log(response.data.data);
        setProjects(response.data.data);


      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);


  return (
    <div id="roadmaps" className="bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white p-16   ">

      <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-0 md:pl-16 ">
        <div >
          <h5 className=" mb-4 font-bold">Roadmaps</h5>
          {roadmaps.map((item, index) => (
            <div className=" flex flex-row mb-6">
              <h1 id="roadmap-list" className="md:text-xs text-[#A3A3A3] text-xs ">{item.title}</h1>
            </div>
          ))}

        </div>

        <div className=" md:mb-6 md:ml-16 ml-8">
          <h5 className="uppercase md:mb-4 font-bold">Projects</h5>
          {projects.map((item, index) => (
            <div className="flex flex-row mb-6">
              <h1 id="project-list" className="text-xs text-[#A3A3A3]">{item.Title}</h1>
            </div>
          ))}
        </div>


        <div className=" md:mb-6 md:ml-16 ">
          <h5 className=" mb-4 font-bold">Contact</h5>
          {FOOTER_CONTACT_INFO.links.map((link) => (
            <Link
              href="/"
              key={link}
              className="flex flex-row mb-6 text-xs text-[#A3A3A3]"
            >
              <p className="whitespace-nowrap">
                {link}
              </p>

            </Link>
          ))}
        </div>

        <div className=" md:mb-6 md:ml-16 ">
          <h5 className=" mb-4  ml-10 font-bold ">Find Us on</h5>
          <div className="flex items-center ml-16">
            {SOCIALS.links.map((link) => (
              <Link href="/" key={link}>
                <Image src={link} alt="logo" width={15} height={15} className="mr-2" />
              </Link>
            ))}
          </div>
          <h1 className="text-xs text-[#A3A3A3] ml-10 m-6 ">reach@sqilco.com</h1>


        </div>

      </div>

     
      <div className="border-t border-zinc-300 dark:border-zinc-700 pt-8 mt-8 text-center text-sm">
        <p>Copyright Sqilco©2024 All rights reserved</p>
      </div>
    </div >
  );
};

export default Footer;
