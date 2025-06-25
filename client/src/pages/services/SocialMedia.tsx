import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Layout } from "../../components/Layout";
import { ServiceCard } from "../../components/ServiceCard";

const benefits = [
  "Strategic social media campaigns for brand growth",
  "Content creation and community management",
  "Analytics-driven approach for measurable results",
  "Platform expertise: Instagram, X, LinkedIn, Facebook, TikTok",
  "Influencer partnerships and paid ads management"
];

const platforms = [
  "Instagram", "X (Twitter)", "LinkedIn", "Facebook", "TikTok", "YouTube"
];

export default function SocialMedia() {
  return (
    <Layout>
      <Helmet>
        <title>Social Media Services | InnofyAI</title>
        <meta name="description" content="Grow your brand with strategic social media marketing, content creation, analytics, and community management across all major platforms." />
        <link rel="canonical" href="https://innofy.ai/services/social-media" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Social Media',
          provider: { '@type': 'Organization', name: 'InnofyAI' },
          description: 'Grow your brand with strategic social media marketing, content creation, analytics, and community management across all major platforms.'
        })}</script>
      </Helmet>
      <motion.section initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="py-16 px-4 md:px-16 bg-gradient-to-br from-blue-900 to-purple-700 rounded-3xl shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Social Media</h1>
        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl">Grow your brand and engage your audience with our expert social media marketing, content creation, and analytics services across all major platforms.</p>
        <motion.img src="/icons/social-media.svg" alt="Social Media" className="w-24 h-24 mb-8" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3 }} />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } } }} className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Why Choose Us?</h2>
            <ul className="space-y-3">
              {benefits.map((b, i) => (
                <motion.li key={i} className="text-blue-100 flex items-center" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                  <span className="mr-2">✔️</span> {b}
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Platforms</h2>
            <div className="flex flex-wrap gap-3">
              {platforms.map((platform, i) => (
                <motion.span key={platform} className="bg-blue-800 text-blue-100 px-4 py-2 rounded-lg shadow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                  {platform}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ServiceCard 
              title="Viral Campaign" 
              description="Launched a viral campaign for a lifestyle brand, growing followers by 300%." 
              icon={<span>🚀</span>}
              benefits={[
                "300% follower growth",
                "Viral content strategy",
                "Cross-platform reach",
                "Engagement optimization"
              ]}
              color="#EC4899"
            />
            <ServiceCard 
              title="B2B LinkedIn Growth" 
              description="Doubled engagement and leads for a SaaS company via LinkedIn strategy." 
              icon={<span>💼</span>}
              benefits={[
                "2x engagement increase",
                "Lead generation focus",
                "Professional networking",
                "Content optimization"
              ]}
              color="#0EA5E9"
            />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="text-center">
          <a href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform">Get Started with Social Media</a>
        </motion.div>
      </motion.section>
    </Layout>
  );
} 