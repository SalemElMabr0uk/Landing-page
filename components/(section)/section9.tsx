"use client"

import FaqItem from "../FaqItem";

{/***question freq section */ }


const Section9 = () => {


    return (
        <>
            <div>
                <h1 className=' ml-5 text-3xl font-semibold text-white'> Frequently Asked <span className='text_color_variation'> Questions</span></h1>

                <div className='mt-10 w-full flex flex-col justify-start md:text-lg text-sm text-white p-4 '>
                    <FaqItem   question='Are roadmaps free?' answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
                    <FaqItem question='Can you enroll without completing' answer='hi this is answer 2'/>
                    <FaqItem question='Question 3' answer='hi this is answer 1' />
                </div>
            </div>
        </>
    );
}

export default Section9;
