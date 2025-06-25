import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Layout } from "../../components/Layout";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { ServiceCard } from "../../components/ServiceCard";

const benefits = [
  "Custom software solutions tailored to your business needs",
  "Agile development process for rapid delivery",
  "Full-stack expertise: frontend, backend, cloud, and DevOps",
  "Scalable, secure, and maintainable codebase",
  "Ongoing support and optimization"
];

const technologies = [
  "React", "Node.js", "TypeScript", "AWS", "Docker", "Kubernetes", "GraphQL", "MongoDB", "PostgreSQL"
];

export default function SoftwareEngineering() {
  return (
    <Layout>
      <Helmet>
        <title>Software Engineering Services | InnofyAI</title>
        <meta name="description" content="Custom software engineering solutions: web, mobile, cloud, and DevOps. Scalable, secure, and tailored for your business." />
        <link rel="canonical" href="https://innofy.ai/services/software-engineering" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Software Engineering',
          provider: { '@type': 'Organization', name: 'InnofyAI' },
          description: 'Custom software engineering solutions: web, mobile, cloud, and DevOps. Scalable, secure, and tailored for your business.'
        })}</script>
      </Helmet>
      <Breadcrumbs />
      <motion.section initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="py-16 px-4 md:px-16 bg-gradient-to-br from-purple-900 to-purple-700 rounded-3xl shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Software Engineering</h1>
        <p className="text-lg md:text-xl text-purple-100 mb-8 max-w-2xl">Custom software solutions for web, mobile, and cloud. We build scalable, secure, and high-performance applications tailored to your business goals.</p>
        <motion.img src="/icons/software.svg" alt="Software Engineering" className="w-24 h-24 mb-8" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3 }} />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } } }} className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Why Choose Us?</h2>
            <ul className="space-y-3">
              {benefits.map((b, i) => (
                <motion.li key={i} className="text-purple-100 flex items-center" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                  <span className="mr-2">✔️</span> {b}
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, i) => (
                <motion.span key={tech} className="bg-purple-800 text-purple-100 px-4 py-2 rounded-lg shadow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Our Process</h2>
          <ol className="list-decimal list-inside text-purple-100 space-y-2">
            <li>Discovery & Requirements</li>
            <li>UI/UX Design & Prototyping</li>
            <li>Agile Development</li>
            <li>Testing & QA</li>
            <li>Deployment & Support</li>
          </ol>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ServiceCard 
              title="Fintech Platform" 
              description="End-to-end development of a secure, scalable fintech app for digital payments." 
              icon={<span>💳</span>}
              benefits={[
                "Secure payment processing",
                "Real-time transactions",
                "Regulatory compliance",
                "Scalable architecture"
              ]}
              color="#3B82F6"
            />
            <ServiceCard 
              title="E-commerce Solution" 
              description="Custom e-commerce platform with real-time analytics and seamless UX." 
              icon={<span>🛒</span>}
              benefits={[
                "Custom shopping experience",
                "Real-time analytics",
                "Mobile-first design",
                "Inventory management"
              ]}
              color="#8B5CF6"
            />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="text-center">
          <a href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform">Get Started with Software Engineering</a>
        </motion.div>
      </motion.section>
    </Layout>
  );
} 