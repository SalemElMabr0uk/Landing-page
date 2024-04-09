import React, { useState } from 'react';
import SelectMenu from './select';
import Image from 'next/image';
import futureCareer from './image/Sans titre.jpg';
import { isThenable } from 'next/dist/client/components/router-reducer/router-reducer-types';

const submitedClass = {
  className: "h-12 rounded-md text-white  font-bold shadow-sm bg-[linear-gradient(91.2deg,_#FF8ED0_-1.28%,_#FB8971_103.24%)] justify-center mt-[22px] mr-[12px] items-center px-3 max-w-full leading-[100%] w-[336px] "
};

const resetClass = {
  className: "h-12 rounded-md text- text-gradient font-bold shadow-sm bg-with-100 justify-center mt-[22px]   border border-pink-300  mr-[12px] items-center px-3 max-w-full leading-[100%] w-[336px]"
};

const careers = [
 
  { value: "Software Engineer", label: "Software Engineer" },
  { value: "DevSecOps Engineer", label: "DevSecOps Engineer" }, 
  { value: "Full Stack Engineer", label: "Full Stack Engineer" },
  { value: "Data-Science Engineer", label: "Data-Science Engineer" },
  {value: "Hr", label: "Hr" },
  {value: "Team Leader", label: "Team Leader" },
];

const number_of_years = [ 
  { value: "0", label: "0" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "5", label: "5" },
  { value: "7", label: "7" },
  { value: "10", label:"10"},
  { value: "15", label:"15"}
];

const country = [
 
  { label: "Tunisie", value: "Tunisie" },
  { value: "Palestine", label: "Palestine" },
  { value: "India", label: "India" },
  { value: "Algerie", label: "Algerie" },  
];

const Btn: React.FC = () => {
 
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedCareer, setSelectedCareer] = useState<string>('');
  const [selectedYears, setSelectedYears] = useState<string>('');
  const [imageVisible, setImageVisible] = useState<boolean>(true);  
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);  
  const [showRequiredMessage, setShowRequiredMessage] = useState<boolean>(false); 
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [averageSalary, setAverageSalary] = useState<number>(10000);

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
    setShowRequiredMessage(false);
  };

  const handleCareerChange = (value: string) => {
    setSelectedCareer(value);
    setShowRequiredMessage(false);
  };

  const handleYearsChange = (value: string) => {
  
    setSelectedYears(value);
    setShowRequiredMessage(false);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    setSubmitted(true);
    e.preventDefault();
  
    console.log("Selected Career:", selectedCareer);
    console.log("Selected Years:", selectedYears);
  
    if (selectedCountry === '' || selectedCareer === '' || selectedYears === '') {
      setShowRequiredMessage(true);
      return;
    }
  
    const text = `${selectedYears} ${selectedCareer} ${selectedCountry}`;
 
    if (
      ['Software Engineer', 'Data-Science Engineer', 'DevSecOps Engineer'].includes(selectedCareer) &&
      parseInt(selectedYears) >= 2
    ) {
      setAverageSalary(13 * 2000);
      console.log("Average Salary:", averageSalary);
    }
    if (
      ['Software Engineer', 'Data-Science Engineer', 'DevSecOps Engineer'].includes(selectedCareer) &&
      parseInt(selectedYears) >= 2
    ) {
      setAverageSalary(13 * 2000);
      console.log("Average Salary:", averageSalary);
    }

  
    console.log("Text:", text);
  
    setText(text);
    setImageVisible(false);
    setFormSubmitted(true);
  };
  
  
  const handleReset = () => {
    setSelectedCountry('');
    setSelectedCareer('');
    setSelectedYears('');
     setText('');
    setImageVisible(true);
    setFormSubmitted(false);
  };
  let currency = '';
    switch (selectedCountry) {
      case 'Tunisie':
        currency = 'TND';
        break;
      case 'Palestine':
        currency = 'ILS';
        break;
      case 'India':
        currency = 'INR';
        break;
      case 'Algerie':
        currency = 'DZD';
        break;
      default:
        currency = 'USD';
    }
  

  const [text, setText] = useState('');

  return (
    
    <div className='form-container'>
   
    <form onSubmit={formSubmitted ? handleReset : handleSubmit} className='form'>
        <SelectMenu
          
      submitted={submitted}
          options={careers}
          onChange={handleCareerChange}
          label='Choose a field'
          value={selectedCareer}
          placeholder="Select a career option"
          requiredMessage="Select a career option"
          className ="sfsf"
         
        />
        <SelectMenu
          className ="sfsf"
         submitted={submitted}
           options={number_of_years}
          onChange={handleYearsChange}
          label='Choose number of years'
          value={selectedYears}
          placeholder="Choose number of years"
          requiredMessage="Choose number of years" 
        />
        <SelectMenu
         className ="sfsf"
         submitted={submitted}
          options={country}
           onChange={handleCountryChange}
          label='Choose country'
          value={selectedCountry}
          placeholder="Select country you live in" 
           requiredMessage="Select country you live in" 
          />
       <button 
            type="submit" 
            className={` ${formSubmitted ? resetClass.className : submitedClass.className} `}
        >
          {formSubmitted  ? "Reset >" : "Know the scope >"}
        
        </button>
      </form>
      <div className="result ">
            <div className="result1  "style={{ display: formSubmitted ? 'block' : 'none' }}  id="result2" >
              <p style={{fontSize:'18px' ,color:'rgba(23, 23, 23, 1)',fontWeight: 'bold'}} className='font-sans'>Number of jobs:</p>
              <span className="text- text-gradient font-extrabold font-lato-sans  text-[40px]  bg-clip-text leading-[100%] mt-2 mb-2 "  >{+selectedYears*10000}</span>
        
              <p style={{fontSize:'18px' ,color:'rgba(23, 23, 23, 1)',  fontWeight: 'bold'}} className='font-sans'>Why:</p>
              <div className='font-sans'> 
                Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet. 
              </div>
            </div>
            <div className="result2 border border-text-gradient" style={{ display: formSubmitted ? 'block' : 'none' }}  id="result1" >
          <p style={{ fontSize: '18px', color: 'rgba(23, 23, 23, 1)', fontWeight: 'bold' }} className="font-sans">
            Average Salary:
          </p>
          <span className="text- text-gradient font-extrabold font-lato   text-[40px]  leading-[100%] mt-2 mb-2 currency">
          {`${averageSalary}` + ` ${currency}`}
          </span>
        
          <p style={{ fontSize: '18px', color: 'rgba(23, 23, 23, 1)', fontWeight: 'bold' }} className="font-sans">
            Why:
          </p>
          <div className="font-sans">
            Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet
          </div>
            </div>
     </div>

{imageVisible && <Image  src={futureCareer}  alt='future-career-concept-img'  className='img-container' />}
    </div>
   
   
  );
};

export default Btn;  

 