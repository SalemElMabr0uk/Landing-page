"use client"
{/***sponsor section */ }

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


interface sponsor {
    _id: string;
    image: string;
}

const Section6 = () => {
    const [sponsor] = useState<sponsor[]>([]);

    return (
        <>
            <div className="bg-white p-6 ">
                <div className="p-6">
                    <span className='text-4xl  font-[450]  text-center md:text-left'> Our Students Got </span>
                    <span className="text_color_variation sm:text-4xl sm:font-[600] text-4xl font-[450] ">Placed </span>
                    <span className='text-4xl  font-[450]  text-center md:text-left'>at</span>
                </div>

                <div className=" bg-white flex flex-wrap justify-center ">
                    <img src="./image.png"/>
                    {sponsor.map((item, index) => (
                        <div key={index} >
                            <div >
                                <Link href={`/roadmap/${item._id}`}  >
                                    <img src={item.image} alt="Icon" />
                                </Link>
                                
                            </div>
                        </div>

                    ))}
                </div>

                <h1 className="text_color_variation2 sm:text-3xl sm:font-[600] text-3xl font-[450] justify-center flex">And many more...!</h1>

            </div>
        </>
    );
}

export default Section6;
