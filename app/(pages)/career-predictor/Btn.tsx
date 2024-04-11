// Btn.tsx
import React, { FormEvent } from 'react';
import classNames from 'classnames';
import FormsLogic from './hooks/FormsLogic';
import image from 'next/image';
import Img from './image';



      


interface BtnProps {
  onClick: (e: FormEvent<HTMLFormElement>  ) => void;
  formSubmitted: boolean | (() => boolean);
  selectedCountry: string;
  selectedCareer: string;
  selectedYears: string;
  children: React.ReactNode;
}

const Btn: React.FC<BtnProps> = ({
  onClick,
  formSubmitted,
  selectedCountry,
  selectedCareer,
  selectedYears,
  children,
}) => {
  const SClass =
    'h-12 rounded-md  shadow-sm justify-center font-lato mt-[22px] items-center px-4  max-md:w-full leading-100 w-[336px] text-white bg-[linear-gradient(91.2deg,_#FF8ED0_-1.28%,_#FB8971_103.24%)]';
  const RClass =
    'h-12 rounded-md font-bold shadow-sm justify-center  mt-[22px] items-center px-3   leading-100 w-[336px] text-gradient bg-with-100 border border-pink-300';

  const isFormSubmitted = typeof formSubmitted === 'function' ? formSubmitted() : formSubmitted;
  const buttonClass = isFormSubmitted ? RClass : SClass;

  const allFieldsFilled = selectedCountry && selectedCareer && selectedYears;

  return (
    <div>
      <button onClick={()=>onClick} className={buttonClass}  type="submit"  >
        {isFormSubmitted && allFieldsFilled ? 'Reset >' : children}
      </button>
  
     
    </div>
  );
};

export default Btn;