import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { teamMembers } from "@/data/content";
import { Lightbulb, Handshake, Trophy, Users, Award, Clock, MapPin, ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { generateOrganizationStructuredData } from "@/lib/structuredData";
import { 
  scrollRevealVariants, 
  staggerContainerVariants, 
  fadeUpVariants,
  buttonHoverVariants,
  cardHoverVariants
} from '../lib/animations';

export default function About() {
  const structuredData = generateOrganizationStructuredData({
    name: "InnofyAI",
    description: "Tech Innovation Hub - About our team and mission",
    url: "https://innofyai.com/about",
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

  const stats = [
    { number: "150+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "25+", label: "Team Members", icon: <Users className="w-6 h-6" /> },
    { number: "5+", label: "Years Experience", icon: <Clock className="w-6 h-6" /> },
    { number: "15+", label: "Countries Served", icon: <MapPin className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      title: "Innovation First",
      description: "We constantly push boundaries, exploring new technologies and creative approaches to solve complex challenges.",
      color: "#3b82f6"
    },
    {
      icon: <Handshake className="h-8 w-8 text-white" />,
      title: "Partnership",
      description: "We believe in true collaboration, working alongside our clients as partners in their success journey.",
      color: "#8b5cf6"
    },
    {
      icon: <Trophy className="h-8 w-8 text-white" />,
      title: "Excellence",
      description: "We deliver exceptional quality in everything we do, from code to creative, from strategy to execution.",
      color: "#10b981"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="About InnofyAI - Our Story, Team & Mission"
        description="Learn about InnofyAI's journey from a small team in Lagos to a global tech innovation hub. Meet our passionate team and discover our mission to transform businesses."
        keywords="about InnofyAI, team, mission, vision, Lagos Nigeria, tech innovation, company story"
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
              About <span className="gradient-text">InnofyAI</span>
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              variants={fadeUpVariants}
            >
              We're a team of passionate innovators, technologists, and creatives dedicated to transforming businesses through cutting-edge solutions.
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

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={scrollRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-4xl lg:text-5xl font-bold text-white mb-8"
                variants={fadeUpVariants}
              >
                Our Story
              </motion.h2>
              <motion.div
                className="space-y-6 text-gray-300 text-lg leading-relaxed"
                variants={staggerContainerVariants}
              >
                <motion.p variants={fadeUpVariants}>
                  Founded in Lagos, Nigeria, InnofyAI emerged from a simple yet powerful vision: to democratize access to advanced technology solutions while maintaining the human touch that makes brands memorable.
                </motion.p>
                <motion.p variants={fadeUpVariants}>
                  What started as a small team of tech enthusiasts has grown into a comprehensive platform offering everything from AI automation to creative branding solutions. We believe that the future belongs to businesses that can seamlessly blend technological innovation with authentic brand storytelling.
                </motion.p>
                <motion.p variants={fadeUpVariants}>
                  Today, we're proud to serve clients across the globe, helping them navigate the complex intersection of technology and creativity.
                </motion.p>
              </motion.div>
              
              <motion.div
                className="grid grid-cols-2 gap-8 mt-12"
                variants={staggerContainerVariants}
              >
                <motion.div
                  className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                  variants={fadeUpVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="text-4xl font-bold text-blue-400 mb-2">2019</div>
                  <div className="text-gray-300">Founded in Lagos</div>
                </motion.div>
                <motion.div
                  className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                  variants={fadeUpVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="text-4xl font-bold text-purple-400 mb-2">150+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div
              variants={scrollRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="InnofyAI team collaboration in modern office environment" 
                className="rounded-2xl shadow-2xl w-full h-auto"
                variants={cardHoverVariants}
                whileHover="hover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-12"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="text-center p-8 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-2xl"
              variants={cardHoverVariants}
              whileHover="hover"
            >
              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-8"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Lightbulb className="h-10 w-10 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower businesses with intelligent automation and compelling brand experiences that drive growth, efficiency, and lasting impact in an increasingly digital world.
              </p>
            </motion.div>
            
            <motion.div
              className="text-center p-8 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-white/10 rounded-2xl"
              variants={cardHoverVariants}
              whileHover="hover"
            >
              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-8"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Trophy className="h-10 w-10 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the global leader in integrated tech-creative solutions, setting new standards for how businesses leverage technology while building authentic human connections.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our <span className="gradient-text">Team</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300"
              variants={fadeUpVariants}
            >
              The brilliant minds behind InnofyAI
            </motion.p>
          </motion.div>
          
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="text-center group"
                variants={fadeUpVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src={member.image} 
                    alt={`Professional headshot of ${member.name}`}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white/10 group-hover:border-blue-500/50 transition-all duration-300" 
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                <h3 className="font-bold text-xl text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-3 font-medium">{member.title}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
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
              className="text-4xl lg:text-6xl font-bold text-white mb-8"
              variants={fadeUpVariants}
            >
              Our <span className="gradient-text">Values</span>
            </motion.h2>
          </motion.div>
          
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
                variants={cardHoverVariants}
                whileHover="hover"
                style={{ '--hover-color': value.color } as any}
              >
                <motion.div
                  className="w-20 h-20 mx-auto mb-8 rounded-full flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${value.color}, ${value.color}dd)` }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-6">{value.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
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
              Ready to Work With Us?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
              variants={fadeUpVariants}
            >
              Join hundreds of businesses that have transformed their operations with our innovative solutions.
            </motion.p>
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg flex items-center gap-2 mx-auto"
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
