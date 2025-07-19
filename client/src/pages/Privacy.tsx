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
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { generateOrganizationStructuredData } from "@/lib/structuredData";
import {
  scrollRevealVariants,
  staggerContainerVariants,
  fadeUpVariants,
  buttonHoverVariants,
  cardHoverVariants,
} from "../lib/animations";

export default function Privacy() {
  const structuredData = generateOrganizationStructuredData({
    name: "InnofyAI",
    url: "https://innofyai.com",
    logo: "https://innofyai.com/logo.png",
    description:
      "We are committed to protecting your privacy and handling your personal data with transparency and care.",
    address: {
      addressLocality: "13, signature estate, Ikota, Lekki",
      addressCountry: "Nigeria",
    },
    contactPoint: {
      contactType: "Customer Service",
      email: "privacy@innofyai.com",
    },
            sameAs: [
          "https://www.linkedin.com/company/innofy-ai/", 
          "https://x.com/innofyai?s=21",
          "https://www.instagram.com/innofyai?igsh=dGI5MTE5a2xra28%3D&utm_source=qr",
          "https://www.tiktok.com/@innofyai?_t=ZM-8y83dmNvGis&_r=1"
        ],
  });

  const sections = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Information We Collect",
      items: [
        "Personal information you provide (name, email, phone, company)",
        "Device and usage information",
        "Cookies and similar technologies",
      ],
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "How We Use Your Information",
      items: [
        "Provide and manage our services",
        "Communicate with you",
        "Improve our website and services",
        "Security and fraud prevention",
      ],
      color: "from-indigo-600 to-purple-600",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Data Security",
      items: [
        "Technical and organizational security measures",
        "Protection from unauthorized access",
        "Regular security assessments",
      ],
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Your Rights",
      items: [
        "Right to access your data",
        "Right to rectification",
        "Right to erasure",
        "Right to data portability",
      ],
      color: "from-pink-600 to-red-600",
    },
  ];

  const privacyPrinciples = [
    {
      title: "Transparency",
      description: "We are open about how we collect, use, and protect your data.",
      icon: <Eye className="h-6 w-6" />,
    },
    {
      title: "Security",
      description: "We implement robust security measures to protect your information.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Control",
      description: "You have control over your data and can exercise your rights.",
      icon: <Lock className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEO
        title="Privacy Policy - InnofyAI"
        description="We are committed to protecting your privacy and handling your personal data with transparency and care."
        keywords="privacy policy, data protection, personal data, GDPR, NDPA, data security, privacy rights"
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
                  Privacy Policy
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
                variants={fadeUpVariants}
              >
                Your Privacy{" "}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Matters
                </span>
              </motion.h1>

              <motion.p
                className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-6"
                variants={fadeUpVariants}
              >
                We are committed to protecting your privacy and handling your personal data with
                transparency and care.
              </motion.p>

              <motion.p className="text-gray-400" variants={fadeUpVariants}>
                <strong>Last Updated:</strong> June 23, 2025
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Principles */}
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
              Our Privacy{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Principles
              </span>
            </motion.h2>
            <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainerVariants}>
              {privacyPrinciples.map((principle, index) => (
                <motion.div
                  key={principle.title}
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

      {/* Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
              variants={staggerContainerVariants}
            >
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
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
                        className={`w-16 h-16 bg-gradient-to-r ${section.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {section.icon}
                      </motion.div>
                      <h3 className="text-lg font-bold text-white mb-4">{section.title}</h3>
                      <ul className="text-gray-300 text-sm space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className="w-1 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mt-2 mr-2"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Policy */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
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
                    1. Introduction
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Welcome to InnofyAI ("we," "our," "us"). We are committed to protecting your
                    privacy and handling your personal data in an open and transparent manner. This
                    Privacy Policy explains how we collect, use, process, and disclose your
                    information when you access or use our website and services. Our services
                    include tech consulting (Automation, Data Collection, Cybersecurity, IoT, UI/UX,
                    Social Media Management, Software Development) and branding services
                    ("Services").
                  </p>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    This policy is designed to comply with applicable data protection laws,
                    including the Nigerian Data Protection Act (NDPA).
                  </p>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-indigo-500 pl-6">
                    2. Information We Collect
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We collect information to provide and improve our Services. The types of
                    information we collect are:
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-3">
                    Personal Information You Provide to Us:
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    This includes information you voluntarily provide when you fill out our contact
                    form, subscribe to our newsletter, or otherwise communicate with us. This may
                    include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
                    <li>Full Name</li>
                    <li>Email Address</li>
                    <li>Phone Number</li>
                    <li>Company Name</li>
                    <li>Any other information you choose to provide in your messages</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-white mb-3">
                    Information We Collect Automatically:
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    When you visit our website, we may automatically collect certain information
                    about your device and usage. This includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>
                      <strong>Log Data:</strong> Your IP address, browser type and settings, the
                      date and time of your request, and how you interacted with our website.
                    </li>
                    <li>
                      <strong>Device Information:</strong> Information about the device you are
                      using, such as the hardware model, operating system, and unique device
                      identifiers.
                    </li>
                    <li>
                      <strong>Cookies and Similar Technologies:</strong> We use cookies to operate
                      and administer our site and to improve your experience.
                    </li>
                  </ul>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-6">
                    3. How We Use Your Information
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We use the information we collect for various purposes, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>
                      <strong>To Provide and Manage Our Services:</strong> To fulfill our contracts
                      with you, including responding to your inquiries and providing you with our
                      tech and branding solutions.
                    </li>
                    <li>
                      <strong>To Communicate With You:</strong> To send you administrative
                      information, marketing communications, updates, and information about our
                      services.
                    </li>
                    <li>
                      <strong>To Improve Our Website and Services:</strong> To analyze how users
                      interact with our website, which helps us improve its functionality, design,
                      and content.
                    </li>
                    <li>
                      <strong>For Security and Fraud Prevention:</strong> To protect our website,
                      our users, and our business from fraudulent or illegal activity.
                    </li>
                    <li>
                      <strong>To Comply with Legal Obligations:</strong> To comply with applicable
                      laws, legal processes, or government regulations.
                    </li>
                  </ul>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-pink-500 pl-6">
                    4. Data Sharing and Disclosure
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We do not sell your personal information. We may share your information in the
                    following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>
                      <strong>Service Providers:</strong> We may share your information with
                      third-party vendors and service providers who perform services on our behalf.
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> We may disclose your information if
                      required to do so by law or in good faith belief that such action is
                      necessary.
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> In the event of a merger, acquisition, or
                      sale of assets, your information may be transferred as part of that
                      transaction.
                    </li>
                  </ul>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-red-500 pl-6">
                    5. Data Security
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your
                    personal data from unauthorized access, use, disclosure, alteration, or
                    destruction. However, no internet or email transmission is ever fully secure or
                    error-free. While we strive to protect your personal data, we cannot guarantee
                    its absolute security.
                  </p>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-green-500 pl-6">
                    6. Your Rights
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Under applicable data protection laws, you have certain rights with respect to
                    your personal data. These may include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>
                      <strong>The right to access:</strong> You have the right to request copies of
                      your personal data.
                    </li>
                    <li>
                      <strong>The right to rectification:</strong> You have the right to request
                      that we correct any information you believe is inaccurate.
                    </li>
                    <li>
                      <strong>The right to erasure:</strong> You have the right to request that we
                      erase your personal data, under certain conditions.
                    </li>
                    <li>
                      <strong>The right to restrict processing:</strong> You have the right to
                      request that we restrict the processing of your personal data.
                    </li>
                    <li>
                      <strong>The right to data portability:</strong> You have the right to request
                      that we transfer the data that we have collected to another organization.
                    </li>
                  </ul>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-yellow-500 pl-6">
                    7. Children's Privacy
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Our Services are not directed to individuals under the age of 18. We do not
                    knowingly collect personal information from children under 18. If we become
                    aware that a child under 18 has provided us with personal information, we will
                    take steps to delete such information.
                  </p>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-orange-500 pl-6">
                    8. Changes to This Privacy Policy
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    We may update this Privacy Policy from time to time. The "Last Updated" date at
                    the top of this page indicates when this Privacy Policy was last revised. We
                    encourage you to review this Privacy Policy periodically to stay informed about
                    how we are protecting your information.
                  </p>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <Card className="p-8 bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <AlertCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">Contact Us</h3>
                          <p className="text-gray-300 mb-4">
                            If you have any questions about this Privacy Policy or our data
                            practices, please contact us at:
                          </p>
                          <div className="space-y-2 text-gray-300">
                            <p>
                              <strong>Email:</strong> privacy@innofyai.com
                            </p>
                            <p>
                              <strong>Address:</strong> 13, signature estate, Ikota, Lekki, Nigeria
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
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
              Questions About Your Privacy?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
              variants={fadeUpVariants}
            >
              We're here to help. Contact our privacy team for any questions about how we handle
              your data.
            </motion.p>
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full shadow-lg flex items-center gap-2 mx-auto"
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span>Contact Privacy Team</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
