"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lottie from "lottie-react";
import rocketAnimation from "../animation/Simple Rocket.json";

export default function RocketAnimation() {
  const rocketRef = useRef(null);
  const containerRef = useRef(null); // section ke liye ref

  useEffect(() => {
    const rocket = rocketRef.current;
    const container = containerRef.current; // ab section ko pakdega

    if (!rocket || !container) return;

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Initial position
    let posX = Math.random() * (containerWidth - 100);
    let posY = Math.random() * (containerHeight - 100);
    let velocityX = 2 + Math.random() * 3;
    let velocityY = 1 + Math.random() * 2;

    gsap.set(rocket, { x: posX, y: posY });

    const animate = () => {
      posX += velocityX;
      posY += velocityY;

      // Bounce on edges
      if (posX <= 0 || posX >= containerWidth - rocket.offsetWidth) velocityX *= -1;
      if (posY <= 0 || posY >= containerHeight - rocket.offsetHeight) velocityY *= -1;

      // Calculate rotation based on direction
      const angle = Math.atan2(velocityY, velocityX) * (180 / Math.PI);

      gsap.to(rocket, {
        x: posX,
        y: posY,
        rotate: angle,
        duration: 0.05,
        ease: "linear",
        onComplete: animate,
      });
    };

    animate();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100vh]  overflow-hidden" // yaha section define kar
    >
      <div
        ref={rocketRef}
        className="absolute w-[10vh] md:w-[5vw] h-auto"
        style={{ zIndex: 20 }}
      >
        <Lottie
          animationData={rocketAnimation}
          loop={true}
          autoplay={true}
          style={{ width: "50vh", height: "50vh" , transform : "rotate(90deg)" }}
        />
      </div>
    </section>
  );
}
