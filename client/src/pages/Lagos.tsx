import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Building2, 
  Users, 
  Zap, 
  Shield, 
  BarChart3,
  Palette,
  Code,
  Megaphone,
  CheckCircle,
  Star,
  Phone,
  Mail,
  Clock,
  Globe,
  TrendingUp
} from 'lucide-react';

const Lagos: React.FC = () => {
  const localServices = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automation & AI Solutions",
      description: "Transform your Lagos business with intelligent automation",
      benefits: [
        "Process automation for Lagos businesses",
        "AI-powered customer service solutions",
        "Local market optimization",
        "Cost reduction and efficiency gains"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity Services",
      description: "Protect your business in Nigeria's digital landscape",
      benefits: [
        "Local cybersecurity compliance",
        "Data protection for Nigerian businesses",
        "24/7 security monitoring",
        "Incident response and recovery"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Data-driven insights for Lagos market success",
      benefits: [
        "Local market analysis",
        "Customer behavior insights",
        "Performance optimization",
        "Competitive intelligence"
      ]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "User-centered design for Nigerian audiences",
      benefits: [
        "Cultural design considerations",
        "Mobile-first approach",
        "Local user testing",
        "Accessibility compliance"
      ]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software Development",
      description: "Custom software solutions for Lagos businesses",
      benefits: [
        "Local development team",
        "Nigerian business expertise",
        "Scalable solutions",
        "Ongoing support and maintenance"
      ]
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Reach your Lagos audience effectively",
      benefits: [
        "Local SEO optimization",
        "Social media management",
        "Content marketing",
        "Brand development"
      ]
    }
  ];

  const localAdvantages = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Local Presence",
      description: "Based in Lagos with deep understanding of the local market"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Local Expertise",
      description: "Team with extensive experience in Nigerian business landscape"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Same Time Zone",
      description: "Real-time communication and support during business hours"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Cultural Understanding",
      description: "Deep knowledge of Nigerian business culture and practices"
    }
  ];

  const localStats = [
    {
      value: "500+",
      label: "Lagos Businesses Served",
      description: "Successfully delivered projects"
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      description: "Based on local client feedback"
    },
    {
      value: "24/7",
      label: "Local Support",
      description: "Available for Lagos businesses"
    },
    {
      value: "5+",
      label: "Years Experience",
      description: "Serving the Lagos market"
    }
  ];

  const localIndustries = [
    "Financial Services & Banking",
    "E-commerce & Retail",
    "Healthcare & Pharmaceuticals",
    "Real Estate & Construction",
    "Education & Training",
    "Manufacturing & Logistics",
    "Media & Entertainment",
    "Technology & Startups"
  ];

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
                <MapPin className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              InnofyAI in Lagos, Nigeria
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted technology partner in Lagos. We understand the local business landscape 
              and deliver innovative solutions that drive growth and success in Nigeria's commercial capital.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Local Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Serving Lagos Businesses
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our local presence and expertise make us the preferred technology partner 
            for businesses across Lagos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {localStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-600 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Local Advantages */}
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
              Why Choose InnofyAI in Lagos?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our local presence gives us unique advantages that benefit your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {localAdvantages.map((advantage, index) => (
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
                    <div className="text-white">{advantage.icon}</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Local Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Services Tailored for Lagos Businesses
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our services are specifically designed to meet the unique needs 
            and challenges of businesses operating in Lagos.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {localServices.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Service Header */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4">{service.description}</p>
                <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Industries We Serve */}
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
              Industries We Serve in Lagos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We have extensive experience working with businesses across various 
              industries in Lagos and throughout Nigeria.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {localIndustries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 transition-colors duration-300"
              >
                <span className="text-gray-900 font-medium">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
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
              Ready to Transform Your Lagos Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our local expertise can help your business grow 
              and succeed in Lagos.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Call Us</h3>
                <p className="text-blue-100">+234 810 811 4407</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email Us</h3>
                <p className="text-blue-100">info@innofyai.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                <p className="text-blue-100">13, signature estate, Ikota, Lekki</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule a Meeting
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Our Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Lagos; 