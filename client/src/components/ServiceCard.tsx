import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { cardHoverVariants, flipCardVariants, floatingVariants } from "../lib/animations";
import { Link } from "wouter";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  color: string;
  path?: string; // optional route to navigate to
  delay?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  benefits,
  color,
  path,
  delay = 0,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleNavigate = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (path) {
      window.location.href = path;
    }
  };

  return (
    <motion.div
      className="relative group perspective-1000"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Floating background elements */}
      <motion.div
        className="absolute -inset-4 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        animate={isHovered ? "float" : "initial"}
        variants={floatingVariants}
      >
        <div
          className="w-full h-full rounded-2xl"
          style={{ background: `radial-gradient(circle at 50% 50%, ${color}20, transparent)` }}
        />
      </motion.div>

      {/* Main card */}
      <motion.div
        className="relative h-80 w-full cursor-pointer"
        variants={cardHoverVariants}
        initial="initial"
        whileHover="hover"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <motion.div
          className={`absolute inset-0 rounded-2xl p-6 flex flex-col justify-between bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden`}
          style={{
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            backfaceVisibility: "hidden",
          }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Header */}
          <div className="relative z-10">
            <motion.div
              className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${color}20 border ${color}30`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 0.6 }}
              >
                {icon}
              </motion.div>
            </motion.div>

            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
          </div>

          {/* Footer */}
          <div className="relative z-10">
            <motion.div
              className="flex items-center justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <span
                className="text-sm text-gray-400 cursor-pointer"
                onClick={handleNavigate}
              >
                Click to learn more
              </span>
              <motion.div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${color}20 border ${color}30`}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-4 h-4 text-white cursor-pointer" onClick={handleNavigate} />
              </motion.div>
            </motion.div>
          </div>

          {/* Floating particles */}
          <AnimatePresence>
            {isHovered && (
              <>
                {Array.from({ length: 3 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      background: color,
                      left: `${20 + i * 20}%`,
                      top: `${30 + i * 15}%`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      y: [0, -20, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Back of card */}
        <motion.div
          className={`absolute inset-0 rounded-2xl p-6 flex flex-col justify-between bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden`}
          style={{
            transform: isFlipped ? "rotateY(0deg)" : "rotateY(-180deg)",
            backfaceVisibility: "hidden",
          }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <h4 className="text-lg font-semibold text-white">Key Benefits</h4>
            </div>

            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-sm text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ background: color }}
                  />
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="relative z-10">
            <motion.button
              className={`w-full py-3 px-4 rounded-xl font-medium text-white flex items-center justify-center gap-2 transition-all duration-300`}
              style={{ background: color }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleNavigate}
            >
              <span>Get Started</span>
              <ExternalLink className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
