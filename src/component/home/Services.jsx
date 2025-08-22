"use client";
import {
  Search,
  Share2,
  BarChart3,
  PenTool,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";
import ScrollPlants from "../animation/ScrollPlants";


export default function Services() {
  const services = [
    {
      title: "SEO Optimization",
      desc: "Boost your website visibility and rank higher on search engines with our data-driven SEO strategies.",
      icon: (
        <Search className="w-[7vw] h-[7vw] md:w-[3.5vw] md:h-[3.5vw] text-white" />
      ),
      color: "from-[#3298c9] to-[#3298c9]",
      hoverColor: "from-[#2877a6] to-[#2877a6]",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO"],
    },
    {
      title: "Social Media Marketing",
      desc: "Engage your audience and grow your brand across all social platforms with creative campaigns.",
      icon: (
        <Share2 className="w-[7vw] h-[7vw] md:w-[3.5vw] md:h-[3.5vw] text-white" />
      ),
      color: "from-[#3298c9] to-[#3298c9]",
      hoverColor: "from-[#2877a6] to-[#2877a6]",
      features: ["Content Strategy", "Community Management", "Analytics"],
    },
    {
      title: "PPC Advertising",
      desc: "Drive targeted traffic with data-driven paid ad campaigns that maximize your ROI.",
      icon: (
        <BarChart3 className="w-[7vw] h-[7vw] md:w-[3.5vw] md:h-[3.5vw] text-white" />
      ),
      color: "from-[#3298c9] to-[#3298c9]",
      hoverColor: "from-[#2877a6] to-[#2877a6]",
      features: ["Google Ads", "Social Ads", "Conversion Tracking"],
    },
    {
      title: "Content Marketing",
      desc: "Attract and convert customers with high-quality content strategies that tell your brand story.",
      icon: (
        <PenTool className="w-[7vw] h-[7vw] md:w-[3.5vw] md:h-[3.5vw] text-white" />
      ),
      color: "from-[#3298c9] to-[#3298c9]",
      hoverColor: "from-[#2877a6] to-[#2877a6]",
      features: ["Content Strategy", "Blog Creation", "Content Distribution"],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <div className="relative">
        <ScrollPlants />
        <section
          id="services"
          className="w-full min-h-screen flex flex-col items-center justify-center px-[5vw] py-[10vh] relative overflow-hidden"
        >
          {/* Background elements */}
          <div className="absolute -bottom-[20vh] -left-[20vw] w-[40vw] h-[40vw] bg-[#3298c9]/20 rounded-full opacity-20"></div>

          <div className=" mx-auto relative z-10">
            {/* Section header */}
            <div className="text-center mb-[8vh]">
              <span className="text-[#3298c9] font-semibold text-[3vh] md:text-[1.2vw] tracking-wider">
                WHAT WE OFFER
              </span>
              <h2 className="text-[5vh] md:text-[3.5vw] font-bold text-gray-100 mt-[2vh]">
                Our <span className="text-[#3298c9]">Services</span>
              </h2>
              <p className="text-[2.5vh] md:text-[1.5vw] text-gray-200  mx-auto mt-[3vh] leading-relaxed">
                We provide comprehensive digital marketing solutions tailored to
                your business goals
              </p>
            </div>

            {/* Services grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[4vh]">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`relative group rounded-2xl overflow-hidden transition-all duration-500 h-full ${
                    activeIndex === index ? "scale-105" : "scale-100"
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {/* Main card */}
                  <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-[4vh] rounded-2xl shadow-lg h-full flex flex-col transition-all duration-300 group-hover:shadow-2xl">
                    {/* Icon */}
                    <div
                      className={`w-[12vw] h-[12vw] md:w-[6vw] md:h-[6vw] rounded-2xl mb-[3vh] flex items-center justify-center bg-gradient-to-r ${service.color} group-hover:${service.hoverColor} transition-all duration-300 shadow-md`}
                    >
                      {service.icon}
                    </div>

                    <h3 className="text-[3vh] md:text-[1.5vw] font-bold text-white mb-[2vh] group-hover:text-[#3298c9] transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-200 mb-[3vh] flex-grow text-[2.2vh] md:text-[1.2vw] leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Features */}
                    <ul className="mb-[3vh]">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center mb-[1.2vh]">
                          <div className="w-[3vh] h-[3vh] bg-[#3298c9]/30 rounded-full flex items-center justify-center mr-[1vw]">
                            <div className="w-[0.8vh] h-[0.8vh] bg-[#3298c9] rounded-full"></div>
                          </div>
                          <span className="text-gray-100 text-[2vh] md:text-[1vw]">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 -z-10`}
                  ></div>
                </div>
              ))}
            </div>

            {/* Stats section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[3vh] mt-[10vh]">
              <StatBox
                icon={
                  <Target className="w-[4.5vw] h-[4.5vw] md:w-[2.5vw] md:h-[2.5vw] text-[#3298c9]" />
                }
                bg="bg-[#3298c9]/20"
                value="95%"
                label="Client Satisfaction"
              />
              <StatBox
                icon={
                  <TrendingUp className="w-[4.5vw] h-[4.5vw] md:w-[2.5vw] md:h-[2.5vw] text-[#3298c9]" />
                }
                bg="bg-[#3298c9]/20"
                value="250+"
                label="Projects Completed"
              />
              <StatBox
                icon={
                  <Users className="w-[4.5vw] h-[4.5vw] md:w-[2.5vw] md:h-[2.5vw] text-[#3298c9]" />
                }
                bg="bg-[#3298c9]/20"
                value="120+"
                label="Happy Clients"
              />
              <StatBox
                icon={
                  <Zap className="w-[4.5vw] h-[4.5vw] md:w-[2.5vw] md:h-[2.5vw] text-[#3298c9]" />
                }
                bg="bg-[#3298c9]/20"
                value="5+"
                label="Years Experience"
              />
            </div>
          </div>
        </section>
       
      </div>
    </>
  );
}

// Stat box component
function StatBox({ icon, bg, value, label }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-[4vh] rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-2xl">
      <div
        className={`w-[9vw] h-[9vw] md:w-[5vw] md:h-[5vw] ${bg} rounded-full flex items-center justify-center mx-auto mb-[2vh]`}
      >
        {icon}
      </div>
      <h3 className="text-[3.5vh] md:text-[2.2vw] font-bold text-white">
        {value}
      </h3>
      <p className="text-gray-200 mt-[1vh] text-[2vh] md:text-[1.2vw]">
        {label}
      </p>
    </div>
  );
}
