"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SvgComponent from "../(cards)/svgconponent";

interface Sponsor {
  _id: string;
  image: string; }

const Section6 = () => {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);


  return (
    <>
      <div className="bg-white p-6">
      <div className="p-6 pb-0">
          <span className='text-4xl  font-[450]  text-center md:text-left'>  Get Mentored By </span>
          <span className="text_color_variation sm:text-4xl sm:font-[600] text-4xl font-[450] ">The Best </span>
        </div>


        <div>
           
        {sponsors.map((sponsor) => (
            <SvgComponent key={sponsor._id} fileName={sponsor.image} />
          ))}
          
        </div>

    
      </div>
    </>
  );
};

export default Section6;
