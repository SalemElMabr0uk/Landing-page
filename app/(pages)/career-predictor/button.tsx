import React, { useState } from 'react';
import SelectMenu from './select';
import Image from 'next/image';
import futureCareer from './image/future-career-concept2.jpg';

const submitedClass = {
  className: "h-12 rounded-md text-white font-bold shadow-sm bg-[linear-gradient(91.2deg,_#FF8ED0_-1.28%,_#FB8971_103.24%)] justify-center mt-[22px] mr-[12px] items-center px-3 ml-[108px] max-w-full leading-[100%] w-[336px] max-md:px-5 max-md:ml-2.5"
};

const resetClass = {
  className: "h-12 rounded-md text- text-gradient font-bold shadow-sm bg-with-100 justify-center mt-[22px]    border border-pink-300  mr-[12px] items-center px-3 ml-[108px] max-w-full leading-[100%] w-[336px] max-md:px-5 max-md:ml-2.5"
};

const careers = [
 
  { value: "Software Engineer ", label: "Software Engineer" },
  { value: "DevSecOps Engineer", label: "DevSecOps Engineer" }, 
  { value: "Full Stack Engineer", label: "Full Stack Engineer" },
  { value: "Data-Science Engineer", label: "Data-Science Engineer" },
];

const number_of_years = [ 
  { value: "0", label: "0" },
  { value: "5", label: "5" },
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
    e.preventDefault();
    if (selectedCountry === '' || selectedCareer === '' || selectedYears === '') {
      setShowRequiredMessage(true);
      return;
    }
    
    const text = `${selectedYears} ${selectedCareer} ${selectedCountry}`;
    setText(text);
    setImageVisible(false);
    setFormSubmitted(true); 
    console.log(text);
  
  };
  const handleReset = () => {
    setSelectedCountry('');
    setSelectedCareer('');
    setSelectedYears('');
     setText('');
    setImageVisible(true);
    setFormSubmitted(false);
  };

  const [text, setText] = useState('');

  return (
    <div>
    <div>
    <form onSubmit={formSubmitted ? handleReset : handleSubmit}>
        <SelectMenu
     
          options={careers}
          onChange={handleCareerChange}
          label='Choose a field'
          value={selectedCareer}
          placeholder="Select a career option"
          requiredMessage="Select a career option"
        />
        <SelectMenu
           options={number_of_years}
          onChange={handleYearsChange}
          label='Choose number of years'
          value={selectedYears}
          placeholder="Choose number of years"
          requiredMessage="Choose number of years" 
        />
        <SelectMenu
          options={country}
           onChange={handleCountryChange}
          label='Choose country'
          value={selectedCountry}
          placeholder="Select country you live in" 
           requiredMessage="Select country you live in" 
          />
        <button type="submit" className={formSubmitted ? resetClass.className : submitedClass.className }>
          {formSubmitted ? "Reset >" : "Know the scope >"}
        
        </button>
      </form>
      <div className="result1 " style={{ display: formSubmitted ? 'block' : 'none' }}>
        <p style={{fontSize:'18px' ,color:'rgba(23, 23, 23, 1)',fontWeight: 'bold'}} className='font-sans'>Number of jobs:</p>
        <span className="text- text-gradient font-extrabold font-lato-sans  text-[40px]  bg-clip-text leading-[100%]"  >X,00,000</span>
        <p>{text}</p>
        <p style={{fontSize:'18px' ,color:'rgba(23, 23, 23, 1)',  fontWeight: 'bold'}} className='font-sans'>Why:</p>
        <div className='font-sans'> 
          Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet. 
        </div>
      </div>
     
    </div>
        <div className="result2 border border-text-gradient" style={{ display: formSubmitted ? 'block' : 'none' }}>
        <p style={{fontSize:'18px' ,color:'rgba(23, 23, 23, 1)',fontWeight: 'bold'}} className='font-sans'>Number of jobs:</p>
        <span className="text- text-gradient font-extrabold font-lato-sans  text-[40px]  bg-clip-text leading-[100%]"  >XY LPA</span>
        <p>{text}</p>
        <p style={{fontSize:'18px' ,color:'rgba(23, 23, 23, 1)',  fontWeight: 'bold'}} className='font-sans'>Why:</p>
      
        <div className='font-sans'> 
          Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet 
        </div>
      </div>
      {imageVisible && <Image src={futureCareer} width={720} height={400} alt='future-career-concept-img' style={{ marginTop: '-360px' ,marginLeft: '550px' }} />}
    </div>
   
   
  );
};

export default Btn;  

 
