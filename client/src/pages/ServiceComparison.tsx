import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { 
  CheckCircle, 
  X, 
  Star, 
  Zap, 
  Shield, 
  BarChart3,
  Palette,
  Code,
  Megaphone,
  Users,
  Clock,
  DollarSign,
  TrendingUp,
  Award,
  Target,
  ArrowRight,
  ShoppingCart
} from 'lucide-react';

const ServiceComparison: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const servicePlans = [
    {
      name: "Starter",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      price: "₦500,000",
      duration: "4-6 weeks",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic website development",
        "Mobile-responsive design",
        "SEO optimization",
        "Basic analytics setup",
        "1 month support",
        "Standard hosting setup"
      ],
      notIncluded: [
        "Advanced features",
        "Custom integrations",
        "Priority support",
        "Advanced analytics"
      ],
      bestFor: "Small businesses, startups, personal brands",
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      icon: <Shield className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      price: "₦1,200,000",
      duration: "8-12 weeks",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "Everything in Starter",
        "Custom functionality development",
        "E-commerce integration",
        "Advanced security features",
        "3 months support",
        "Performance optimization",
        "Custom integrations",
        "Advanced analytics dashboard"
      ],
      notIncluded: [
        "Enterprise features",
        "Dedicated support team",
        "Custom AI solutions"
      ],
      bestFor: "Growing businesses, e-commerce stores, service companies",
      cta: "Most Popular",
      popular: true
    },
    {
      name: "Enterprise",
      icon: <Award className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      price: "Custom",
      duration: "12-16 weeks",
      description: "Comprehensive solutions for large organizations",
      features: [
        "Everything in Professional",
        "Custom AI/ML solutions",
        "Enterprise security",
        "Scalable architecture",
        "12 months support",
        "Dedicated project manager",
        "Custom integrations",
        "Advanced analytics & reporting",
        "Performance monitoring",
        "24/7 support"
      ],
      notIncluded: [],
      bestFor: "Large enterprises, complex systems, high-traffic platforms",
      cta: "Contact Sales",
      popular: false
    }
  ];

  const serviceCategories = [
    {
      name: "Web Development",
      icon: <Code className="w-6 h-6" />,
      starter: "Basic website",
      professional: "Custom web app",
      enterprise: "Complex platform"
    },
    {
      name: "UI/UX Design",
      icon: <Palette className="w-6 h-6" />,
      starter: "Standard templates",
      professional: "Custom design",
      enterprise: "Brand strategy"
    },
    {
      name: "E-commerce",
      icon: <ShoppingCart className="w-6 h-6" />,
      starter: "Basic store",
      professional: "Advanced features",
      enterprise: "Multi-channel"
    },
    {
      name: "Analytics",
      icon: <BarChart3 className="w-6 h-6" />,
      starter: "Basic tracking",
      professional: "Advanced dashboard",
      enterprise: "Custom reporting"
    },
    {
      name: "Security",
      icon: <Shield className="w-6 h-6" />,
      starter: "Standard SSL",
      professional: "Advanced security",
      enterprise: "Enterprise-grade"
    },
    {
      name: "Support",
      icon: <Users className="w-6 h-6" />,
      starter: "1 month",
      professional: "3 months",
      enterprise: "12 months"
    }
  ];

  const comparisonFeatures = [
    {
      feature: "Project Duration",
      starter: "4-6 weeks",
      professional: "8-12 weeks",
      enterprise: "12-16 weeks"
    },
    {
      feature: "Team Size",
      starter: "2-3 developers",
      professional: "4-6 developers",
      enterprise: "8+ developers"
    },
    {
      feature: "Revisions",
      starter: "2 rounds",
      professional: "Unlimited",
      enterprise: "Unlimited"
    },
    {
      feature: "Testing",
      starter: "Basic testing",
      professional: "Comprehensive testing",
      enterprise: "Full QA process"
    },
    {
      feature: "Deployment",
      starter: "Standard hosting",
      professional: "Cloud deployment",
      enterprise: "Enterprise infrastructure"
    },
    {
      feature: "Training",
      starter: "Basic documentation",
      professional: "Video tutorials",
      enterprise: "On-site training"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEO
        title="Service Comparison - Tech Solutions"
        description="Compare our web development, UI/UX design, e-commerce, analytics, security, and support services across different tiers."
        keywords="service comparison, web development, UI/UX design, e-commerce, analytics, security, support, pricing"
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
                <Target className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Service Comparison
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect service package for your business needs. 
              Compare features, pricing, and deliverables to make an informed decision.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Service Plans */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Choose Your Service Package
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer three comprehensive service tiers designed to meet 
            the diverse needs of businesses at different stages.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {servicePlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className={`bg-gradient-to-r ${plan.color} p-6 text-white`}>
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full">
                      {plan.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-blue-100 mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold mb-2">{plan.price}</div>
                  <div className="text-blue-100 text-sm">Duration: {plan.duration}</div>
                </div>
              </div>

              {/* Plan Content */}
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {plan.notIncluded.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Not Included:</h4>
                    <ul className="space-y-2">
                      {plan.notIncluded.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <X className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-500 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Best For:</h4>
                  <p className="text-gray-600 text-sm">{plan.bestFor}</p>
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Service Categories Comparison */}
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
              Service Categories Comparison
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how our different service levels compare across key categories.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Service Category</th>
                  <th className="text-center py-4 px-4 font-semibold text-blue-600">Starter</th>
                  <th className="text-center py-4 px-4 font-semibold text-purple-600">Professional</th>
                  <th className="text-center py-4 px-4 font-semibold text-orange-600">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {serviceCategories.map((category, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <div className="p-2 bg-gray-100 rounded-lg mr-3">
                          {category.icon}
                        </div>
                        <span className="font-medium text-gray-900">{category.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center text-gray-600">{category.starter}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{category.professional}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{category.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Detailed Comparison */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Detailed Feature Comparison
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get a comprehensive view of what each package includes.
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Feature</th>
                  <th className="text-center py-4 px-6 font-semibold text-blue-600">Starter</th>
                  <th className="text-center py-4 px-6 font-semibold text-purple-600">Professional</th>
                  <th className="text-center py-4 px-6 font-semibold text-orange-600">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium text-gray-900">{feature.feature}</td>
                    <td className="py-4 px-6 text-center text-gray-600">{feature.starter}</td>
                    <td className="py-4 px-6 text-center text-gray-600">{feature.professional}</td>
                    <td className="py-4 px-6 text-center text-gray-600">{feature.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Choose the perfect service package for your business needs 
              and let's start building something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Download Pricing Guide
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComparison; 