"use client"
{/**feedback section */}
import React, { useState, useEffect } from 'react';
import Card from '../(cards)/cardsection7';
import Pagination from '../pagination';

const Section7 = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(2); // Default to 3 cards per page

  const cardData = [
    {
      imageUrl:
        'https://img.freepik.com/photos-gratuite/jeune-belle-femme-pull-chaud-rose-aspect-naturel-souriant-portrait-isole-cheveux-longs_285396-896.jpg',
      quote:
        '“I cannot recommend Sqilco enough for anyone looking to further their education. My experience with Sqilco has been nothing short of exceptional. Thanks to Sqilco, I have gained a deeper understanding of my field of study and have been able to apply my knowledge in real-world situations.”',
      name: 'Name Surname',
      designation: 'Designation',
    }, 
    {
        imageUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
        quote:
          '“I cannot recommend Sqilco enough for anyone looking to further their education. My experience with Sqilco has been nothing short of exceptional. Thanks to Sqilco, I have gained a deeper understanding of my field of study and have been able to apply my knowledge in real-world situations.”',
        name: 'Name Surname',
        designation: 'Designation',
      },
    {
        imageUrl:
          'https://img.freepik.com/photos-gratuite/jeune-belle-femme-pull-chaud-rose-aspect-naturel-souriant-portrait-isole-cheveux-longs_285396-896.jpg',
        quote:
          '“I cannot recommend Sqilco enough for anyone looking to further their education. My experience with Sqilco has been nothing short of exceptional. Thanks to Sqilco, I have gained a deeper understanding of my field of study and have been able to apply my knowledge in real-world situations.”',
        name: 'Name Surname',
        designation: 'Designation',
      },
      {
        imageUrl:
          'https://img.freepik.com/photos-gratuite/jeune-belle-femme-pull-chaud-rose-aspect-naturel-souriant-portrait-isole-cheveux-longs_285396-896.jpg',
        quote:
          '“I cannot recommend Sqilco enough for anyone looking to further their education. My experience with Sqilco has been nothing short of exceptional. Thanks to Sqilco, I have gained a deeper understanding of my field of study and have been able to apply my knowledge in real-world situations.”',
        name: 'Name Surname',
        designation: 'Designation',
      },
      {
        imageUrl:
        "https://www.shutterstock.com/image-photo/young-handsome-business-man-dressed-260nw-1487434763.jpg",

        quote:
          '“I cannot recommend Sqilco enough for anyone looking to further their education. My experience with Sqilco has been nothing short of exceptional. Thanks to Sqilco, I have gained a deeper understanding of my field of study and have been able to apply my knowledge in real-world situations.”',
        name: 'Name Surname',
        designation: 'Designation',
      },
    // Add more data as needed
  ];

  useEffect(() => {
    const updateCardsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCardsPerPage(2); // 3 cards per page for larger screens
      } else {
        setCardsPerPage(1); // 1 card per page for smaller screens
      }
    };

    window.addEventListener('resize', updateCardsPerPage);
    return () => window.removeEventListener('resize', updateCardsPerPage);
  }, []);

  const totalPages = Math.ceil(cardData.length / cardsPerPage);
  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const visibleCards = cardData.slice(startIndex, endIndex);

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  return (
    <>
    <div className='p-8'>
    <span className='text-3xl font-[450] text-white text-center md:text-left'>Don’t take our Word, </span><span className="text_color_variation sm:text-3xl sm:font-[600] text-3xl font-[450] ">Take Theirs</span> 
    </div>
      <div className="flex justify-center">
        {visibleCards.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePrev={handlePrev}
        handleNext={handleNext}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Section7;
