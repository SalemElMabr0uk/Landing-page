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
    <div className="container2 m-5 md:w-[650px] md:h-[350px] w-[300px] rounded-lg flex items-center">
      <div className="rid  sm:grid-cols-2 md:w-[650px] md:h-[345px] w-[550] rounded-lg bg-black-30 hover:bg-[#28283c] flex items-center px-6 justify-between sm:w-[500px] sm:h-[345px]">

        {/* Image displayed only on small screens */}
        <img
          src={imageUrl}
          alt="profile"
          className="rounded-full md:w-[80px] md:h-[80px] w-[60px] h-[60px] ml-6 mb-4  hidden md:block items-center"
        />

        <div className='flex flex-col'>
          {/* Image displayed only on larger screens */}
          <img
            src={imageUrl}
            alt="profile"
            className="rounded-full lg:w-[80px] lg:h-[80px] w-[80px] h-[80px] max-w-xs sm:max-w-none mb-4 sm:mb-0 lg:hidden sm:block"
          />
          <div className='flex flex-col p-4'>
            <h1 className="text-white lg:text-s text-sm pb-2">{quote}</h1>
            <h1 className="text_color_variation text-sm ">{name}</h1>
            <h1 className="text-white text-sm">{designation}</h1>
          </div>
        </div>
      </div>
    </div>




  );
};

export default Card;
