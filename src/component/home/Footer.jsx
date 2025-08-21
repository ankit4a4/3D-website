"use client";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent border-t border-white/10 backdrop-blur-lg relative">
      <div className=" mx-auto px-[4vw] py-[8vh] md:py-[10vh] grid grid-cols-1 md:grid-cols-3 gap-[5vh] md:gap-[3vw]">
        
        {/* Brand / About */}
        <div className="space-y-[2vh]">
          <h2 className="text-[2.8vh] md:text-[1.5vw] font-bold text-white">SEO & SMM</h2>
          <p className="text-[2.2vh] md:text-[1.1vw] text-gray-400 ">
            Helping businesses grow online with SEO & social media marketing.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:items-center space-y-[2vh]">
          <h3 className="text-[2.4vh] md:text-[1.2vw] font-semibold text-white">Quick Links</h3>
          <ul className="space-y-[1.5vh] text-[2vh] md:text-[1vw] text-gray-300">
            <li><a href="#hero" className="hover:text-cyan-400 transition">Home</a></li>
            <li><a href="#services" className="hover:text-cyan-400 transition">Services</a></li>
            <li><a href="#portfolio" className="hover:text-cyan-400 transition">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div className="flex flex-col md:items-end space-y-[2vh]">
          <h3 className="text-[2.4vh] md:text-[1.2vw] font-semibold text-white">Follow Us</h3>
          <div className="flex gap-[2.5vh] md:gap-[1.2vw]">
            <a href="#" className="w-[5vh] h-[5vh] md:w-[2.5vw] md:h-[2.5vw] flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-cyan-500 transition">
              <Facebook size="70%" />
            </a>
            <a href="#" className="w-[5vh] h-[5vh] md:w-[2.5vw] md:h-[2.5vw] flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-cyan-500 transition">
              <Twitter size="70%" />
            </a>
            <a href="#" className="w-[5vh] h-[5vh] md:w-[2.5vw] md:h-[2.5vw] flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-cyan-500 transition">
              <Instagram size="70%" />
            </a>
            <a href="#" className="w-[5vh] h-[5vh] md:w-[2.5vw] md:h-[2.5vw] flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-cyan-500 transition">
              <Linkedin size="70%" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-[3vh] text-center text-gray-400 text-[2vh] md:text-[1vw]">
        © {new Date().getFullYear()} SEO & SMM Agency. All rights reserved.
      </div>
    </footer>
  );
}
