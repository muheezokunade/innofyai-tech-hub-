import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Check, BarChart3, TrendingUp, Database, Brain, ArrowRight, Zap, Users, Target, Rocket, PieChart } from "lucide-react";
import { SEO } from "@/components/SEO";
import { generateServiceStructuredData } from "@/lib/structuredData";
import { 
  scrollRevealVariants, 
  staggerContainerVariants, 
  fadeUpVariants,
  buttonHoverVariants,
  cardHoverVariants
} from '../../lib/animations';

export default function DataAnalytics() {
  const structuredData = generateServiceStructuredData({
    name: "Data Analytics",
    description: "Transform your data into actionable insights with advanced analytics and business intelligence solutions.",
    provider: {
      name: "InnofyAI",
      url: "https://innofyai.com"
    },
    areaServed: "Nigeria",
    serviceType: "Data Analytics Services"
  });

  const analyticsServices = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Predictive Analytics",
      description: "Forecast trends and anticipate future outcomes with machine learning models.",
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Real-time Dashboards",
      description: "Interactive dashboards that provide instant insights into your business metrics.",
      color: "from-indigo-600 to-purple-600"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Custom Reporting",
      description: "Automated reports tailored to your specific business requirements and KPIs.",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Data Visualization",
      description: "Transform complex data into clear, actionable visual insights and charts.",
      color: "from-pink-600 to-red-600"
    }
  ];

  const dataChallenges = [
    {
      title: "Data Silos",
      description: "73% of enterprise data goes unused for analytics due to disconnected systems.",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20"
    },
    {
      title: "Poor Data Quality",
      description: "Companies lose an average of $15 million annually due to poor data quality.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20"
    },
    {
      title: "Lack of Insights",
      description: "Only 32% of businesses can turn data into actionable insights efficiently.",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20"
    }
  ];

  const analyticsApproach = [
    {
      title: "Data Integration",
      description: "Connect all your data sources into a unified analytics platform.",
      icon: <Database className="h-5 w-5" />
    },
    {
      title: "Data Cleansing & Validation",
      description: "Ensure data accuracy and consistency across all sources.",
      icon: <Check className="h-5 w-5" />
    },
    {
      title: "Advanced Analytics",
      description: "Apply machine learning and statistical models for deeper insights.",
      icon: <Brain className="h-5 w-5" />
    },
    {
      title: "Actionable Recommendations",
      description: "Provide clear, data-driven recommendations for business decisions.",
      icon: <Target className="h-5 w-5" />
    }
  ];

  const analyticsTypes = [
    {
      type: "Descriptive",
      description: "What happened? Historical data analysis and trend identification.",
      color: "from-blue-600 to-indigo-600",
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      type: "Diagnostic",
      description: "Why did it happen? Root cause analysis and correlation identification.",
      color: "from-indigo-600 to-purple-600",
      icon: <Brain className="h-6 w-6" />
    },
    {
      type: "Predictive",
      description: "What will happen? Future forecasting using statistical models.",
      color: "from-purple-600 to-pink-600",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      type: "Prescriptive",
      description: "What should we do? Actionable recommendations and optimization.",
      color: "from-pink-600 to-red-600",
      icon: <Target className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEO 
        title="Data Analytics - InnofyAI"
        description="Transform your data into actionable insights with advanced analytics and business intelligence solutions."
        keywords="data analytics, business intelligence, predictive analytics, data visualization, custom reporting, real-time dashboards"
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
                  <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 mb-6">
                    Tech Solutions
                  </Badge>
                </motion.div>
                
                <motion.h1
                  className="text-5xl lg:text-6xl font-bold text-white leading-tight"
                  variants={fadeUpVariants}
                >
                  Data <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Analytics</span>
                </motion.h1>
                
                <motion.p
                  className="text-xl lg:text-2xl text-gray-300 leading-relaxed"
                  variants={fadeUpVariants}
                >
                  Transform your data into actionable insights with advanced analytics and business intelligence solutions.
                </motion.p>
                
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  variants={fadeUpVariants}
                >
                  <Link href="/contact">
                    <motion.button
                      className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full shadow-lg flex items-center gap-2 text-lg"
                      variants={buttonHoverVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <span>Get Analytics Demo</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                  <motion.button
                    className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Dashboards
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
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Data analytics dashboard visualization" 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  variants={cardHoverVariants}
                  whileHover="hover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Analytics Services */}
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
                Comprehensive Analytics Solutions
              </motion.h2>
              <motion.p
                className="text-xl lg:text-2xl text-gray-300"
                variants={fadeUpVariants}
              >
                Turn raw data into strategic business intelligence
              </motion.p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainerVariants}
            >
              {analyticsServices.map((service, index) => (
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

      {/* Data Challenges */}
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
                  Data Challenges
                </motion.h2>
                <motion.div
                  className="space-y-6"
                  variants={staggerContainerVariants}
                >
                  {dataChallenges.map((challenge, index) => (
                    <motion.div
                      key={index}
                      className={`p-6 ${challenge.bgColor} border ${challenge.borderColor} rounded-xl backdrop-blur-sm`}
                      variants={fadeUpVariants}
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`w-3 h-3 bg-gradient-to-r ${challenge.color} rounded-full`}></div>
                        <h3 className="font-bold text-white">{challenge.title}</h3>
                      </div>
                      <p className="text-gray-300 text-sm">{challenge.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              
              <motion.div variants={staggerContainerVariants}>
                <motion.h2
                  className="text-3xl lg:text-4xl font-bold text-white mb-8"
                  variants={fadeUpVariants}
                >
                  Our Analytics Approach
                </motion.h2>
                <motion.div
                  className="space-y-6"
                  variants={staggerContainerVariants}
                >
                  {analyticsApproach.map((approach, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl backdrop-blur-sm"
                      variants={fadeUpVariants}
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-green-400 mt-1 flex-shrink-0">
                        {approach.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{approach.title}</h4>
                        <p className="text-gray-300 text-sm">{approach.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Analytics Types */}
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
                Types of <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Analytics</span>
              </motion.h2>
              <motion.p
                className="text-xl lg:text-2xl text-gray-300"
                variants={fadeUpVariants}
              >
                From descriptive to prescriptive analytics
              </motion.p>
            </motion.div>

            <motion.div
              className="grid lg:grid-cols-4 gap-8"
              variants={staggerContainerVariants}
            >
              {analyticsTypes.map((type, index) => (
                <motion.div
                  key={type.type}
                  className="text-center"
                  variants={fadeUpVariants}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {type.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-4">{type.type}</h3>
                  <p className="text-gray-300">{type.description}</p>
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
              Ready to Transform Your Data?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
              variants={fadeUpVariants}
            >
              Let's unlock the hidden insights in your data and drive data-driven decision making across your organization.
            </motion.p>
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full shadow-lg flex items-center gap-2 mx-auto"
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span>Start Your Analytics Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}