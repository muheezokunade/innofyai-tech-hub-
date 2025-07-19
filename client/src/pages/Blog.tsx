import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blogPosts } from "@/data/content";
import { Link } from "wouter";
import {
  Mail,
  ArrowRight,
  Clock,
  User,
  Calendar,
  BookOpen,
  TrendingUp,
  Loader2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { SEO } from "@/components/SEO";
import { generateOrganizationStructuredData } from "@/lib/structuredData";
import {
  scrollRevealVariants,
  staggerContainerVariants,
  fadeUpVariants,
  buttonHoverVariants,
  cardHoverVariants,
} from "../lib/animations";

export default function Blog() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const { toast } = useToast();
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const structuredData = generateOrganizationStructuredData({
    name: "InnofyAI",
    description: "Tech insights and industry trends from InnofyAI",
    url: "https://innofyai.com/blog",
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

  const categories = [
    { id: "all", label: "All Articles", icon: <BookOpen className="w-4 h-4" /> },
    { id: "ai", label: "AI & Automation", icon: <TrendingUp className="w-4 h-4" /> },
    { id: "security", label: "Cybersecurity", icon: <TrendingUp className="w-4 h-4" /> },
    { id: "design", label: "Design & Branding", icon: <TrendingUp className="w-4 h-4" /> },
    { id: "trends", label: "Industry Trends", icon: <TrendingUp className="w-4 h-4" /> },
  ];

  const stats = [
    { number: "50+", label: "Articles Published", icon: <BookOpen className="w-6 h-6" /> },
    { number: "10K+", label: "Monthly Readers", icon: <User className="w-6 h-6" /> },
    { number: "5+", label: "Expert Authors", icon: <User className="w-6 h-6" /> },
    { number: "24h", label: "Response Time", icon: <Clock className="w-6 h-6" /> },
  ];

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast({
        title: "Successfully subscribed!",
        description:
          "Thank you for subscribing to our newsletter. You'll receive the latest tech insights.",
        duration: 5000,
      });

      setEmail("");
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO
        title="Blog - Tech Insights & Industry Trends"
        description="Stay ahead with the latest trends, insights, and innovations in technology, AI, and digital transformation from InnofyAI experts."
        keywords="tech blog, AI insights, cybersecurity trends, design tips, digital transformation, technology news, industry insights"
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
              Tech <span className="gradient-text">Insights</span>
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              variants={fadeUpVariants}
            >
              Stay ahead with the latest trends, insights, and innovations in technology, AI, and
              digital transformation.
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

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
              variants={cardHoverVariants}
              whileHover="hover"
            >
              <div className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    variants={staggerContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div variants={fadeUpVariants}>
                      <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                        Featured Article
                      </Badge>
                    </motion.div>
                    <motion.h2
                      className="text-3xl lg:text-5xl font-bold text-white mb-6"
                      variants={fadeUpVariants}
                    >
                      {featuredPost.title}
                    </motion.h2>
                    <motion.p
                      className="text-xl text-gray-300 mb-8 leading-relaxed"
                      variants={fadeUpVariants}
                    >
                      {featuredPost.excerpt}
                    </motion.p>
                    <motion.div
                      className="flex items-center space-x-6 mb-8 text-gray-400"
                      variants={fadeUpVariants}
                    >
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </motion.div>
                    <motion.div variants={fadeUpVariants}>
                      <Link href="/blog/ai-transform-business">
                        <motion.button
                          className="group px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 font-semibold rounded-full shadow-lg flex items-center gap-2"
                          variants={buttonHoverVariants}
                          whileHover="hover"
                          whileTap="tap"
                        >
                          <span>Read Article</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      </Link>
                    </motion.div>
                  </motion.div>
                  <motion.div
                    variants={scrollRevealVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="rounded-2xl shadow-2xl w-full h-auto"
                      variants={cardHoverVariants}
                      whileHover="hover"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Categories */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          {/* Category Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
                }`}
                variants={fadeUpVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.icon}
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Blog Grid */}
          <motion.div
            className="grid lg:grid-cols-3 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {regularPosts.map((post, index) => {
              const blogRoutes: { [key: number]: string } = {
                2: "/blog/practical-ai-smes",
                3: "/blog/cybersecurity-trends-2024",
                4: "/blog/brand-identity-digital-age",
              };

              return (
                <motion.div
                  key={post.id}
                  variants={cardHoverVariants}
                  whileHover="hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={blogRoutes[post.id] || "/blog"}>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden cursor-pointer group">
                      <motion.div
                        className="h-48 relative overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </motion.div>
                      <div className="p-6">
                        <Badge
                          variant="outline"
                          className="mb-4 bg-white/5 text-gray-300 border-white/20"
                        >
                          {post.category}
                        </Badge>
                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Load More */}
          <motion.div
            className="text-center mt-16"
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg flex items-center gap-2 mx-auto"
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span>Load More Articles</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
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
              Stay Updated with <span className="gradient-text">Tech Insights</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
              variants={fadeUpVariants}
            >
              Get the latest articles, trends, and exclusive insights delivered to your inbox.
            </motion.p>
            <motion.form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row max-w-md mx-auto gap-4"
              variants={fadeUpVariants}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 bg-white/5 backdrop-blur-sm border-white/10 text-white placeholder-gray-400 focus:border-blue-500"
                disabled={isSubscribing}
                required
              />
              <motion.button
                type="submit"
                disabled={isSubscribing}
                className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg flex items-center gap-2 disabled:opacity-50"
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {isSubscribing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4" />
                    Subscribe
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
