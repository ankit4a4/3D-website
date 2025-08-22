"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lottie from "lottie-react";
import plantsAnimation from "./plants.json";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollPlants({ children }) {
  const sectionRef = useRef(null);
  const lottieRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const lottie = lottieRef.current;

    // Animation scroll-based scale
    gsap.fromTo(
      lottie,
      { scale: 1 },
      {
        scale: 4, // maximum zoom
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="absolute w-[100%] h-[100%] overflow-hidden" // make sure section has height
    >
      {/* Plants animation overlay */}
      <div
        ref={lottieRef}
        className="absolute top-0 ml-[30%] mx-auto left-1/2 transform -translate-x-1/2 w-[60%] h-full z-10 pointer-events-none mt-[40%] "
      >
        <Lottie
          animationData={plantsAnimation}
          loop={false}
          style={{ width: "60%", height: "60%" , transform : "rotatex(45deg)"}}
        />
      </div>

      {/* Your existing section content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
}
