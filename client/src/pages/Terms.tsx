import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  Users,
  CreditCard,
  Shield,
  AlertTriangle,
  Scale,
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

export default function Terms() {
  const structuredData = generateOrganizationStructuredData({
    name: "InnofyAI",
    url: "https://innofyai.com",
    logo: "https://innofyai.com/logo.png",
    description:
      "These terms govern your use of our website and services. Please read them carefully.",
    address: {
      addressLocality: "13, signature estate, Ikota, Lekki",
      addressCountry: "Nigeria",
    },
    contactPoint: {
      contactType: "Customer Service",
      email: "legal@innofyai.com",
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
      icon: <Users className="h-8 w-8" />,
      title: "User Responsibilities",
      description: "Your obligations when using our services",
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Intellectual Property",
      description: "Rights and ownership of content and deliverables",
      color: "from-pink-600 to-red-600",
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Fees & Payment",
      description: "Payment terms and billing information",
      color: "from-red-600 to-orange-600",
    },
    {
      icon: <Scale className="h-8 w-8" />,
      title: "Limitation of Liability",
      description: "Legal limitations and disclaimers",
      color: "from-orange-600 to-yellow-600",
    },
  ];

  const keyTerms = [
    {
      title: "Agreement",
      description: "By using our services, you agree to these terms and conditions.",
      icon: <CheckCircle className="h-6 w-6" />,
    },
    {
      title: "Services",
      description: "We provide technology consulting and creative services.",
      icon: <FileText className="h-6 w-6" />,
    },
    {
      title: "Payment",
      description: "Fees are due as specified in your service agreement.",
      icon: <CreditCard className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO
        title="Terms of Service - InnofyAI"
        description="These terms govern your use of our website and services. Please read them carefully."
        keywords="terms of service, legal terms, service agreement, user agreement, terms and conditions"
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
                <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 mb-6">
                  Terms of Service
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
                variants={fadeUpVariants}
              >
                Terms of{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Service
                </span>
              </motion.h1>

              <motion.p
                className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-6"
                variants={fadeUpVariants}
              >
                These terms govern your use of our website and services. Please read them carefully.
              </motion.p>

              <motion.p className="text-gray-400" variants={fadeUpVariants}>
                <strong>Last Updated:</strong> June 23, 2025
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Terms Overview */}
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
              Key{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Terms
              </span>
            </motion.h2>
            <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainerVariants}>
              {keyTerms.map((term, index) => (
                <motion.div
                  key={term.title}
                  className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                  variants={fadeUpVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {term.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-4">{term.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{term.description}</p>
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
                      <p className="text-gray-300 text-sm">{section.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Terms */}
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
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-6">
                    1. Agreement to Terms
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    By accessing or using our website and Services, you agree to be bound by these
                    Terms of Service ("Terms"). If you do not agree to these Terms, you may not
                    access or use our website or Services. These Terms constitute a legally binding
                    agreement between you and InnofyAI.
                  </p>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-pink-500 pl-6">
                    2. Our Services
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    InnofyAI provides a range of technology consulting and creative services,
                    including but not limited to, Automation & AI, Data Collection & Analytics,
                    Cybersecurity, Internet of Things (IoT), UI/UX Design, Social Media Management,
                    Software Development, and Branding & Merchandise services ("Services"). The
                    specific scope, fees, and timeline for any project will be detailed in a
                    separate Statement of Work (SOW) or client agreement.
                  </p>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-red-500 pl-6">
                    3. User Responsibilities
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    By using our Services, you agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>
                      Provide accurate, current, and complete information as may be required for any
                      registration or communication.
                    </li>
                    <li>
                      Use our website and Services for lawful purposes only and not to engage in any
                      activity that is fraudulent, harmful, or infringes on the rights of others.
                    </li>
                    <li>
                      Maintain the confidentiality of any account information and be fully
                      responsible for all activities that occur under your account.
                    </li>
                    <li>
                      Cooperate with us in all matters relating to the Services and provide timely
                      access to any materials or information we may reasonably require.
                    </li>
                  </ul>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-orange-500 pl-6">
                    4. Intellectual Property
                  </h2>

                  <h3 className="text-xl font-semibold text-white mb-3">Our Content:</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    All content on our website, including text, graphics, logos, icons, images, and
                    the compilation thereof, and any software used on the site, is the property of
                    InnofyAI or its suppliers and is protected by copyright and other intellectual
                    property laws. You are granted a limited, non-exclusive, non-transferable
                    license to access and use the website for personal, non-commercial purposes.
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-3">Client Content:</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    You (or your licensors) will retain all intellectual property rights in any
                    materials you provide to us for the purpose of receiving Services ("Client
                    Content"). You grant InnofyAI a non-exclusive, worldwide, royalty-free license
                    to use, reproduce, and modify the Client Content solely for the purpose of
                    providing the Services.
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-3">Deliverables:</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Intellectual property rights in the final work products ("Deliverables") created
                    by us for you will be transferred to you upon full and final payment of all
                    fees, as outlined in the applicable SOW. We retain the right to use the
                    Deliverables and a description of the Services in our portfolio and for
                    marketing purposes.
                  </p>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-yellow-500 pl-6">
                    5. Fees and Payment
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    The fees for our Services will be set forth in the applicable SOW or client
                    agreement. Unless otherwise stated, all fees are due as specified in the
                    agreement. Late payments may be subject to interest charges.
                  </p>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-green-500 pl-6">
                    6. Confidentiality
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Both parties agree to keep confidential all non-public information received from
                    the other party that is marked as confidential or would reasonably be considered
                    confidential. This obligation will survive the termination of our engagement.
                  </p>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-6">
                    7. Termination
                  </h2>

                  <h3 className="text-xl font-semibold text-white mb-3">
                    Termination for Convenience:
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Either party may terminate a project or service agreement by providing written
                    notice as specified in the SOW.
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-3">Termination for Cause:</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We may terminate our agreement with you immediately if you breach these Terms or
                    fail to make payments when due.
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-3">Effect of Termination:</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Upon termination, you agree to pay for all Services performed up to the
                    termination date. Sections concerning Intellectual Property, Confidentiality,
                    Disclaimers, and Limitation of Liability shall survive termination.
                  </p>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-indigo-500 pl-6">
                    8. Disclaimers
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Our website and Services are provided "as is" and "as available" without any
                    warranties of any kind, express or implied. We do not warrant that the website
                    will be uninterrupted, error-free, or free of viruses or other harmful
                    components. While we strive to provide high-quality Services, we do not
                    guarantee any specific results or outcomes.
                  </p>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-6">
                    9. Limitation of Liability
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    To the fullest extent permitted by law, in no event shall InnofyAI, its
                    directors, employees, or agents be liable for any indirect, incidental, special,
                    consequential, or punitive damages, including without limitation, loss of
                    profits, data, use, goodwill, or other intangible losses, resulting from:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
                    <li>Your access to or use of or inability to access or use the Services</li>
                    <li>Any conduct or content of any third party on the Services</li>
                    <li>Any content obtained from the Services</li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed">
                    Our total liability to you for any and all claims arising out of or relating to
                    these Terms or the Services shall not exceed the amount of fees paid by you to
                    us for the Services in the six (6) months preceding the claim.
                  </p>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-pink-500 pl-6">
                    10. Governing Law
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    These Terms shall be governed and construed in accordance with the laws of the
                    Federal Republic of Nigeria, without regard to its conflict of law provisions.
                    You agree to submit to the exclusive jurisdiction of the courts located in
                    13, signature estate, Ikota, Lekki, Nigeria to resolve any legal matter arising from the Terms.
                  </p>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-red-500 pl-6">
                    11. Changes to Terms
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    We reserve the right, at our sole discretion, to modify or replace these Terms
                    at any time. If a revision is material, we will provide at least 30 days' notice
                    prior to any new terms taking effect. What constitutes a material change will be
                    determined at our sole discretion. By continuing to access or use our Services
                    after any revisions become effective, you agree to be bound by the revised
                    terms.
                  </p>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <Card className="p-8 bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <AlertTriangle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">12. Contact Us</h3>
                          <p className="text-gray-300 mb-2">
                            If you have any questions about these Terms, please contact us at:
                          </p>
                          <div className="text-gray-300">
                            <p>
                              <strong>InnofyAI</strong>
                            </p>
                            <p>13, signature estate, Ikota, Lekki, Nigeria</p>
                            <p>Email: legal@innofyai.com</p>
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
              Questions About Our Terms?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
              variants={fadeUpVariants}
            >
              Our legal team is here to help clarify any questions about our terms of service.
            </motion.p>
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full shadow-lg flex items-center gap-2 mx-auto"
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span>Contact Legal Team</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
