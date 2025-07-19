import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { 
  ShoppingCart, 
  CreditCard, 
  Truck, 
  BarChart3, 
  Users, 
  Shield,
  Zap,
  Smartphone,
  Globe,
  TrendingUp,
  CheckCircle,
  Star,
  Package,
  Target,
  DollarSign,
  ArrowUpRight
} from 'lucide-react';

const EcommerceSolutions: React.FC = () => {
  const ecommerceServices = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce Platform Development",
      description: "Custom online stores built for performance and conversion",
      features: [
        "Responsive design for all devices",
        "Advanced product catalog management",
        "Secure payment gateway integration",
        "Inventory and order management systems"
      ],
      benefits: [
        "Increased conversion rates",
        "Better user experience",
        "Scalable architecture",
        "Mobile-first approach"
      ]
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Payment Solutions",
      description: "Secure and seamless payment processing for your customers",
      features: [
        "Multiple payment gateway integration",
        "Local payment methods (Nigeria)",
        "Fraud detection and prevention",
        "Recurring billing and subscriptions"
      ],
      benefits: [
        "Higher checkout completion",
        "Reduced cart abandonment",
        "Enhanced security",
        "Better customer trust"
      ]
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Logistics & Fulfillment",
      description: "End-to-end order fulfillment and delivery management",
      features: [
        "Real-time inventory tracking",
        "Automated order processing",
        "Delivery partner integration",
        "Customer delivery notifications"
      ],
      benefits: [
        "Faster order fulfillment",
        "Reduced operational costs",
        "Better customer satisfaction",
        "Improved delivery tracking"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Insights",
      description: "Data-driven insights to optimize your e-commerce performance",
      features: [
        "Sales and revenue analytics",
        "Customer behavior tracking",
        "Conversion funnel analysis",
        "A/B testing and optimization"
      ],
      benefits: [
        "Data-driven decisions",
        "Improved marketing ROI",
        "Better customer targeting",
        "Increased sales performance"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Experience",
      description: "Personalized shopping experiences that drive loyalty",
      features: [
        "Personalized product recommendations",
        "Customer loyalty programs",
        "Live chat and support",
        "Multi-language support"
      ],
      benefits: [
        "Higher customer retention",
        "Increased average order value",
        "Better customer satisfaction",
        "Enhanced brand loyalty"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security for your e-commerce platform",
      features: [
        "PCI DSS compliance",
        "SSL encryption",
        "Fraud prevention systems",
        "Regular security audits"
      ],
      benefits: [
        "Customer data protection",
        "Regulatory compliance",
        "Reduced fraud risk",
        "Enhanced trust and credibility"
      ]
    }
  ];

  const ecommerceStats = [
    {
      value: "300%",
      label: "Average Revenue Increase",
      description: "For clients after implementation"
    },
    {
      value: "85%",
      label: "Conversion Rate Improvement",
      description: "Through optimized UX"
    },
    {
      value: "60%",
      label: "Reduced Cart Abandonment",
      description: "With better checkout flow"
    },
    {
      value: "24/7",
      label: "Platform Uptime",
      description: "Ensuring business continuity"
    }
  ];

  const ecommerceFeatures = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile-First Design",
      description: "Optimized for mobile shopping experiences"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Channel Integration",
      description: "Seamless integration across all sales channels"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Performance",
      description: "Lightning-fast loading times for better UX"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "SEO Optimized",
      description: "Built for search engine visibility"
    }
  ];

  const successMetrics = [
    {
      metric: "Average Order Value",
      improvement: "+45%",
      description: "Through personalized recommendations"
    },
    {
      metric: "Customer Lifetime Value",
      improvement: "+120%",
      description: "With loyalty programs"
    },
    {
      metric: "Site Performance",
      improvement: "98/100",
      description: "Google PageSpeed score"
    },
    {
      metric: "Customer Satisfaction",
      improvement: "4.8/5",
      description: "Based on user reviews"
    }
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
    <>
      <SEO
        title="E-commerce Solutions | AI-Powered Online Stores"
        description="Transform your online business with AI-powered e-commerce solutions. Custom platforms, payment processing, logistics, analytics, and security. Increase sales by 300% with our proven solutions."
        keywords="e-commerce solutions, online store development, payment processing, logistics, e-commerce analytics, shopping cart, e-commerce security, Nigeria e-commerce"
        url="/ecommerce-solutions"
        type="product"
        tags={["e-commerce", "online store", "payment processing", "logistics", "analytics", "security"]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "E-commerce Solutions",
          "description": "AI-powered e-commerce platform development and optimization",
          "provider": {
            "@type": "Organization",
            "name": "InnofyAI"
          },
          "areaServed": "Nigeria",
          "serviceType": "E-commerce Development",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock"
          }
        }}
      />
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
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              E-commerce Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your online business with cutting-edge e-commerce technology. 
              We build high-converting, scalable online stores that drive revenue and growth.
            </p>
          </motion.div>
        </div>
      </div>

      {/* E-commerce Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Proven E-commerce Results
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our e-commerce solutions consistently deliver exceptional results 
            for businesses across various industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {ecommerceStats.map((stat, index) => (
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

      {/* E-commerce Services */}
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
              Comprehensive E-commerce Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From platform development to payment processing, we provide end-to-end 
              e-commerce solutions that drive growth and success.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {ecommerceServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Package className="w-4 h-4 mr-2 text-blue-500" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                        Benefits
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <ArrowUpRight className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* E-commerce Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Built for Modern E-commerce
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our e-commerce platforms are designed with the latest technologies 
            and best practices to ensure optimal performance and user experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ecommerceFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-xl shadow-lg"
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

      {/* Success Metrics */}
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
              Measurable Success
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our e-commerce solutions deliver measurable improvements 
              that directly impact your bottom line.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {metric.metric}
                  </h3>
                  <div className="text-2xl font-bold text-green-600">
                    {metric.improvement}
                  </div>
                </div>
                <p className="text-gray-600">{metric.description}</p>
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
              Ready to Transform Your E-commerce Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's build an e-commerce platform that drives sales, 
              enhances customer experience, and scales with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View E-commerce Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
};

export default EcommerceSolutions; 