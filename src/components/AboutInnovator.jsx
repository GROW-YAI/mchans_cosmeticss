import React from "react";

const AboutInnovator = () => {
  return (
    <div id="about-innovator" className="py-16 px-6 lg:px-20 bg-white">
      <div className="flex flex-col lg:flex-row items-center gap-10">
       
        <div className="w-full lg:w-1/3">
          <img
            src="/assets/innovator.jpg"
            alt="Dr. Jane Doe, founder and innovator of McHans Cosmetics"
            className="rounded-full object-cover shadow-lg w-48 h-48 lg:w-64 lg:h-64 mx-auto lg:mx-0"
          />
        </div>

       
        <div className="w-full lg:w-2/3 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
          <p className="mt-4 text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed">
Dr. Jane Doe
            the visionary behind <span className="font-medium">McHans Cosmetics</span>. 
Dr. Jane Doe has dedicated her life
            that empower individuals to embrace their unique radiance.
          </p>
          <p className="mt-6 text-gray-600 text-sm md:text-base lg:text-lg">
"Beauty is not about perfection; it's about confidence and self-love."
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default AboutInnovator;
