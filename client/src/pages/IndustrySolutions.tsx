import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { 
  Building2, 
  ShoppingCart, 
  GraduationCap, 
  Heart, 
  Car, 
  Plane,
  Banknote,
  Factory,
  Utensils,
  Home,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Award,
  Star,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Lock,
  BarChart3,
  Palette,
  Code,
  MessageSquare,
  FileText,
  Image,
  Video,
  Music
} from 'lucide-react';

const IndustrySolutions: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const industries = [
    {
      id: 'ecommerce',
      name: 'E-commerce & Retail',
      icon: <ShoppingCart className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      description: 'Transform your online business with AI-powered solutions',
      solutions: [
        'AI-powered product recommendations',
        'Automated inventory management',
        'Personalized shopping experiences',
        'Dynamic pricing optimization',
        'Customer behavior analytics',
        'Automated customer support'
      ],
      benefits: [
        'Increase conversion rates by 300%',
        'Reduce cart abandonment by 50%',
        'Optimize inventory costs by 25%',
        'Improve customer satisfaction by 80%'
      ],
      caseStudy: {
        client: 'SpicePop E-commerce',
        result: '400% increase in sales',
        description: 'AI-powered recommendations and personalized experiences'
      }
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Medical',
      icon: <Heart className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      description: 'Revolutionize healthcare delivery with intelligent solutions',
      solutions: [
        'AI-powered diagnosis assistance',
        'Patient data analytics',
        'Automated appointment scheduling',
        'Medical image analysis',
        'Drug discovery optimization',
        'Telemedicine platforms'
      ],
      benefits: [
        'Improve diagnosis accuracy by 95%',
        'Reduce wait times by 60%',
        'Enhance patient outcomes by 40%',
        'Streamline operations by 70%'
      ],
      caseStudy: {
        client: 'MedTech Solutions',
        result: '95% diagnosis accuracy',
        description: 'AI-powered medical imaging and diagnosis'
      }
    },
    {
      id: 'education',
      name: 'Education & EdTech',
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      description: 'Transform learning with personalized AI-driven education',
      solutions: [
        'Personalized learning paths',
        'AI-powered tutoring systems',
        'Automated grading and assessment',
        'Virtual reality learning',
        'Student performance analytics',
        'Content recommendation engines'
      ],
      benefits: [
        'Improve learning outcomes by 60%',
        'Reduce administrative workload by 50%',
        'Increase student engagement by 80%',
        'Personalize education for every student'
      ],
      caseStudy: {
        client: 'EduTech Academy',
        result: '60% improvement in test scores',
        description: 'Personalized AI-powered learning platform'
      }
    },
    {
      id: 'finance',
      name: 'Finance & Banking',
      icon: <Banknote className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      description: 'Secure, intelligent financial solutions for modern banking',
      solutions: [
        'Fraud detection and prevention',
        'Risk assessment algorithms',
        'Automated trading systems',
        'Customer service chatbots',
        'Credit scoring models',
        'Compliance monitoring'
      ],
      benefits: [
        'Reduce fraud by 90%',
        'Improve risk assessment by 85%',
        'Enhance customer service by 70%',
        'Streamline compliance by 60%'
      ],
      caseStudy: {
        client: 'SecureBank',
        result: '90% fraud reduction',
        description: 'AI-powered fraud detection and prevention'
      }
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing & Industry',
      icon: <Factory className="w-8 h-8" />,
      color: 'from-gray-500 to-slate-600',
      description: 'Optimize production with smart manufacturing solutions',
      solutions: [
        'Predictive maintenance systems',
        'Quality control automation',
        'Supply chain optimization',
        'Production planning AI',
        'IoT sensor integration',
        'Energy consumption optimization'
      ],
      benefits: [
        'Reduce downtime by 75%',
        'Improve quality by 90%',
        'Optimize costs by 30%',
        'Increase efficiency by 50%'
      ],
      caseStudy: {
        client: 'SmartFactory Inc',
        result: '75% reduction in downtime',
        description: 'AI-powered predictive maintenance and quality control'
      }
    },
    {
      id: 'automotive',
      name: 'Automotive & Transportation',
      icon: <Car className="w-8 h-8" />,
      color: 'from-purple-500 to-indigo-500',
      description: 'Drive innovation with connected automotive solutions',
      solutions: [
        'Autonomous vehicle systems',
        'Fleet management optimization',
        'Predictive maintenance',
        'Traffic pattern analysis',
        'Driver behavior monitoring',
        'Smart navigation systems'
      ],
      benefits: [
        'Improve safety by 85%',
        'Reduce fuel costs by 25%',
        'Optimize routes by 40%',
        'Enhance customer experience by 70%'
      ],
      caseStudy: {
        client: 'AutoTech Solutions',
        result: '85% safety improvement',
        description: 'AI-powered autonomous driving and safety systems'
      }
    },
    {
      id: 'realestate',
      name: 'Real Estate & Property',
      icon: <Home className="w-8 h-8" />,
      color: 'from-teal-500 to-cyan-500',
      description: 'Transform property management with intelligent solutions',
      solutions: [
        'Property valuation AI',
        'Market trend analysis',
        'Virtual property tours',
        'Tenant screening automation',
        'Maintenance prediction',
        'Energy efficiency optimization'
      ],
      benefits: [
        'Improve property valuations by 95%',
        'Reduce vacancy rates by 40%',
        'Optimize maintenance costs by 35%',
        'Enhance tenant satisfaction by 80%'
      ],
      caseStudy: {
        client: 'PropertyTech',
        result: '40% reduction in vacancy rates',
        description: 'AI-powered property management and tenant screening'
      }
    },
    {
      id: 'hospitality',
      name: 'Hospitality & Tourism',
      icon: <Plane className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-500',
      description: 'Enhance guest experiences with smart hospitality solutions',
      solutions: [
        'Personalized guest services',
        'Revenue optimization',
        'Predictive demand forecasting',
        'Automated booking systems',
        'Guest behavior analytics',
        'Smart room management'
      ],
      benefits: [
        'Increase guest satisfaction by 85%',
        'Optimize revenue by 30%',
        'Reduce operational costs by 25%',
        'Improve occupancy rates by 40%'
      ],
      caseStudy: {
        client: 'Luxury Hotels Group',
        result: '85% guest satisfaction increase',
        description: 'AI-powered personalized guest services and revenue optimization'
      }
    },
    {
      id: 'food',
      name: 'Food & Beverage',
      icon: <Utensils className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      description: 'Revolutionize food service with intelligent solutions',
      solutions: [
        'Menu optimization AI',
        'Inventory management',
        'Customer preference analysis',
        'Kitchen automation',
        'Delivery route optimization',
        'Quality control systems'
      ],
      benefits: [
        'Reduce food waste by 60%',
        'Improve customer satisfaction by 75%',
        'Optimize costs by 30%',
        'Increase efficiency by 50%'
      ],
      caseStudy: {
        client: 'SmartRestaurant',
        result: '60% reduction in food waste',
        description: 'AI-powered menu optimization and inventory management'
      }
    }
  ];

  const filteredIndustries = selectedIndustry === 'all' 
    ? industries 
    : industries.filter(industry => industry.id === selectedIndustry);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEO
        title="Industry Solutions | InnofyAI"
        description="Discover tailored AI solutions for your industry. From healthcare to finance, manufacturing to hospitality - we have the expertise to transform your business."
        keywords="AI solutions, industry-specific AI, healthcare AI, finance AI, manufacturing AI, hospitality AI, real estate AI, automotive AI, food and beverage AI"
      />
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
                <Building2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industry Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored AI solutions for every industry. From healthcare to finance, 
              manufacturing to hospitality - we have the expertise to transform your business.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Industry Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Choose Your Industry
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedIndustry('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedIndustry === 'all'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              All Industries
            </button>
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedIndustry === industry.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {industry.name}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Industry Solutions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {filteredIndustries.map((industry, index) => (
            <motion.div
              key={industry.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Industry Header */}
              <div className={`bg-gradient-to-r ${industry.color} p-6 text-white`}>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-full">
                    {industry.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{industry.name}</h3>
                    <p className="text-blue-100 text-sm">{industry.description}</p>
                  </div>
                </div>
              </div>

              {/* Industry Content */}
              <div className="p-6">
                {/* Solutions */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-blue-500" />
                    AI Solutions
                  </h4>
                  <ul className="space-y-2">
                    {industry.solutions.slice(0, 4).map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    {industry.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Case Study */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-2 text-yellow-500" />
                    Success Story
                  </h4>
                  <div className="mb-2">
                    <span className="text-sm font-medium text-gray-900">{industry.caseStudy.client}</span>
                  </div>
                  <div className="mb-2">
                    <span className="text-lg font-bold text-green-600">{industry.caseStudy.result}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{industry.caseStudy.description}</p>
                </div>

                {/* CTA Button */}
                <div className="mt-6">
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Get Industry Solution</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Why Choose InnofyAI */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose InnofyAI for Your Industry?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We bring deep industry expertise combined with cutting-edge AI technology 
              to deliver solutions that truly transform your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-6 h-6" />,
                title: "Industry Expertise",
                description: "Deep knowledge across 9+ major industries"
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Compliance Ready",
                description: "Built-in compliance for industry regulations"
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Global Scale",
                description: "Solutions that work worldwide"
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Rapid Deployment",
                description: "Get solutions running in weeks, not months"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our industry-specific AI solutions can revolutionize your business 
              and give you a competitive edge in your market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default IndustrySolutions; 