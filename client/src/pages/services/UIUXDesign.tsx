import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  ArrowLeft, 
  Check, 
  Palette, 
  Users, 
  Smartphone, 
  Monitor, 
  ArrowRight,
  Eye,
  Zap,
  Target,
  Heart,
  Star
} from "lucide-react";
import SEO from "@/components/SEO";
import { generateServiceStructuredData } from "@/lib/structuredData";
import {
  scrollRevealVariants,
  staggerContainerVariants,
  fadeUpVariants,
  buttonHoverVariants,
  cardHoverVariants,
} from "../../lib/animations";

export default function UIUXDesign() {
  const structuredData = generateServiceStructuredData({
    name: "UI/UX Design Services",
    description: "Create exceptional user experiences with intuitive interfaces that delight users and drive engagement.",
    provider: {
      name: "InnofyAI",
      url: "https://innofyai.com",
    },
    areaServed: "Nigeria",
    serviceType: "User Experience Design",
  });

  const designServices = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "User Research & Testing",
      description: "Deep user insights through research, interviews, and usability testing to understand your audience.",
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Interface Design & Prototyping",
      description: "Beautiful, functional interfaces with interactive prototypes for validation and stakeholder feedback.",
      color: "from-pink-600 to-red-600",
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Usability Optimization",
      description: "Continuous improvement through analytics and user feedback integration for better performance.",
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile-First Approach",
      description: "Responsive designs optimized for all devices and screen sizes with touch-friendly interfaces.",
      color: "from-green-600 to-teal-600",
    },
  ];

  const designProcess = [
    {
      step: "1",
      title: "Research & Discovery",
      description: "User interviews, market analysis, and competitive research to understand your audience and business goals.",
      icon: <Eye className="h-6 w-6" />,
      color: "from-purple-600 to-pink-600",
    },
    {
      step: "2",
      title: "Strategy & Planning",
      description: "Define user personas, journey maps, and information architecture for optimal user flow.",
      icon: <Target className="h-6 w-6" />,
      color: "from-pink-600 to-red-600",
    },
    {
      step: "3",
      title: "Design & Prototyping",
      description: "Create wireframes, mockups, and high-fidelity designs with interactive prototypes for testing.",
      icon: <Palette className="h-6 w-6" />,
      color: "from-blue-600 to-indigo-600",
    },
    {
      step: "4",
      title: "Testing & Iteration",
      description: "Continuous testing and refinement based on user feedback and analytics for optimal results.",
      icon: <Zap className="h-6 w-6" />,
      color: "from-green-600 to-teal-600",
    },
  ];

  const designPrinciples = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "User-Centered Design",
      description: "Every design decision is based on user needs, behaviors, and feedback.",
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Accessibility First",
      description: "Designs that work for everyone, including users with disabilities.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Optimization",
      description: "Fast-loading, efficient designs that enhance user satisfaction.",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Scalable Design Systems",
      description: "Consistent, maintainable design frameworks for sustainable growth.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO
        title="UI/UX Design Services - InnofyAI"
        description="Create exceptional user experiences with intuitive interfaces that delight users and drive engagement."
        keywords="UI/UX design, user experience, interface design, prototyping, usability testing, mobile design"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUpVariants}>
          <Link href="/services">
                <motion.button
                  className="group mb-8 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2"
                  whileHover={{ x: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Services
                </motion.button>
          </Link>
            </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div className="space-y-8" variants={staggerContainerVariants}>
                <motion.div variants={fadeUpVariants}>
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 mb-6">
                    Creative & Growth
                  </Badge>
                </motion.div>

                <motion.h1
                  className="text-5xl lg:text-6xl font-bold text-white leading-tight"
                  variants={fadeUpVariants}
                >
                  UI/UX{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Design
                  </span>
                </motion.h1>

                <motion.p
                  className="text-xl lg:text-2xl text-gray-300 leading-relaxed"
                  variants={fadeUpVariants}
                >
                Create exceptional user experiences with intuitive interfaces that delight users and
                  drive engagement through thoughtful design.
                </motion.p>

                <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeUpVariants}>
                <Link href="/contact">
                    <motion.button
                      className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full shadow-lg flex items-center gap-2 text-lg"
                      variants={buttonHoverVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <span>Start Design Project</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </Link>
                  <motion.button
                    className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                  View Design Portfolio
                  </motion.button>
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeUpVariants}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.img
                  src="https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg"
                alt="UI/UX design process and wireframes"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  variants={cardHoverVariants}
                  whileHover="hover"
              />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design Services */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              variants={fadeUpVariants}
            >
              Design <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Excellence</span>
            </motion.h2>
            <motion.p className="text-xl text-gray-300" variants={fadeUpVariants}>
              User-centered design that drives results and creates meaningful experiences
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {designServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                variants={cardHoverVariants}
                whileHover="hover"
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              variants={fadeUpVariants}
            >
              Our Design <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Process</span>
            </motion.h2>
            <motion.p className="text-xl text-gray-300" variants={fadeUpVariants}>
              A systematic approach to creating exceptional user experiences
            </motion.p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-4 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {designProcess.map((phase, index) => (
              <motion.div
                key={phase.step}
                className="text-center group"
                variants={fadeUpVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`w-20 h-20 bg-gradient-to-r ${phase.color} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {phase.icon}
                </motion.div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <div className="text-2xl font-bold text-white mb-2">{phase.step}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{phase.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              variants={fadeUpVariants}
            >
              Design <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Principles</span>
            </motion.h2>
            <motion.p className="text-xl text-gray-300" variants={fadeUpVariants}>
              The foundation of our design philosophy
            </motion.p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-12"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUpVariants}>
              <h3 className="text-3xl font-bold text-white mb-8">Our Core Principles</h3>
              <div className="space-y-6">
                {designPrinciples.map((principle, index) => (
                  <motion.div
                    key={principle.title}
                    className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      {principle.icon}
                    </div>
            <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{principle.title}</h4>
                      <p className="text-gray-300">{principle.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <h3 className="text-3xl font-bold text-white mb-8">Design Impact</h3>
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <h4 className="font-bold text-white">Poor User Experience</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    88% of users won't return to a website after a bad user experience.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 rounded-2xl">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <h4 className="font-bold text-white">Mobile Optimization</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    60% of web traffic comes from mobile devices, requiring mobile-first design.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-2xl">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <h4 className="font-bold text-white">Conversion Rates</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Good UX design can increase conversion rates by up to 400%.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden"
            variants={cardHoverVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
          >
            <div className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeUpVariants}>
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 mb-6">
                    Case Study
                  </Badge>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    GrowWise Financial App
                  </h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Comprehensive financial management app for small business owners, helping them track profits, 
                    allocate resources, and achieve growth goals with confidence through intuitive design.
                  </p>
                  <div className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                      <div className="text-3xl font-bold text-white mb-2">+300%</div>
                      <div className="text-gray-300">Profit Growth</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-2">6 months</div>
                      <div className="text-gray-300">Design Timeline</div>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 hover:from-purple-700 hover:to-pink-700">
                    View Design Case Study
                  </Button>
                </motion.div>
                <motion.div variants={fadeUpVariants}>
                  <img
                    src="/assets/growwise-project-screenshot.jpg"
                    alt="GrowWise financial app interface"
                    className="rounded-2xl shadow-2xl w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              variants={fadeUpVariants}
            >
            Ready to Enhance User Experience?
            </motion.h2>
            <motion.p
              className="text-xl text-white/90 mb-8"
              variants={fadeUpVariants}
            >
              Let's create intuitive, beautiful designs that your users will love and drive real business results.
            </motion.p>
            <motion.div variants={fadeUpVariants}>
          <Link href="/contact">
                <Button className="bg-white text-purple-600 px-8 py-4 text-lg hover:bg-gray-100 transition-colors font-semibold">
              Start Design Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
