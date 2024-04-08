"use client"

import React, { useState } from 'react'; 
import SelectMenu from './select';
import Btn from './button';



interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  options: Option[];
  onChange: (value: string) => void;
}

const CareerPredictor: React.FC<any> = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const onChange = (value: string) => {
    setSelectedOption(value);
  };
  return (
    <>
    
    <div className="flex flex-col items-start px-20 py-11 text-base bg-white max-md:px-5 max-md:py-5">
        <div className="font-lato font-semibold self-center text-[54px] top-[99px] left-[328px] text-6xl bg-clip-text leading-[59.4px] gray-850 max-md:max-w-full max-md:text-4xl">
          <span className="text-[#162E4F]">Career Scope</span>
          <span className="text- text-gradient  font-lato   bg-clip-text" >&nbsp;Predictor</span>
        </div>
        <div className="self-center mt-2 text-[28px] font-light tracking-tight leading-7 text-[#525252] max-md:max-w-full max-md:text-base font-sans">
          Choosing a career? Know about its scope in later years
        </div>

        <div className="flex flex-row mt-20 ">
           
        </div>
        <div>
          <Btn  onClick={() => {
           return <h1>setSelectedValue(e.target.value)</h1>; 
             
          }} />
          </div>
      
      
     
          <div id='works' className="flex flex-col ml-[108px] px-7 py-7 mt-5 w-full bg-[#F6F6F6] max-w-[1080px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="font-lato tracking-wide leading-[100%] text-[#171717] max-md:max-w-full text-[Text/text-body]">
            How it works
          </div>
          <div className="mt-2.5 font-sans leading-4 text-[Text/text-subtle] max-md:max-w-full max-md:text-base text-[#525252]">
          
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed
            justo a nulla lobortis tincidunt. Nunc malesuada quam ex, et
            ullamcorper elit lacinia in. Morbi vehicula luctus velit. In nisi
            purus, malesuada ut erat sit amet, dignissim vulputate est. Nullam sed
            dui nec metus sagittis consequat.
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerPredictor;
 
 


 

