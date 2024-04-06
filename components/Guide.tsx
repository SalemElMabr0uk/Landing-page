"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './(cards)/Roadmapcards';

const Guide = () => {
  const [roadmaps, setRoadmaps] = useState([]);

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

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i}>
          <img src={i < rating ? "/star-16.png" : "/star-17.png"} alt="star" />
        </span>
      );
    }
    return stars;
  };

  return (
    <section className="flex-Center flex-col p-8 bg-white ">
      <span className='text-3xl  font-bold text-center md:text-left'>
        Work on </span><span className="text-orange-10 text-3xl  font-bold  text-center md:text-left">Real Projects</span><span className='text-3xl  font-bold text-center md:text-left'> - Nothing beats real experience
      </span>

      <div className=" rounded-md">
        <div className="flex  justify-start  overflow-x-auto hide-scrollbar  overflow-hidden">
          {roadmaps.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guide;
