import React from 'react';

interface Option {
 
  label: string;
  value: string;
 
}

interface SelectProps {
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder: string;
  requiredMessage?: string;
  submitted: boolean; 
 
  className  : string
   
  
}

const SelectMenu: React.FC<SelectProps> = ({ label, options, value, onChange, error, requiredMessage, placeholder, submitted }) => {
  const hasValue = value !== '';
  const showRequiredMessage = submitted && !hasValue && requiredMessage;
 
  const currentValue = hasValue ? value : '';

  return (
    <div className="mt-1 select-menu max-md:w-full">
      <label className="select-label  mt-1  text-xl leading-7 text-[#171710] max-md:ml-2.5 font-sans ">{label}</label>
      <br />
      <select
        aria-placeholder={placeholder}
        value={currentValue}  
        onChange={(e) => onChange(e.target.value)}
        className={`rounded-lg border-b text-[18px] justify-center border-pink-300 bg-[rgba(19,19,19,0.05)] bg-opacity-25 h-[34px] w-[333px] max-md:w-full text-[#525252] pl-2 font-sans ${error ? 'border-red-500' : ''}`}
      >
        <option value="" disabled  style={{fontSize:"16px", width:"50px"}}>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label  }</option>
        ))}
      </select>
      {error && <div className="text-red-500 mt-1">{requiredMessage}</div>}
      {showRequiredMessage && <div className="text-red-500 mt-1 text-[16px]">{requiredMessage}</div>}
    </div>
  );
};

export default SelectMenu;
