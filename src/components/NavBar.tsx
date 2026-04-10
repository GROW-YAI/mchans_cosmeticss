import { ShoppingBag, Menu, X} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navBarRef = useRef<HTMLDivElement>(null)

  const handleClicksOutside = (event: MouseEvent) => {
    if (navBarRef.current && event.target instanceof Node && !navBarRef.current.contains(event.target)){
        setMenuOpen(false);
    }
  };


    useEffect(() =>{
        document.addEventListener('mousedown', handleClicksOutside);

        return () => {
            document.removeEventListener('mousedown', handleClicksOutside);
         }
    
    }, []);


  return (
    <div ref={navBarRef} className="fixed w-full bg-white py-4 px-6 lg:px-20 shadow-md z-50">
      <div className="flex items-center justify-between">
<div className="text-2xl font-bold text-pink-500">McHans</div>

        {/* Menu for Small Screens */}
        <button
          className="lg:hidden block text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen?<X />:<Menu size={24} />}
        </button>

        {/* Links for Large Screens */}
        <div className="hidden lg:flex items-center gap-10">
          <a 
            href="#about-product" 
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about-product')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-gray-700 hover:text-pink-500 transition cursor-pointer"
          >
            About
          </a>
          <a href="#products" className="text-gray-700 hover:text-deepBlue transition">
            Products
          </a>
          <a href="#about-innovator" className="text-gray-700 hover:text-deepBlue transition">
            Our Story
          </a>
          <a href="#contact" className="text-gray-700 hover:text-deepBlue transition">
            Contact
          </a>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-300 rounded-full text-gray-700 hover:bg-slate-400 transition">
            <ShoppingBag className="size-5" /> Shop now
          </button>
        </div>
      </div>

      {/* Links for Small Screens */}
      {menuOpen && (
        <div className="flex flex-col items-start mt-4 gap-4 lg:hidden transition-transform duration-300 ease-in-out transform">
          <a href="#about-product" className="text-gray-700 hover:text-deepBlue transition">
            About
          </a>
          <a href="#products" className="text-gray-700 hover:text-deepBlue transition">
            Products
          </a>
          <a href="#about-innovator" className="text-gray-700 hover:text-deepBlue transition">
            Our Story
          </a>
          <a href="#contact" className="text-gray-700 hover:text-deepBlue transition">
            Contact
          </a>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-300 rounded-full text-gray-700 hover:bg-slate-400 transition">
            <ShoppingBag className="size-5" /> Shop now
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
