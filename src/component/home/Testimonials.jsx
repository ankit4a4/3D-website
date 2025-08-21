"use client";
import { Star } from "lucide-react";
import backgroundImage from "../../../public/space-removebg-preview.png";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ravi Sharma",
      role: "E-commerce Owner",
      feedback:
        "In just 4 months, my website traffic doubled! SEO strategy really worked wonders. Highly recommend their services.",
      rating: 5,
    },
    {
      name: "Priya Kapoor",
      role: "Startup Founder",
      feedback:
        "Their SMM campaigns gave us 3x engagement on Instagram and Facebook. Our brand visibility improved a lot.",
      rating: 5,
    },
    {
      name: "Amit Verma",
      role: "Local Business",
      feedback:
        "They helped us rank in the top 3 results on Google Maps. Got more local customers than ever before.",
      rating: 4,
    },
  ];

  return (
    <section
      id="testimonials"
      className="w-full min-h-screen px-[4vw] py-[8vh] md:py-[10vh] relative overflow-hidden"
    >
      {/* Section Header */}
      <div className="text-center mb-[6vh] relative z-10">
        <span className="text-[#3298c9] font-semibold text-[2.5vh] md:text-[1.2vw] tracking-wider">
          CLIENT FEEDBACK
        </span>
        <h2 className="text-[4.5vh] md:text-[3vw] font-bold text-white mt-[2vh]">
          What Our <span className="text-[#3298c9]">Clients Say</span>
        </h2>
        <p className="text-[2.2vh] md:text-[1.2vw] text-gray-300 mx-auto mt-[2.5vh]">
          We’re proud to have built long-term relationships and delivered
          measurable results through SEO & SMM.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[5vh] mx-auto relative z-10">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-[5vh] hover:shadow-2xl transition-all duration-300"
          >
            {/* Stars */}
            <div className="flex mb-[3vh]">
              {Array.from({ length: t.rating }).map((_, idx) => (
                <Star
                  key={idx}
                  className="w-[3vh] h-[3vh] md:w-[1.5vw] md:h-[1.5vw] text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>

            {/* Feedback */}
            <p className="text-[2vh] md:text-[1vw] mb-[3vh] leading-relaxed text-gray-200">
              "{t.feedback}"
            </p>

            {/* Name + Role */}
            <div>
              <h4 className="text-[2.2vh] md:text-[1.2vw] font-semibold text-[#fff]">
                {t.name}
              </h4>
              <span className="text-[1.8vh] md:text-[1vw] text-gray-300">
                {t.role}
              </span>
            </div>
          </div>
        ))}
      </div>

    
    </section>
  );
}
