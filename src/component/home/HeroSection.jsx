"use client";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-[100%] min-h-[100vh] flex items-center justify-center px-[4vw] py-[10vh] relative overflow-hidden"
    >
      <div className="w-[90%] max-w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-[5vw] relative z-10">
        {/* Left: Text + CTA */}
        <div className="text-center md:text-left">
          <h1 className="text-[6vh] md:text-[4vw] font-bold text-white leading-[1.2] mb-[2vh]">
            We Grow Your <span className="text-[#3298c9]">Online Presence</span>
          </h1>
          <p className="text-[2.5vh] md:text-[1.5vw] text-gray-300 mb-[5vh] max-w-[70%] md:max-w-[60%] mx-auto md:mx-0">
            SEO and Social Media Marketing solutions that boost visibility,
            engagement, and conversions. Let’s unlock your business potential.
          </p>
        </div>

        {/* Right: Glass Highlight Card */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-[2vw] p-[4vw] md:p-[2vw] shadow-lg">
          <h3 className="text-[3vh] md:text-[2vw] font-semibold text-white mb-[2vh]">
            Why Choose Us?
          </h3>
          <ul className="space-y-[2vh] text-gray-200">
            <li className="flex items-start text-[2vh] md:text-[1vw]">
              <span className="w-[1vw] h-[1vw] bg-[#3298c9] rounded-full mt-[0.5vh] mr-[1vw]"></span>
              Proven SEO strategies that rank you higher
            </li>
            <li className="flex items-start text-[2vh] md:text-[1vw]">
              <span className="w-[1vw] h-[1vw] bg-[#3298c9] rounded-full mt-[0.5vh] mr-[1vw]"></span>
              Social campaigns that amplify your brand voice
            </li>
            <li className="flex items-start text-[2vh] md:text-[1vw]">
              <span className="w-[1vw] h-[1vw] bg-[#3298c9] rounded-full mt-[0.5vh] mr-[1vw]"></span>
              Transparent reporting & personalized support
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
