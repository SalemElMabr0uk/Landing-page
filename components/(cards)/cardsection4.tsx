import React from 'react';

type CardProps = {
    data: {
        icon: string;
        text: string;
        image: string;

    };
};


const Card4 =({data}:CardProps)=>{
    const {icon,text,image} =data;

    return  (
        <>
          <div className="flex  flex-row p-8 justify-center">
        <img src={icon} alt="icon" />
        <div className="flex flex-col p-4 ml-8 ">
          <span className="text_color_variation text-bold">{text}</span>
         </div>
        <img src={image} alt="image"/>
      </div>
        </>
    )


};export default Card4;