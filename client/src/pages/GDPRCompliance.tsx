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
  Download,
  Trash2,
  Edit,
  Copy,
  Globe,
  Gavel,
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

export default function GDPRCompliance() {
  const structuredData = generateOrganizationStructuredData({
    name: "InnofyAI",
    url: "https://innofyai.com",
    logo: "https://innofyai.com/logo.png",
    description:
      "Our commitment to GDPR compliance and protecting your data rights under European data protection law.",
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

  const gdprPrinciples = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Lawfulness, Fairness & Transparency",
      description: "We process personal data lawfully, fairly, and transparently",
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Purpose Limitation",
      description: "Data is collected for specified, explicit, and legitimate purposes",
      color: "from-indigo-600 to-purple-600",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Data Minimization",
      description: "We collect only the data that is adequate, relevant, and necessary",
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Accuracy",
      description: "We ensure personal data is accurate and kept up to date",
      color: "from-pink-600 to-red-600",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Storage Limitation",
      description: "Data is kept only for as long as necessary for the stated purposes",
      color: "from-red-600 to-orange-600",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Integrity & Confidentiality",
      description: "We implement appropriate security measures to protect data",
      color: "from-orange-600 to-yellow-600",
    },
  ];

  const userRights = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Right to Access",
      description: "Request information about what personal data we hold about you",
    },
    {
      icon: <Edit className="h-6 w-6" />,
      title: "Right to Rectification",
      description: "Request correction of inaccurate or incomplete personal data",
    },
    {
      icon: <Trash2 className="h-6 w-6" />,
      title: "Right to Erasure",
      description: "Request deletion of your personal data under certain circumstances",
    },
    {
      icon: <Copy className="h-6 w-6" />,
      title: "Right to Portability",
      description: "Receive your data in a structured, machine-readable format",
    },
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: "Right to Object",
      description: "Object to processing of your personal data in certain situations",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Right to Restriction",
      description: "Request restriction of processing under specific conditions",
    },
  ];

  const complianceMeasures = [
    {
      title: "Data Protection Officer",
      description: "We have appointed a Data Protection Officer to oversee GDPR compliance",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Privacy by Design",
      description: "We implement privacy considerations at every stage of development",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Regular Audits",
      description: "We conduct regular privacy impact assessments and compliance audits",
      icon: <CheckCircle className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEO
        title="GDPR Compliance - InnofyAI"
        description="Our commitment to GDPR compliance and protecting your data rights under European data protection law."
        keywords="GDPR, data protection, privacy rights, European Union, data processing, personal data"
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
                <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 mb-6">
                  GDPR Compliance
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
                variants={fadeUpVariants}
              >
                GDPR{" "}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Compliance
                </span>
              </motion.h1>

              <motion.p
                className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-6"
                variants={fadeUpVariants}
              >
                Our commitment to protecting your data rights under the General Data Protection
                Regulation (GDPR) and European data protection law.
              </motion.p>

              <motion.p className="text-gray-400" variants={fadeUpVariants}>
                <strong>Last Updated:</strong> June 23, 2025
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* GDPR Principles */}
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
              GDPR{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Principles
              </span>
            </motion.h2>
            <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainerVariants}>
              {gdprPrinciples.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                  variants={fadeUpVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${principle.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {principle.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-4">{principle.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{principle.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* User Rights */}
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
              Your{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Rights
              </span>
            </motion.h2>
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainerVariants}
            >
              {userRights.map((right, index) => (
                <motion.div
                  key={right.title}
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
                          className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white flex-shrink-0"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          {right.icon}
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white mb-2">{right.title}</h3>
                          <p className="text-gray-300 text-sm">{right.description}</p>
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

      {/* Compliance Measures */}
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
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Compliance Measures
              </span>
            </motion.h2>
            <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainerVariants}>
              {complianceMeasures.map((measure, index) => (
                <motion.div
                  key={measure.title}
                  className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                  variants={fadeUpVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white"
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

      {/* Detailed Information */}
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
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-6">
                    1. What is GDPR?
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    The General Data Protection Regulation (GDPR) is a comprehensive data protection
                    law that came into effect on May 25, 2018. It applies to all organizations
                    operating within the EU and those that offer goods or services to individuals in
                    the EU, regardless of where the organization is based.
                  </p>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-6">
                    2. How We Process Your Data
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      We process personal data based on the following legal grounds:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start">
                        <span className="w-1 h-1 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span><strong>Consent:</strong> When you explicitly agree to data processing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1 h-1 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span><strong>Contract Performance:</strong> To fulfill our contractual obligations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1 h-1 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span><strong>Legitimate Interest:</strong> For business purposes that don't override your rights</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1 h-1 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-6">
                    3. Data Transfers
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    We may transfer your personal data to countries outside the European Economic
                    Area (EEA). When we do so, we ensure appropriate safeguards are in place to
                    protect your data, such as:
                  </p>
                  <ul className="space-y-2 ml-6 text-gray-300">
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Standard contractual clauses approved by the European Commission
                    </li>
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Adequacy decisions for countries with equivalent data protection standards
                    </li>
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Binding corporate rules for transfers within our organization
                    </li>
                  </ul>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-6">
                    4. Exercising Your Rights
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    To exercise your GDPR rights, you can:
                  </p>
                  <ul className="space-y-2 ml-6 text-gray-300">
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Contact us at{" "}
                      <a
                        href="mailto:dpo@innofyai.com"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        dpo@innofyai.com
                      </a>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Use our data subject rights request form
                    </li>
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Contact your local data protection authority
                    </li>
                  </ul>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-6">
                    5. Data Breach Procedures
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    In the event of a data breach that poses a risk to your rights and freedoms, we
                    will:
                  </p>
                  <ul className="space-y-2 ml-6 text-gray-300">
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Notify the relevant supervisory authority within 72 hours
                    </li>
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Inform affected individuals without undue delay
                    </li>
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Document all breaches and our response measures
                    </li>
                  </ul>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-6">
                    6. Contact Information
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    For any questions about our GDPR compliance or to exercise your rights, please
                    contact our Data Protection Officer at{" "}
                    <a
                      href="mailto:dpo@innofyai.com"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
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