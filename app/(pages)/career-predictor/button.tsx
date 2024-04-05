import React from 'react';
import  { useState } from 'react';
import CareerPredictor from './page';
import SelectMenu from './select';

interface BtnProps {
  children: React.ReactNode; 
  onClick: () => void;
  variant?: 'primary' | 'secondary';  
}

const Btn = ({ children, onClick, variant = 'primary' }: BtnProps) => {
  const className ="  h-12 rounded-md text-white font-bold shadow-sm  bg-[linear-gradient(91.2deg,_#FF8ED0_-1.28%,_#FB8971_103.24%)] justify-center mt-[16px]  mr-[12px,] items-center px-3  ml-[108px] max-w-full       leading-[100%] w-[336px] max-md:px-5 max-md:ml-2.5";

  const [showTextArea, setShowTextArea] = useState(false);

  return (
    <button className={className} onClick={(e) => setShowTextArea(true)}>
      {children}
     
      
        <div
        
        className='text-[#171717]'
 
           
           
          style={{ 
            marginLeft: '60px',
             padding: '32px', 
              marginTop: '10px',
              height:'308px',
              width:'300px',
              borderRadius:'8px',
       pointerEvents:'none' ,
       
         
          position: 'absolute',
          top: '211px',  
          left: '504px', 
          border:' 1px solid #FB8971', 
          borderWidth: '2px', 
          borderStyle: 'solid'
        }}>
       </div>
      
    </button>
  );
};

export default Btn;
