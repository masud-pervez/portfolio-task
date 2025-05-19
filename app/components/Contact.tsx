import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#171b1a] text-white py-6 px-4 sm:px-8 md:px-16 lg:px-24 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
        {/* Left border column */}
        <div className="hidden md:block md:col-span-2"></div>

        {/* Main content */}
        <div className="md:col-span-4">
          <h1 className="mt-5 mb-5 text-4xl font-bold">Contact</h1>
          <form autoComplete="off" action="submit">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-7">
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-lg font-medium"
                >
                  First name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="border border-yellow-600 text-white text-sm rounded-lg bg-black block w-full p-2.5 focus:ring-yellow-500 focus:border-yellow-500 hover:border-yellow-500 outline-none"
                  required
                />
              </div>
              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-lg font-medium"
                >
                  Last name*
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="border border-yellow-600 text-white text-sm rounded-lg bg-black block w-full p-2.5 focus:ring-yellow-500 focus:border-yellow-500 hover:border-yellow-500 outline-none"
                  required
                />
              </div>
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg font-medium"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="border border-yellow-600 text-white text-sm rounded-lg bg-black block w-full p-2.5 focus:ring-yellow-500 focus:border-yellow-500 hover:border-yellow-500 outline-none"
                  required
                />
              </div>
              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-lg font-medium"
                >
                  Phone*
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="border border-yellow-600 text-white text-sm rounded-lg bg-black block w-full p-2.5 focus:ring-yellow-500 focus:border-yellow-500 hover:border-yellow-500 outline-none"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div className="mt-6">
              <label
                htmlFor="message"
                className="block mb-2 text-lg font-medium"
              >
                Message*
              </label>
              <textarea
                id="message"
                rows={4}
                className="border border-yellow-600 text-white text-sm rounded-lg bg-black block w-full p-2.5 focus:ring-yellow-500 focus:border-yellow-500 hover:border-yellow-500 outline-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-500 transition-all mt-6"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
