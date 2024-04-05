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
}

const SelectMenu: React.FC<SelectProps> = ({ label, options, value, onChange, error, requiredMessage, placeholder }) => {
  const hasValue = value !== '';
  const showRequiredMessage = !hasValue && !error;

  // Set placeholder value if no value is provided
  const currentValue = hasValue ? value : '';

  return (
    <div className="mt-2 ml-[108px]">
      <label className="mt-2 text-xl leading-7 text-[#171710] max-md:ml-2.5 font-sans">{label}</label>
      <br />
      <select
        aria-placeholder={placeholder}
        value={currentValue} // Use currentValue instead of value
        onChange={(e) => onChange(e.target.value)}
        className={`rounded-lg border-b text-[18px] justify-center border-pink-300 bg-[rgba(19,19,19,0.05)] bg-opacity-25 h-[34px] w-[333px] text-[#525252] pl-2 font-sans ${error ? 'border-red-500' : ''}`}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      {error && <div className="text-red-500 mt-1">{requiredMessage}</div>}
      {showRequiredMessage && <div className="text-red-500 mt-1 text-[16px]">{requiredMessage}</div>}
    </div>
  );
};

export default SelectMenu;
