'use client'
import React,{useState} from 'react'

interface FaqItemProps {
    question: string;
    answer: string;
  }
  
  const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
const [isOpen,SetIsOpen]=useState(false);

 const toggleOpen=()=>{
    SetIsOpen(!isOpen);
 }

  return (
    <div className='bg-[#1f1f3b] w-[90%]  my-2 mx-auto  rounded-md'>
         <button onClick={toggleOpen} className='flex justify-between items-center w-full focus:bg-[#2d2d57]'>
             <p className='text-lg font-medium p-2'>{question}</p>
             <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 mr-6 transition-transform transform ${isOpen ? '' : 'rotate-270'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={!isOpen ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
          />
        </svg>
         </button>
         <div className={`px-4 pb-4 ${isOpen ? 'block' : 'hidden'}`}>
        <p className="mt-2 ">{answer}</p>
      </div>
    </div>
  )
}

export default FaqItem