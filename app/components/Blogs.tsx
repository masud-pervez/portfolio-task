/* eslint-disable @next/next/no-img-element */
import React from "react";
import { blogs } from "../utils/data";

const Blogs = () => {
  return (
    <section className="bg-[#171b1a] text-white py-6 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
        {/* Left border column */}
        <div className="hidden md:block md:col-span-2"></div>

        {/* Main content */}
        <div className="md:col-span-4">
          <h1 className="mt-5 mb-5 text-4xl font-bold">Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-7">
            <div className="grid gap-6">
              {blogs[0].map((item, idx) => (
                <div key={idx} className="bg-black rounded-md overflow-hidden shadow-md">
                  <img
                    className="w-full h-auto object-cover hover:scale-105 duration-300"
                    src={`/assets/blog/${item.img}`}
                    alt={item.title}
                  />
                  <div className="p-5">
                    <p className="text-sm text-[#747474]">{item.date}</p>
                    <h2 className="my-4 text-xl font-bold">{item.title}</h2>
                    <p className="text-[#979797] text-[14px]">{item.desc}</p>
                    <p className="text-[14px] text-white my-3 flex items-center">
                      <span className="w-[9px] h-[1px] bg-yellow-500 mr-2"></span>
                      {item.writer}
                      <span className="w-[9px] h-[1px] bg-yellow-500 ml-2"></span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid gap-6">
              {blogs[1].map((item, idx) => (
                <div key={idx} className="bg-black rounded-md overflow-hidden shadow-md">
                  <img
                    className="w-full h-auto object-cover hover:scale-105 duration-300"
                    src={`/assets/blog/${item.img}`}
                    alt={item.title}
                  />
                  <div className="p-5">
                    <p className="text-sm text-[#747474]">{item.date}</p>
                    <h2 className="my-4 text-xl font-bold">{item.title}</h2>
                    <p className="text-[#979797] text-[14px]">{item.desc}</p>
                    <p className="text-[14px] text-white my-3 flex items-center">
                      <span className="w-[9px] h-[1px] bg-yellow-500 mr-2"></span>
                      {item.writer}
                      <span className="w-[9px] h-[1px] bg-yellow-500 ml-2"></span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
