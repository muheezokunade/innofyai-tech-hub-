import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  Zap, 
  Server, 
  Users,
  Database,
  Globe,
  Key,
  Fingerprint,
  ShieldCheck,
  FileText,
  Clock,
  BarChart3,
  Settings,
  Monitor
} from 'lucide-react';

const SecurityStandards: React.FC = () => {
  const securityPillars = [
    {
      title: "Data Protection",
      icon: <Database className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      description: "Comprehensive data encryption and protection measures",
      measures: [
        "End-to-end encryption for data in transit",
        "AES-256 encryption for data at rest",
        "Secure key management and rotation",
        "Data backup and disaster recovery",
        "Data classification and handling procedures",
        "Privacy by design implementation"
      ]
    },
    {
      title: "Access Control",
      icon: <Key className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      description: "Multi-factor authentication and role-based access control",
      measures: [
        "Multi-factor authentication (MFA)",
        "Role-based access control (RBAC)",
        "Single sign-on (SSO) integration",
        "Privileged access management",
        "Session management and timeout",
        "Password policies and complexity requirements"
      ]
    },
    {
      title: "Network Security",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      description: "Advanced network protection and monitoring systems",
      measures: [
        "Firewall and intrusion detection systems",
        "DDoS protection and mitigation",
        "VPN and secure remote access",
        "Network segmentation and isolation",
        "Real-time threat monitoring",
        "Security incident response procedures"
      ]
    },
    {
      title: "Application Security",
      icon: <Shield className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      description: "Secure coding practices and vulnerability management",
      measures: [
        "OWASP Top 10 compliance",
        "Secure code review and testing",
        "Vulnerability scanning and assessment",
        "Penetration testing and ethical hacking",
        "API security and rate limiting",
        "Input validation and sanitization"
      ]
    },
    {
      title: "Compliance & Governance",
      icon: <FileText className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      description: "Industry standards compliance and regulatory adherence",
      measures: [
        "GDPR compliance and data privacy",
        "ISO 27001 information security management",
        "SOC 2 Type II certification",
        "PCI DSS compliance for payment data",
        "Regular security audits and assessments",
        "Security policy and procedure documentation"
      ]
    },
    {
      title: "Incident Response",
      icon: <AlertTriangle className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      description: "24/7 monitoring and rapid incident response capabilities",
      measures: [
        "24/7 security monitoring and alerting",
        "Incident detection and classification",
        "Rapid response and containment procedures",
        "Forensic analysis and investigation",
        "Communication and notification protocols",
        "Post-incident review and improvement"
      ]
    }
  ];

  const securityMetrics = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Security Score",
      value: "98/100",
      description: "Overall security assessment score"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      value: "<15min",
      description: "Average incident response time"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Uptime",
      value: "99.99%",
      description: "System availability and reliability"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Compliance",
      value: "100%",
      description: "Regulatory compliance rate"
    }
  ];

  const complianceStandards = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "GDPR Compliance",
      description: "General Data Protection Regulation compliance for EU data subjects",
      status: "Compliant",
      color: "text-green-600"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "ISO 27001",
      description: "Information Security Management System certification",
      status: "Certified",
      color: "text-green-600"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "SOC 2 Type II",
      description: "Service Organization Control 2 Type II attestation",
      status: "Compliant",
      color: "text-green-600"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "PCI DSS",
      description: "Payment Card Industry Data Security Standard compliance",
      status: "Compliant",
      color: "text-green-600"
    }
  ];

  const securityFeatures = [
    {
      icon: <Fingerprint className="w-6 h-6" />,
      title: "Biometric Authentication",
      description: "Advanced biometric security for enhanced access control"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Real-time Monitoring",
      description: "24/7 security monitoring with AI-powered threat detection"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Secure Infrastructure",
      description: "Enterprise-grade infrastructure with redundant security layers"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Security Training",
      description: "Regular security awareness training for all team members"
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
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Security Standards
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your data security is our top priority. We implement enterprise-grade security measures 
              and maintain compliance with international standards to protect your information.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Security Metrics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Security Performance Metrics
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our security measures are continuously monitored and optimized to maintain 
            the highest standards of protection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {securityMetrics.map((metric, index) => (
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

      {/* Security Pillars */}
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
              6 Pillars of Security
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive security framework covers all aspects of data protection, 
              access control, and system security.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {securityPillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Pillar Header */}
                <div className={`bg-gradient-to-r ${pillar.color} p-6 text-white`}>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-full">
                      {pillar.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{pillar.title}</h3>
                      <p className="text-blue-100">{pillar.description}</p>
                    </div>
                  </div>
                </div>

                {/* Pillar Content */}
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-blue-500" />
                    Security Measures
                  </h4>
                  <ul className="space-y-2">
                    {pillar.measures.map((measure, measureIndex) => (
                      <li key={measureIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{measure}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Compliance Standards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Compliance & Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We maintain compliance with international security standards and regulations 
            to ensure the highest level of data protection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {complianceStandards.map((standard, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                    <div className="text-white">{standard.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{standard.title}</h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-green-100 ${standard.color}`}>
                  {standard.status}
                </span>
              </div>
              <p className="text-gray-600">{standard.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Security Features */}
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
              Advanced Security Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge security technologies to provide comprehensive 
              protection for your data and systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
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
              Security You Can Trust
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Rest assured that your data is protected by industry-leading security measures 
              and compliance standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Security Audit Report
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Compliance Certificate
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SecurityStandards; 