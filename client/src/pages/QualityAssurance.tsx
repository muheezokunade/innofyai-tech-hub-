import React from 'react';
import { motion } from 'framer-motion';
import { 
  TestTube, 
  Shield, 
  CheckCircle, 
  Zap, 
  Monitor, 
  Bug,
  Eye,
  Smartphone,
  Globe,
  Lock,
  BarChart3,
  Settings,
  AlertTriangle,
  Clock,
  Users,
  Code2
} from 'lucide-react';

const QualityAssurance: React.FC = () => {
  const qaProcesses = [
    {
      phase: "Test Planning & Strategy",
      icon: <Settings className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      description: "Comprehensive test planning and strategy development",
      activities: [
        "Test requirement analysis",
        "Test strategy documentation",
        "Test environment setup",
        "Test data preparation",
        "Risk assessment and mitigation",
        "Test schedule and resource planning"
      ],
      tools: ["TestRail", "Jira", "Confluence", "Test Management Tools"]
    },
    {
      phase: "Unit & Integration Testing",
      icon: <Code2 className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      description: "Code-level testing and component integration verification",
      activities: [
        "Unit test development and execution",
        "Integration testing between components",
        "API testing and validation",
        "Database testing and data integrity checks",
        "Code coverage analysis",
        "Performance unit testing"
      ],
      tools: ["Jest", "Mocha", "Chai", "Postman", "Newman", "Coverage Tools"]
    },
    {
      phase: "Functional Testing",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      description: "End-to-end functionality verification and user acceptance testing",
      activities: [
        "User acceptance testing (UAT)",
        "Business logic validation",
        "Workflow testing",
        "Data validation and verification",
        "Error handling and edge case testing",
        "Regression testing"
      ],
      tools: ["Selenium", "Cypress", "Playwright", "TestCafe", "Manual Testing"]
    },
    {
      phase: "Performance & Load Testing",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      description: "Performance optimization and scalability testing",
      activities: [
        "Load testing with realistic user scenarios",
        "Stress testing to identify breaking points",
        "Performance benchmarking",
        "Database performance optimization",
        "API response time testing",
        "Scalability assessment"
      ],
      tools: ["JMeter", "K6", "Artillery", "LoadRunner", "Performance Monitoring"]
    },
    {
      phase: "Security Testing",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      description: "Comprehensive security assessment and vulnerability testing",
      activities: [
        "Penetration testing",
        "Vulnerability assessment",
        "OWASP Top 10 compliance",
        "Authentication and authorization testing",
        "Data encryption verification",
        "Security code review"
      ],
      tools: ["OWASP ZAP", "Burp Suite", "Nessus", "SonarQube", "Security Scanners"]
    },
    {
      phase: "Compatibility & Accessibility",
      icon: <Globe className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      description: "Cross-platform compatibility and accessibility compliance",
      activities: [
        "Cross-browser testing",
        "Mobile device testing",
        "Responsive design validation",
        "Accessibility compliance (WCAG 2.1)",
        "Internationalization testing",
        "Progressive enhancement testing"
      ],
      tools: ["BrowserStack", "LambdaTest", "axe-core", "WAVE", "Screen Readers"]
    }
  ];

  const qualityMetrics = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Code Coverage",
      value: "95%+",
      description: "Minimum code coverage requirement"
    },
    {
      icon: <Bug className="w-6 h-6" />,
      title: "Bug Detection Rate",
      value: "99%",
      description: "Critical bugs detected before production"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      value: "<2s",
      description: "Average page load time"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Satisfaction",
      value: "98%",
      description: "Client satisfaction rate"
    }
  ];

  const testingTypes = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Manual Testing",
      description: "Human-driven testing for user experience and edge cases",
      benefits: ["Real user perspective", "Creative test scenarios", "Usability assessment"]
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Automated Testing",
      description: "Script-based testing for repetitive and regression testing",
      benefits: ["Faster execution", "Consistent results", "Cost-effective"]
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Testing",
      description: "Specialized testing for mobile applications and responsive design",
      benefits: ["Device compatibility", "Touch interface testing", "Performance optimization"]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Security Testing",
      description: "Comprehensive security assessment and vulnerability detection",
      benefits: ["Threat prevention", "Compliance assurance", "Data protection"]
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
                <TestTube className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quality Assurance Process
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive QA methodology ensures every product meets the highest standards 
              of quality, performance, and reliability before reaching our clients.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Quality Metrics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Quality Standards
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We maintain rigorous quality metrics to ensure exceptional deliverables 
            that exceed client expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {qualityMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                  <div className="text-white">{metric.icon}</div>
                </div>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {metric.value}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {metric.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* QA Process Steps */}
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
              6-Phase Quality Assurance Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures comprehensive testing coverage and 
              quality validation at every stage of development.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {qaProcesses.map((process, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Process Header */}
                <div className={`bg-gradient-to-r ${process.color} p-6 text-white`}>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-full">
                      {process.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{process.phase}</h3>
                      <p className="text-blue-100">{process.description}</p>
                    </div>
                  </div>
                </div>

                {/* Process Content */}
                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Activities */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2 text-blue-500" />
                        Key Activities
                      </h4>
                      <ul className="space-y-2">
                        {process.activities.map((activity, activityIndex) => (
                          <li key={activityIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                            <span className="text-gray-700">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Monitor className="w-5 h-5 mr-2 text-blue-500" />
                        Testing Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {process.tools.map((tool, toolIndex) => (
                          <span
                            key={toolIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Testing Types */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comprehensive Testing Approach
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We employ multiple testing methodologies to ensure thorough quality validation 
            across all aspects of your application.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testingTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-4">
                  <div className="text-white">{type.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{type.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{type.description}</p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                <ul className="space-y-1">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
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
              Quality You Can Trust
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Experience the difference that rigorous quality assurance makes. 
              Let's build something exceptional together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Quality Reports
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default QualityAssurance; 