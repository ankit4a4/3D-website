"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lottie from "lottie-react";
import astronautAnimation from "./Astronaut 3D.json";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAstronaut() {
  const astronautRef = useRef(null);

  useEffect(() => {
    const astronaut = astronautRef.current;
    const section = astronaut.parentElement;

    // Start: bottom-right of viewport
    gsap.set(astronaut, { x: window.innerWidth, y: window.innerHeight });

    // Animate to top-left beyond screen (diagonal float)
    gsap.to(astronaut, {
      x: -window.innerWidth * 0.8,  // left beyond screen by 20% width
      y: -window.innerHeight * 1.3, // top beyond screen by 20% height
      ease: "power1.out",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",   // jab section bottom me ho
        end: "bottom top",     // jab section top tak scroll ho jaye
        scrub: true,
      },
    });
  }, []);

  return (
    <div
  ref={astronautRef}
  className="absolute w-[20vh] md:w-[15vw] h-auto"
  style={{ zIndex: -1 }} // <- negative rakha, text ke peeche
>
  <Lottie
    animationData={astronautAnimation}
    loop={true}
    autoplay={true}
    style={{ width: "40vw", height: "100%" }}
  />
</div>

  );
}
