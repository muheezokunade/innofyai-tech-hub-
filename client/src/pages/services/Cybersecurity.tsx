import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import {
  ArrowLeft,
  Check,
  Shield,
  Eye,
  AlertTriangle,
  Lock,
  ArrowRight,
  Brain,
  Zap,
  Users,
  Target,
  Rocket,
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

export default function Cybersecurity() {
  const structuredData = generateServiceStructuredData({
    name: "Advanced Cybersecurity",
    description:
      "Protect your digital assets with comprehensive security solutions designed to prevent, detect, and respond to cyber threats.",
    provider: {
      name: "InnofyAI",
      url: "https://innofyai.com",
    },
    areaServed: "Nigeria",
    serviceType: "Cybersecurity Services",
  });

  const securityServices = [
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Advanced Threat Detection",
      description:
        "AI-powered threat intelligence to identify and neutralize sophisticated attacks.",
      color: "from-red-600 to-orange-600",
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "24/7 Security Monitoring",
      description: "Round-the-clock surveillance of your digital assets and infrastructure.",
      color: "from-orange-600 to-yellow-600",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Incident Response Planning",
      description: "Comprehensive response strategies to minimize damage and recovery time.",
      color: "from-yellow-600 to-green-600",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Compliance Management",
      description: "Ensure adherence to industry standards and regulatory requirements.",
      color: "from-green-600 to-blue-600",
    },
  ];

  const threatLandscape = [
    {
      title: "Ransomware Attacks",
      description:
        "Average cost of $4.35 million per breach, with attacks increasing 41% year-over-year.",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20",
    },
    {
      title: "AI-Powered Attacks",
      description:
        "Sophisticated phishing and social engineering using deepfakes and machine learning.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
    },
    {
      title: "Supply Chain Vulnerabilities",
      description: "62% of companies experienced a supply chain attack in the past year.",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20",
    },
  ];

  const defenseStrategies = [
    {
      title: "Zero Trust Architecture",
      description:
        "Never trust, always verify - comprehensive access controls for all users and devices.",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      title: "AI-Driven Threat Detection",
      description: "Machine learning algorithms that adapt to emerging threats in real-time.",
      icon: <Brain className="h-5 w-5" />,
    },
    {
      title: "Multi-Factor Authentication",
      description: "Layered authentication systems to prevent unauthorized access.",
      icon: <Lock className="h-5 w-5" />,
    },
    {
      title: "Regular Security Audits",
      description: "Continuous assessment and improvement of security posture.",
      icon: <Eye className="h-5 w-5" />,
    },
  ];

  const securityProcess = [
    {
      step: "1",
      title: "Security Assessment",
      description:
        "Comprehensive evaluation of your current security posture and vulnerability identification.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      step: "2",
      title: "Strategy Development",
      description:
        "Custom security framework designed to address your specific threats and compliance needs.",
      icon: <Brain className="h-6 w-6" />,
    },
    {
      step: "3",
      title: "Implementation",
      description: "Deployment of security solutions with minimal disruption to your operations.",
      icon: <Rocket className="h-6 w-6" />,
    },
    {
      step: "4",
      title: "Ongoing Protection",
      description:
        "Continuous monitoring, updates, and incident response to maintain security posture.",
      icon: <Users className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <SEO
        title="Advanced Cybersecurity - InnofyAI"
        description="Protect your digital assets with comprehensive security solutions designed to prevent, detect, and respond to cyber threats."
        keywords="cybersecurity, digital security, threat detection, incident response, security monitoring, compliance management"
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
                  <Badge className="bg-gradient-to-r from-red-600 to-orange-600 text-white border-0 mb-6">
                    Tech Solutions
                  </Badge>
                </motion.div>

                <motion.h1
                  className="text-5xl lg:text-6xl font-bold text-white leading-tight"
                  variants={fadeUpVariants}
                >
                  Advanced{" "}
                  <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                    Cybersecurity
                  </span>
                </motion.h1>

                <motion.p
                  className="text-xl lg:text-2xl text-gray-300 leading-relaxed"
                  variants={fadeUpVariants}
                >
                  Protect your digital assets with comprehensive security solutions designed to
                  prevent, detect, and respond to cyber threats.
                </motion.p>

                <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeUpVariants}>
                  <Link href="/contact">
                    <motion.button
                      className="group px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold rounded-full shadow-lg flex items-center gap-2 text-lg"
                      variants={buttonHoverVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <span>Security Assessment</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                  <motion.button
                    className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Security Report
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
                  src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg"
                  alt="Cybersecurity monitoring dashboard"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  variants={cardHoverVariants}
                  whileHover="hover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Services */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="text-center mb-16" variants={staggerContainerVariants}>
              <motion.h2
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
                variants={fadeUpVariants}
              >
                Comprehensive Security Solutions
              </motion.h2>
              <motion.p className="text-xl lg:text-2xl text-gray-300" variants={fadeUpVariants}>
                Multi-layered protection for your digital infrastructure
              </motion.p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainerVariants}
            >
              {securityServices.map((service, index) => (
                <motion.div
                  key={index}
                  variants={cardHoverVariants}
                  whileHover="hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <CardContent className="pt-6">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-gray-300">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div variants={staggerContainerVariants}>
                <motion.h2
                  className="text-3xl lg:text-4xl font-bold text-white mb-8"
                  variants={fadeUpVariants}
                >
                  Current Threat Landscape
                </motion.h2>
                <motion.div className="space-y-6" variants={staggerContainerVariants}>
                  {threatLandscape.map((threat, index) => (
                    <motion.div
                      key={index}
                      className={`p-6 ${threat.bgColor} border ${threat.borderColor} rounded-xl backdrop-blur-sm`}
                      variants={fadeUpVariants}
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <div
                          className={`w-3 h-3 bg-gradient-to-r ${threat.color} rounded-full`}
                        ></div>
                        <h3 className="font-bold text-white">{threat.title}</h3>
                      </div>
                      <p className="text-gray-300 text-sm">{threat.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div variants={staggerContainerVariants}>
                <motion.h2
                  className="text-3xl lg:text-4xl font-bold text-white mb-8"
                  variants={fadeUpVariants}
                >
                  Our Defense Strategy
                </motion.h2>
                <motion.div className="space-y-6" variants={staggerContainerVariants}>
                  {defenseStrategies.map((strategy, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl backdrop-blur-sm"
                      variants={fadeUpVariants}
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-green-400 mt-1 flex-shrink-0">{strategy.icon}</div>
                      <div>
                        <h4 className="font-semibold text-white">{strategy.title}</h4>
                        <p className="text-gray-300 text-sm">{strategy.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Process */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="text-center mb-16" variants={staggerContainerVariants}>
              <motion.h2
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
                variants={fadeUpVariants}
              >
                Our Security{" "}
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Implementation
                </span>
              </motion.h2>
              <motion.p className="text-xl lg:text-2xl text-gray-300" variants={fadeUpVariants}>
                A systematic approach to securing your digital infrastructure
              </motion.p>
            </motion.div>

            <motion.div className="grid lg:grid-cols-4 gap-8" variants={staggerContainerVariants}>
              {securityProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  className="text-center"
                  variants={fadeUpVariants}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
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
              Secure Your Digital Assets Today
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
              variants={fadeUpVariants}
            >
              Don't wait for a breach to happen. Let's assess your current security posture and
              implement a comprehensive cybersecurity strategy.
            </motion.p>
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold rounded-full shadow-lg flex items-center gap-2 mx-auto"
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span>Get Security Assessment</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
