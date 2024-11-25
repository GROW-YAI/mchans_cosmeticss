import React from "react";
import HeroImage from "../assets/hero.avif";

const HeroSection = () => {
  return (
    <div className="bg-pink-50 w-full px-6 lg:px-20 py-12 pt-24 flex flex-col md:flex-row items-center gap-10">
      {/* Text Section */}
      <div className="flex flex-col w-full md:w-1/2 items-start">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug md:leading-tight">
          <span className="inline lg:block">Discover Your Natural</span>
          <span className="text-pink-500 inline lg:block ml-2 md:ml-0">Beauty</span>
        </h1>
        <p className="mt-4 md:mt-5 text-sm md:text-base lg:text-lg text-gray-600">
          Experience luxury skincare that transforms your beauty routine into a self-care ritual. Our products are crafted with natural ingredients to enhance your natural radiance.
        </p>
        <div className="mt-6 md:mt-8">
          <button className="bg-pink-500 text-white px-5 md:px-6 lg:px-8 py-2 md:py-3 rounded-full hover:bg-pink-600 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={HeroImage}
          alt="Hero Image"
          className="rounded-lg shadow-2xl w-full h-auto max-w-md md:max-w-lg lg:max-w-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
