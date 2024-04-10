"use client"
{/**roadmap section */}

import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../(cards)/Roadmapcards';
import Button from '../Button';
import Pagination from '../pagination';

const Section3 = () => {
  const [roadmaps, setRoadmaps] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchRoadmaps = async () => {
      try {
        const response = await axios.get('https://api.sqilco.com/api/roadmaps');
        setRoadmaps(response.data.data);
      } catch (error) {
        console.error('Error fetching roadmaps:', error);
      }
    };

    fetchRoadmaps();
  }, []);

  const cardsPerPage = 3;
  const totalPages = Math.ceil(roadmaps.length / cardsPerPage);
  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const visibleRoadmaps = roadmaps.slice(startIndex, endIndex);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  return (
    <section className="flex-Center flex-col p-8 bg-white ">
      <span className="text-4xl  font-[450]  text-center md:text-left">Work on </span>
      <span className="text_color_variation  text-4xl  sm:font-[600]  font-[450] ">
        Real Projects
      </span>
      <span className="text-4xl font-[450]  text-center md:text-left"> - Nothing beats real Experience</span>

      {/**card roadmap with pagination */}
      <div className="padding-container p-4 justify-center">
        <div className="flex justify-between items-center mb-4 ">
          <button onClick={handlePrev}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[30px]  hidden md:flex " viewBox="0 0 512 512">
              <path
                d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM231 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71L376 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-182.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L119 273c-9.4-9.4-9.4-24.6 0-33.9L231 127z"
                fill="#FB8971"
              />
            </svg>
          </button>

          <div className="flex flex-wrap gap-16">
            {visibleRoadmaps.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>

          <button onClick={handleNext}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[30px] hidden md:flex  " viewBox="0 0 512 512">
              <path
                d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z"
                fill="#FB8971"
              />
            </svg>
          </button>
        </div>

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      </div>

      <div className="flex justify-center p-8">
        <Button type="button" title="Explore All Projects" variant="btn_pink_orange" />
      </div>
    </section>
  );
};

export default Section3;
