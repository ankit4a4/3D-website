"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["Home", "Services", "Portfolio", "Testimonials", "Contact"];

  return (
    <>
      {/* Header */}
      <header className="absolute top-[2vh] left-1/2 -translate-x-1/2 w-[90vw] md:w-[80vw] bg-white/10 backdrop-blur-3xl rounded-[2vh] flex items-center justify-between px-[3vh] md:px-[3vw] py-[2vh] md:py-[1.5vw] z-50 shadow-lg border border-white/20">
        
        {/* Logo */}
        <div className="text-white text-[3vh] md:text-[2vw] font-extrabold tracking-wide drop-shadow-lg">
          SEO<span className="text-[#3298c9]">SMM</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-[2vw] text-white font-medium">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              to={`/${item.toLowerCase()}`}
              className="text-[1.2vw] hover:text-[#3298c9] hover:scale-105 transition-all duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden text-white cursor-pointer text-[4vh]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={"4vh"} /> : <Menu size={"4vh"} />}
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-3xl flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="flex flex-col gap-[4vh] text-center"
              initial={{ x: "100%" }}
              animate={{ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } }}
              exit={{ x: "100%", transition: { type: "spring", stiffness: 300, damping: 30 } }}
            >
              {menuItems.map((item, idx) => (
                <Link
                  key={idx}
                  to={`/${item.toLowerCase()}`}
                  className="text-white text-[5vh] font-semibold hover:text-[#3298c9] hover:scale-110 transition-all duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
