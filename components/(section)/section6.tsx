"use client"

import Image from "next/image";

import {
  amazon, atlassian, blinkit, citibank, cleartrip, etmoney, expedia, fastretailling, goldmansachs, googel, guardian,
  deutshebank, hoststar, ixigo, joshtalks, microsoft, oyo, park, paytm, phonepe, recur, samsung, shopify, sprinklr, swiggy, unitedhralthgroup, urbancompany
} from "../(cards)/svgs";
import { useState } from "react";

interface Sponsor {
  _id: string;
  image: string;
}

const Section6 = () => {

  return (
    <>
      <div className="bg-white p-8">

        <div className="py-8 ">
          <h2 className="text-2xl font-semibold  mb-6 ">
            <span className='text-4xl  font-[450]   md:text-left'> Our Students Got  </span>
            <span className="text_color_variation sm:text-4xl sm:font-[600] text-4xl font-[450] ">Placed </span>
            <span className='text-4xl  font-[450]    md:text-left'>at </span>
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Image src={amazon} alt="" className="max-w-full h-auto" />
            <Image src={atlassian} alt="" className="max-w-full h-auto" />
            <Image src={blinkit} alt="" className="max-w-full h-auto" />
            <Image src={citibank} alt="" className="max-w-full h-auto" />
            <Image src={cleartrip} alt="" className="max-w-full h-auto" />
            <Image src={etmoney} alt="" className="max-w-full h-auto" />
            <Image src={expedia} alt="" className="max-w-full h-auto" />
            <Image src={fastretailling} alt="" className="max-w-full h-auto" />
            <Image src={goldmansachs} alt="" className="max-w-full h-auto" />
            <Image src={googel} alt="" className="max-w-full h-auto" />
            <Image src={guardian} alt="" className="max-w-full h-auto" />
            <Image src={deutshebank} alt="" className="max-w-full h-auto" />
            <Image src={hoststar} alt="" className="max-w-full h-auto" />
            <Image src={ixigo} alt="" className="max-w-full h-auto" />
            <Image src={joshtalks} alt="" className="max-w-full h-auto" />
            <Image src={microsoft} alt="" className="max-w-full h-auto" />
            <Image src={oyo} alt="" className="max-w-full h-auto" />
            <Image src={park} alt="" className="max-w-full h-auto" />
            <Image src={paytm} alt="" className="max-w-full h-auto" />
            <Image src={phonepe} alt="" className="max-w-full h-auto" />
            <Image src={recur} alt="" className="max-w-full h-auto" />
            <Image src={samsung} alt="" className="max-w-full h-auto" />
            <Image src={shopify} alt="" className="max-w-full h-auto" />
            <Image src={sprinklr} alt="" className="max-w-full h-auto" />
            <Image src={swiggy} alt="" className="max-w-full h-auto" />
            <Image src={unitedhralthgroup} alt="" className="max-w-full h-auto" />
            <Image src={urbancompany} alt="" className="max-w-full h-auto" />
            <Image src={amazon} alt="" className="max-w-full h-auto" />

          </div>
          <div className="p-6 pb-0 justify-center text-center">
            <span className='text-2xl  text_color_variation2 font-[450] '> And many more...! </span>
          </div>
        </div>
      </div>


    </>
  );
};

export default Section6;