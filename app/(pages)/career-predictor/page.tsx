"use client"
// CareerPredictor.tsx

import React, { useState } from 'react';
import Title from './title';
import Description from './description';
import FormSelect from './form';
import Result from './result';
import Img from './image';

const infoCardData = [
  {
    title1: 'Number of jobs:',
    value: '2 Million',
    description:
      'Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar.',
  },
  {
    title2: 'Average Salary',
    value: '10 LPA',
    description:
      'Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar.',
  },
];

const CareerPredictor: React.FC<any> = () => {
  const [showRes, setShowRes] = useState(false);
  const [selectedValues, setSelectedValues] = useState({});
  
  const handleFormSubmit = (values: any) => {

    //can set the results based on these values

    console.log("selected values are:",values);
    setSelectedValues(values);
    setShowRes(!showRes);
  };

  return (
    <>
      <div className="flex flex-col items-center py-11 text-base bg-white max-md:px-5">
        <Title />
        <div className="flex-col-reverse lg:flex-row inline-flex">
          <div className="md:mt-24 text-xl leading-7 text-neutral-900 md:max-lg:flex max-w-md">
            <FormSelect
              showRes={showRes}
              setShowRes={setShowRes}
              handleSubmit={handleFormSubmit} // Pass handleSubmit function
            />
          </div>
          <div className="h-auto md:ml-auto mt-24">
            {showRes ? <Result infoCardData={infoCardData} /> : <Img />}
          </div>
        </div>
        <div className="flex flex-row">
          <Description />
        </div>
      </div>
    </>
  );
};

export default CareerPredictor;
