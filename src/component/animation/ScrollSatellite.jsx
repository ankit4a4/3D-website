"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lottie from "lottie-react";
import satelliteAnimation from "./Sattelite 3D.json";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSatellite() {
  const satelliteRef = useRef(null);

  useEffect(() => {
    const satellite = satelliteRef.current;
    const section = satellite.parentElement;

    // Ensure section is relative
    section.style.position = "relative";

    // Keep satellite at bottom-left
    gsap.set(satellite, {
      x: 0,
      y: section.offsetHeight - satellite.offsetHeight,
    });

    // Animate only horizontally (left → right)
    gsap.to(satellite, {
      x: section.offsetWidth - satellite.offsetWidth,
      y: section.offsetWidth - satellite.offsetWidth,
      ease: "power1.out",
      scrollTrigger: {
        trigger: section,
        start: "top 50%",
        end: "bottom 20%",
        scrub: true,
        // markers: true,
      },
    });
  }, []);

  return (
    <div
      ref={satelliteRef}
      className="absolute left-0 top-[-60%] w-[10vh] md:w-[8vw] h-auto"
      style={{ zIndex: 5 }}
    >
      <Lottie
        animationData={satelliteAnimation}
        loop={true}
        autoplay={true}
        style={{ width: "40vw", height: "100%", transform: "rotate(90deg)" }}
      />
    </div>
  );
}
