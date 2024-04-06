
"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

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



const Companies = () => {
  const [roadmaps, setRoadmaps] = useState<roadmap[]>([]);

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

  return (

    <>      
    {/* Render other parts of your component using the roadmaps data */}
    <div className="bg-white border p-4">
      <div className="p-4">
       <span className='text-3xl font-bold '>Start Your </span><span className="text-orange-10 text-3xl  font-bold">Learning Journey</span> <span className='text-3xl  font-bold '>- We Will Show You the Path</span>
      </div>

      <div className="rounded-md bg-white flex flex-wrap justify-center">
        {roadmaps.map((item, index) => (
          <div key={index} className="w-70 md:w-70 h-30 m-8 bg-[#d0d5dc] border-[#FB8971] bg-opacity-10 rounded-lg p-2 shadow-md transform transition-transform hover:ring-2 hover:ring-[#FB8971] overflow-hidden">
            <div className='flex p-2 overflow-hidden'>
              <h2 className="text-l text-[#162E4F] font-semibold text-center mt-2 p-2">{item.title}</h2>
              <Link href={`/roadmap/${item._id}`} className='inline-flex items-center px-3 text-sm font-medium text-center text-[#FB8971]'>
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>

    </>
  )
}

export default Companies