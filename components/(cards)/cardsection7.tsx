import React from 'react';

type CardProps = {
  data: {
    imageUrl: string;
    quote: string;
    name: string;
    designation: string;
  };
};

const Card = ({ data }: CardProps) => {
  const { imageUrl, quote, name, designation } = data;

  return (
    <div className="container2 m-5 lg:w-[650px] h-[260px] rounded-lg flex items-center">
      <div className=" rid grid-cols-1 gap-6 sm:grid-cols-2 lg:w-[650px] h-[258px] rounded-lg bg-black-30 hover:bg-[#28283c] flex items-center px-6">
        <img
          src={imageUrl}
          alt="profile"
          className="rounded-full w-[150px] h-[150px]"
        />
        <div className='justify-between '>
          <h1 className="text-white text-s flex pb-2">{quote}</h1>
          
          <h1 className="text_color_variation ">{name}</h1>
          <h1 className="text-white ">{designation}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
