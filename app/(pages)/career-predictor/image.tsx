import React, { useState } from 'react';
import Image from 'next/image';
import futureCareer from './Image/CareerPredictiorIllustration.jpg';

interface SelectProps {
  
  
}

const Img: React.FC<SelectProps> = () => {
 
    const [imageVisible, setImageVisible] = useState<boolean>(true);  
 
 

  return ( 
    <div className="  ">
      {imageVisible && (
        <Image
          src={futureCareer}
          alt="future-career-concept-img"
          className="w-full object-contain md:h-auto flex-auto md:my-auto  mt-20 content-center object-fit:cover   items-center justify-center max-w-[600px]"
        />
      )}
    </div>
    
  );
};

export default Img;