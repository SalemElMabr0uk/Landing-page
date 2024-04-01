import React, { useState } from 'react';

interface Option {
    label: string;
    value: string;
  }
  
  interface SelectProps {
    options: Option[];
    onChange: (value: string) => void;
  }

const options = [
  { value: 'Select a career option', label: 'Select a career option',id:1},
    {value: 'option1', label: 'Option 1' ,id:2},
  { value: 'option2', label: 'Option 2',id:3 },
  { value: 'option3', label: 'Option 3',id:4 },
];

const SelectMenu: React.FC<SelectProps> = ({ options, onChange }) => {
    const [selectedValue, setSelectedValue] = useState(options.length > 0 ? options[0].value : '');

  return (<div className="   ml-[108px]">
    <label  className="mt-4   text-xl leading-7 text-[#171717] max-md:ml-2.5 font-sans"></label>
    <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}
   
    className=" rounded-lg border-b text-[16px]  justify-center 
                      border-pink-300  bg-[rgba(19,_19,_19,_0.05)] bg-opacity-25  h-[34px] w-[333px]
                        text-[#A3A3A3]   left-[363px]  pl-[16px]  " >
      {options.map((option) => (
        <option key={option.value} value={option.value} className=' text-[16px] inline-block'>
          {option.value}
        </option>
       
      ))}
    </select>
    </div>
  );
};
export default SelectMenu;