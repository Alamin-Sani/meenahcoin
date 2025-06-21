"use client"

import DescriptiveSection from "@/Components/Description";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import HowItWorks from "@/Components/HowItWorks";
import Navbar from "@/Components/Navbar";
import Partnership from "@/Components/Partners";
import Roadmap from "@/Components/Roadmap";
import Tokenomics from "@/Components/tekonomics;
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partnership />
      <DescriptiveSection />
      <HowItWorks />
      <Roadmap />
      <Tokenomics />
      <Footer />
    </>
  );
}
