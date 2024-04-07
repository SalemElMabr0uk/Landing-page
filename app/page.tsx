import WhyCard from "@/components/(cards)/whycard";
import Companies from "@/components/Companies";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Companies />
      <Guide />
      <WhyCard/>
   
      {/*
      <Features /> */}
      {/* <GetApp /> */}
    </>
  )
}
