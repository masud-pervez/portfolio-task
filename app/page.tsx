import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Resume from "./components/Resume";
import WorkHistory from "./components/WorkHistory";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Blogs from "./components/Blogs";
import Priceing from "./components/Priceing";
import Contact from "./components/Contact";

const HomePage = () => {
  return (
    <main
      id="home"
      style={{
        boxShadow: "0px 10px 25px rgba(255, 255, 255, 0.09)",
      }}
      className="relative bg-[#171b1a] container mx-auto md:w-4/6 w-5/6 back-shadow"
    >
      <div className="text-[90px] absolute md:-top-20 -top-10 md:-left-36 -left-20 font-bold text-white/5">
        Home
      </div>
      <Navbar />
      <HeroSection />
      <Resume />
      <WorkHistory />
      <Skills />
      <Portfolio />
      <Blogs />
      <Priceing />
      <Contact />
    </main>
  );
};

export default HomePage;
