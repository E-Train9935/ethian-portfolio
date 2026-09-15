"use client";

import { motion, useScroll, useSpring } from "motion/react";

const levels = ["00", "-03", "-07", "-11", "-18", "G"];

export function LevelRail() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.35 });

  return (
    <aside className="level-rail" aria-hidden="true">
      <div className="rail-track">
        <motion.div className="rail-progress" style={{ scaleY }} />
      </div>
      <div className="rail-levels">
        {levels.map((level) => (
          <span key={level}>{level}</span>
        ))}
      </div>
    </aside>
  );
}
