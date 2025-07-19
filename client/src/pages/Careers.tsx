import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import {
  MapPin,
  Users,
  Heart,
  Zap,
  Code,
  Palette,
  Shield,
  BarChart3,
  ArrowRight,
  Target,
  Rocket,
  Brain,
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

export default function Careers() {
  const structuredData = generateOrganizationStructuredData({
    name: "InnofyAI",
    url: "https://innofyai.com",
    logo: "https://innofyai.com/logo.png",
    description:
      "Join a team of innovators, creators, and problem-solvers who are transforming businesses across Nigeria and beyond through technology and creativity.",
    address: {
      addressLocality: "13, signature estate, Ikota, Lekki",
      addressCountry: "Nigeria",
    },
    contactPoint: {
      contactType: "Customer Service",
      email: "careers@innofyai.com",
    },
            sameAs: [
          "https://www.linkedin.com/company/innofy-ai/", 
          "https://x.com/innofyai?s=21",
          "https://www.instagram.com/innofyai?igsh=dGI5MTE5a2xra28%3D&utm_source=qr",
          "https://www.tiktok.com/@innofyai?_t=ZM-8y83dmNvGis&_r=1"
        ],
  });

  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Technology",
      location: "13, signature estate, Ikota, Lekki",
      type: "Full-time",
      description:
        "Lead development of cutting-edge web applications and automation solutions for our clients.",
      requirements: [
        "5+ years experience with React/Node.js",
        "Experience with cloud platforms",
        "Strong problem-solving skills",
      ],
      icon: <Code className="h-6 w-6" />,
      color: "from-blue-600 to-purple-600",
    },
    {
      title: "UI/UX Designer",
      department: "Creative",
      location: "13, signature estate, Ikota, Lekki / Remote",
      type: "Full-time",
      description:
        "Create beautiful, user-centered designs that solve real business problems for our clients.",
      requirements: [
        "3+ years UI/UX design experience",
        "Proficiency in Figma/Adobe Creative Suite",
        "Portfolio showcasing design thinking",
      ],
      icon: <Palette className="h-6 w-6" />,
      color: "from-purple-600 to-pink-600",
    },
    {
      title: "Cybersecurity Specialist",
      department: "Technology",
      location: "13, signature estate, Ikota, Lekki",
      type: "Full-time",
      description:
        "Protect our clients' digital assets with advanced security solutions and threat monitoring.",
      requirements: [
        "Security certifications (CISSP, CEH, etc.)",
        "Experience with security frameworks",
        "Incident response experience",
      ],
      icon: <Shield className="h-6 w-6" />,
      color: "from-red-600 to-orange-600",
    },
    {
      title: "Data Analytics Consultant",
      department: "Technology",
      location: "13, signature estate, Ikota, Lekki / Hybrid",
      type: "Contract",
      description:
        "Help clients unlock insights from their data with advanced analytics and visualization.",
      requirements: [
        "Experience with Python/R and SQL",
        "Data visualization tools expertise",
        "Business intelligence background",
      ],
      icon: <BarChart3 className="h-6 w-6" />,
      color: "from-green-600 to-blue-600",
    },
  ];

  const benefits = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs for you and your family.",
      color: "from-red-600 to-pink-600",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Professional Growth",
      description:
        "Continuous learning opportunities, conferences, and skill development programs.",
      color: "from-yellow-600 to-orange-600",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaborative Culture",
      description: "Work with talented, passionate people who care about making an impact.",
      color: "from-blue-600 to-purple-600",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Flexible Work",
      description: "Hybrid and remote work options to support your work-life balance.",
      color: "from-green-600 to-blue-600",
    },
  ];

  const companyValues = [
    {
      title: "Innovation",
      description: "We push boundaries and embrace new technologies to solve complex challenges.",
      icon: <Brain className="h-6 w-6" />,
    },
    {
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from code quality to client relationships.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      title: "Growth",
      description:
        "We invest in our people's growth and development, both personally and professionally.",
      icon: <Rocket className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO
        title="Careers at InnofyAI - Join Our Team"
        description="Join a team of innovators, creators, and problem-solvers who are transforming businesses across Nigeria and beyond through technology and creativity."
        keywords="careers, jobs, employment, tech jobs, software development, UI/UX design, cybersecurity, data analytics, Nigeria"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="text-center max-w-4xl mx-auto"
              variants={staggerContainerVariants}
            >
              <motion.div variants={fadeUpVariants}>
                <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 mb-6">
                  Join Our Team
                </Badge>
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                variants={fadeUpVariants}
              >
                Build the Future with{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  InnofyAI
                </span>
              </motion.h1>

              <motion.p
                className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8"
                variants={fadeUpVariants}
              >
                Join a team of innovators, creators, and problem-solvers who are transforming
                businesses across Nigeria and beyond through technology and creativity.
              </motion.p>

              <motion.div variants={fadeUpVariants}>
                <Link href="#positions">
                  <motion.button
                    className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full shadow-lg flex items-center gap-2 text-lg mx-auto"
                    variants={buttonHoverVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <span>View Open Positions</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="text-center mb-16" variants={staggerContainerVariants}>
              <motion.h2
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
                variants={fadeUpVariants}
              >
                Why Work at InnofyAI?
              </motion.h2>
              <motion.p className="text-xl lg:text-2xl text-gray-300" variants={fadeUpVariants}>
                We're building more than just solutions—we're building careers and a community
              </motion.p>
            </motion.div>

            <motion.div
              className="grid lg:grid-cols-2 gap-16 items-center mb-16"
              variants={staggerContainerVariants}
            >
              <motion.div variants={fadeUpVariants}>
                <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  At InnofyAI, we believe technology should empower businesses to reach their full
                  potential. We're on a mission to democratize access to cutting-edge technology
                  solutions across Africa, starting with Nigeria.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Our team combines deep technical expertise with creative problem-solving to
                  deliver solutions that don't just meet requirements—they exceed expectations and
                  drive real business impact.
                </p>
              </motion.div>
              <motion.div
                variants={fadeUpVariants}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.img
                  src="/assets/placeholder.svg"
                  alt="Team collaboration at InnofyAI"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  variants={cardHoverVariants}
                  whileHover="hover"
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainerVariants}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
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
                        className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {benefit.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                      <p className="text-gray-300">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center"
              variants={fadeUpVariants}
            >
              Our{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Values
              </span>
            </motion.h2>
            <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainerVariants}>
              {companyValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
                  variants={fadeUpVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="text-center mb-16" variants={staggerContainerVariants}>
              <motion.h2
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
                variants={fadeUpVariants}
              >
                Open{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Positions
                </span>
              </motion.h2>
              <motion.p className="text-xl lg:text-2xl text-gray-300" variants={fadeUpVariants}>
                Find your next opportunity to make an impact
              </motion.p>
            </motion.div>

            <motion.div className="space-y-6" variants={staggerContainerVariants}>
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.title}
                  variants={cardHoverVariants}
                  whileHover="hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="grid lg:grid-cols-4 gap-6 items-center">
                        <div className="lg:col-span-2">
                          <div className="flex items-center space-x-4 mb-4">
                            <motion.div
                              className={`w-12 h-12 bg-gradient-to-r ${position.color} rounded-lg flex items-center justify-center`}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.3 }}
                            >
                              {position.icon}
                            </motion.div>
                            <div>
                              <h3 className="text-xl font-bold text-white">{position.title}</h3>
                              <div className="flex items-center space-x-4 text-gray-400 mt-2">
                                <Badge
                                  variant="outline"
                                  className="bg-white/5 text-gray-300 border-white/20"
                                >
                                  {position.department}
                                </Badge>
                                <span className="flex items-center">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  {position.location}
                                </span>
                                <span>{position.type}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-300 mb-4">{position.description}</p>
                          <div className="space-y-1">
                            <p className="font-semibold text-white">Key Requirements:</p>
                            <ul className="text-gray-300 text-sm space-y-1">
                              {position.requirements.map((req, reqIndex) => (
                                <li key={reqIndex} className="flex items-start">
                                  <span className="w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 mr-2"></span>
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="lg:col-span-2 flex justify-end">
                          <Link href="/contact">
                            <motion.button
                              className="group px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full shadow-lg flex items-center gap-2"
                              variants={buttonHoverVariants}
                              whileHover="hover"
                              whileTap="tap"
                            >
                              <span>Apply Now</span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                          </Link>
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
              Ready to Join Our Team?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
              variants={fadeUpVariants}
            >
              Don't see a position that fits? We're always looking for talented individuals to join
              our growing team.
            </motion.p>
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full shadow-lg flex items-center gap-2 mx-auto"
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span>Send Us Your Resume</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
