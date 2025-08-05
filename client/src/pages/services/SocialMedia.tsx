import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  ArrowLeft, 
  Share2, 
  TrendingUp, 
  Users, 
  BarChart3, 
  ArrowRight,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Youtube,
  MessageCircle,
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

export default function SocialMedia() {
  const structuredData = generateServiceStructuredData({
    name: "Social Media Management Services",
    description: "Grow your brand and engage your audience with expert social media marketing, content creation, and analytics services across all major platforms.",
    provider: {
      name: "InnofyAI",
      url: "https://innofyai.com",
    },
    areaServed: "Nigeria",
    serviceType: "Social Media Marketing",
  });

  const socialMediaServices = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Strategic Campaigns",
      description: "Data-driven social media campaigns designed to grow your brand and increase engagement across all platforms.",
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Management",
      description: "Active community engagement, content moderation, and relationship building with your audience.",
      color: "from-indigo-600 to-purple-600",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics & Reporting",
      description: "Comprehensive analytics and performance reporting to track growth and optimize your social media strategy.",
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Content Creation",
      description: "Engaging, platform-optimized content that resonates with your audience and drives meaningful interactions.",
      color: "from-pink-600 to-red-600",
    },
  ];

  const socialPlatforms = [
    {
      name: "Instagram",
      icon: <Instagram className="h-6 w-6" />,
      description: "Visual storytelling and influencer partnerships",
      color: "from-pink-600 to-purple-600",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
      description: "B2B networking and professional content",
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "Twitter/X",
      icon: <Twitter className="h-6 w-6" />,
      description: "Real-time engagement and trending topics",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-6 w-6" />,
      description: "Community building and targeted advertising",
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "YouTube",
      icon: <Youtube className="h-6 w-6" />,
      description: "Video content and long-form storytelling",
      color: "from-red-600 to-red-700",
    },
    {
      name: "TikTok",
      icon: <TrendingUp className="h-6 w-6" />,
      description: "Short-form video and viral content",
      color: "from-black to-gray-800",
    },
  ];

  const socialMediaProcess = [
    {
      step: "1",
      title: "Strategy & Planning",
      description: "Develop comprehensive social media strategy aligned with your brand goals and target audience.",
      icon: <Target className="h-6 w-6" />,
      color: "from-blue-600 to-indigo-600",
    },
    {
      step: "2",
      title: "Content Creation",
      description: "Create engaging, platform-optimized content that resonates with your audience and drives engagement.",
      icon: <MessageCircle className="h-6 w-6" />,
      color: "from-indigo-600 to-purple-600",
    },
    {
      step: "3",
      title: "Community Management",
      description: "Active engagement, content moderation, and relationship building with your audience across all platforms.",
      icon: <Users className="h-6 w-6" />,
      color: "from-purple-600 to-pink-600",
    },
    {
      step: "4",
      title: "Analytics & Optimization",
      description: "Monitor performance, analyze data, and continuously optimize your social media strategy for better results.",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "from-pink-600 to-red-600",
    },
  ];

  const socialMediaBenefits = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Increased Brand Awareness",
      description: "Expand your reach and visibility across multiple social media platforms to connect with new audiences.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Enhanced Engagement",
      description: "Build meaningful relationships with your audience through active community management and engaging content.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Lead Generation",
      description: "Convert social media followers into qualified leads through strategic content and targeted campaigns.",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Brand Loyalty",
      description: "Foster long-term customer relationships and brand loyalty through consistent, authentic social media presence.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEO
        title="Social Media Management Services - InnofyAI"
        description="Grow your brand and engage your audience with expert social media marketing, content creation, and analytics services across all major platforms."
        keywords="social media management, content creation, community management, social media marketing, Instagram, LinkedIn, Facebook, Twitter"
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
                  <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 mb-6">
                    Creative & Growth
                  </Badge>
                </motion.div>

                <motion.h1
                  className="text-5xl lg:text-6xl font-bold text-white leading-tight"
                  variants={fadeUpVariants}
                >
                  Social <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Media</span>
                </motion.h1>

                <motion.p
                  className="text-xl lg:text-2xl text-gray-300 leading-relaxed"
                  variants={fadeUpVariants}
                >
                  Grow your brand and engage your audience with expert social media marketing, content
                  creation, and analytics services across all major platforms.
                </motion.p>

                <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeUpVariants}>
                  <Link href="/contact">
                    <motion.button
                      className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full shadow-lg flex items-center gap-2 text-lg"
                      variants={buttonHoverVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <span>Start Social Media Project</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                  <motion.button
                    className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Social Media Portfolio
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
                  src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg"
                  alt="Social media management and digital marketing"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  variants={cardHoverVariants}
                  whileHover="hover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Services */}
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
              Social Media <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Services</span>
            </motion.h2>
            <motion.p className="text-xl text-gray-300" variants={fadeUpVariants}>
              Comprehensive social media management that drives real business results
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {socialMediaServices.map((service, index) => (
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

      {/* Social Media Platforms */}
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
              Platform <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Expertise</span>
            </motion.h2>
            <motion.p className="text-xl text-gray-300" variants={fadeUpVariants}>
              We manage your presence across all major social media platforms
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {socialPlatforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                variants={cardHoverVariants}
                whileHover="hover"
              >
                <motion.div
                  className={`w-12 h-12 bg-gradient-to-r ${platform.color} rounded-xl flex items-center justify-center mb-4`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {platform.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-white mb-2">{platform.name}</h3>
                <p className="text-gray-300 text-sm">{platform.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Media Process */}
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
              Our Social Media <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Process</span>
            </motion.h2>
            <motion.p className="text-xl text-gray-300" variants={fadeUpVariants}>
              A systematic approach to building and managing your social media presence
            </motion.p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-4 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {socialMediaProcess.map((phase, index) => (
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

      {/* Social Media Benefits */}
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
              Social Media <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Benefits</span>
            </motion.h2>
            <motion.p className="text-xl text-gray-300" variants={fadeUpVariants}>
              The measurable impact of strategic social media management
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
              <h3 className="text-3xl font-bold text-white mb-8">Business Impact</h3>
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-2xl">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <h4 className="font-bold text-white">Brand Awareness</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    78% of consumers are willing to buy from a company after having a positive experience with them on social media.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-2xl">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                    <h4 className="font-bold text-white">Customer Engagement</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Social media increases customer engagement by 300% and improves customer satisfaction scores.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <h4 className="font-bold text-white">Lead Generation</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Companies using social media for lead generation see 24% higher revenue growth than those who don't.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <h3 className="text-3xl font-bold text-white mb-8">Our Approach</h3>
              <div className="space-y-6">
                {socialMediaBenefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                      <p className="text-gray-300">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
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
                  <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 mb-6">
                    Case Study
                  </Badge>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    SpicePop Social Media Success
                  </h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Comprehensive social media management across 6 platforms including Instagram, Facebook, Twitter, 
                    WhatsApp Business, TikTok, and YouTube content creation and management.
                  </p>
                  <div className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                      <div className="text-3xl font-bold text-white mb-2">+250%</div>
                      <div className="text-gray-300">Sales Growth</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-2">6 platforms</div>
                      <div className="text-gray-300">Social Media Management</div>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 hover:from-blue-700 hover:to-indigo-700">
                    View Social Media Case Study
                  </Button>
                </motion.div>
                <motion.div variants={fadeUpVariants}>
                  <img
                    src="/assets/spicepop-project-screenshot.jpg"
                    alt="SpicePop social media management results"
                    className="rounded-2xl shadow-2xl w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
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
              Ready to Grow Your Social Media Presence?
            </motion.h2>
            <motion.p
              className="text-xl text-white/90 mb-8"
              variants={fadeUpVariants}
            >
              Let's create engaging content and build meaningful connections with your audience across all platforms.
            </motion.p>
            <motion.div variants={fadeUpVariants}>
              <Link href="/contact">
                <Button className="bg-white text-blue-600 px-8 py-4 text-lg hover:bg-gray-100 transition-colors font-semibold">
                  Start Social Media Project
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
