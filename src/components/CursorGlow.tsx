"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

import { useEffect } from "react";

export default function CursorGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 180,
    damping: 25,
  });

  const y = useSpring(mouseY, {
    stiffness: 180,
    damping: 25,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 175);
      mouseY.set(e.clientY - 175);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ x, y }}
      className="
      pointer-events-none

      fixed

      left-0
      top-0

      z-0

      h-55

      w-55

      rounded-full

      bg-purple-500/70

      blur-[120px]
    "
    />
  );
}
