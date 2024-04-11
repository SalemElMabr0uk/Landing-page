import React, { useState } from 'react';
import selectedYears from './hooks/FormsLogic';
import formSubmitted from './hooks/FormsLogic';

interface SelectProps {}

const Result: React.FC<SelectProps> = () => {
  const infoCardData = [
    {
      title1: 'Number of jobs:',
      value: +selectedYears,
      description:
        'Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar.',
    },
    {
      title2: 'Average Salary',
      value: 'XY LPA',
      description:
        'Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar.',
    },
  ];

  return (
    <div
      className=" max-md:w-full  lg:gap-6 flex flex-col md:flex-row mt-6"
      
    >
              <div  className="flex flex-col  p-9 font-bold rounded-lg border max-h-[50vh] md\:h-[380px] border-red-400 border-solid shadow-sm leading-[100%] max-md:w-5/6 ml-7 min-md:h-2/3 max-md:mt-10 h-[308px] w-[300px]"
                id="box1"
              >
                <div className="text-base   text-neutral-900">{infoCardData[0].title1}</div>
                <div className="mt-3 bold text-4xl   bg-clip-text text-gradient ">
                  {((infoCardData[0].value)) }
                </div>
                <div className="mt-6 text-sm font-medium tracking-wide leading-4 text-neutral-600">
                  <span className="text-lg text-neutral-900">Why:</span>
                  <br />
                  <span className="font-light text-neutral-600">{infoCardData[0].description}</span>
                </div>
              </div>

              <div
               className="flex flex-col  p-9 font-bold rounded-lg border border-red-400 border-solid shadow-sm leading-[100%] max-md:w-5/6 ml-8 min-md:h-2/3 max-md:mt-10 h-[308px] w-[300px]"
                id="box2"
              >
                      <div className="text-base   text-neutral-900">{infoCardData[1].title2}</div>
                      <div className="mt-3 bold text-4xl tracking-wide bg-clip-text text-gradient ">
                        {+selectedYears}
                      </div>
                      <div className="mt-6 text-sm font-medium tracking-wide leading-4 text-neutral-600">
                        <span className="text-lg text-neutral-900">Why:</span>
                        <br />
                        <span className="font-light text-neutral-600">{infoCardData[1].description}</span>
                        </div>
              </div>
   </div>
  );
};

export default Result;