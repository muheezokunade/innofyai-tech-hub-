import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface ScrollProgressProps {
  color?: string;
  height?: number;
  className?: string;
}

export const ScrollProgress: React.FC<ScrollProgressProps> = ({
  color = "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)",
  height = 3,
  className = ""
}) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 z-50 origin-left ${className}`}
      style={{
        scaleX,
        background: color,
        height: `${height}px`,
        transformOrigin: "0%"
      }}
    />
  );
};

// Alternative circular progress indicator
export const CircularScrollProgress: React.FC<{
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
}> = ({
  size = 40,
  strokeWidth = 3,
  color = "#3b82f6",
  className = ""
}) => {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  return (
    <motion.div
      className={`fixed top-4 right-4 z-50 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={progress.get() * circumference}
          style={{
            strokeDashoffset: progress.get() * circumference
          }}
        />
      </svg>
      <motion.div
        className="absolute inset-0 flex items-center justify-center text-xs font-medium"
        style={{ color }}
      >
        {Math.round(progress.get() * 100)}%
      </motion.div>
    </motion.div>
  );
}; 