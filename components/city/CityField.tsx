"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

const towerConfig = [
  [4, 18, 10, 58],
  [13, 9, 7, 72],
  [21, 27, 12, 52],
  [35, 6, 9, 78],
  [46, 22, 6, 60],
  [58, 12, 11, 74],
  [72, 30, 8, 48],
  [82, 8, 10, 70],
  [92, 25, 6, 54],
] as const;

export function CityField() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const farY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -110]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -220]);
  const nearY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -320]);

  return (
    <div className="city-field" aria-hidden="true">
      <motion.div className="city-layer city-layer-far" style={{ y: farY }}>
        {towerConfig.map(([left, top, width, height], index) => (
          <span
            className="tower tower-far"
            key={`far-${index}`}
            style={{ left: `${left}%`, top: `${top}%`, width: `${width}%`, height: `${height}%` }}
          />
        ))}
      </motion.div>
      <motion.div className="city-layer city-layer-mid" style={{ y: midY }}>
        <span className="bridge bridge-a" />
        <span className="bridge bridge-b" />
        <span className="bridge bridge-c" />
        <span className="transit transit-a" />
        <span className="transit transit-b" />
      </motion.div>
      <motion.div className="city-layer city-layer-near" style={{ y: nearY }}>
        <span className="near-column near-column-left" />
        <span className="near-column near-column-right" />
        <span className="near-platform" />
      </motion.div>
      <div className="city-mist city-mist-a" />
      <div className="city-mist city-mist-b" />
      <div className="city-vignette" />
    </div>
  );
}
