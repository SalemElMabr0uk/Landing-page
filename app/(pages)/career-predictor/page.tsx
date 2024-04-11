"use client"
import React from 'react';
import SelectMenu from './select';
import Btn from './button';
import Title from './title';
import Description from './description';
import FormSelect from './form';
import Img from './image';
import Result from './result';
import { useClient } from 'next/client';
import FormsLogic from './hooks/FormsLogic';

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  options: Option[];
  onChange: (value: string) => void;
}

const CareerPredictor: React.FC<any> = () => {
  const { formSubmitted } = FormsLogic({ onSubmit: () => {} }, [], [], []);
  console.log("this formSubmitted :",formSubmitted)
 
  return (
    <>  
      <div className="flex flex-col items-center py-11 text-base bg-white max-md:px-5">
        <Title />

        <div className="flex-col lg:flex-row inline-flex">
          <div className="mt-24   text-xl leading-7 text-neutral-900 md:max-lg:flex max-w-md ">
            <FormSelect />
          </div>
          <div className="  h-auto md:ml-auto">
        
            {!formSubmitted ? <Img /> : <Result />}
          </div>
        </div>

        <div className="flex flex-row ">
          <Description />
        </div>
 
      
      </div>
    </>
  );
};

export default CareerPredictor;
