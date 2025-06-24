import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { FloatingCTA } from "./FloatingCTA";
import { Breadcrumbs } from "./Breadcrumbs";
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
  ExternalLink
} from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Breadcrumbs />
      <main className="pt-16">
        {children}
      </main>
      <FloatingCTA />
      <Footer />
    </div>
  );
}

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-400" },
    { icon: Mail, href: "mailto:hello@innofyai.com", label: "Email", color: "hover:text-red-400" },
  ];

  const services = [
    { icon: Zap, name: "Automation & AI", href: "/services/automation-ai" },
    { icon: Shield, name: "Cybersecurity", href: "/services/cybersecurity" },
    { icon: BarChart3, name: "Data Analytics", href: "/services/data-analytics" },
    { icon: Palette, name: "UI/UX Design", href: "/services/ui-ux-design" },
    { icon: Code, name: "Software Development", href: "/services#development" },
    { icon: Megaphone, name: "Branding & Merch", href: "/services/branding-merch" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <motion.footer 
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-16 h-16 bg-green-500/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div className="col-span-2" variants={itemVariants}>
            <motion.div 
              className="flex items-center space-x-2 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Brain className="h-6 w-6 text-white" />
              </motion.div>
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                InnofyAI
              </span>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 mb-6 max-w-md leading-relaxed"
              variants={itemVariants}
            >
              Transforming businesses through intelligent automation and creative excellence. 
              Where technology meets artistry to create digital experiences that inspire and innovate.
            </motion.p>
            
            <motion.div 
              className="flex space-x-4"
              variants={itemVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={`p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 text-gray-300 ${social.color} transition-all duration-300 hover:bg-white/10 hover:scale-110 hover:border-white/20`}
                  whileHover={{ y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="mt-8 space-y-3"
              variants={itemVariants}
            >
              <motion.div 
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                <Mail className="h-4 w-4 text-blue-400" />
                <span>hello@innofyai.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                <Phone className="h-4 w-4 text-green-400" />
                <span>+234 123 456 7890</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                <MapPin className="h-4 w-4 text-red-400" />
                <span>Lagos, Nigeria</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="font-semibold text-blue-400 mb-6 text-lg"
              whileHover={{ scale: 1.05 }}
            >
              Services
            </motion.h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li 
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 10 }}
                >
                  <Link 
                    href={service.href} 
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 group"
                  >
                    <motion.div
                      className="p-1 bg-white/5 rounded group-hover:bg-white/10 transition-colors"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                      <service.icon className="h-3 w-3 text-blue-400" />
                    </motion.div>
                    <span>{service.name}</span>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="font-semibold text-purple-400 mb-6 text-lg"
              whileHover={{ scale: 1.05 }}
            >
              Company
            </motion.h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 10 }}
                >
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-all duration-300 group flex items-center space-x-2"
                  >
                    <span>{link.name}</span>
                    <motion.div
                      className="w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-4 transition-all duration-300"
                      whileHover={{ width: "1rem" }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <motion.p 
            className="text-gray-400 text-sm"
            whileHover={{ scale: 1.02 }}
          >
            © 2024 InnofyAI. All rights reserved.
          </motion.p>
          
          <motion.div 
            className="flex space-x-6 mt-4 md:mt-0"
            variants={itemVariants}
          >
            <Link 
              href="/privacy" 
              className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:scale-105"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:scale-105"
            >
              Terms of Service
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      </div>
    </motion.footer>
  );
}
