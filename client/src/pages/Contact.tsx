import { motion } from "framer-motion";
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Twitter,
  Linkedin,
  MessageCircle,
  ArrowRight,
  Globe,
  Users,
} from "lucide-react";

// Custom Instagram and TikTok icons
const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TikTok = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);
import { SEO } from "@/components/SEO";
import { generateOrganizationStructuredData } from "@/lib/structuredData";
import {
  scrollRevealVariants,
  staggerContainerVariants,
  fadeUpVariants,
  buttonHoverVariants,
  cardHoverVariants,
} from "../lib/animations";

export default function Contact() {
  const structuredData = generateOrganizationStructuredData({
    name: "InnofyAI",
    description: "Contact InnofyAI for tech consulting and digital transformation services",
    url: "https://innofyai.com/contact",
    logo: "https://innofyai.com/logo.png",
    address: {
      addressLocality: "13, signature estate, Ikota, Lekki",
      addressCountry: "Nigeria",
    },
    contactPoint: {
      contactType: "customer service",
      email: "info@innofyai.com",
    },
    sameAs: [
      "https://x.com/innofyai?s=21",
      "https://www.linkedin.com/company/innofy-ai/",
      "https://www.instagram.com/innofyai?igsh=dGI5MTE5a2xra28%3D&utm_source=qr",
      "https://www.tiktok.com/@innofyai?_t=ZM-8y83dmNvGis&_r=1",
    ],
  });

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-white" />,
      title: "Office",
      primary: "13, signature estate, Ikota, Lekki",
      secondary: "Available for global projects",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: <Mail className="h-6 w-6 text-white" />,
      title: "Email",
      primary: "info@innofyai.com",
      secondary: "We respond within 24 hours",
      color: "from-purple-600 to-purple-700",
    },
    {
      icon: <Phone className="h-6 w-6 text-white" />,
      title: "Phone",
      primary: "+234 810 811 4407",
      secondary: "Mon-Fri: 9AM-6PM WAT",
      color: "from-green-600 to-green-700",
    },
    {
      icon: <Clock className="h-6 w-6 text-white" />,
      title: "Response Time",
      primary: "Average: 2-4 hours",
      secondary: "Mon-Fri: 9AM-6PM WAT",
      color: "from-orange-600 to-orange-700",
    },
  ];

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: "https://x.com/innofyai?s=21", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/company/innofy-ai/", label: "LinkedIn" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/innofyai?igsh=dGI5MTE5a2xra28%3D&utm_source=qr", label: "Instagram" },
    { icon: <TikTok className="h-5 w-5" />, href: "https://www.tiktok.com/@innofyai?_t=ZM-8y83dmNvGis&_r=1", label: "TikTok" },
  ];

  const stats = [
    { number: "24h", label: "Response Time", icon: <Clock className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Users className="w-6 h-6" /> },
    { number: "15+", label: "Countries Served", icon: <Globe className="w-6 h-6" /> },
    { number: "20+", label: "Projects Completed", icon: <MessageCircle className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO
        title="Contact Us - Get in Touch with InnofyAI"
        description="Ready to transform your business? Contact InnofyAI for AI automation, cybersecurity, design, and branding solutions. Get in touch today!"
        keywords="contact InnofyAI, tech consulting, AI services, cybersecurity, design services, branding, Lekki Nigeria"
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
              Ready to transform your business? Get in touch with our team to discuss your project
              and discover how we can help you achieve your goals.
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
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
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

              <motion.div className="space-y-8" variants={staggerContainerVariants}>
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
                <motion.div className="flex space-x-4" variants={staggerContainerVariants}>
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
              Don't wait to start your digital transformation journey. Our team is ready to help you
              achieve your goals.
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
