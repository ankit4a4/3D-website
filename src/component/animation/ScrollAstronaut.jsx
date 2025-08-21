"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lottie from "lottie-react";
import astronautAnimation from "./Astronaut 3D.json";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
      x: -window.innerWidth * 0.8, // left beyond screen by 20% width
      y: -window.innerHeight * 1.3, // top beyond screen by 20% height
      ease: "power1.out",
      scrollTrigger: {
        trigger: section,
        start: "top bottom", // jab section bottom me ho
        end: "bottom top", // jab section top tak scroll ho jaye
        scrub: true,
      },
    });
  }, []);

  return (
    <div ref={astronautRef} className="absolute  h-auto" style={{ zIndex: -1 }}>
      <Lottie
        animationData={astronautAnimation}
        loop={true}
        autoplay={true}
        style={{ width: "40vw", height: "100%" }}
      />

      <span className="facebook-icon absolute animate-spin left-[15%] top-[50%]  md:text-[1.6vw] h-[5vw] text-[#ffffff] bg-[#0866ff] flex items-center justify-center rounded-full w-[5vw] text-[2rem]">
        <Facebook size={"60%"} />
      </span>

      <span className="facebook-icon absolute animate-spin md:text-[1.6vw] left-[20%] top-[70%] text-[#ffffff] h-[5vw] bg-[#fe1f9c] flex items-center justify-center rounded-full w-[5vw] text-[2rem]">
        <Instagram size={"60%"} />
      </span>
      <span className="facebook-icon absolute animate-spin md:text-[1.6vw] left-[30%] top-[90%] text-[#ffffff] h-[5vw] bg-[#0073b2] flex items-center justify-center rounded-full w-[5vw] text-[2rem]">
        <Linkedin size={"60%"} />
      </span>
      <span className="facebook-icon absolute animate-spin md:text-[1.6vw] left-[80%] top-[50%] text-[#ffffff] h-[5vw]  bg-[#000000] border border-white flex items-center justify-center rounded-full w-[5vw] text-[2rem]">
       <FaXTwitter  size={"60%"} />
      </span>
      <span className="facebook-icon absolute animate-spin md:text-[1.6vw] left-[80%] top-[70%] text-[#ffffff] h-[5vw] bg-[#34a853] flex items-center justify-center rounded-full w-[5vw] text-[2rem]">
        <FaGoogle  size={"60%"} />
      </span>
      <span className="facebook-icon absolute animate-spin md:text-[1.6vw] left-[65%] top-[90%] text-[#ffffff] h-[5vw] bg-[#000000] border border-white flex items-center justify-center rounded-full w-[5vw] text-[2rem]">
        <FaTiktok  size={"60%"} />
      </span>

     <style jsx>{`
  .facebook-icon {
    animation: float 3s ease-in-out infinite;
  }

  /* Randomized float animation */
  @keyframes float {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    25% {
      transform: translate(-5px, 5px) rotate(5deg);
    }
    50% {
      transform: translate(5px, -5px) rotate(-5deg);
    }
    75% {
      transform: translate(-5px, -5px) rotate(5deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }

  /* Alag-alag icons ke liye duration aur delay thoda change karenge */
  .facebook-icon:nth-child(2) { animation-duration: 2.5s; animation-delay: 0s; }
  .facebook-icon:nth-child(3) { animation-duration: 3s; animation-delay: 0.2s; }
  .facebook-icon:nth-child(4) { animation-duration: 3.5s; animation-delay: 0.4s; }
  .facebook-icon:nth-child(5) { animation-duration: 2.8s; animation-delay: 0.6s; }
  .facebook-icon:nth-child(6) { animation-duration: 3.2s; animation-delay: 0.8s; }
  .facebook-icon:nth-child(7) { animation-duration: 2.6s; animation-delay: 1s; }
`}</style>

    </div>
  );
}
