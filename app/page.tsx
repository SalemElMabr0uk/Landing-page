"use client"
import Hero from "@/components/Hero";

import Section2 from "@/components/(section)/Section2";
import Section3 from "@/components/(section)/section3";
import Section4 from "@/components/(section)/section4";
import Section5 from "@/components/(section)/section5";
import Section7 from "@/components/(section)/section7";
import Section8 from "@/components/(section)/section8";
import Section9 from "@/components/(section)/section9";
import Section6 from "@/components/(section)/section6";



export default function Home() {
  return (
    <>
    <div>
    <Hero />
      <Section2/>
      <Section3 />   
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
      <Section9/>
      {/*
      <Features /> */}
      {/* <GetApp /> */}
    </div>
 
    </>
  )
}
