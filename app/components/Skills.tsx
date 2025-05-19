import React from "react";
import { skills } from "../utils/data";

const Skills = () => {
  return (
    <section className="bg-[#171b1a] text-white py-10 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Sidebar (hidden on mobile) */}
        <div className="col-span-12 lg:col-span-4 hidden lg:block"></div>

        {/* Main Content */}
        <div className="col-span-8 lg:col-span-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Skills</h2>

          <div className="flex flex-col gap-8 pb-5 w-full">
            {skills.map((item, idx) => (
              <div key={idx} className="w-full flex flex-col">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-xl">{item.title}</h3>
                  <span className="text-base md:text-lg bg-gradient-to-r from-[#F5BD4D] to-[#F89222] bg-clip-text font-extrabold text-transparent">
                    {item.percent}
                  </span>
                </div>
                <div className="bg-[#5a401d] w-full rounded-full overflow-hidden mt-2">
                  <div
                    className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] h-4 rounded-r-full"
                    style={{ width: item.percent }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Skills;
