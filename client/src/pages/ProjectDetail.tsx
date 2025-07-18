import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { caseStudies } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { OptimizedImage } from "@/components/OptimizedImage";
import {
  ArrowLeft,
  Calendar,
  Users,
  Target,
  CheckCircle,
  Star,
  Quote,
  Image as ImageIcon,
  Play,
  ExternalLink,
  Code,
  Zap,
  Shield,
  Palette,
  TrendingUp,
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

interface ProjectDetailProps {
  slug: string;
}

const categoryIcons = {
  automation: <Zap className="w-5 h-5" />,
  security: <Shield className="w-5 h-5" />,
  branding: <Palette className="w-5 h-5" />,
  design: <Palette className="w-5 h-5" />,
};

export default function ProjectDetail({ slug }: ProjectDetailProps) {
  const [, setLocation] = useLocation();
  const [selectedImage, setSelectedImage] = useState(0);
  
  const project = caseStudies.find(study => study.slug === slug);
  
  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-gray-300 mb-8">The project you're looking for doesn't exist.</p>
          <Button onClick={() => setLocation("/portfolio")} className="bg-gradient-to-r from-blue-600 to-purple-600">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  const structuredData = generateOrganizationStructuredData({
    name: `InnofyAI - ${project.title}`,
    description: project.description,
    url: `https://innofyai.com/portfolio/${project.slug}`,
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
      "https://twitter.com/innofyai",
      "https://linkedin.com/company/innofyai",
      "https://facebook.com/innofyai",
    ],
  });

  const handleContact = () => {
    setLocation("/contact");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO
        title={`${project.title} - InnofyAI Portfolio`}
        description={project.description}
        keywords={`${project.title}, ${project.industry}, ${project.category}, case study, portfolio, InnofyAI`}
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              onClick={() => setLocation("/portfolio")}
              variant="ghost"
              className="mb-8 text-gray-300 hover:text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </motion.div>

          {/* Project Header */}
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center mb-16"
            variants={scrollRevealVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUpVariants}>
              <div className="flex items-center gap-4 mb-6">
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                  {categoryIcons[project.category as keyof typeof categoryIcons]}
                  {project.category}
                </Badge>
                <Badge variant="outline" className="bg-white/5 text-gray-300 border-white/20">
                  {project.industry}
                </Badge>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {project.title}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="w-5 h-5" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Target className="w-5 h-5" />
                  <span>{project.metric} {project.metricLabel}</span>
                </div>
              </div>

              <motion.button
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg flex items-center gap-2"
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={handleContact}
              >
                <span>Start Your Project</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <OptimizedImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80"
                  priority={true}
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 text-lg px-4 py-2">
                    {project.metric}
                  </Badge>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid lg:grid-cols-2 gap-12"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUpVariants}>
              <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.challenge}
              </p>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <h2 className="text-3xl font-bold text-white mb-6">Our Solution</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.solution}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technologies & Features */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid lg:grid-cols-2 gap-12"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUpVariants}>
              <h2 className="text-3xl font-bold text-white mb-8">Technologies Used</h2>
              <div className="grid grid-cols-2 gap-4">
                {project.technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Code className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300 font-medium">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
              <div className="space-y-4">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 leading-relaxed">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
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
              Results That <span className="gradient-text">Matter</span>
            </motion.h2>
            <motion.p className="text-xl text-gray-300" variants={fadeUpVariants}>
              Measurable impact and transformative outcomes
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {project.results.map((result, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                variants={cardHoverVariants}
                whileHover="hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                  <h3 className="text-white font-semibold">Achievement</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{result}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center"
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12"
              variants={fadeUpVariants}
            >
              <Quote className="w-12 h-12 text-blue-400 mx-auto mb-6" />
              <blockquote className="text-xl lg:text-2xl text-white mb-8 leading-relaxed italic">
                "{project.testimonial.content}"
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <OptimizedImage
                  src={project.testimonial.image}
                  alt={project.testimonial.name}
                  className="w-16 h-16 rounded-full"
                />
                <div className="text-left">
                  <div className="text-white font-semibold">{project.testimonial.name}</div>
                  <div className="text-gray-300">{project.testimonial.title}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Gallery */}
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
              Project <span className="gradient-text">Gallery</span>
            </motion.h2>
            <motion.p className="text-xl text-gray-300" variants={fadeUpVariants}>
              Visual journey through our work
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                className="relative rounded-2xl overflow-hidden cursor-pointer group"
                variants={cardHoverVariants}
                whileHover="hover"
                onClick={() => setSelectedImage(index)}
              >
                <OptimizedImage
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-64 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ImageIcon className="w-8 h-8 text-white" />
                </div>
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
              className="text-4xl lg:text-6xl font-bold text-white mb-8"
              variants={fadeUpVariants}
            >
              Ready to Start Your <span className="gradient-text">Project</span>?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              variants={fadeUpVariants}
            >
              Let's discuss how we can help you achieve similar results and transform your business with innovative solutions.
            </motion.p>
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg flex items-center gap-2 mx-auto"
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={handleContact}
            >
              <span>Get Started Today</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 