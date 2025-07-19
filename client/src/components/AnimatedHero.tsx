import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { heroTextVariants, heroButtonVariants, parallaxVariants } from "../lib/animations";
import { Link } from "wouter";

export const AnimatedHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 1000], [0, -200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });

  const handleBookDiscoveryCall = () => {
    window.open("https://calendar.app.google/nfuUe1XygjEJxMGd7", "_blank");
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Professional Tech Background Image */}
      <div className="absolute inset-0">
        {/* Option 1: Professional tech consulting image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/hero-background.jpg')`,
          }}
        />
        
        {/* Option 2: Abstract tech pattern (fallback) */}
        {/* <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><defs><linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%231e293b;stop-opacity:1" /><stop offset="50%" style="stop-color:%234c1d95;stop-opacity:0.9" /><stop offset="100%" style="stop-color:%231e293b;stop-opacity:1" /></linearGradient><pattern id="circuitPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1" fill="%233b82f6" opacity="0.3"/><circle cx="80" cy="80" r="1" fill="%238b5cf6" opacity="0.3"/><circle cx="50" cy="50" r="0.5" fill="%23ec4899" opacity="0.2"/><path d="M10 10 L90 10 L90 90 L10 90 Z" stroke="%233b82f6" stroke-width="0.5" fill="none" opacity="0.1"/><path d="M30 30 L70 30 L70 70 L30 70 Z" stroke="%238b5cf6" stroke-width="0.3" fill="none" opacity="0.1"/></pattern></defs><rect width="1920" height="1080" fill="url(%23techGradient)"/><rect width="1920" height="1080" fill="url(%23circuitPattern)"/><g opacity="0.1"><circle cx="300" cy="200" r="150" fill="%233b82f6"/><circle cx="1600" cy="800" r="200" fill="%238b5cf6"/><circle cx="1200" cy="300" r="100" fill="%23ec4899"/></g></svg>')`,
          }}
        /> */}
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-purple-900/75 to-slate-900/85" />
        {/* Additional tech-themed overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-pink-600/15" />
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-slate-900/30" />
      </div>

      {/* Animated SVG Background */}
      <motion.div className="absolute inset-0 opacity-20" style={{ y: springY }}>
        <svg className="w-full h-full" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Animated grid pattern */}
          <motion.g
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.line
                key={i}
                x1={i * 60}
                y1="0"
                x2={i * 60}
                y2="800"
                stroke="url(#gridGradient)"
                strokeWidth="1"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.line
                key={i}
                x1="0"
                y1={i * 60}
                x2="1200"
                y2={i * 60}
                stroke="url(#gridGradient)"
                strokeWidth="1"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.g>

          {/* Floating particles */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.circle
              key={i}
              cx={Math.random() * 1200}
              cy={Math.random() * 800}
              r={Math.random() * 3 + 1}
              fill="#3b82f6"
              filter="url(#glow)"
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                delay: Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
        style={{ opacity: springOpacity, scale }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Sparkles className="w-4 h-4" />
          Transforming Ideas into Digital Excellence
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            InnofyAI
          </span>
          <br />
          <span className="text-4xl md:text-5xl font-light text-gray-300">Tech Innovation Hub</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          We craft cutting-edge digital solutions that drive innovation, enhance user experiences,
          and accelerate business growth through AI-powered technology and creative excellence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link href="/contact">
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg overflow-hidden transition-all duration-300"
              variants={heroButtonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <span className="relative flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </Link>

          <motion.button
            className="group px-8 py-4 border-2 border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold rounded-full transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBookDiscoveryCall}
          >
            <Play className="w-5 h-5" />
            Book Discovery Call
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { number: "20+", label: "Projects Delivered" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white/80 text-sm md:text-base font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};
