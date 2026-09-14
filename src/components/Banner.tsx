import React from "react";
import bannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="container mx-auto px-4 md:px-20 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-11 md:gap-32">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Build Your Ideal <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-pink-500">
              Development Stack
            </span>
          </h1>

          <p className="text-gray-500 my-5 text-sm sm:text-base">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <button className="bg-linear-to-r from-orange-500 to-pink-500 hover:opacity-90 text-white font-semibold px-5 py-3 rounded-xl transition duration-200">
              Explore Technologies
            </button>
            <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold px-5 py-3 rounded-xl transition duration-200">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img src={bannerImg} alt="Banner" className="w-full max-w-md" />
        </div>
      </div>
    </div>
  );
};
export default Banner;
