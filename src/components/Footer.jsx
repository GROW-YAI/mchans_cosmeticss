import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="container mx-auto px-6 py-12 lg:px-20 lg:py-16">
        {/* Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center lg:text-left">
          {/* Logo and Description */}
          <div className="flex flex-col items-center lg:items-start">
            <img src="/path-to-logo.png" alt="Logo" className="mb-4 w-32" />
            <p className="text-[#959CA8] text-base leading-relaxed max-w-xs">
              Transforming beauty routines with natural, effective skincare
              solutions.
            </p>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-[#959CA8] text-lg">
              <a href="tel:+123456789" className="hover:text-pink-500">
                +1 (234) 567-890
              </a>
            </p>
            <p className="text-[#959CA8] text-lg">
              <a href="mailto:info@example.com" className="hover:text-pink-500">
                info@example.com
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-[#959CA8] hover:text-pink-500">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-[#959CA8] hover:text-pink-500"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#our-story"
                  className="text-[#959CA8] hover:text-pink-500"
                >
                  Our Story
                </a>
              </li>
            </ul>
          </div>

          {/* Stay in Touch */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-semibold mb-4">Stay in Touch</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[#959CA8] hover:text-pink-500 transition"
              >
                <i className="fab fa-facebook-f">F</i>
              </a>
              <a
                href="#"
                className="text-[#959CA8] hover:text-pink-500 transition"
              >
                <i className="fab fa-instagram">I</i>
              </a>
              <a
                href="#"
                className="text-[#959CA8] hover:text-pink-500 transition"
              >
                <i className="fab fa-whatsapp">W</i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider and Footer Bottom */}
      <div className="bg-[#0F172A]">
        <hr className="border-[#2D3748] my-4" />
        <p className="text-center text-sm text-[#959CA8] py-4">
          © 2024 Lumière. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
