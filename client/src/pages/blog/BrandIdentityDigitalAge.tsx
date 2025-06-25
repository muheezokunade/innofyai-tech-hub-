import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import {
  ArrowLeft,
  Share2,
  Clock,
  User,
  Calendar,
  ArrowRight,
  Zap,
  Brain,
  TrendingUp,
  Palette,
  MessageSquare,
  Users,
  Target,
  Heart,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { generateArticleStructuredData } from "@/lib/structuredData";
import {
  scrollRevealVariants,
  staggerContainerVariants,
  fadeUpVariants,
  buttonHoverVariants,
  cardHoverVariants,
} from "../../lib/animations";

export default function BrandIdentityDigitalAge() {
  const structuredData = generateArticleStructuredData({
    headline:
      "Building Brand Identity in the Digital Age: Your Guide to Lasting Customer Connection",
    description:
      "Discover how to create compelling brand identities that resonate across digital platforms and drive customer engagement.",
    author: {
      name: "Sarah Williams",
    },
    datePublished: "2024-12-08",
    dateModified: "2024-12-08",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    publisher: {
      name: "InnofyAI",
      logo: {
        url: "https://innofyai.com/logo.png",
      },
    },
    url: "https://innofyai.com/blog/brand-identity-digital-age",
  });

  const relatedArticles = [
    {
      title: "5 Ways AI Can Transform Your Business Operations",
      category: "AI & Automation",
      readTime: "8 min read",
      href: "/blog/ai-transform-business",
      icon: <Zap className="w-4 h-4" />,
    },
    {
      title: "2024 Cybersecurity Trends Every CEO Should Know",
      category: "Security",
      readTime: "7 min read",
      href: "/blog/cybersecurity-trends-2024",
      icon: <Brain className="w-4 h-4" />,
    },
    {
      title: "Beyond the Hype: Practical AI Applications for SMEs",
      category: "AI & Automation",
      readTime: "5 min read",
      href: "/blog/practical-ai-smes",
      icon: <TrendingUp className="w-4 h-4" />,
    },
  ];

  const brandElements = [
    {
      title: "Mission & Values",
      icon: <Heart className="w-6 h-6" />,
      color: "from-pink-600 to-red-600",
      description: "Core purpose and guiding principles",
    },
    {
      title: "Brand Personality",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-600 to-purple-600",
      description: "Human characteristics and tone",
    },
    {
      title: "Visual Identity",
      icon: <Palette className="w-6 h-6" />,
      color: "from-green-600 to-blue-600",
      description: "Logo, colors, and design elements",
    },
    {
      title: "Digital Presence",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "from-purple-600 to-pink-600",
      description: "Website, social media, and content",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
      <SEO
        title="Building Brand Identity in the Digital Age - InnofyAI Blog"
        description="Discover how to create compelling brand identities that resonate across digital platforms and drive customer engagement."
        keywords="brand identity, digital branding, brand strategy, visual identity, brand design, customer connection, brand building"
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
            <motion.div variants={fadeUpVariants}>
              <Link href="/blog">
                <motion.button
                  className="group mb-8 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2"
                  whileHover={{ x: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Blog
                </motion.button>
              </Link>
            </motion.div>

            <motion.div className="space-y-8" variants={staggerContainerVariants}>
              <motion.div variants={fadeUpVariants}>
                <Badge className="bg-gradient-to-r from-pink-600 to-purple-600 text-white border-0 mb-6">
                  Design
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl lg:text-6xl font-bold text-white leading-tight"
                variants={fadeUpVariants}
              >
                Building Brand Identity in the Digital Age: Your Guide to Lasting Customer
                Connection
              </motion.h1>

              <motion.p
                className="text-xl lg:text-2xl text-gray-300 leading-relaxed"
                variants={fadeUpVariants}
              >
                Discover how to create compelling brand identities that resonate across digital
                platforms and drive customer engagement.
              </motion.p>

              <motion.div
                className="flex flex-wrap items-center gap-6 text-gray-400"
                variants={fadeUpVariants}
              >
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Sarah Williams</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>6 min read</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>December 8, 2024</span>
                </div>
              </motion.div>

              <motion.button
                className="group px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg flex items-center gap-2"
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Share2 className="w-4 h-4" />
                Share Article
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Brand Elements Overview */}
      <section className="py-12 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 className="text-2xl font-bold text-white mb-8" variants={fadeUpVariants}>
              Essential Brand Identity Elements
            </motion.h2>
            <motion.div className="grid md:grid-cols-2 gap-6" variants={staggerContainerVariants}>
              {brandElements.map((element, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group"
                  variants={fadeUpVariants}
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${element.color} rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform flex-shrink-0`}
                  >
                    {element.icon}
                  </div>
                  <div>
                    <h3 className="text-gray-300 font-bold mb-2">{element.title}</h3>
                    <p className="text-gray-400 text-sm">{element.description}</p>
                    <div
                      className={`w-full h-1 bg-gradient-to-r ${element.color} rounded-full mt-3`}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="prose prose-lg max-w-none"
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUpVariants}>
              <motion.img
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
                alt="Brand identity design elements in digital space"
                className="w-full h-64 md:h-96 object-cover rounded-2xl mb-12 shadow-2xl"
                variants={cardHoverVariants}
                whileHover="hover"
              />
            </motion.div>

            <motion.div
              className="text-gray-300 space-y-8 leading-relaxed"
              variants={staggerContainerVariants}
            >
              <motion.p className="text-xl" variants={fadeUpVariants}>
                In a world saturated with digital noise, a strong brand identity is no longer a
                marketing asset; it is the very foundation of a resilient and successful business.
                It's the intangible force that transforms a simple product or service into a
                memorable experience, fostering customer loyalty and driving engagement in a crowded
                marketplace.
              </motion.p>

              <motion.p variants={fadeUpVariants}>
                This comprehensive guide will walk you through the essential strategies and
                actionable steps to build a powerful and authentic brand identity in the digital
                age, one that captivates, connects, and converts.
              </motion.p>

              <motion.h2
                className="text-3xl font-bold mt-16 mb-8 text-white border-l-4 border-pink-500 pl-6"
                variants={fadeUpVariants}
              >
                The Cornerstone of Your Brand: Defining Your Core Identity
              </motion.h2>

              <motion.p variants={fadeUpVariants}>
                Before a single pixel is designed or a social media post is crafted, a brand must
                look inward. A strong identity is built on a clear and authentic foundation.
              </motion.p>

              <motion.div variants={fadeUpVariants}>
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <Card className="p-6 bg-pink-500/10 border-pink-500/20 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <h3 className="font-bold text-white mb-2">Mission and Values</h3>
                      <p className="text-gray-300 text-sm">
                        What is the fundamental purpose of your business beyond profit? What are the
                        guiding principles that inform your decisions?
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-6 bg-purple-500/10 border-purple-500/20 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <h3 className="font-bold text-white mb-2">Brand Personality</h3>
                      <p className="text-gray-300 text-sm">
                        If your brand were a person, who would it be? Is it innovative and daring,
                        or reliable and comforting?
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-6 bg-blue-500/10 border-blue-500/20 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <h3 className="font-bold text-white mb-2">Target Audience</h3>
                      <p className="text-gray-300 text-sm">
                        You cannot be everything to everyone. Deep understanding of your ideal
                        customer is crucial.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              <motion.h2
                className="text-3xl font-bold mt-16 mb-8 text-white border-l-4 border-purple-500 pl-6"
                variants={fadeUpVariants}
              >
                The Power of Narrative: Weaving Your Brand Story
              </motion.h2>

              <motion.p variants={fadeUpVariants}>
                In the digital age, consumers are not just buying products; they are buying into
                stories. A compelling brand narrative humanizes your business, creating an emotional
                connection that transcends transactional relationships.
              </motion.p>

              <motion.p variants={fadeUpVariants}>
                Your brand story should encapsulate your "why." It's the narrative that weaves
                together your mission, values, and the journey of your brand. Share your origins,
                the challenges you've overcome, and the passion that drives you. Be authentic and
                transparent; today's consumers are savvy and appreciate genuineness.
              </motion.p>

              <motion.h2
                className="text-3xl font-bold mt-16 mb-8 text-white border-l-4 border-blue-500 pl-6"
                variants={fadeUpVariants}
              >
                Visual Identity: The Face of Your Digital Brand
              </motion.h2>

              <motion.p variants={fadeUpVariants}>
                Your visual identity is the most immediate and recognizable aspect of your brand.
                It's a powerful tool for creating a lasting impression and ensuring brand recall.
              </motion.p>

              <motion.div variants={fadeUpVariants}>
                <div className="space-y-4 my-8">
                  <div className="border-l-4 border-pink-500 pl-6 bg-pink-500/5 p-4 rounded-r-lg">
                    <h4 className="font-bold text-white mb-2">Logo</h4>
                    <p className="text-gray-300">
                      Your logo is the visual cornerstone of your brand. It should be simple,
                      memorable, and scalable to look great on everything from a massive billboard
                      to a tiny favicon.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6 bg-purple-500/5 p-4 rounded-r-lg">
                    <h4 className="font-bold text-white mb-2">Color Palette and Typography</h4>
                    <p className="text-gray-300">
                      Colors evoke emotions and associations, while typography sets the tone of your
                      written communication. Choose wisely and apply consistently.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6 bg-blue-500/5 p-4 rounded-r-lg">
                    <h4 className="font-bold text-white mb-2">Imagery and Design Elements</h4>
                    <p className="text-gray-300">
                      The photography, illustrations, and other graphic elements you use should be
                      cohesive and tell a consistent visual story.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.h2
                className="text-3xl font-bold mt-16 mb-8 text-white border-l-4 border-green-500 pl-6"
                variants={fadeUpVariants}
              >
                Consistency Across the Digital Ecosystem
              </motion.h2>

              <motion.p variants={fadeUpVariants}>
                The modern customer journey is fragmented across numerous digital touchpoints. From
                your website and social media profiles to your email newsletters and online ads,
                maintaining a consistent brand identity is paramount.
              </motion.p>

              <motion.p variants={fadeUpVariants}>
                Inconsistency erodes trust and dilutes your brand message. A customer should have a
                seamless and recognizable experience with your brand, no matter where they encounter
                it. This requires a centralized brand strategy and clear guidelines that are
                understood and implemented by everyone in your organization.
              </motion.p>

              <motion.h2
                className="text-3xl font-bold mt-16 mb-8 text-white border-l-4 border-orange-500 pl-6"
                variants={fadeUpVariants}
              >
                Social Media: Your Brand's Digital Dialogue
              </motion.h2>

              <motion.p variants={fadeUpVariants}>
                Social media is no longer just a marketing channel; it's a dynamic space for
                building and nurturing your brand identity. It's where your brand's personality can
                truly shine and where you can engage in a two-way dialogue with your audience.
              </motion.p>

              <motion.p variants={fadeUpVariants}>
                Choose the platforms where your target audience is most active and tailor your
                content to the unique format and culture of each. Use social media to share your
                brand story, showcase your values in action, and engage in authentic conversations.
              </motion.p>

              <motion.h2
                className="text-3xl font-bold mt-16 mb-8 text-white border-l-4 border-gradient-to-b from-pink-500 to-purple-500 pl-6"
                variants={fadeUpVariants}
              >
                The Future is Fluid: Evolving Your Brand Identity
              </motion.h2>

              <motion.p variants={fadeUpVariants}>
                Finally, it's important to remember that a brand identity is not static. The digital
                landscape is in a constant state of flux, and consumer preferences evolve. While
                consistency is crucial, so is the ability to adapt and evolve.
              </motion.p>

              <motion.p variants={fadeUpVariants}>
                Stay attuned to cultural shifts, emerging technologies, and feedback from your
                audience. A strong brand is not one that never changes, but one that knows how to
                evolve while remaining true to its core values. By building a robust yet flexible
                brand identity, you can ensure that your business remains relevant and resonant for
                years to come.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
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
              Related Articles
            </motion.h2>
            <motion.div className="grid lg:grid-cols-3 gap-8" variants={staggerContainerVariants}>
              {relatedArticles.map((article, index) => (
                <motion.div
                  key={index}
                  variants={cardHoverVariants}
                  whileHover="hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={article.href}>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 cursor-pointer group hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-4">
                        {article.icon}
                        <Badge
                          variant="outline"
                          className="bg-white/5 text-gray-300 border-white/20"
                        >
                          {article.category}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">
                        {article.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{article.readTime}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
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
              Ready to Build Your Brand Identity?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
              variants={fadeUpVariants}
            >
              Let's create a compelling brand identity that resonates with your audience and drives
              lasting customer connections.
            </motion.p>
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg flex items-center gap-2 mx-auto"
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span>Start Your Brand Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
