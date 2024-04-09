import Image from "next/image";
{/**progress section */ }
const Section4 = () => {
  return (
    <div className="bg-navy p-4 rounded-lg">
      <div className='p-8'>
        <span className='text-4xl  font-[450] text-white text-center md:text-left'>At </span>
        <span className="text_color_variation sm:text-4xl sm:font-[600] text-4xl font-[450] ">Sqiqlco</span>
        <span className='text-4xl  font-[450] text-white text-center md:text-left'>, You... </span>
      </div>

      <div className="flex ">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="bg-pink rounded-full p-2 mb-2">
              <Image src="/stack-of-coins-icon.png" alt="Coins Icon" width={30} height={30} />
            </div>
          
          </div>
          {/* Repeat the above block for each icon and text */}
        </div>
        <div className="border-l-2 border-dotted border-pink mx-4 h-full"></div>
        <div className="flex flex-col justify-between">
          <p>Explanation of the first benefit...</p>
          {/* Repeat for each benefit */}
        </div>
      </div>
    </div>
  );
}

export default Section4;
