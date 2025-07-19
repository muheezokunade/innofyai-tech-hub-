import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home, ArrowLeft, Search, MapPin } from "lucide-react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { generateOrganizationStructuredData } from "@/lib/structuredData";
import {
  scrollRevealVariants,
  staggerContainerVariants,
  fadeUpVariants,
  buttonHoverVariants,
  cardHoverVariants,
} from "../lib/animations";

export default function NotFound() {
  const structuredData = generateOrganizationStructuredData({
    name: "InnofyAI",
    url: "https://innofyai.com",
    logo: "https://innofyai.com/logo.png",
    description: "Page not found - The page you're looking for doesn't exist.",
    address: {
      addressLocality: "13, signature estate, Ikota, Lekki",
      addressCountry: "Nigeria",
    },
    contactPoint: {
      contactType: "Customer Service",
      email: "support@innofyai.com",
    },
            sameAs: [
              "https://www.linkedin.com/company/innofy-ai/", 
              "https://x.com/innofyai?s=21",
              "https://www.instagram.com/innofyai?igsh=dGI5MTE5a2xra28%3D&utm_source=qr",
              "https://www.tiktok.com/@innofyai?_t=ZM-8y83dmNvGis&_r=1"
            ],
  });

  const quickLinks = [
    {
      title: "Home",
      description: "Return to our homepage",
      icon: <Home className="h-6 w-6" />,
      href: "/",
      color: "from-blue-600 to-purple-600",
    },
    {
      title: "Services",
      description: "Explore our services",
      icon: <Search className="h-6 w-6" />,
      href: "/services",
      color: "from-purple-600 to-pink-600",
    },
    {
      title: "Contact",
      description: "Get in touch with us",
      icon: <MapPin className="h-6 w-6" />,
      href: "/contact",
      color: "from-pink-600 to-red-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <SEO
        title="404 - Page Not Found - InnofyAI"
        description="The page you're looking for doesn't exist. Let us help you find what you need."
        keywords="404, page not found, error page"
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
              <motion.div className="mb-8" variants={fadeUpVariants}>
                <motion.div
                  className="w-32 h-32 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <AlertCircle className="h-16 w-16 text-white" />
                </motion.div>
              </motion.div>

              <motion.h1
                className="text-6xl lg:text-8xl font-bold text-white leading-tight mb-6"
                variants={fadeUpVariants}
              >
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  404
                </span>
              </motion.h1>

              <motion.h2
                className="text-3xl lg:text-4xl font-bold text-white mb-6"
                variants={fadeUpVariants}
              >
                Page Not Found
              </motion.h2>

              <motion.p
                className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto"
                variants={fadeUpVariants}
              >
                Oops! The page you're looking for doesn't exist. It might have been moved, deleted,
                or you entered the wrong URL.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                variants={fadeUpVariants}
              >
                <Link href="/">
                  <motion.button
                    className="group px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold rounded-full shadow-lg flex items-center gap-2 text-lg"
                    variants={buttonHoverVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Go Home</span>
                  </motion.button>
                </Link>
                <motion.button
                  className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-lg"
                  onClick={() => window.history.back()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <span>Go Back</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
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
              Where Would You Like to{" "}
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Go?
              </span>
            </motion.h2>
            <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainerVariants}>
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.title}
                  variants={cardHoverVariants}
                  whileHover="hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={link.href}>
                    <Card className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                      <CardContent className="pt-6">
                        <motion.div
                          className={`w-16 h-16 bg-gradient-to-r ${link.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          {link.icon}
                        </motion.div>
                        <h3 className="text-xl font-bold text-white mb-4">{link.title}</h3>
                        <p className="text-gray-300">{link.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
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
              Need Help Finding Something?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
              variants={fadeUpVariants}
            >
              Our team is here to help you navigate our website and find the information you need.
            </motion.p>
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold rounded-full shadow-lg flex items-center gap-2 mx-auto"
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span>Contact Support</span>
              <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
