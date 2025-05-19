import React from "react";
import { plans } from "../utils/data";

const Pricing = () => {
  return (
    <section className="bg-[#171b1a] text-white py-6 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
        {/* Left border column */}
        <div className="hidden md:block md:col-span-2"></div>

        {/* Main content */}
        <div className="md:col-span-4">
          <h1 className="mt-5 mb-5 text-4xl font-bold">Pricing</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-7">
            {plans.map((plan, index) => (
              <div key={index} className="bg-[#040404] py-10 rounded-md shadow-md">
                <div className="mb-5">
                  <div className="bg-[#4a2e0c] px-5 py-3 rounded-r-3xl inline-block w-max">
                    {plan.title}
                  </div>
                </div>
                <div className="px-5">
                  <h1 className="text-[48px] font-bold mb-3">
                    ${plan.price}
                    <span className="text-[18px] font-light">/month</span>
                  </h1>
                  <div className="bg-[#121414] px-4 py-6 mb-4 rounded-md">
                    <ul className="flex flex-col gap-3">
                      {plan.features.map((feature, idx) => {
                        const name =
                          typeof feature === "string" ? feature : feature.name;
                        const disabled =
                          typeof feature === "object" && feature.disabled;
                        return (
                          <li
                            key={idx}
                            className={disabled ? "text-[#979797]" : ""}
                          >
                            {disabled ? <del>{name}</del> : name}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  {plan.isFilledButton ? (
                    <button className="py-3 text-[16px] font-bold px-8 bg-gradient-to-r from-[#F5BD4D] to-[#F89222] rounded-lg w-full md:w-auto">
                      Get Started
                    </button>
                  ) : (
                    <button className="py-3 text-[16px] px-8 border border-amber-600 bg-gradient-to-r from-[#F5BD4D] to-[#F89222] bg-clip-text font-extrabold text-transparent rounded-lg w-full md:w-auto">
                      Get Started
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
