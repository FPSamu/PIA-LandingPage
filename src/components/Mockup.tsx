import React, { useRef, useEffect } from "react";
import { motion, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import MainMockupImage from "../assets/IphoneMockup.png";

const mainMockup = {
    width: "80%",
    display: "block",
    margin: "0 auto"
};

const ROTATION_RANGE = 20; // degrees

function MainMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 50, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 50, damping: 20 });
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const centerX = rect.left + width / 2;
      const centerY = rect.top + height / 2;
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      // Calculate rotation: relative to center of the mockup
      const rX = clamp(((mouseY - centerY) / (height / 2)) * -ROTATION_RANGE, -ROTATION_RANGE, ROTATION_RANGE);
      const rY = clamp(((mouseX - centerX) / (width / 2)) * ROTATION_RANGE, -ROTATION_RANGE, ROTATION_RANGE);
      x.set(rX);
      y.set(rY);
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <motion.div
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
      <motion.img
        src={MainMockupImage}
        alt="Iphone mockup"
        style={{ ...mainMockup, transform, willChange: "transform" }}
      />
    </motion.div>
  );
}

export default MainMockup;
