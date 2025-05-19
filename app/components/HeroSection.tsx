import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

import { LuDownload } from "react-icons/lu";
import { navLinks } from "../utils/data";

const HeroSection = () => {

  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 px-0 md:px-12 lg:px-24">
      {/* Left: Image and Social Icons */}
      <div className="col-span-10 lg:col-span-4 flex flex-col items-center bg-black">
        <Image src="/assets/user.png" width={330} height={550} alt="User" />

        {/* Social Icons */}
        <div
          style={{ boxShadow: "0px -10px 25px rgba(255, 255, 255, 0.09)" }}
          className="flex justify-center space-x-4"
        >
          {[FaFacebookF, FaLinkedinIn, FaPinterestP, FaTwitter].map(
            (Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-white bg-[#121414] p-2 rounded-full"
              >
                <Icon className="w-5 h-5" />
              </a>
            )
          )}
        </div>
      </div>

      {/* Right: Intro Text */}
      <div className="col-span-10 lg:col-span-8 flex flex-col justify-center px-6">
        <h1 className="text-yellow-500 text-sm md:text-base">INTRODUCTION</h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mt-2">
          {"I'm"} a Creative Developer & UI/UX Design Expert
        </h2>
        <p className="text-white/90 mt-2 text-sm md:text-base">
          24 years / Robert Smith / UK London
        </p>
        <p className="text-[#C6C6C6] mt-6 text-sm md:text-base leading-relaxed">
          Prolific, full stack web developer with a passion for metrics and
          beating former best-yets. Prototyped 25 new product features per year
          for Flexor, Inc. Decreased rework by 22% and costs by 15%.
          Consistently receive high user experience scores for all web
          development projects, including a 55% increase for Flexor, Inc.
          Passionate about building world class web applications. One of my
          sites received a 2020 Webby for Best Navigation and Structure.
        </p>
        <div className="flex justify-center md:justify-start">
          <a download href="/Masud Pervez.pdf"  className="mt-8 bg-gradient-to-r from-[#F5BD4D] to-[#F89222] text-white px-6 py-3 rounded-3xl flex items-center gap-3 w-max">
            Download CV <LuDownload size={20} />
          </a>
        </div>
      </div>

      {/* Left Floating Vertical Nav (only for large screen) */}
      <div className="hidden lg:block absolute bg-[url('/assets/left.png')] bg-no-repeat bg-contain bg-bottom bottom-0 left-0 text-white">
        <div className="w-24 h-[510px] flex flex-col gap-14 justify-center items-center">
          {navLinks.map((item, idx) => (
            <a href={item.href} title={item.name} key={idx}>
              <item.icon
                className="stroke-1"
                size={25}
                color={idx === 0 ? "#F5BD4D" : "#646464"}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Right Floating Text & Language (only for large screen) */}
      <div className="hidden lg:block absolute bg-[url('/assets/right.png')] bg-no-repeat bg-contain bg-bottom bottom-0 right-0 text-white">
        <div className="w-24 h-[510px] flex flex-col gap-10 justify-end items-center py-4">
          <div className="w-[510px] text-xs rotate-90 whitespace-nowrap">
            © design by themefisher developed by gethugothemes
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <button className="bg-[#343434] text-white font-bold p-2 py-3 text-xs rounded-full">
              Fr
            </button>
            <button className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] text-white font-bold py-2 px-2 rounded-full text-xs">
              En
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
