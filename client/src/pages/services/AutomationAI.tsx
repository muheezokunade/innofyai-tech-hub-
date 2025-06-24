import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Check, Zap, TrendingUp, Clock, ArrowRight, Brain, Cpu, BarChart3, Shield, Users, Target, Rocket } from "lucide-react";
import { SEO } from "@/components/SEO";
import { generateServiceStructuredData } from "@/lib/structuredData";
import { 
  scrollRevealVariants, 
  staggerContainerVariants, 
  fadeUpVariants,
  buttonHoverVariants,
  cardHoverVariants
} from '../../lib/animations';

export default function AutomationAI() {
  const structuredData = generateServiceStructuredData({
    name: "Automation & AI Solutions",
    description: "Streamline operations with intelligent automation solutions that reduce manual tasks by up to 80% and eliminate human error.",
    provider: {
      name: "InnofyAI",
      url: "https://innofyai.com"
    },
    areaServed: "Nigeria",
    serviceType: "Business Process Automation"
  });

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Custom Workflow Automation",
      description: "Automate repetitive tasks and complex business processes with intelligent workflows.",
      color: "from-blue-600 to-purple-600"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Decision Making",
      description: "Leverage machine learning algorithms for intelligent business decisions.",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Process Optimization",
      description: "Identify bottlenecks and optimize workflows for maximum efficiency.",
      color: "from-green-600 to-blue-600"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Real-time Monitoring",
      description: "24/7 monitoring with intelligent alerts and performance analytics.",
      color: "from-orange-600 to-red-600"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Analysis & Assessment",
      description: "We analyze your current processes, identify automation opportunities, and assess potential ROI.",
      icon: <Target className="h-6 w-6" />
    },
    {
      step: "2", 
      title: "Solution Design",
      description: "Our team designs custom automation workflows tailored to your specific business requirements.",
      icon: <Brain className="h-6 w-6" />
    },
    {
      step: "3",
      title: "Implementation & Testing",
      description: "We implement the solution with rigorous testing to ensure optimal performance and reliability.",
      icon: <Rocket className="h-6 w-6" />
    },
    {
      step: "4",
      title: "Training & Support",
      description: "Comprehensive training and ongoing support to maximize the value of your automation investment.",
      icon: <Users className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEO 
        title="Automation & AI Solutions - InnofyAI"
        description="Streamline operations with intelligent automation solutions that reduce manual tasks by up to 80% and eliminate human error."
        keywords="AI automation, business process automation, workflow automation, AI solutions, machine learning, process optimization"
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
              <motion.div
                className="space-y-8"
                variants={staggerContainerVariants}
              >
                <motion.div variants={fadeUpVariants}>
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 mb-6">
                    Tech Solutions
                  </Badge>
                </motion.div>
                
                <motion.h1
                  className="text-5xl lg:text-6xl font-bold text-white leading-tight"
                  variants={fadeUpVariants}
                >
                  Automation & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">AI Solutions</span>
                </motion.h1>
                
                <motion.p
                  className="text-xl lg:text-2xl text-gray-300 leading-relaxed"
                  variants={fadeUpVariants}
                >
                  Streamline operations with intelligent automation solutions that reduce manual tasks by up to 80% and eliminate human error.
                </motion.p>
                
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  variants={fadeUpVariants}
                >
                  <Link href="/contact">
                    <motion.button
                      className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg flex items-center gap-2 text-lg"
                      variants={buttonHoverVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <span>Get Custom Quote</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                  <motion.button
                    className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Case Studies
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
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="AI automation workflow visualization" 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  variants={cardHoverVariants}
                  whileHover="hover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="text-center mb-16"
              variants={staggerContainerVariants}
            >
              <motion.h2
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
                variants={fadeUpVariants}
              >
                What We Deliver
              </motion.h2>
              <motion.p
                className="text-xl lg:text-2xl text-gray-300"
                variants={fadeUpVariants}
              >
                Comprehensive automation solutions tailored to your business needs
              </motion.p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainerVariants}
            >
              {features.map((feature, index) => (
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
                        className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {feature.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution */}
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
                  The Challenge
                </motion.h2>
                <motion.div
                  className="space-y-6"
                  variants={staggerContainerVariants}
                >
                  {[
                    "Manual processes consume 40-60% of employee time on repetitive tasks",
                    "Human error costs businesses an average of $62 billion annually",
                    "Lack of real-time insights leads to delayed decision-making",
                    "Disconnected systems create data silos and inefficiencies"
                  ].map((challenge, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl backdrop-blur-sm"
                      variants={fadeUpVariants}
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300">{challenge}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              
              <motion.div variants={staggerContainerVariants}>
                <motion.h2
                  className="text-3xl lg:text-4xl font-bold text-white mb-8"
                  variants={fadeUpVariants}
                >
                  Our Solution
                </motion.h2>
                <motion.div
                  className="space-y-6"
                  variants={staggerContainerVariants}
                >
                  {[
                    "Intelligent automation reduces manual work by up to 80%",
                    "AI-driven processes eliminate human error and improve accuracy",
                    "Real-time analytics provide instant insights for faster decisions",
                    "Seamless integration connects all your business systems"
                  ].map((solution, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl backdrop-blur-sm"
                      variants={fadeUpVariants}
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-300">{solution}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="text-center mb-16"
              variants={staggerContainerVariants}
            >
              <motion.h2
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
                variants={fadeUpVariants}
              >
                Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Process</span>
              </motion.h2>
              <motion.p
                className="text-xl lg:text-2xl text-gray-300"
                variants={fadeUpVariants}
              >
                A proven methodology that ensures successful automation implementation
              </motion.p>
            </motion.div>

            <motion.div
              className="grid lg:grid-cols-4 gap-8"
              variants={staggerContainerVariants}
            >
              {processSteps.map((step, index) => (
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
                    className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl"
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
              Ready to Automate Your Business?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
              variants={fadeUpVariants}
            >
              Let's discuss how our AI automation solutions can transform your operations and drive unprecedented efficiency.
            </motion.p>
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg flex items-center gap-2 mx-auto"
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span>Start Your Automation Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}