import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { FloatingCTA } from "./FloatingCTA";

import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Brain,
  Twitter,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Zap,
  Shield,
  Palette,
  BarChart3,
  Code,
  Megaphone,
  ExternalLink,
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

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">{children}</main>
      <FloatingCTA />
      <Footer />
    </div>
  );
}

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const socialLinks = [
    { icon: Twitter, href: "https://x.com/innofyai?s=21", label: "Twitter", color: "hover:text-blue-400" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/innofy-ai/", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: Instagram, href: "https://www.instagram.com/innofyai?igsh=dGI5MTE5a2xra28%3D&utm_source=qr", label: "Instagram", color: "hover:text-pink-400" },
    { icon: TikTok, href: "https://www.tiktok.com/@innofyai?_t=ZM-8y83dmNvGis&_r=1", label: "TikTok", color: "hover:text-purple-400" },
    { icon: Mail, href: "mailto:info@innofyai.com", label: "Email", color: "hover:text-red-400" },
  ];

  const services = [
    { icon: Zap, name: "Automation & AI", href: "/services/automation-ai" },
    { icon: Shield, name: "Cybersecurity", href: "/services/cybersecurity" },
    { icon: BarChart3, name: "Data Analytics", href: "/services/data-analytics" },
    { icon: Palette, name: "UI/UX Design", href: "/services/ui-ux-design" },
    { icon: Code, name: "Web & Mobile Development", href: "/services/software-engineering" },
    { icon: Megaphone, name: "Branding & Social Media", href: "/services/branding-merch" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.footer
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                InnofyAI
              </span>
            </div>

            <p className="text-gray-300 mb-8 leading-relaxed max-w-md">
              Transforming businesses through intelligent automation and creative excellence. 
              Where technology meets artistry to create digital experiences that inspire and innovate.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-sm">info@innofyai.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-sm">+234 810 811 4407</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 text-red-400 flex-shrink-0" />
                <span className="text-sm">13, signature estate, Ikota, Lekki</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={`p-2.5 bg-white/5 rounded-lg border border-white/10 text-gray-300 ${social.color} transition-all duration-300 hover:bg-white/10 hover:scale-110 hover:border-white/20`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-white mb-6 text-lg">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={service.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 group"
                  >
                    <div className="p-1.5 bg-white/5 rounded group-hover:bg-white/10 transition-colors">
                      <service.icon className="h-3 w-3 text-blue-400" />
                    </div>
                    <span className="text-sm">{service.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-white mb-6 text-lg">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 text-sm"
                  >
                    {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <p className="text-gray-400 text-sm">
            © 2024 InnofyAI. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white text-sm transition-all duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white text-sm transition-all duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
    </motion.footer>
  );
}
