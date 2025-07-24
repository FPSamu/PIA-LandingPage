import React, { useRef, useEffect } from "react";
import MainMockupImage from "../assets/IphoneMockup.png";

const mainMockup = {
    width: "80%",
    display: "block",
    margin: "0 auto"
};

const ROTATION_RANGE = 20; // degrees

interface MainMockupProps {
  disableMouseFollow?: boolean;
  scrollProgress?: number; // 0 to 1
}

function MainMockup({ disableMouseFollow = false, scrollProgress = 0 }: MainMockupProps) {
  const ref = useRef(null);
  // Interpolate transform based on scrollProgress
  let transform = '';
  // Increase final Y position for a lower mockup
  const FINAL_Y = 100; // vh (was 60)
  if (scrollProgress < 0.8) {
    const tY = scrollProgress * FINAL_Y;
    const scale = 1 + 0.5* scrollProgress;
    transform = `translateY(${tY}vh) scale(${scale})`;
  } else {
    const p = (scrollProgress - 0.8) / 0.2; // 0 to 1
    const tX = p * 25; // vw
    const rotateY = -2 * p;
    const scale = 1.2 * p;
    transform = `translateY(${FINAL_Y}vh) translateX(${tX}vw) scale(${scale}) rotateY(${rotateY}deg)`;
  }

  useEffect(() => {
    if (disableMouseFollow) return;
    const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));
    function handleMouseMove(e: MouseEvent) {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const centerX = rect.left + width / 2;
      const centerY = rect.top + height / 2;
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const rX = clamp(((mouseY - centerY) / (height / 2)) * -ROTATION_RANGE, -ROTATION_RANGE, ROTATION_RANGE);
      const rY = clamp(((mouseX - centerX) / (width / 2)) * ROTATION_RANGE, -ROTATION_RANGE, ROTATION_RANGE);
      ref.current!.style.transform = `${transform} rotateX(${rX}deg) rotateY(${rY}deg)`;
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [disableMouseFollow, transform]);

  return (
    <div
      ref={ref}
      style={{
        perspective: 1000,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "250px",
      }}
    >
      <img
        src={MainMockupImage}
        alt="Iphone mockup"
        style={{ ...mainMockup, transform, willChange: "transform" }}
      />
    </div>
  );
}

export default MainMockup;