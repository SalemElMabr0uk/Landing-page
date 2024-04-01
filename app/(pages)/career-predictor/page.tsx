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

  const gradientColor = {
    color: 'linear-gradient(180deg, #ff8ed0, #fb8971) 1]',
     
  };
  const careers = [
   
    { value: "devops", label: "DevOps" },
    { value: "fullstack java", label: "fullstack java" }, 
    { value: "AI", label: "AI" },
    { value: "ML", label: "ML" },
  ];
  const  number_of_years=[ 
    { value: "0", label: "0" },
  { value: "5", label: "5" },
  { value: "10", label:"10"},
  { value: "15", label:"15"}];

  const country = [
    {  label: "Tunisie",value: "Tunisie", },
    { value: "Palestine", label: "Palestine" },
    { value: "India", label: "Palestine" },
    { value: "Algerie", label: "Algerie" },  

  ];

  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  };
 

 

  return (
    <>
      <div className="flex flex-col items-start px-20 py-11 text-base bg-white max-md:px-5">
        <div className="font-lato font-semibold self-center text-[54px] top-[99px]  left-[328px] text-6xl  bg-clip-text leading-[59.4px] gray-850 max-md:max-w-full max-md:text-4xl  ">
          <span className="text-[#162E4F]">Career Scope</span>
          <span className="text-qqgf-10 font-lato   bg-clip-text" style={gradientColor}> Predictor</span>
        </div>
        <div className="self-center mt-2 text-[28px]  font-light tracking-tight leading-7 text-[#525252] max-md:max-w-full font-sans">
          Choosing a career? Know about its scope in later years
        </div>
        <div  className="mt-[92px]">
              <div className="ml-[108px]  text-xl leading-7 text-[#171717] max-md:ml-2.5 font-sans">
                 Choose a field
              </div>
              
              <div  className="placeholder: Select a career option"> 
                  <SelectMenu options={careers} onChange={handleSelectChange} /> 
              </div>

        </div>
        <div className="mt-4 ml-[108px] text-xl leading-7 text-[#171717] max-md:ml-2.5 font-sans">
          Choose number of years
        </div>
    
        <div>
        <SelectMenu
            onChange={handleSelectChange}
            options={number_of_years}  
            />
           
</div>

        <div  className="mt-4 ml-[108px] text-xl leading-7 text-[#171717] max-md:ml-2.5 font-sans" >
          Choose country
         
        </div>
        <SelectMenu options={country} onChange={handleSelectChange} />
        <div >
       <Btn children="Know the scope >" onClick={function (): void {
            throw new Error('Function not implemented.');
          } } />  
        </div>
       
        
        <div className="flex flex-col ml-[108px] px-7 py-7 mt-12 w-full   bg-neutral-100 max-w-[1080px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="font-lato tracking-wide leading-[100%] text-[#171717] max-md:max-w-full text-[Text/text-body]">
            How it works
          </div>
          <div className="mt-2.5  font-sans leading-4 text-[Text/text-subtle] max-md:max-w-full text-[#525252]">
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
 
 


 

