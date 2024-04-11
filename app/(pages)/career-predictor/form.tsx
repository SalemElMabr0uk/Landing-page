 
import { useState } from 'react';
import Btn from './Btn';
import SelectMenu from './select';
import FormsLogic from './hooks/FormsLogic';

import s from './hooks/FormsLogic';
const submitedClass = {
  className: "h-12 rounded-md text-white  font-bold shadow-sm bg-[linear-gradient(91.2deg,_#FF8ED0_-1.28%,_#FB8971_103.24%)] justify-center mt-[22px] mr-[12px] items-center px-3 ml-[108px] max-w-full leading-[100%] w-[336px] max-md:px-5 max-md:ml-2.5"}

  const resetClass = {
    className: "h-12 rounded-md text- text-gradient font-bold shadow-sm bg-with-100 justify-center mt-[22px]   border border-pink-300  mr-[12px] items-center px-3 ml-[108px] max-w-full leading-[100%] w-[336px] max-md:px-5 max-md:ml-2.5"}


const careers = [
  { value: "Software Engineer", label: "Software Engineer" },
  { value: "DevSecOps Engineer", label: "DevSecOps Engineer" }, 
  { value: "Full Stack Engineer", label: "Full Stack Engineer" },
  { value: "Data-Science Engineer", label: "Data-Science Engineer" },
  { value: "Hr", label: "Hr" },
  { value: "Team Leader", label: "Team Leader" },
];

const number_of_years = [ 
  { value: "0", label: "0" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "5", label: "5" },
  { value: "7", label: "7" },
  { value: "10", label: "10" },
  { value: "15", label: "15" }
];

const country = [
  { label: "Tunisie", value: "Tunisie" },
  { value: "Palestine", label: "Palestine" },
  { value: "India", label: "India" },
  { value: "Algerie", label: "Algerie" },  
];


const Forms: React.FC = () => {

  const {
    selectedCountry,
    selectedCareer,
    selectedYears,
    submitted,
    
    formSubmitted,
    handleCountryChange,
    handleCareerChange,
    handleYearsChange,
    handleSubmit,
    handleReset,
  } =  FormsLogic(careers, number_of_years, country);

  return (

    <div className="  my-auto  items-center px-3 py-4  mr-2 max-w-[336px] text-white rounded-lg leading-[100%] ml-auto  md:max-w-lg  mt-auto    max-md:px-3 "> 
    <form onSubmit={formSubmitted ? handleReset : handleSubmit} >
        <SelectMenu
          submitted={submitted}
          options={careers}
          onChange={handleCareerChange}
          label='Choose a field'
          value={selectedCareer}
          placeholder="Select a career option"
          requiredMessage="Select a career option"
        />
        <SelectMenu
          submitted={submitted}
          options={number_of_years}
          onChange={handleYearsChange}
          label='Choose number of years'
          value={selectedYears}
          placeholder="Choose number of years"
          requiredMessage="Choose number of years" 
        />
        <SelectMenu
          submitted={submitted}
          options={country}
          onChange={handleCountryChange}
          label='Choose country'
          value={selectedCountry}
          placeholder="Select country you live in" 
          requiredMessage="Select country you live in" 
        /> 



          <Btn
            formSubmitted={() => formSubmitted}
            onClick={formSubmitted ? handleReset : handleSubmit}    >
              
            {formSubmitted ? "Reset >" : "Know the scope >"}
          </Btn>

      </form>
      
    </div>
  );
};

export default Forms;
