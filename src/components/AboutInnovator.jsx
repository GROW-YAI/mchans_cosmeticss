import React from "react";
import InnovatorImg from '../assets/innovator.jpg'

const AboutInnovator = () => {
  return (
    <div className="py-16 px-6 lg:px-20 bg-white">
      <div className="flex flex-col lg:flex-row items-center gap-10">
       
        <div className="w-full lg:w-1/3">
          <img
            src={InnovatorImg}
            alt="Innovator Image"
            className="rounded-full object-cover shadow-lg w-48 h-48 lg:w-64 lg:h-64 mx-auto lg:mx-0"
          />
        </div>

       
        <div className="w-full lg:w-2/3 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
          <p className="mt-4 text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed">
            Meet <span className="text-pink-500 font-medium">(Innovator Name)</span>, 
            the visionary behind <span className="font-medium">McHans Cosmetics</span>. 
            With a passion for natural beauty and self-care, (Name) has dedicated their life to creating products 
            that empower individuals to embrace their unique radiance.
          </p>
          <p className="mt-6 text-gray-600 text-sm md:text-base lg:text-lg">
            "(a quote or statement by innovator)"
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default AboutInnovator;
