"use client";
import { TrendingUp, Share2 } from "lucide-react";
import gifImage from "../../../public/backgroudn123456.gif";

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce SEO Growth",
      category: "SEO",
      icon: (
        <TrendingUp className="w-[5vh] h-[5vh] md:w-[2.5vw] md:h-[2.5vw] text-[#3298c9]" />
      ),
      desc: "Boosted organic traffic by 150% in 6 months using advanced SEO strategies.",
    },
    {
      title: "Local SEO Campaign",
      category: "SEO",
      icon: (
        <TrendingUp className="w-[5vh] h-[5vh] md:w-[2.5vw] md:h-[2.5vw] text-[#3298c9]" />
      ),
      desc: "Improved local business ranking to top 3 positions on Google Maps.",
    },
    {
      title: "Social Media Awareness Campaign",
      category: "SMM",
      icon: (
        <Share2 className="w-[5vh] h-[5vh] md:w-[2.5vw] md:h-[2.5vw] text-[#3298c9]" />
      ),
      desc: "Increased engagement by 200% through influencer-driven campaigns.",
    },
    {
      title: "Instagram Growth Strategy",
      category: "SMM",
      icon: (
        <Share2 className="w-[5vh] h-[5vh] md:w-[2.5vw] md:h-[2.5vw] text-[#3298c9]" />
      ),
      desc: "Scaled brand account from 5K to 50K followers organically.",
    },
  ];

  return (
    <section
      id="portfolio"
      className="w-full min-h-screen px-[4vw] py-[10vh] md:py-[12vh] relative"
      style={{
        backgroundImage: `url(${gifImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Section Content */}
      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-[8vh]">
          <span className="text-[#3298c9] font-semibold text-[2.5vh] md:text-[1.2vw] tracking-wider">
            OUR WORK
          </span>
          <h2 className="text-[5vh] md:text-[3vw] font-bold text-white mt-[2vh]">
            SEO & <span className="text-[#3298c9]">SMM Portfolio</span>
          </h2>
          <p className="text-[2.5vh] md:text-[1.2vw] text-gray-300  mx-auto mt-[2.5vh]">
            Some of our successful SEO & Social Media Marketing case studies
            that delivered proven results.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-[5vh]  mx-auto">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-[5vh] hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              {/* Icon */}
              <div className="mb-[3vh]">{project.icon}</div>

              {/* Title */}
              <h3 className="text-[2.8vh] md:text-[1.5vw] font-bold text-white mb-[2vh] group-hover:text-[#3298c9] transition">
                {project.title}
              </h3>

              {/* Category */}
              <span
                className={`inline-block px-[2.5vh] py-[1.5vh] rounded-full text-[2vh] md:text-[1vw] font-medium mb-[3vh] bg-[#3298c9]/20 text-[#fff]`}
              >
                {project.category}
              </span>

              {/* Description */}
              <p className="text-[2.2vh] md:text-[1.1vw] text-gray-200 flex-grow">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
