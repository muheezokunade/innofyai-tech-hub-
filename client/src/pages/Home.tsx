import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Shield,
  BarChart3,
  Smartphone,
  Zap,
  ArrowRight,
  Star,
  Users,
  Award,
} from "lucide-react";
import { AnimatedHero } from "../components/AnimatedHero";
import { ServiceCard } from "../components/ServiceCard";
import { ScrollProgress } from "../components/ScrollProgress";
import { FloatingCTA } from "../components/FloatingCTA";
import { ThemeToggle } from "../components/ThemeToggle";
import { StartProjectButton, ScheduleConsultationButton } from '../components/CTAButton';
import {
  scrollRevealVariants,
  staggerContainerVariants,
  fadeUpVariants,
  buttonHoverVariants,
} from "../lib/animations";
import { SEO } from "@/components/SEO";
import { generateOrganizationStructuredData } from "@/lib/structuredData";
import { Link } from "wouter";

const services = [
  {
    title: "AI & Automation",
    description:
      "Intelligent automation solutions that streamline operations and boost productivity.",
    icon: <Zap className="w-8 h-8 text-blue-400" />,
    benefits: ["Process automation", "AI-powered insights", "Cost reduction", "24/7 operation"],
    color: "#3b82f6",
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive and engaging digital experiences.",
    icon: <Palette className="w-8 h-8 text-purple-400" />,
    benefits: ["User research", "Wireframing & prototyping", "Visual design", "Usability testing"],
    color: "#8b5cf6",
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and data.",
    icon: <Shield className="w-8 h-8 text-green-400" />,
    benefits: ["Threat detection", "Data encryption", "Security audits", "Compliance support"],
    color: "#10b981",
  },
  {
    title: "Data Analytics",
    description: "Transform raw data into actionable insights for informed decision-making.",
    icon: <BarChart3 className="w-8 h-8 text-orange-400" />,
    benefits: [
      "Data visualization",
      "Predictive analytics",
      "Performance tracking",
      "Custom dashboards",
    ],
    color: "#f59e0b",
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    icon: <Smartphone className="w-8 h-8 text-pink-400" />,
    benefits: [
      "iOS & Android apps",
      "Cross-platform solutions",
      "App store optimization",
      "Performance optimization",
    ],
    color: "#ec4899",
  },
  {
    title: "Web Development",
    description: "Modern web applications built with cutting-edge technologies and best practices.",
    icon: <Code className="w-8 h-8 text-indigo-400" />,
    benefits: [
      "Responsive design",
      "SEO optimization",
      "Performance focused",
      "Scalable architecture",
    ],
    color: "#6366f1",
  },
];

const testimonials = [
  {
    name: "Alex Osinachi",
    role: "CEO, Osinachi Renewable Energy",
    content:
      "InnofyAI's rebranding work was transformative. They didn't just redesign our logo - they reimagined our entire brand experience. The results speak for themselves - our user engagement skyrocketed.",
    rating: 5,
    avatar: "👨‍💼",
  },
  {
    name: "Iman Fasasi",
    role: "Founder, SpicePop",
    content:
      "InnofyAI delivered a complete transformation - from our brand identity to our e-commerce platform and social media presence. Their comprehensive approach helped us establish a strong digital presence and connect with customers nationwide. The results have been phenomenal.",
    rating: 5,
    avatar: "👨‍💼",
  },
  {
    name: "Alex Monueke",
    role: "Founder & CEO, Osinachi Humanity Impact Initiative",
    content:
      "InnofyAI's branding work was instrumental in our fundraising success. They perfectly captured our mission and created a brand that donors and volunteers immediately connected with. Our funding increased by 320%!",
    rating: 5,
    avatar: "👨‍💼",
  },
];

const stats = [
      { number: "20+", label: "Projects Delivered", icon: <Award className="w-6 h-6" /> },
  { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
      { number: "10+", label: "Team Members", icon: <Users className="w-6 h-6" /> },
  { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> },
];

const Home: React.FC = () => {
  const structuredData = generateOrganizationStructuredData({
    name: "InnofyAI",
    description: "Tech Innovation Hub - Transforming ideas into digital excellence",
    url: "https://innofyai.com",
    logo: "https://innofyai.com/logo.png",
    address: {
      addressLocality: "13, signature estate, Ikota, Lekki",
      addressCountry: "Nigeria",
    },
    contactPoint: {
      contactType: "customer service",
      email: "info@innofyai.com",
    },
          sameAs: [
        "https://x.com/innofyai?s=21",
        "https://www.linkedin.com/company/innofy-ai/",
        "https://www.instagram.com/innofyai?igsh=dGI5MTE5a2xra28%3D&utm_source=qr",
        "https://www.tiktok.com/@innofyai?_t=ZM-8y83dmNvGis&_r=1",
      ],
  });

  const handleGetStarted = () => {
    // Navigate to contact page
    window.location.href = "/contact";
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/50 via-purple-900/70 to-slate-900 relative overflow-hidden">
      {/* Tech-themed background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><defs><pattern id="techDots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse"><circle cx="30" cy="30" r="1" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="1920" height="1080" fill="url(%23techDots)"/></svg>')`,
          }}
        />
      </div>
      
      <SEO
        title="InnofyAI - Tech Excellence & Creative Innovation"
        description="Transform your business with cutting-edge AI solutions, innovative design, and strategic technology consulting. InnofyAI delivers excellence in every project."
        keywords="AI solutions, technology consulting, web development, mobile apps, cybersecurity, data analytics, UI/UX design, digital transformation"
        structuredData={structuredData}
      />

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Floating CTA */}
      <FloatingCTA />

      {/* Hero Section */}
      <AnimatedHero />

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              variants={fadeUpVariants}
            >
              Our Services
            </motion.h2>
            <motion.p className="text-xl text-gray-300 max-w-3xl mx-auto" variants={fadeUpVariants}>
              We offer comprehensive technology solutions designed to drive innovation and
              accelerate your business growth.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index * 0.1} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
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
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              variants={fadeUpVariants}
            >
              What Our Clients Say
            </motion.h2>
            <motion.p className="text-xl text-gray-300 max-w-3xl mx-auto" variants={fadeUpVariants}>
              Don't just take our word for it. Here's what our clients have to say about working
              with InnofyAI.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                variants={fadeUpVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
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
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              variants={fadeUpVariants}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              variants={fadeUpVariants}
            >
              Let's discuss how our innovative solutions can help you achieve your business goals
              and stay ahead of the competition.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeUpVariants}
            >
              <StartProjectButton size="lg" />
              <ScheduleConsultationButton size="lg" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
