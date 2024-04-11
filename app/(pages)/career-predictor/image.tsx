import React, { useState } from 'react';
import Image from 'next/image';
import futureCareer from './image/Sans titre.jpg';

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
          className="  flex-auto my-auto   content-center object-fit:cover ml-[10px]  items-center justify-center md:ml-[200px]  mt-24 max-h-[1240px]"
        />
      )}
    </div>
    
  );
};

export default Img;