import React from "react";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#111827] text-white">
      <div className="container mx-auto px-6 py-12 lg:px-20 lg:py-16">
        {/* Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center lg:text-left">
          {/* Logo and Description */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="text-2xl font-bold text-pink-500 mb-4 w-32 mx-auto lg:mx-0">McHans Cosmetics</div>
            <p className="text-[#959CA8] text-base leading-relaxed max-w-xs">
              Transforming beauty routines with natural, effective skincare
              solutions.
            </p>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-[#959CA8] text-lg">
              <a href="tel:+15551234567" className="hover:text-pink-500">
                +1 (555) 123-4567
              </a>
            </p>
            <p className="text-[#959CA8] text-lg">
              <a href="mailto:hello@mchanscosmetics.com" className="hover:text-pink-500">
                hello@mchanscosmetics.com
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about-product" className="text-[#959CA8] hover:text-pink-500">
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
                  href="#about-innovator"
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
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                className="text-[#959CA8] hover:text-pink-500 transition p-2 rounded-lg hover:bg-white/20"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://wa.me/15551234567"
                className="text-[#959CA8] hover:text-pink-500 transition p-2 rounded-lg hover:bg-white/20"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider and Footer Bottom */}
      <div className="bg-[#0F172A]">
        <hr className="border-[#2D3748] my-4" />
        <p className="text-center text-sm text-[#959CA8] py-4">
          © 2024 McHans Cosmetics. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;