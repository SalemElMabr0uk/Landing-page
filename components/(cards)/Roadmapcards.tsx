"use client"
import roadmap from '@/app/(pages)/roadmap/page';
import Link from 'next/link';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from 'react';

interface CardProps {
    item: roadmap;
}

const Card = ({ item }: CardProps) => {
    function renderStars(rating: number): JSX.Element[] {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span key={i}>
                    <img src={i < rating ? "/star-16.png" : "/star-17.png"} alt="star" />
                </span>
            );
        }
        return stars;
    }

    

    return (
   
        <div className="w-[90%] h-[350px] sm:w-1/2 md:w-1/3 lg:w-1/4 flex-none m-6 bg-white shadow-md rounded-lg p-1 dev transform transition-transform hover:ring-2 hover:ring-[#FF8ED0]">
            <div className='space-x-2 flex ml-6 p-2'>
                <div className='flex p-4 space-x-2'>
                    {renderStars(item.rating)}
                </div>
                <div className='flex'>
                    <Link href={`/roadmap/${item._id}`} prefetch={false} className="md:flex items-center mt-2 p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-[#162E4F] rounded-full bg-gradient-to-br from-[#162E4F] to-[#3269B5] hover:text-white dark:text-white focus:ring-4 focus:outline-none">
                        <span className="flex p-2 text-bold text-[#162E4F] transition-all ease-in duration-75 bg-white rounded-full">
                            Project tag
                        </span>
                    </Link>
                </div>
            </div>
            <h2 className="text-2xl font-semibold text-center h-[15%]">{item.title}</h2>
            <p className='text-[#9E9EAE] text-sm h-[30%] p-4'>{item.pageContent.mainLine}</p>
            <div className="flex flex-wrap p-4 text-lg h-[20%]">
                {item.pageContent.points.map((point, index) => (
                    <p className=" bg-gray-200 rounded-full px-3 py-1 text-xs  text-gray-700 mr-2 mb-2" key={index}>
                        {point}
                    </p>
                ))}


            </div>
            <Link href={`/roadmap/${item._id}`} className='flex text-bold items-center px-4 p-2 h-[10%] text-sm font-medium text-center text-[#FB8971]'>
                View more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </Link>
        </div>
        
        
    );
};

export default Card;
