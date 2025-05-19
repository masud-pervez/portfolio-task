import React from "react";
import { workHistory } from "../utils/data";
import { HiOutlineAcademicCap } from "react-icons/hi";

const WorkHistory = () => {
  return (
    <section id="workhistory" className="bg-[#171b1a] text-white py-10 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Sidebar (hidden on mobile) */}
        <div className="col-span-12 lg:col-span-4 hidden lg:block"></div>

        {/* Main Content */}
        <div className="col-span-8 lg:col-span-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#333333] rounded-md">
              <HiOutlineAcademicCap size={25} className="text-yellow-500" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold">Work History</h2>
          </div>

          <div className="relative md:border-l border-gray-600 md:pl-6">
            {workHistory.map((item, index) => (
              <div key={index} className="md:mb-12 mb-6 relative">
                <p className="text-sm text-gray-300 border border-gray-600 inline-block px-2 py-1 rounded-md mb-2">
                  {item.year}
                </p>

                <div className="bg-[#121414] p-4 rounded-md border border-gray-700">
                  <h3 className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] bg-clip-text text-lg font-extrabold text-transparent">
                    {item.positon}
                  </h3>
                  <p className="text-sm text-[#8F8F8F] border-b pb-2">
                    {item.company}
                  </p>
                  <p className="text-base mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WorkHistory;
