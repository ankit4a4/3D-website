// src/ScrollVideo.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const totalFrames = 179;
const getImagePath = (index) => `/optimized_blender_imgs/${index + 1}.webp`;

export default function ScrollVideo() {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Preload images
    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      img.src = getImagePath(i);
      imagesRef.current.push(img);
    }

    // Draw first image
    imagesRef.current[0].onload = () => {
      ctx.drawImage(imagesRef.current[0], 0, 0, canvas.width, canvas.height);
    };

    // Scroll-based frame update
    const obj = { frame: 0 };
    gsap.to(obj, {
      frame: totalFrames,
      ease: "none",
      scrollTrigger: {
        trigger: document.body, 
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      onUpdate: () => {
        const frameIndex = Math.floor(obj.frame);
        if (imagesRef.current[frameIndex]) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(
            imagesRef.current[frameIndex],
            0,
            0,
            canvas.width,
            canvas.height
          );
        }
      },
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 0,
        height: "100vh",
      }}
    />
  );
}
