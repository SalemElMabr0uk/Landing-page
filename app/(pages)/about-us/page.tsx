import { AboutUsSection2Illustration, AboutUsSection3Illustration, AboutUsSection4Illustration, SqilcoDotDesign } from '@/components/svgs'
import React from 'react'

export default function index() {
  return (
    <div className='flex m-2 text-white items-center justify-start flex-col mt-10'>
  <section className='section-1 min-h-[50vh] text-5xl font-semibold text-center max-w-[1024px] flex items-center justify-center flex-col'>
    <h1 className='heading'>At Sqilco, We Believe in</h1>
    <h1 className='text-gradient-90deg'>Learning by Doing</h1>
    <p className="josefin-sans-font text-xl font-normal md:max-w-[50%] mt-10">
      Our team of passionate techies is dedicated to changing the way students learn by providing resources tailored to their individual goals and aspirations.
    </p>
  </section>
  
  <section className="section-2 m-2 flex text-center flex-col  max-w-[1024px] md:h-[50vh]">
  <h1 className="text-4xl font-semibold md:hidden">Our <span className="text-gradient-pink-orange">Mission</span></h1>

    <div className='flex flex-col-reverse justify-center  md:flex-row'>
    <div className="left  flex-1 flex flex-col md:text-left justify-center  md:m-5">
    <h1 className="text-4xl font-semibold hidden  md:block mb-5">Our <span className="text-gradient-pink-orange">Mission</span></h1>

      <div className="josefin-sans-font text-xl mt-5">
        <p>
          Our mission is simple: to democratize education and <span className="text-sqilcoPink">make learning accessible to all.</span>
        </p>
        <p className="mt-5">
          That’s why we've developed a dynamic platform that allows students to discover personalized learning paths that cater to their specific needs.
        </p>
      </div>
    </div>
    <div className="right md:m-5 h-1/2 flex items-center  md:h-[90%] flex-1">
      <AboutUsSection2Illustration />
    </div>
    </div>
  </section>
  
  <section className='section-2 min-h-[50vh] mt-10 text-5xl font-semibold text-center max-w-[1024px] flex items-center justify-center flex-col'>
  <h1 className="text-4xl font-semibold md:hidden">What we <span className="text-gradient-pink-orange">Offer</span></h1>

   <div className='flex flex-col md:flex-row'>
   <div className="left h-1/2 md:h-[90%] md:m-5  flex-1">
      <AboutUsSection3Illustration className="w-full h-full" />
    </div>
    <div className="right flex-1 flex flex-col md:text-right justify-center  md:m-5">
      <h1 className="text-4xl font-semibold hidden md:block mb-5">What we <span className="text-gradient-pink-orange">Offer</span></h1>
      <div className="josefin-sans-font text-xl mt-5">
        <p>
          At Sqilco, we offer more than just roadmaps.
        </p>
        <p className="mt-5">
          We provide a suite of services <span className='text-sqilcoPink'>designed to support students on every step of the way</span> on their educational journey. From curated learning paths to hands-on projects, we help you reach your full potential
        </p>
      </div>
    </div>
   </div>
     
  </section>
  <h1 className='text-4xl font-semibold mt-10'>Why <span className='text-gradient-pink-orange'>Choose Us</span></h1>

  <section className='section-3 min-h-[50vh] mt-10 text-5xl font-semibold text-center max-w-[1024px] flex items-center justify-center flex-col'>
   
   <div className="flex flex-col md:flex-row">
   <div className="left h-1/2 md:h-[90%] md:m-5 flex-1">
      <AboutUsSection4Illustration className="w-full h-full" />
    </div>
    <div className="right text-left flex-1 flex flex-col justify-center md:m-5">
      <div className="w-full flex justify-between items-center josefin-sans-font text-xl">
        <SqilcoDotDesign className="h-12 md:h-[70px] w-12 md:w-[70px]" />
        <div className='w-[80%]'>
          <p>Our team of experienced mentors is here to <span className="text-sqilcoOrange">provide personalized guidance and support</span>, ensuring that you stay on track and achieve your goals.</p>
        </div>
      </div>
      <div className="w-full flex justify-between items-center josefin-sans-font text-xl mt-10">
        <SqilcoDotDesign className="h-12 md:h-[70px] w-12 md:w-[70px]" />
        <div className='w-[80%]'>
          <p>We understand that life can be hectic, which is why our platform is designed to   <span className="text-sqilcoOrange">fit seamlessly into your schedule.</span></p>
        </div>
      </div>
      <div className="w-full flex justify-between items-center josefin-sans-font text-xl mt-10">
        <SqilcoDotDesign className="h-12 md:h-[70px] w-12 md:w-[70px]" />
        <div className='w-[80%]'>
          <p>We believe that quality education should be  <span className="text-sqilcoOrange">accessible to everyone</span>, hence we offer competitive pricing to suit any budget.</p>
        </div>
      </div>
    </div>
   </div>
     
  </section>
  <section className="get-in-touch mt-10 text-center">
      <h1 className="text-4xl font-semibold">Get in Touch <span className='text-gradient-pink-orange'>With Us</span></h1>
      <h6 className="text-lg font-[500] text-textMuted">Got queries? Drop us a message on <a href="mailto:reach@sqilco.com" target='_blank' className='text-sqilcoOrange'>reach@sqilco.com</a></h6>
  </section>
</div>

  )
}
