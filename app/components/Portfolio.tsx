/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { FaCamera, FaPaintBrush } from "react-icons/fa";
import { HiOutlineViewGrid } from "react-icons/hi";
import { MdDesignServices, MdPhoneAndroid } from "react-icons/md";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Your original images mapped with categories
  const portfolioItems = [
    { id: 1, category: "Graphic Design", label: "Figma Mockup" },
    { id: 2, category: "Mobile App", label: "Figma Mockup" },
    { id: 3, category: "Graphic Design", label: "Figma Mockup" },
    { id: 4, category: "Mobile App", label: "Figma Mockup" },
    { id: 5, category: "Photography", label: "Figma Mockup" },
    { id: 6, category: "Mobile App", label: "Figma Mockup" },
    { id: 8, category: "Graphic Design", label: "Figma Mockup" }, // note you had 7 images in first column
  ];

  // Filter images based on active filter
  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  // Separate filtered images into two columns, same as your original layout
  const leftColumn = filteredItems.filter((_, idx) => idx % 2 === 0);
  const rightColumn = filteredItems.filter((_, idx) => idx % 2 !== 0);

  return (
    <section
      id="portfolio"
      className="bg-[#171b1a] text-white py-10 px-6 md:px-12 lg:px-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Sidebar (hidden on mobile) */}
        <div className="col-span-12 lg:col-span-4 hidden lg:block"></div>

        {/* Main content */}
        <div className="col-span-8 lg:col-span-8">
          <h1 className="text-4xl font-bold mb-5">Portfolio</h1>

          {/* Filter Navigation */}
          <div className="w-full h-16 bg-black rounded flex items-center justify-around px-4 shadow-lg shadow-amber-50/15 mb-7">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveFilter("All");
              }}
              className={`flex flex-col items-center justify-center h-16 ${
                activeFilter === "All"
                  ? "text-yellow-500 border-b-4 border-yellow-500"
                  : "text-white border-b-4 border-transparent hover:text-yellow-500 hover:border-yellow-500"
              } transition-all ease-in-out`}
            >
              <HiOutlineViewGrid className="block md:hidden" size={24} />
              <span className="hidden md:block text-sm font-semibold">All</span>
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveFilter("Graphic Design");
              }}
              className={`flex flex-col items-center justify-center h-16 ${
                activeFilter === "Graphic Design"
                  ? "text-yellow-500 border-b-4 border-yellow-500"
                  : "text-white border-b-4 border-transparent hover:text-yellow-500 hover:border-yellow-500"
              } transition-all ease-in-out`}
            >
              <FaPaintBrush className="block md:hidden" size={24} />
              <span className="hidden md:block text-sm font-semibold">
                Graphic Design
              </span>
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveFilter("Mobile App");
              }}
              className={`flex flex-col items-center justify-center h-16 ${
                activeFilter === "Mobile App"
                  ? "text-yellow-500 border-b-4 border-yellow-500"
                  : "text-white border-b-4 border-transparent hover:text-yellow-500 hover:border-yellow-500"
              } transition-all ease-in-out`}
            >
              <MdPhoneAndroid className="block md:hidden" size={24} />
              <span className="hidden md:block text-sm font-semibold">
                Mobile App
              </span>
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveFilter("Photography");
              }}
              className={`flex flex-col items-center justify-center h-16 ${
                activeFilter === "Photography"
                  ? "text-yellow-500 border-b-4 border-yellow-500"
                  : "text-white border-b-4 border-transparent hover:text-yellow-500 hover:border-yellow-500"
              } transition-all ease-in-out`}
            >
              <FaCamera className="block md:hidden" size={24} />
              <span className="hidden md:block text-sm font-semibold">
                Photography
              </span>
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveFilter("UI/UX Design");
              }}
              className={`flex flex-col items-center justify-center h-16 ${
                activeFilter === "UI/UX Design"
                  ? "text-yellow-500 border-b-4 border-yellow-500"
                  : "text-white border-b-4 border-transparent hover:text-yellow-500 hover:border-yellow-500"
              } transition-all ease-in-out`}
            >
              <MdDesignServices className="block md:hidden" size={24} />
              <span className="hidden md:block text-sm font-semibold">
                UI/UX Design
              </span>
            </a>
          </div>

          {/* Portfolio Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="grid gap-4">
              {leftColumn.map(({ id, label }) => (
                <div
                  key={id}
                  className="group relative overflow-hidden cursor-pointer rounded-lg"
                >
                  <img
                    className="h-auto max-w-full rounded-lg duration-300 group-hover:scale-105"
                    src={`/assets/portfolio/${id}.png`}
                    alt={`Portfolio ${id}`}
                  />
                  <div className="absolute inset-0 bg-black/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold">{label}</p>
                    <a href="#">
                      <AiOutlineLink
                        style={{
                          boxShadow: "0px 10px 25px rgba(255, 255, 255, 0.09)",
                        }}
                        size={30}
                        className="absolute rounded-full top-8 right-8 bg-black p-2"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid gap-4">
              {rightColumn.map(({ id, label }) => (
                <div
                  key={id}
                  className="group relative overflow-hidden cursor-pointer rounded-lg"
                >
                  <img
                    className="h-auto max-w-full rounded-lg duration-300 group-hover:scale-105"
                    src={`/assets/portfolio/${id}.png`}
                    alt={`Portfolio ${id}`}
                  />
                  <div className="absolute inset-0 bg-black/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold">{label}</p>
                    <a href="#">
                      <AiOutlineLink
                        style={{
                          boxShadow: "0px 10px 25px rgba(255, 255, 255, 0.09)",
                        }}
                        size={30}
                        className="absolute rounded-full top-8 right-8 bg-black p-2"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black h-52 relative shadow-lg rounded-xl p-6 flex justify-center items-center">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Website Design</h3>
                <p className="text-gray-600">Fitness Studio Website</p>
              </div>
              <a href="#">
                <AiOutlineLink
                  style={{
                    boxShadow: "0px 10px 25px rgba(255, 255, 255, 0.09)",
                  }}
                  size={30}
                  className="absolute rounded-full top-5 right-5 bg-black p-2"
                />
              </a>
            </div>
            <div className="bg-black h-52 relative shadow-lg rounded-xl p-6 flex justify-center items-center">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Photography</h3>
                <p className="text-gray-600">Photography Project</p>
              </div>
              <a href="#">
                <AiOutlineLink
                  style={{
                    boxShadow: "0px 10px 25px rgba(255, 255, 255, 0.09)",
                  }}
                  size={30}
                  className="absolute rounded-full top-5 right-5 bg-black p-2"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
