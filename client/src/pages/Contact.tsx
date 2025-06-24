import { motion } from 'framer-motion';
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Twitter, Linkedin, MessageCircle, ArrowRight, Globe, Users } from "lucide-react";
import { SEO } from "@/components/SEO";
import { generateOrganizationStructuredData } from "@/lib/structuredData";
import { 
  scrollRevealVariants, 
  staggerContainerVariants, 
  fadeUpVariants,
  buttonHoverVariants,
  cardHoverVariants
} from '../lib/animations';

export default function Contact() {
  const structuredData = generateOrganizationStructuredData({
    name: "InnofyAI",
    description: "Contact InnofyAI for tech consulting and digital transformation services",
    url: "https://innofyai.com/contact",
    logo: "https://innofyai.com/logo.png",
    address: {
      addressLocality: "Lagos",
      addressCountry: "Nigeria"
    },
    contactPoint: {
      contactType: "customer service",
      email: "hello@innofyai.com"
    },
    sameAs: [
      "https://twitter.com/innofyai",
      "https://linkedin.com/company/innofyai",
      "https://facebook.com/innofyai"
    ]
  });

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-white" />,
      title: "Office",
      primary: "Lagos, Nigeria",
      secondary: "Available for global projects",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: <Mail className="h-6 w-6 text-white" />,
      title: "Email",
      primary: "hello@innofyai.com",
      secondary: "We respond within 24 hours",
      color: "from-purple-600 to-purple-700"
    },
    {
      icon: <Phone className="h-6 w-6 text-white" />,
      title: "Phone",
      primary: "+234 (0) 123 456 789",
      secondary: "Mon-Fri: 9AM-6PM WAT",
      color: "from-green-600 to-green-700"
    },
    {
      icon: <Clock className="h-6 w-6 text-white" />,
      title: "Response Time",
      primary: "Average: 2-4 hours",
      secondary: "Mon-Fri: 9AM-6PM WAT",
      color: "from-orange-600 to-orange-700"
    }
  ];

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" }
  ];

  const stats = [
    { number: "24h", label: "Response Time", icon: <Clock className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Users className="w-6 h-6" /> },
    { number: "15+", label: "Countries Served", icon: <Globe className="w-6 h-6" /> },
    { number: "500+", label: "Projects Completed", icon: <MessageCircle className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Contact Us - Get in Touch with InnofyAI"
        description="Ready to transform your business? Contact InnofyAI for AI automation, cybersecurity, design, and branding solutions. Get in touch today!"
        keywords="contact InnofyAI, tech consulting, AI services, cybersecurity, design services, branding, Lagos Nigeria"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center"
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-white mb-8"
              variants={fadeUpVariants}
            >
              Let's <span className="gradient-text">Connect</span>
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              variants={fadeUpVariants}
            >
              Ready to transform your business? Get in touch with our team to discuss your project and discover how we can help you achieve your goals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeUpVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              variants={scrollRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-3xl lg:text-4xl font-bold text-white mb-8"
                variants={fadeUpVariants}
              >
                Start Your Project
              </motion.h2>
              <ContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={scrollRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-3xl lg:text-4xl font-bold text-white mb-12"
                variants={fadeUpVariants}
              >
                Get in touch
              </motion.h2>
              
              <motion.div
                className="space-y-8"
                variants={staggerContainerVariants}
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start group"
                    variants={fadeUpVariants}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className={`flex-shrink-0 w-14 h-14 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {info.icon}
                    </motion.div>
                    <div className="ml-6">
                      <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                      <p className="text-blue-300 font-medium mb-1">{info.primary}</p>
                      <p className="text-gray-400">{info.secondary}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="mt-16"
                variants={scrollRevealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h3
                  className="text-2xl font-semibold text-white mb-6"
                  variants={fadeUpVariants}
                >
                  Follow us
                </motion.h3>
                <motion.div
                  className="flex space-x-4"
                  variants={staggerContainerVariants}
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="group w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300"
                      variants={fadeUpVariants}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
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
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
              variants={fadeUpVariants}
            >
              Don't wait to start your digital transformation journey. Our team is ready to help you achieve your goals.
            </motion.p>
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg flex items-center gap-2 mx-auto"
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
