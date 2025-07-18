import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/data/content";
import { OptimizedImage } from "@/components/OptimizedImage";
import { ArrowRight, Filter, Award, Star, TrendingUp, Clock, Users, Zap } from "lucide-react";
import { SEO } from "@/components/SEO";
import { generateOrganizationStructuredData } from "@/lib/structuredData";
import { Link, useLocation } from "wouter";
import {
  scrollRevealVariants,
  staggerContainerVariants,
  fadeUpVariants,
  buttonHoverVariants,
  cardHoverVariants,
} from "../lib/animations";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [, setLocation] = useLocation();

  const structuredData = generateOrganizationStructuredData({
    name: "InnofyAI",
    description: "Portfolio of successful projects and case studies",
    url: "https://innofyai.com/portfolio",
    logo: "https://innofyai.com/logo.png",
    address: {
      addressLocality: "Lagos",
      addressCountry: "Nigeria",
    },
    contactPoint: {
      contactType: "customer service",
      email: "hello@innofyai.com",
    },
    sameAs: [
      "https://twitter.com/innofyai",
      "https://linkedin.com/company/innofyai",
      "https://facebook.com/innofyai",
    ],
  });

  const filters = [
    { id: "all", label: "All Projects", icon: <Filter className="w-4 h-4" /> },
    { id: "automation", label: "Automation", icon: <Zap className="w-4 h-4" /> },
    { id: "branding", label: "Branding", icon: <Award className="w-4 h-4" /> },
    { id: "security", label: "Security", icon: <Star className="w-4 h-4" /> },
    { id: "design", label: "Design", icon: <TrendingUp className="w-4 h-4" /> },
  ];

  const filteredStudies =
    activeFilter === "all"
      ? caseStudies
      : caseStudies.filter(study => study.category === activeFilter);

  const stats = [
    { number: "150+", label: "Projects Delivered", icon: <Award className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "2.5x", label: "Average ROI", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> },
  ];

  const handleProjectClick = (slug: string) => {
    setLocation(`/portfolio/${slug}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO
        title="Portfolio - Our Success Stories & Case Studies"
        description="Explore InnofyAI's portfolio of successful projects. See how we've transformed businesses with AI automation, cybersecurity, design, and branding solutions."
        keywords="portfolio, case studies, success stories, AI projects, cybersecurity projects, design projects, branding projects, client results"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center"
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-white mb-8"
              variants={fadeUpVariants}
            >
              Our <span className="gradient-text">Portfolio</span>
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              variants={fadeUpVariants}
            >
              Explore our successful projects and see how we've transformed businesses across
              various industries.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Filters & Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent"
                    : "bg-white/5 text-gray-300 border-white/20 hover:bg-white/10 hover:border-white/30"
                }`}
                variants={fadeUpVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.icon}
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid lg:grid-cols-3 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {filteredStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden cursor-pointer group"
                  variants={cardHoverVariants}
                  whileHover="hover"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => handleProjectClick(study.slug)}
                >
                  <motion.div
                    className="relative h-48 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <OptimizedImage
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                        {study.metric}
                      </Badge>
                    </div>
                  </motion.div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="bg-white/5 text-gray-300 border-white/20">
                        {study.industry}
                      </Badge>
                      <span className="text-sm text-gray-400">{study.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{study.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{study.metricLabel}</span>
                      <motion.div
                        className="group/btn flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl lg:text-6xl font-bold text-white mb-8"
              variants={fadeUpVariants}
            >
              Proven Results
            </motion.h2>
            <motion.p className="text-xl text-gray-300" variants={fadeUpVariants}>
              Our portfolio speaks for itself with measurable success metrics
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={fadeUpVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-8"
              variants={fadeUpVariants}
            >
              Ready to Join Our Success Stories?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
              variants={fadeUpVariants}
            >
              Let's create the next success story together. Your project could be the next one in
              our portfolio.
            </motion.p>
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg flex items-center gap-2 mx-auto"
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
