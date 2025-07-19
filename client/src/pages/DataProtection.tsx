import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Eye,
  Lock,
  FileText,
  Users,
  AlertCircle,
  ArrowRight,
  CheckCircle,
  Database,
  Key,
  Server,
  Network,
  Monitor,
  Zap,
  Globe,
} from "lucide-react";
import SEO from "@/components/SEO";
import { generateOrganizationStructuredData } from "@/lib/structuredData";
import {
  scrollRevealVariants,
  staggerContainerVariants,
  fadeUpVariants,
  buttonHoverVariants,
  cardHoverVariants,
} from "../lib/animations";

export default function DataProtection() {
  const structuredData = generateOrganizationStructuredData({
    name: "InnofyAI",
    url: "https://innofyai.com",
    logo: "https://innofyai.com/logo.png",
    description:
      "Our comprehensive data protection policy outlining how we safeguard your personal information and maintain data security.",
    address: {
      addressLocality: "13, signature estate, Ikota, Lekki",
      addressCountry: "Nigeria",
    },
    contactPoint: {
      contactType: "Data Protection Officer",
      email: "dpo@innofyai.com",
    },
    sameAs: [
      "https://www.linkedin.com/company/innofy-ai/", 
      "https://x.com/innofyai?s=21",
      "https://www.instagram.com/innofyai?igsh=dGI5MTE5a2xra28%3D&utm_source=qr",
      "https://www.tiktok.com/@innofyai?_t=ZM-8y83dmNvGis&_r=1"
    ],
  });

  const protectionMeasures = [
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Encryption",
      description: "All data is encrypted in transit and at rest using industry-standard protocols",
      color: "from-green-600 to-emerald-600",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Access Control",
      description: "Strict access controls and authentication mechanisms protect sensitive data",
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Secure Infrastructure",
      description: "Enterprise-grade security infrastructure with regular security audits",
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Monitoring",
      description: "24/7 monitoring and threat detection systems",
      color: "from-pink-600 to-red-600",
    },
  ];

  const dataCategories = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Personal Data",
      description: "Names, email addresses, phone numbers, and contact information",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Business Data",
      description: "Company information, project details, and business communications",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Technical Data",
      description: "IP addresses, device information, and usage analytics",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Financial Data",
      description: "Payment information and billing details (processed securely)",
    },
  ];

  const securityPractices = [
    {
      title: "Regular Security Audits",
      description: "We conduct comprehensive security assessments and penetration testing",
      icon: <CheckCircle className="h-6 w-6" />,
    },
    {
      title: "Employee Training",
      description: "All staff receive regular data protection and security training",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Incident Response",
      description: "We have established procedures for handling security incidents",
      icon: <AlertCircle className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <SEO
        title="Data Protection Policy - InnofyAI"
        description="Our comprehensive data protection policy outlining how we safeguard your personal information and maintain data security."
        keywords="data protection, security, privacy, encryption, access control, data security, information security"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="text-center" variants={staggerContainerVariants}>
              <motion.div variants={fadeUpVariants}>
                <Badge className="bg-gradient-to-r from-emerald-600 to-green-600 text-white border-0 mb-6">
                  Data Protection Policy
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
                variants={fadeUpVariants}
              >
                Data{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                  Protection
                </span>
              </motion.h1>

              <motion.p
                className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-6"
                variants={fadeUpVariants}
              >
                Our comprehensive data protection policy outlining how we safeguard your personal
                information and maintain data security.
              </motion.p>

              <motion.p className="text-gray-400" variants={fadeUpVariants}>
                <strong>Last Updated:</strong> June 23, 2025
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Protection Measures */}
      <section className="py-12 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-white mb-8 text-center"
              variants={fadeUpVariants}
            >
              Protection{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                Measures
              </span>
            </motion.h2>
            <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" variants={staggerContainerVariants}>
              {protectionMeasures.map((measure, index) => (
                <motion.div
                  key={measure.title}
                  className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                  variants={fadeUpVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${measure.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {measure.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-4">{measure.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{measure.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Data Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center"
              variants={fadeUpVariants}
            >
              Data{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                Categories
              </span>
            </motion.h2>
            <motion.div
              className="grid md:grid-cols-2 gap-8"
              variants={staggerContainerVariants}
            >
              {dataCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  variants={cardHoverVariants}
                  whileHover="hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <motion.div
                          className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          {category.icon}
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white mb-2">{category.title}</h3>
                          <p className="text-gray-300 text-sm">{category.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-12 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-white mb-8 text-center"
              variants={fadeUpVariants}
            >
              Security{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                Practices
              </span>
            </motion.h2>
            <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainerVariants}>
              {securityPractices.map((practice, index) => (
                <motion.div
                  key={practice.title}
                  className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                  variants={fadeUpVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {practice.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-4">{practice.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{practice.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Policy */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="prose prose-lg max-w-none" variants={staggerContainerVariants}>
              <motion.div className="space-y-12" variants={staggerContainerVariants}>
                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-emerald-500 pl-6">
                    1. Data Protection Principles
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    We are committed to protecting your personal data in accordance with applicable
                    data protection laws and regulations. Our data protection practices are based on
                    the following principles:
                  </p>
                  <ul className="space-y-2 ml-6 text-gray-300 mt-4">
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-emerald-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Lawfulness, fairness, and transparency in data processing
                    </li>
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-emerald-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Purpose limitation and data minimization
                    </li>
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-emerald-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Accuracy and storage limitation
                    </li>
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-emerald-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Integrity and confidentiality
                    </li>
                  </ul>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-emerald-500 pl-6">
                    2. Technical Security Measures
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      We implement comprehensive technical security measures to protect your data:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start">
                        <span className="w-1 h-1 bg-emerald-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span><strong>Encryption:</strong> AES-256 encryption for data at rest and TLS 1.3 for data in transit</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1 h-1 bg-emerald-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span><strong>Access Controls:</strong> Multi-factor authentication and role-based access controls</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1 h-1 bg-emerald-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span><strong>Network Security:</strong> Firewalls, intrusion detection, and DDoS protection</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1 h-1 bg-emerald-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span><strong>Backup & Recovery:</strong> Regular encrypted backups with disaster recovery procedures</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-emerald-500 pl-6">
                    3. Organizational Security Measures
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    We maintain strong organizational security practices:
                  </p>
                  <ul className="space-y-2 ml-6 text-gray-300">
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-emerald-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Regular security training for all employees
                    </li>
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-emerald-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Background checks for employees with data access
                    </li>
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-emerald-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Clear data handling procedures and policies
                    </li>
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-emerald-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Incident response and breach notification procedures
                    </li>
                  </ul>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-emerald-500 pl-6">
                    4. Data Processing and Retention
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      We process personal data only for specified purposes and retain it only for as
                      long as necessary:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start">
                        <span className="w-1 h-1 bg-emerald-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span><strong>Service Delivery:</strong> To provide our services and maintain client relationships</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1 h-1 bg-emerald-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span><strong>Legal Compliance:</strong> To meet legal and regulatory requirements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1 h-1 bg-emerald-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span><strong>Business Operations:</strong> To improve our services and business processes</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-emerald-500 pl-6">
                    5. Third-Party Data Processors
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    We may use third-party service providers to process data on our behalf. All
                    third-party processors are carefully selected and bound by strict data protection
                    agreements that require them to:
                  </p>
                  <ul className="space-y-2 ml-6 text-gray-300">
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-emerald-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Implement appropriate security measures
                    </li>
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-emerald-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Process data only as instructed by us
                    </li>
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-emerald-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Assist us in responding to data subject requests
                    </li>
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-emerald-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Notify us of any data breaches
                    </li>
                  </ul>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-emerald-500 pl-6">
                    6. Your Rights and Contact Information
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    You have the right to access, correct, delete, or restrict the processing of your
                    personal data. To exercise these rights or for any questions about our data
                    protection practices, please contact our Data Protection Officer at{" "}
                    <a
                      href="mailto:dpo@innofyai.com"
                      className="text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      dpo@innofyai.com
                    </a>
                    .
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 