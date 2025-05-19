import React from "react";
import { IoHomeOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <section className="bg-black text-white grid grid-cols-1 md:grid-cols-3 md:py-4 md:px-24 gap-4 items-center px-4 py-6">
      {/* Left: Logo & Title */}
      <div className="flex flex-col md:items-start items-center border-b md:border-b-0 md:border-r border-[#353535] md:pr-6">
        <h1 className="text-3xl font-extrabold">
          Daryl <span className="text-yellow-500">Smith</span>
        </h1>
        <p className="text-base md:text-lg text-gray-400">UI/UX designer</p>
      </div>

      {/* Right: Home + Button */}
      <div className="flex col-span-2 justify-between items-center space-x-4 w-full">
        <a
          href="#"
          className="flex items-center space-x-2 text-gray-300 hover:text-white pl-0 md:pl-8"
        >
          <span className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] rounded-md text-white p-2">
            <IoHomeOutline size={16} />
          </span>
          <span className="font-bold text-lg md:text-xl">Home</span>
        </a>
        <button className="cursor-pointer rounded-full border border-yellow-500 text-yellow-500 px-4 py-2 text-sm hover:bg-gradient-to-r from-[#F5BD4D] to-[#F89222] hover:text-white transition duration-200">
          Talk To Me
        </button>
      </div>
    </section>
  );
};

export default Navbar;
