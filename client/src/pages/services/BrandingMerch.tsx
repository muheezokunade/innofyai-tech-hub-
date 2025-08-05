import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  ArrowLeft, 
  Check, 
  Palette, 
  Heart, 
  Package, 
  Star, 
  ArrowRight,
  Target,
  Eye,
  Zap,
  Sparkles,
  Award,
  TrendingUp,
  Users
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

export default function BrandingMerch() {
  const structuredData = generateServiceStructuredData({
    name: "Branding & Merchandise Services",
    description: "Build powerful brand identities that resonate with your audience and create lasting impressions through cohesive design.",
    provider: {
      name: "InnofyAI",
      url: "https://innofyai.com",
    },
    areaServed: "Nigeria",
    serviceType: "Brand Identity Design",
  });

  const brandingServices = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Logo & Identity Design",
      description: "Memorable logos and comprehensive visual identity systems that capture your brand essence.",
      color: "from-orange-600 to-red-600",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Brand Guidelines & Assets",
      description: "Comprehensive brand standards and asset libraries for consistent brand application.",
      color: "from-red-600 to-pink-600",
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Custom Merchandise",
      description: "High-quality branded merchandise that amplifies your brand presence and creates lasting impressions.",
      color: "from-pink-600 to-purple-600",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Brand Strategy Consulting",
      description: "Strategic guidance for brand positioning and market differentiation to stand out from competitors.",
      color: "from-purple-600 to-indigo-600",
    },
  ];

  const brandProcess = [
    {
      step: "1",
      title: "Discovery & Research",
      description: "Brand audit, market research, and competitor analysis to understand your landscape and opportunities.",
      icon: <Eye className="h-6 w-6" />,
      color: "from-orange-600 to-red-600",
    },
    {
      step: "2",
      title: "Strategy & Positioning",
      description: "Define brand positioning, personality, values, and unique value proposition for market differentiation.",
      icon: <Target className="h-6 w-6" />,
      color: "from-red-600 to-pink-600",
    },
    {
      step: "3",
      title: "Design & Creation",
      description: "Create visual identity including logo, typography, colors, and style elements that reflect your brand.",
      icon: <Palette className="h-6 w-6" />,
      color: "from-pink-600 to-purple-600",
    },
    {
      step: "4",
      title: "Implementation & Launch",
      description: "Develop brand guidelines and apply identity across all touchpoints for consistent brand experience.",
      icon: <Zap className="h-6 w-6" />,
      color: "from-purple-600 to-indigo-600",
    },
    {
      step: "5",
      title: "Evolution & Growth",
      description: "Monitor brand performance and evolve strategy based on market feedback and business growth.",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "from-indigo-600 to-blue-600",
    },
  ];

  const merchandiseCategories = [
    {
      category: "Apparel & Fashion",
      items: ["Premium T-shirts", "Designer Hoodies", "Polo shirts", "Custom Caps"],
      description: "High-quality branded clothing that represents your brand with style and comfort.",
    },
    {
      category: "Office & Tech",
      items: ["Custom Notebooks", "Branded Pens", "USB drives", "Mouse pads"],
      description: "Professional merchandise that keeps your brand top of mind in the workplace.",
    },
    {
      category: "Drinkware & Lifestyle",
      items: ["Custom Mugs", "Water bottles", "Tumblers", "Travel cups"],
      description: "Everyday items that showcase your brand in daily life and conversations.",
    },
    {
      category: "Custom Collectibles",
      items: ["Premium Stickers", "Keychains", "Tote Bags", "Awards"],
      description: "Unique branded items that create memorable experiences and brand loyalty.",
    },
  ];

  const brandPrinciples = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Authentic Storytelling",
      description: "Craft compelling narratives that resonate with your target audience and build emotional connections.",
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Visual Consistency",
      description: "Maintain cohesive visual identity across all brand touchpoints for strong brand recognition.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Market Differentiation",
      description: "Position your brand uniquely in the competitive landscape to stand out and attract attention.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Scalable Systems",
      description: "Build brand frameworks that grow with your business and adapt to changing market conditions.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      <SEO
        title="Branding & Merchandise Services - InnofyAI"
        description="Build powerful brand identities that resonate with your audience and create lasting impressions through cohesive design."
        keywords="branding, brand identity, logo design, merchandise, brand strategy, custom apparel, brand guidelines"
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
                  <Badge className="bg-gradient-to-r from-orange-600 to-red-600 text-white border-0 mb-6">
                    Creative & Growth
                  </Badge>
                </motion.div>

                <motion.h1
                  className="text-5xl lg:text-6xl font-bold text-white leading-tight"
                  variants={fadeUpVariants}
                >
                  Branding &{" "}
                  <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    Merchandise
                  </span>
                </motion.h1>

                <motion.p
                  className="text-xl lg:text-2xl text-gray-300 leading-relaxed"
                  variants={fadeUpVariants}
                >
                  Build powerful brand identities that resonate with your audience and create lasting
                  impressions through cohesive design and premium merchandise.
                </motion.p>

                <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeUpVariants}>
                  <Link href="/contact">
                    <motion.button
                      className="group px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-full shadow-lg flex items-center gap-2 text-lg"
                      variants={buttonHoverVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <span>Start Brand Project</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                  <motion.button
                    className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Brand Portfolio
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
                  src="https://asoapparel.com/cdn/shop/articles/Untitled_2048_x_1536_px.png?v=1724877221&width=1320"
                  alt="Brand identity design elements and merchandise"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  variants={cardHoverVariants}
                  whileHover="hover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Branding Services */}
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
              Complete <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Brand Solutions</span>
            </motion.h2>
            <motion.p className="text-xl text-gray-300" variants={fadeUpVariants}>
              From concept to creation, we build brands that matter and leave lasting impressions
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {brandingServices.map((service, index) => (
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

      {/* Brand Development Process */}
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
              Brand Development <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Process</span>
            </motion.h2>
            <motion.p className="text-xl text-gray-300" variants={fadeUpVariants}>
              A strategic approach to building memorable brands that connect with your audience
            </motion.p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-5 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {brandProcess.map((phase, index) => (
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

      {/* Merchandise Gallery */}
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
              Custom <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Merchandise</span>
            </motion.h2>
            <motion.p className="text-xl text-gray-300" variants={fadeUpVariants}>
              Extend your brand with high-quality promotional products that create lasting impressions
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {merchandiseCategories.map((category, index) => (
              <motion.div
                key={category.category}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                variants={cardHoverVariants}
                whileHover="hover"
              >
                <div className="h-48 bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                  <Package className="h-16 w-16 text-orange-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{category.category}</h3>
                  <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.items.map(item => (
                      <li key={item} className="text-gray-300 text-sm flex items-center">
                        <Check className="w-3 h-3 text-orange-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brand Impact */}
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
              Brand <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Impact</span>
            </motion.h2>
            <motion.p className="text-xl text-gray-300" variants={fadeUpVariants}>
              The power of strong branding and its measurable business impact
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
              <h3 className="text-3xl font-bold text-white mb-8">Brand Challenges & Solutions</h3>
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <h4 className="font-bold text-white">Brand Recognition</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    77% of consumers make purchases based on brand name recognition and trust.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 rounded-2xl">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <h4 className="font-bold text-white">Brand Consistency</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Consistent branding can increase revenue by up to 23% and improve customer loyalty.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-r from-yellow-500/20 to-green-500/20 border border-yellow-500/30 rounded-2xl">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <h4 className="font-bold text-white">Customer Loyalty</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Strong brands create 5x more customer loyalty than competitors and drive repeat business.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <h3 className="text-3xl font-bold text-white mb-8">Our Brand Approach</h3>
              <div className="space-y-6">
                {brandPrinciples.map((principle, index) => (
                  <motion.div
                    key={principle.title}
                    className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
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
                  <Badge className="bg-gradient-to-r from-orange-600 to-red-600 text-white border-0 mb-6">
                    Case Study
                  </Badge>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Osinachi Humanity Impact Initiative
                  </h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Complete brand identity for humanitarian impact initiative, including logo,
                    website, and marketing materials leading to significant funding increase and community impact.
                  </p>
                  <div className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                      <div className="text-3xl font-bold text-white mb-2">+320%</div>
                      <div className="text-gray-300">Funding Increase</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-2">3 months</div>
                      <div className="text-gray-300">Brand Development</div>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-orange-600 to-red-600 text-white border-0 hover:from-orange-700 hover:to-red-700">
                    View Brand Case Study
                  </Button>
                </motion.div>
                <motion.div variants={fadeUpVariants}>
                  <img
                    src="/assets/osinachi-project-screenshot.jpg"
                    alt="Osinachi Humanity Impact Initiative brand identity elements"
                    className="rounded-2xl shadow-2xl w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-red-600">
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
              Ready to Build Your Brand?
            </motion.h2>
            <motion.p
              className="text-xl text-white/90 mb-8"
              variants={fadeUpVariants}
            >
              Let's create a brand identity that makes a lasting impression on your audience and drives real business results.
            </motion.p>
            <motion.div variants={fadeUpVariants}>
              <Link href="/contact">
                <Button className="bg-white text-orange-600 px-8 py-4 text-lg hover:bg-gray-100 transition-colors font-semibold">
                  Start Brand Project
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
