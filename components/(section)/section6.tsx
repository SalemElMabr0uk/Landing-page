"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  amazon, atlassian, blinkit, citibank, cleartrip, etmoney, expedia, fastretailling, goldmansachs, googel, guardian,
  deutshebank, hoststar, ixigo, joshtalks, microsoft, oyo, park, paytm, phonepe, recur, samsung, shopify, sprinklr, swiggy, unitedhralthgroup, urbancompany
} from "../(cards)/svgs";

interface Sponsor {
  _id: string;
  image: string;
}

const Section6 = () => {
  const isMobile = window.innerWidth <= 768;

  const svgRows: any[][] = [
    [amazon, atlassian, blinkit, citibank, cleartrip, etmoney, expedia, fastretailling],
    [goldmansachs, googel, guardian, deutshebank, hoststar, ixigo, joshtalks, microsoft],
    [oyo, park, paytm, phonepe, recur, samsung, shopify, sprinklr],
    [swiggy, unitedhralthgroup, urbancompany]
  ];

  return (
    <>
      <div className="bg-white p-6">
        <div className="p-6 pb-0">
          <span className='text-4xl  font-[450]  text-center md:text-left'>  Get Mentored By </span>
          <span className="text_color_variation sm:text-4xl sm:font-[600] text-4xl font-[450] ">The Best </span>
        </div>

        <div className="flex flex-col p-4 pb-0 justify-center"> 
          <div className="flex flex-col p-8">
            {svgRows.map((row, rowIndex) => (
              <div key={rowIndex} className={`flex flex-row justify-center ${isMobile ? 'justify-center' : 'flex-wrap'}`}>
                {row.map((svg, index) => (
                  <div key={index} className={`w-${isMobile ? '1/2' : '1/6'} p-4`}>
                    <Image src={svg} alt={`Sponsor ${index + 1}`} width={100} height={100} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="p-6 pb-0 justify-center text-center">
          <span className='text-2xl  text_color_variation2 font-[450] '> And many more...! </span>
        </div>
      </div>
    </>
  );
};

export default Section6;
