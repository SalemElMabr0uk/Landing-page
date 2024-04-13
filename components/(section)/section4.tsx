import Image from "next/image";
import { iconroadmap, onlinelearning, teamwork, practice1, work } from "../(cards)/svgs";
{/**progress section */ }
const Section4 = () => {
  return (
    <div className="bg-navy p-4 rounded-lg">
      <div className='p-8'>
        <span className='text-4xl  font-[450] text-white text-center md:text-left'>At </span>
        <span className="text_color_variation sm:text-4xl sm:font-[600] text-4xl font-[450] ">Sqilco</span>
        <span className='text-4xl  font-[450] text-white text-center md:text-left'>, You... </span>
      </div>


      <div className="flex flex-row md:flex-row  justify-center items-center">
        <div className="flex flex-col items-center md:w-[100px]">
          <div className="md:h-[60px] h-[5px]  md:w-1 w-0.5 bg-white invisible"></div> {/* Vertical line */}
          <Image src={iconroadmap} alt="" className="md:w-[100px] md:h-[100px] w-[50px] h-[50px]" />
          <div className="md:h-[60px]  h-[90px]   md:w-1 w-0.5 bg-white "></div> {/* Vertical line */}
        </div>
        <div className="flex flex-col p-2 ml-0 md:ml-8 md:w-[450px] w-[250px]">
        <Image src={onlinelearning} alt="" className="md:w-[100px] md:h-[200px] w-[30px] h-[30px] md:hidden " />

          <span className="text_color_variation md:text-xl text-sm">Don’t pay for redundant courses</span>
          <span className="text-[#A3A3A3] md:text-lg text-xs">We believe learning resources are already everywhere, we just curate them. So, you can leverage the goldmine that is internet.</span>
        </div>
        <Image src={onlinelearning} alt="" className="md:w-[100px] md:h-[200px] w-[40px] h-[40px] hidden md:flex" />
      </div>


      <div className="flex flex-row md:flex-row  justify-center items-center">
        <div className="flex flex-col items-center md:w-[100px]">
        <div className="md:h-[60px] h-[20px]    md:w-1 w-0.5  bg-white "></div> {/* Vertical line */}
          <Image src={iconroadmap} alt="" className="md:w-[100px] md:h-[100px] w-[50px] h-[50px]" />
          <div className="md:h-[60px]  h-[90px]   md:w-1 w-0.5 bg-white "></div> {/* Vertical line */}
        </div>
        <div className="flex flex-col p-2 ml-0 md:ml-8 md:w-[450px] w-[250px]">
        <Image src={practice1} alt="" className="md:w-[100px] md:h-[200px] w-[30px] h-[30px] md:hidden " />

          <span className="text_color_variation  md:text-xl text-sm">Don’t just learn. BUILD!</span>
          <span className="text-[#A3A3A3] md:text-lg  text-xs  " >World is infinite, and the fastest way to get better is by continuously pushing on a project. </span>
        </div>
        <Image src={practice1} alt="" className="md:w-[100px] md:h-[200px] w-[40px] h-[40px] hidden md:flex" />
      </div>


      <div className="flex flex-row md:flex-row  justify-center items-center">
        <div className="flex flex-col items-center md:w-[100px]">
        <div className="md:h-[60px] h-[20px]   md:w-1 w-0.5 bg-white "></div> {/* Vertical line */}
          <Image src={iconroadmap} alt="" className="md:w-[100px] md:h-[100px] w-[50px] h-[50px]" />
          <div className="md:h-[60px]  h-[100px]   md:w-1 w-0.5 bg-white "></div> {/* Vertical line */}
        </div>
        <div className="flex flex-col p-2 ml-0 md:ml-8 md:w-[450px] w-[250px]">
        <Image src={work} alt="" className="md:w-[100px] md:h-[200px]  w-[30px] h-[30px] md:hidden " />

          <span className="text_color_variation md:text-xl text-sm">Work with Data, not Fantasies</span>
          <span className="text-[#A3A3A3] md:text-lg  text-xs" >Forget random ideas. we do check the viability of product before picking them.
            If it’s not going to end user, you won’t be building it.</span>
        </div>
        <Image src={work} alt="" className="md:w-[100px] md:h-[200px]  w-[40px] h-[40px] hidden md:flex" />
      </div>


      <div className="flex flex-row md:flex-row  justify-center items-center">
        <div className="flex flex-col items-center md:w-[100px]">
        <div className="md:h-[60px]  h-[20px]   md:w-1 w-0.5  bg-white "></div> {/* Vertical line */}
          <Image src={iconroadmap} alt="" className="md:w-[100px] md:h-[100px] w-[50px] h-[50px]" />
          <div className="md:h-[60px]  h-[90px]   md:w-1 w-0.5 bg-white  invisible"></div> {/* Vertical line */}
        </div>
        <div className="flex flex-col p-2 ml-0 md:ml-8 md:w-[450px] w-[250px]">
        <Image src={teamwork} alt="" className="md:w-[100px] md:h-[200px]  w-[30px] h-[30px] md:hidden" />

          <span className="text_color_variation md:text-xl text-sm ">Work with Industry Professionals</span>
          <span className="text-[#A3A3A3] md:text-lg  text-xs" >Industry professionals can take you places if you show accountability and take ownership.
            Your work always speaks for itself. </span>
        </div>
        <Image src={teamwork} alt="" className="md:w-[100px] md:h-[200px]  w-[40px] h-[40px]  hidden md:flex " />
      </div>







    </div>

  );
}

export default Section4;
