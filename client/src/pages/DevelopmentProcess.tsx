import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Users, 
  Code2, 
  TestTube, 
  Rocket, 
  Settings,
  CheckCircle,
  Clock,
  MessageSquare,
  GitBranch,
  Shield,
  Zap
} from 'lucide-react';

const DevelopmentProcess: React.FC = () => {
  const processSteps = [
    {
      phase: "Discovery & Planning",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      duration: "1-2 weeks",
      description: "Understanding requirements and creating detailed project roadmap",
      activities: [
        "Requirements gathering and analysis",
        "Stakeholder interviews and workshops",
        "Technical feasibility assessment",
        "Project scope definition",
        "Resource planning and timeline creation",
        "Risk assessment and mitigation strategies"
      ],
      deliverables: [
        "Project requirements document",
        "Technical specification",
        "Project timeline and milestones",
        "Resource allocation plan"
      ]
    },
    {
      phase: "Design & Architecture",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      duration: "2-3 weeks",
      description: "Creating user-centered designs and robust system architecture",
      activities: [
        "User research and persona development",
        "Information architecture design",
        "Wireframing and prototyping",
        "UI/UX design creation",
        "System architecture planning",
        "Database schema design",
        "API specification development"
      ],
      deliverables: [
        "User personas and journey maps",
        "Wireframes and prototypes",
        "High-fidelity UI designs",
        "System architecture diagrams",
        "API documentation"
      ]
    },
    {
      phase: "Development & Coding",
      icon: <Code2 className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      duration: "4-12 weeks",
      description: "Agile development with continuous integration and regular updates",
      activities: [
        "Sprint planning and task breakdown",
        "Frontend and backend development",
        "Database implementation",
        "API development and integration",
        "Third-party service integration",
        "Code reviews and pair programming",
        "Continuous integration/deployment"
      ],
      deliverables: [
        "Functional application modules",
        "API endpoints and documentation",
        "Database implementation",
        "Integration with external services"
      ]
    },
    {
      phase: "Testing & Quality Assurance",
      icon: <TestTube className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      duration: "2-4 weeks",
      description: "Comprehensive testing to ensure quality and reliability",
      activities: [
        "Unit testing and integration testing",
        "User acceptance testing (UAT)",
        "Performance and load testing",
        "Security testing and vulnerability assessment",
        "Cross-browser and device testing",
        "Accessibility testing",
        "Bug fixing and optimization"
      ],
      deliverables: [
        "Test reports and bug documentation",
        "Performance benchmarks",
        "Security audit reports",
        "Accessibility compliance report"
      ]
    },
    {
      phase: "Deployment & Launch",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      duration: "1-2 weeks",
      description: "Smooth deployment and go-live with monitoring and support",
      activities: [
        "Production environment setup",
        "Database migration and data setup",
        "Application deployment",
        "Domain and SSL configuration",
        "Performance monitoring setup",
        "User training and documentation",
        "Go-live support and monitoring"
      ],
      deliverables: [
        "Production-ready application",
        "Deployment documentation",
        "User training materials",
        "Support and maintenance plan"
      ]
    },
    {
      phase: "Maintenance & Support",
      icon: <Settings className="w-8 h-8" />,
      color: "from-gray-600 to-gray-800",
      duration: "Ongoing",
      description: "Continuous support, updates, and performance optimization",
      activities: [
        "24/7 monitoring and alerting",
        "Regular security updates",
        "Performance optimization",
        "Feature enhancements and updates",
        "Bug fixes and troubleshooting",
        "User support and training",
        "Analytics and reporting"
      ],
      deliverables: [
        "Monthly performance reports",
        "Security update logs",
        "Feature enhancement documentation",
        "User support tickets resolution"
      ]
    }
  ];

  const agilePrinciples = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Daily Standups",
      description: "Regular team communication and progress updates"
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Sprint Planning",
      description: "Two-week development cycles with clear deliverables"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Continuous Testing",
      description: "Automated testing throughout development process"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Regular Demos",
      description: "Weekly client demonstrations and feedback sessions"
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
                <Code2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Development Process
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven development methodology combines agile practices with industry best practices 
              to deliver high-quality, scalable solutions on time and within budget.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Process Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our 6-Phase Development Methodology
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each phase is carefully planned and executed with clear deliverables, 
            ensuring transparency and quality throughout the project lifecycle.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Step Header */}
              <div className={`bg-gradient-to-r ${step.color} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-full">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{step.phase}</h3>
                      <p className="text-blue-100">{step.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-blue-100">Duration</div>
                    <div className="text-xl font-semibold">{step.duration}</div>
                  </div>
                </div>
              </div>

              {/* Step Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Activities */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-blue-500" />
                      Key Activities
                    </h4>
                    <ul className="space-y-2">
                      {step.activities.map((activity, activityIndex) => (
                        <li key={activityIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-blue-500" />
                      Deliverables
                    </h4>
                    <ul className="space-y-2">
                      {step.deliverables.map((deliverable, deliverableIndex) => (
                        <li key={deliverableIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{deliverable}</span>
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

      {/* Agile Principles */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Agile Development Principles
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow agile methodologies to ensure flexibility, transparency, and continuous improvement 
              throughout the development process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {agilePrinciples.map((principle, index) => (
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
                    <div className="text-white">{principle.icon}</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {principle.title}
                </h3>
                <p className="text-gray-600">{principle.description}</p>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a customized development plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
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

export default DevelopmentProcess; 