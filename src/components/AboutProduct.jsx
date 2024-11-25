import { Heart, Sparkles, Star } from "lucide-react";
import React from "react";

const AboutProductData = [
  {
    icon: <Sparkles />,
    title: "Natural Ingredients",
    note: "100% natural and organic ingredients",
  },
  {
    icon: <Heart />,
    title: "Cruelty Free",
    note: "Never tested on animals",
  },
  {
    icon: <Star />,
    title: "Premium Quality",
    note: "Dermatologically tested",
  },
];

const AboutProduct = () => {
  return (
    <div className="px-7 py-16 lg:px-20 bg-white">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {AboutProductData.map((data) => (
          <div
            className="flex flex-col gap-3 justify-center items-center"
            key={data.title}
          >
            <div className="bg-pink-50 w-14 rounded-full flex p-4 text-pink-500">
              {data.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              {data.title}
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-600">
              {data.note}
            </p>
          </div>
        ))}
      </div>

      {/* Client Note Section */}
      <div className="mt-16 px-6 lg:px-32 text-center">
        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-serif italic">
          "Every product we create is a reflection of our commitment to quality,
          self-care, and beauty. Join us in celebrating the art of natural
          skincare and discover your inner glow."
        </p>
        <span className="block mt-4 text-sm md:text-base lg:text-lg text-pink-500 font-medium">
          — McHans Cosmetics
        </span>
      </div>
    </div>
  );
};

export default AboutProduct;
