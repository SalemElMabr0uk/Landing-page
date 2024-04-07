import React from 'react';
import Link from 'next/link';

interface CardProps {
    title: string;
    count: number;
    icon: string;
}

const Card: React.FC<CardProps> = ({ title, count, icon }) => {
    return (

        <div className="flex  h-[150px] p-0.5 me-8 w-[350px] overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#FF8ED0] to-[#FB8971] hover:text-white dark:text-white focus:ring-4 focus:outline-none">
        <div className="flex justify-center w-[350px] space-x-40  transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-90">
            <div className='items-center'>
                <img src={icon} alt="Icon" className="w-20 h-20 mx-auto" />
                <h2 className="bg-gradient-to-r text-l md:text-3xl text-center flex justify-center font-bold from-pink-300 via-orange-500 to-pink-300 text-transparent bg-clip-text">{count}+</h2>
                <p className="text-white flex justify-center">{title}</p>
            </div>
        </div>
    </div>

       
    );
};

export default Card;
