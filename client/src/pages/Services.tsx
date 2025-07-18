import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/OptimizedImage";
import { services } from "@/data/content";
import { Link } from "wouter";
import {
  Check,
  ArrowRight,
  Zap,
  Shield,
  Palette,
  BarChart3,
  Code,
  Megaphone,
  Users,
  Clock,
  Award,
  Star,
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

export default function Services() {
  const techServices = services.filter(service => service.category === "tech");
  const creativeServices = services.filter(service => service.category === "creative");

  const structuredData = generateOrganizationStructuredData({
    name: "InnofyAI",
    description: "Comprehensive tech and creative services - AI, cybersecurity, design, branding",
    url: "https://innofyai.com/services",
    logo: "https://innofyai.com/logo.png",
    address: {
      addressLocality: "Lagos",
      addressCountry: "Nigeria",
    },
    contactPoint: {
      contactType: "customer service",
      email: "hello@innofyai.com",
    },
          sameAs: [
        "https://x.com/innofyai?s=21",
        "https://www.linkedin.com/company/innofy-ai/",
        "https://www.instagram.com/innofyai?igsh=dGI5MTE5a2xra28%3D&utm_source=qr",
        "https://www.tiktok.com/@innofyai?_t=ZM-8y83dmNvGis&_r=1",
      ],
  });

  const processSteps = [
    {
      step: "1",
      title: "Discovery",
      description:
        "We analyze your requirements, goals, and challenges to create a comprehensive project roadmap.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      step: "2",
      title: "Design",
      description:
        "Our team creates detailed designs and prototypes, ensuring alignment with your vision and goals.",
      icon: <Palette className="h-6 w-6" />,
    },
    {
      step: "3",
      title: "Deploy",
      description:
        "We implement the solution with rigorous testing and quality assurance for optimal performance.",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      step: "4",
      title: "Support",
      description:
        "Ongoing support and optimization ensure your solution continues to deliver exceptional results.",
      icon: <Shield className="h-6 w-6" />,
    },
  ];

  const stats = [
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "500+", label: "Projects Delivered", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> },
    { number: "50+", label: "Team Experts", icon: <Users className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO
        title="Our Services - AI, Cybersecurity, Design & Branding Solutions"
        description="Comprehensive tech and creative services from InnofyAI. AI automation, cybersecurity, UI/UX design, data analytics, and branding solutions that transform businesses."
        keywords="AI services, cybersecurity, UI/UX design, data analytics, branding, tech consulting, automation, digital transformation"
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
              Our <span className="gradient-text">Services</span>
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              variants={fadeUpVariants}
            >
              From cutting-edge AI solutions to compelling brand experiences, we deliver
              comprehensive services that transform businesses.
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

      {/* Tech Solutions */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              variants={fadeUpVariants}
            >
              Tech Solutions
            </motion.h2>
            <motion.p className="text-xl text-gray-300" variants={fadeUpVariants}>
              Advanced technology services that power modern businesses
            </motion.p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-12"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {techServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
                variants={cardHoverVariants}
                whileHover="hover"
              >
                <Link
                  to={
                    service.id === "software-engineering"
                      ? "/services/software-engineering"
                      : `/services/${service.id}`
                  }
                >
                  <motion.div
                    className="h-48 relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <OptimizedImage
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </motion.div>
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <Badge
                        variant="secondary"
                        className="mr-4 bg-blue-600/20 text-blue-300 border-blue-500/30"
                      >
                        {service.title}
                      </Badge>
                    </div>
                    <div className="text-white text-2xl font-bold mb-2">{service.title}</div>
                    <div className="text-gray-300 mb-4">{service.description}</div>
                    <Button
                      variant="outline"
                      className="border-blue-500 text-blue-300 hover:bg-blue-600/20 transition-all"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Creative & Growth */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              variants={fadeUpVariants}
            >
              Creative & Growth
            </motion.h2>
            <motion.p className="text-xl text-gray-300" variants={fadeUpVariants}>
              Design and branding services that captivate and convert
            </motion.p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-12"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {creativeServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
                variants={cardHoverVariants}
                whileHover="hover"
              >
                <Link
                  to={
                    service.id === "social-media"
                      ? "/services/social-media"
                      : `/services/${service.id}`
                  }
                >
                  <motion.div
                    className="h-48 relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <OptimizedImage
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </motion.div>
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <Badge
                        variant="secondary"
                        className="mr-4 bg-pink-600/20 text-pink-300 border-pink-500/30"
                      >
                        {service.title}
                      </Badge>
                    </div>
                    <div className="text-white text-2xl font-bold mb-2">{service.title}</div>
                    <div className="text-gray-300 mb-4">{service.description}</div>
                    <Button
                      variant="outline"
                      className="border-pink-500 text-pink-300 hover:bg-pink-600/20 transition-all"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl lg:text-6xl font-bold text-white mb-8"
              variants={fadeUpVariants}
            >
              Our <span className="gradient-text">Process</span>
            </motion.h2>
            <motion.p className="text-xl text-gray-300" variants={fadeUpVariants}>
              A proven methodology that ensures successful project delivery
            </motion.p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-4 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {processSteps.map((phase, index) => (
              <motion.div
                key={phase.step}
                className="text-center group"
                variants={fadeUpVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-20 h-20 mx-auto mb-8 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-2xl relative"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {phase.icon}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">{phase.title}</h3>
                <p className="text-gray-300 leading-relaxed">{phase.description}</p>
              </motion.div>
            ))}
          </motion.div>
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
              Let's discuss how our innovative solutions can help you achieve your business goals
              and stay ahead of the competition.
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
