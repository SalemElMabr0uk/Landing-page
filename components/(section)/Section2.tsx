
"use client"

{/**matiere section (title) */}
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



const roadmap = () => {
  const [roadmaps, setRoadmaps] = useState<roadmap[]>([]);

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

  return (

    <>
      {/* Render other parts of your component using the roadmaps data */}
      <div className="bg-white border md:p-4">
        <div className=" p-2 md:p-8 text-2xl font-semibold md:text-4xl">
          <span className='  text-center md:text-left'>Start Your </span><span className="text_color_variation sm: sm:font-[600]  ">Learning Journey</span> <span className='   text-center md:text-left'>- We Will Show You the Path</span>
        </div>


        <div className="flex flex-wrap justify-center min-h-[50vh]">
          {roadmaps.map((item, index) => (
            <div key={index} className=" cursor-pointer md:m-8 m-2 sm:m-4 bg-gradient-to-br  container2  w-full md:w-[400px]  text-left bg-opacity-10 rounded-lg shadow-md transform transition-transform hover:ring-2 hover:ring-[#FB8971] overflow-hidden">
              <div className='flex justify-between w-full  overflow-hidden  p-2  bg-white rounded-md '>
                <h2 className=" text-[#162E4F] font-semibold text-left p-2 m-2">{item.title}</h2>
                <Link href={`/roadmap/${item._id}`} className='inline-flex items-center  font-medium text-[#FB8971]'>
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </Link>
              </div>
            </div>

          ))}
        </div>
    </div >

    </>
  )
}

export default roadmap