import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Cookie,
  Settings,
  Shield,
  Eye,
  Lock,
  FileText,
  AlertCircle,
  CheckCircle,
  XCircle,
  Info,
  BarChart3,
  Megaphone,
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

export default function CookiePolicy() {
  const structuredData = generateOrganizationStructuredData({
    name: "InnofyAI",
    url: "https://innofyai.com",
    logo: "https://innofyai.com/logo.png",
    description:
      "Learn how we use cookies and similar technologies to enhance your browsing experience and provide personalized services.",
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

  const cookieTypes = [
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Essential Cookies",
      description: "Required for basic website functionality",
      examples: [
        "Authentication and security",
        "Shopping cart functionality",
        "Language preferences",
        "Session management"
      ],
      color: "from-green-600 to-emerald-600",
      necessary: true,
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Functional Cookies",
      description: "Enhance user experience and remember preferences",
      examples: [
        "User preferences and settings",
        "Form auto-fill data",
        "Personalized content",
        "Social media integration"
      ],
      color: "from-blue-600 to-indigo-600",
      necessary: false,
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics Cookies",
      description: "Help us understand how visitors use our website",
      examples: [
        "Page views and navigation",
        "Traffic sources",
        "User behavior patterns",
        "Performance metrics"
      ],
      color: "from-purple-600 to-pink-600",
      necessary: false,
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Marketing Cookies",
      description: "Used for advertising and marketing purposes",
      examples: [
        "Targeted advertising",
        "Social media tracking",
        "Campaign effectiveness",
        "Retargeting"
      ],
      color: "from-orange-600 to-red-600",
      necessary: false,
    },
  ];

  const cookieManagement = [
    {
      title: "Browser Settings",
      description: "Control cookies through your browser preferences",
      icon: <Settings className="h-6 w-6" />,
    },
    {
      title: "Cookie Consent",
      description: "Manage your cookie preferences through our consent banner",
      icon: <Cookie className="h-6 w-6" />,
    },
    {
      title: "Third-Party Opt-Out",
      description: "Opt out of third-party tracking and advertising",
      icon: <Shield className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <SEO
        title="Cookie Policy - InnofyAI"
        description="Learn how we use cookies and similar technologies to enhance your browsing experience and provide personalized services."
        keywords="cookie policy, cookies, tracking, GDPR, privacy, data protection, browser settings"
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
                <Badge className="bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0 mb-6">
                  Cookie Policy
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
                variants={fadeUpVariants}
              >
                Cookie{" "}
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Policy
                </span>
              </motion.h1>

              <motion.p
                className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-6"
                variants={fadeUpVariants}
              >
                Learn how we use cookies and similar technologies to enhance your browsing experience
                and provide personalized services.
              </motion.p>

              <motion.p className="text-gray-400" variants={fadeUpVariants}>
                <strong>Last Updated:</strong> June 23, 2025
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cookie Management */}
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
              Cookie{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Management
              </span>
            </motion.h2>
            <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainerVariants}>
              {cookieManagement.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                  variants={fadeUpVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cookie Types */}
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
              Types of{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Cookies
              </span>
            </motion.h2>
            <motion.div
              className="grid md:grid-cols-2 gap-8"
              variants={staggerContainerVariants}
            >
              {cookieTypes.map((cookie, index) => (
                <motion.div
                  key={cookie.title}
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
                          className={`w-16 h-16 bg-gradient-to-r ${cookie.color} rounded-full flex items-center justify-center text-white flex-shrink-0`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          {cookie.icon}
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-bold text-white">{cookie.title}</h3>
                            {cookie.necessary ? (
                              <Badge className="bg-green-600 text-white text-xs">Necessary</Badge>
                            ) : (
                              <Badge className="bg-blue-600 text-white text-xs">Optional</Badge>
                            )}
                          </div>
                          <p className="text-gray-300 mb-4">{cookie.description}</p>
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-green-400 mb-2">Examples:</h4>
                            <ul className="text-gray-300 text-sm space-y-1">
                              {cookie.examples.map((example, exampleIndex) => (
                                <li key={exampleIndex} className="flex items-start">
                                  <span className="w-1 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                  {example}
                                </li>
                              ))}
                            </ul>
                          </div>
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
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-green-500 pl-6">
                    1. What Are Cookies?
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Cookies are small text files that are stored on your device when you visit our
                    website. They help us provide you with a better experience by remembering your
                    preferences, analyzing how you use our site, and personalizing content and
                    advertisements.
                  </p>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-green-500 pl-6">
                    2. How We Use Cookies
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      We use cookies for the following purposes:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start">
                        <span className="w-1 h-1 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span><strong>Essential Functions:</strong> To ensure our website works properly and securely</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1 h-1 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span><strong>Performance:</strong> To analyze how visitors use our website and improve its functionality</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1 h-1 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span><strong>Personalization:</strong> To remember your preferences and provide customized content</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1 h-1 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span><strong>Marketing:</strong> To deliver relevant advertisements and measure campaign effectiveness</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-green-500 pl-6">
                    3. Third-Party Cookies
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    We may use third-party services that place cookies on your device. These services
                    help us with analytics, advertising, and social media integration. The use of
                    these cookies is subject to the privacy policies of the respective third-party
                    providers.
                  </p>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-green-500 pl-6">
                    4. Managing Your Cookie Preferences
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      You have several options for managing cookies:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start">
                        <span className="w-1 h-1 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span><strong>Browser Settings:</strong> Most browsers allow you to control cookies through their settings</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1 h-1 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span><strong>Cookie Consent:</strong> Use our cookie consent banner to manage your preferences</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1 h-1 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span><strong>Third-Party Opt-Out:</strong> Visit third-party websites to opt out of their tracking</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-green-500 pl-6">
                    5. GDPR Compliance
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    For users in the European Union, we comply with the General Data Protection
                    Regulation (GDPR). This means we:
                  </p>
                  <ul className="space-y-2 ml-6 text-gray-300">
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Obtain explicit consent before placing non-essential cookies
                    </li>
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Provide clear information about cookie usage
                    </li>
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Allow users to withdraw consent at any time
                    </li>
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Implement appropriate security measures
                    </li>
                  </ul>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-green-500 pl-6">
                    6. Contact Us
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    If you have any questions about our use of cookies or this Cookie Policy, please
                    contact us at{" "}
                    <a
                      href="mailto:privacy@innofyai.com"
                      className="text-green-400 hover:text-green-300 transition-colors"
                    >
                      privacy@innofyai.com
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