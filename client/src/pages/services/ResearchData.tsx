import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/OptimizedImage";
import {
  ArrowRight,
  Check,
  Star,
  Users,
  Award,
  Zap,
  Shield,
  Palette,
  BarChart3,
  Code,
  Megaphone,
  Lightbulb,
  Trophy,
  Heart,
  Target,
  Globe,
  Brain,
  Handshake,
  Search,
  Database,
  TrendingUp,
  FileText,
  PieChart,
  BarChart,
  LineChart,
  Activity,
  Eye,
  Target as TargetIcon,
  Users as UsersIcon,
  Globe as GlobeIcon,
  TrendingUp as TrendingUpIcon,
} from "lucide-react";
import SEO from "@/components/SEO";
import { generateServiceStructuredData } from "@/lib/structuredData";
import { StartProjectButton, ScheduleConsultationButton } from '../../components/CTAButton';
import {
  scrollRevealVariants,
  staggerContainerVariants,
  fadeUpVariants,
  buttonHoverVariants,
  cardHoverVariants,
} from "../../lib/animations";

export default function ResearchData() {
  const structuredData = generateServiceStructuredData({
    name: "Research & Data Collection",
    description: "Comprehensive research and data collection services to gather insights, validate strategies, and drive informed decision-making for your business growth.",
    provider: {
      name: "InnofyAI",
      url: "https://innofyai.com",
    },
    areaServed: "Nigeria",
    serviceType: "Research and Data Collection",
  });

  const features = [
    {
      icon: <Search className="h-8 w-8 text-white" />,
      title: "Market Research & Analysis",
      description: "Comprehensive market research to understand your industry landscape, identify opportunities, and validate business strategies.",
      color: "#3b82f6",
    },
    {
      icon: <UsersIcon className="h-8 w-8 text-white" />,
      title: "Customer Behavior Studies",
      description: "In-depth analysis of customer behavior patterns, preferences, and pain points to optimize your product and marketing strategies.",
      color: "#8b5cf6",
    },
    {
      icon: <GlobeIcon className="h-8 w-8 text-white" />,
      title: "Competitive Intelligence",
      description: "Strategic analysis of competitors to identify market gaps, opportunities, and positioning strategies for your business.",
      color: "#10b981",
    },
    {
      icon: <Database className="h-8 w-8 text-white" />,
      title: "Data Collection & Validation",
      description: "Robust data collection methodologies and validation processes to ensure accurate, reliable insights for decision-making.",
      color: "#f59e0b",
    },
  ];

  const benefits = [
    {
      icon: <TrendingUpIcon className="h-6 w-6" />,
      title: "Data-Driven Decisions",
      description: "Make informed business decisions based on comprehensive research and validated data insights.",
    },
    {
      icon: <TargetIcon className="h-6 w-6" />,
      title: "Strategic Positioning",
      description: "Identify optimal market positioning and competitive advantages through detailed market analysis.",
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Customer Insights",
      description: "Deep understanding of customer needs, behaviors, and preferences to optimize your offerings.",
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Risk Mitigation",
      description: "Identify potential risks and opportunities early through comprehensive market and competitive analysis.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Research Planning",
      description: "Define research objectives, scope, and methodology based on your business goals and requirements.",
    },
    {
      step: "02",
      title: "Data Collection",
      description: "Execute comprehensive data collection using multiple sources and methodologies for robust insights.",
    },
    {
      step: "03",
      title: "Analysis & Validation",
      description: "Analyze collected data using advanced analytical techniques and validate findings for accuracy.",
    },
    {
      step: "04",
      title: "Insights & Recommendations",
      description: "Deliver actionable insights and strategic recommendations to drive your business growth.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO
        title="Research & Data Collection Services - InnofyAI"
        description="Comprehensive research and data collection services to gather insights, validate strategies, and drive informed decision-making for your business growth."
        keywords="research, data collection, market research, customer behavior, competitive intelligence, business insights, data analysis"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/assets/data-analytics-hero.svg')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/80 to-slate-900/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
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
              Research & <span className="gradient-text">Data Collection</span>
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              variants={fadeUpVariants}
            >
              Comprehensive research and data collection services to gather insights, validate strategies, 
              and drive informed decision-making for your business growth.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
              variants={fadeUpVariants}
            >
              <StartProjectButton size="lg" />
              <ScheduleConsultationButton size="lg" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              className="text-4xl lg:text-6xl font-bold text-white mb-8"
              variants={fadeUpVariants}
            >
              Our <span className="gradient-text">Services</span>
            </motion.h2>
            <motion.p className="text-xl text-gray-300" variants={fadeUpVariants}>
              Comprehensive research and data collection solutions tailored to your business needs
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
                variants={cardHoverVariants}
                whileHover="hover"
                style={{ "--hover-color": feature.color } as any}
              >
                <motion.div
                  className="w-20 h-20 mx-auto mb-8 rounded-full flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}, ${feature.color}dd)`,
                  }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-6">{feature.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              className="text-4xl lg:text-6xl font-bold text-white mb-8"
              variants={fadeUpVariants}
            >
              Why Choose <span className="gradient-text">Our Research</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={fadeUpVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              className="text-4xl lg:text-6xl font-bold text-white mb-8"
              variants={fadeUpVariants}
            >
              Our <span className="gradient-text">Process</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={fadeUpVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.step}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
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
              Ready to Get Started?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
              variants={fadeUpVariants}
            >
              Let's discuss your research needs and create a comprehensive data collection strategy 
              to drive your business growth.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
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
} 