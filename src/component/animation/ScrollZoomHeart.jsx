"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollZoomHeartFull({ children }) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;

    // Scroll-based zoom
    gsap.fromTo(
      image,
      { scale: 1 },
      {
        scale: 1.5, // jitna zoom chahiye
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true, // smooth scroll
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-[100vw] bg-red-800  "
    >
      <div
        ref={imageRef}
        className=" top-0 left-0 w-screen bg-red-800  overflow-hidden z-10"
      >
        <img
          src="/earth.gif"
          alt="Earth GIF"
          className="w-[100vw] h-full object-cover pointer-events-none"
        />
      </div>

      {/* Section content overlay */}
      <div className="relative z-20 flex justify-center items-center h-full">
        {children}
      </div>
    </div>
  );
}
