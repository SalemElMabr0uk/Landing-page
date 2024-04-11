import { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface FormsLogicProps {
  onSubmit: (data: { selectedCountry: string; selectedCareer: string; selectedYears: string }) => void;
}

interface FormsLogic extends FormsLogicProps {
  selectedCountry: string;
  selectedCareer: string;
  selectedYears: string;
  submitted: boolean;
  showRequiredMessage: boolean;
  ImageVisible: boolean;
  formSubmitted: boolean;
  handleCountryChange: (value: string) => void;
  handleCareerChange: (value: string) => void;
  handleYearsChange: (value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleReset: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleButtonClick: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FormsLogic = (props: FormsLogicProps, careers: Option[], years: Option[], countries: Option[]): FormsLogic => {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedCareer, setSelectedCareer] = useState<string>('');
  const [selectedYears, setSelectedYears] = useState<string>('');
  const [ImageVisible, setImageVisible] = useState<boolean>(true);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [showRequiredMessage, setShowRequiredMessage] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [averageSalary, setAverageSalary] = useState<number>(10000);

 

  const handleButtonClick = (e: React.FormEvent<HTMLFormElement>) => {

   
  
    handleSubmit(e);
    setImageVisible(false); // Hide the image

  };

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
    setShowRequiredMessage(false);
  };

  const handleCareerChange = (value: string) => {
    setSelectedCareer(value);
    setShowRequiredMessage(false);
    console.log( {selectedCareer})
  };

  const handleYearsChange = (value: string) => {
    setSelectedYears(value);
    setShowRequiredMessage(false);

  };



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
 
        e.preventDefault();
        setFormSubmitted(true); 
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

    console.log("Text:", text);
    setText(text);
    setFormSubmitted(true);
  };

  const [text, setText] = useState('');

  const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSelectedCountry('');
    setSelectedCareer('');
    setSelectedYears('');
    setText('');
    setFormSubmitted(false);
    setImageVisible(true); // Show the image again
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
  const isFormSubmitted = formSubmitted;


  const allFieldsFilled = selectedCountry && selectedCareer && selectedYears;

  return {
    ...props,
    selectedCountry,
    selectedCareer,
    selectedYears,
    submitted,
    formSubmitted,
    showRequiredMessage,
    ImageVisible,
    handleCountryChange,
    handleCareerChange,
    handleYearsChange,
    handleSubmit,
    handleReset,
    handleButtonClick,
  
    
  };
};

export default FormsLogic;