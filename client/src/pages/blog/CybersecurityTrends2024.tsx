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
  Shield,
  AlertTriangle,
  Lock,
  Eye,
  ArrowRight,
  Zap,
  Brain,
  TrendingUp,
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

export default function CybersecurityTrends2024() {
  const structuredData = generateArticleStructuredData({
    headline: "2024 Cybersecurity Trends Every CEO Should Know",
    description:
      "Stay ahead of evolving cyber threats with insights into the most critical security trends shaping the digital landscape.",
    author: {
      name: "Michael Chen",
    },
    datePublished: "2024-12-10",
    dateModified: "2024-12-10",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    publisher: {
      name: "InnofyAI",
      logo: {
        url: "https://innofyai.com/logo.png",
      },
    },
    url: "https://innofyai.com/blog/cybersecurity-trends-2024",
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
      title: "Beyond the Hype: Practical AI Applications for SMEs",
      category: "AI & Automation",
      readTime: "5 min read",
      href: "/blog/practical-ai-smes",
      icon: <Brain className="w-4 h-4" />,
    },
    {
      title: "Building Brand Identity in the Digital Age",
      category: "Design",
      readTime: "6 min read",
      href: "/blog/brand-identity-digital-age",
      icon: <TrendingUp className="w-4 h-4" />,
    },
  ];

  const tableOfContents = [
    "AI-Powered Cyber Attacks",
    "Geopolitically Motivated Cyber Warfare",
    "Ransomware and Double Extortion",
    "The Human Element",
    "Securing IoT and Cloud",
  ];

  const securityTrends = [
    {
      title: "AI-Powered Cyber Attacks",
      icon: <Brain className="w-6 h-6" />,
      color: "from-red-600 to-orange-600",
      borderColor: "border-red-500",
    },
    {
      title: "Geopolitically Motivated Cyber Warfare",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "from-orange-600 to-yellow-600",
      borderColor: "border-orange-500",
    },
    {
      title: "Ransomware and Double Extortion",
      icon: <Lock className="w-6 h-6" />,
      color: "from-yellow-600 to-red-600",
      borderColor: "border-yellow-500",
    },
    {
      title: "The Human Element",
      icon: <Eye className="w-6 h-6" />,
      color: "from-blue-600 to-purple-600",
      borderColor: "border-blue-500",
    },
    {
      title: "Securing IoT and Cloud",
      icon: <Shield className="w-6 h-6" />,
      color: "from-purple-600 to-pink-600",
      borderColor: "border-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <SEO
        title="2024 Cybersecurity Trends Every CEO Should Know - InnofyAI Blog"
        description="Stay ahead of evolving cyber threats with insights into the most critical security trends shaping the digital landscape."
        keywords="cybersecurity trends 2024, cyber threats, digital security, CEO security, ransomware, AI security, cyber warfare"
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
                <Badge className="bg-gradient-to-r from-red-600 to-orange-600 text-white border-0 mb-6">
                  Security
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl lg:text-6xl font-bold text-white leading-tight"
                variants={fadeUpVariants}
              >
                2024 Cybersecurity Trends Every CEO Should Know
              </motion.h1>

              <motion.p
                className="text-xl lg:text-2xl text-gray-300 leading-relaxed"
                variants={fadeUpVariants}
              >
                Stay ahead of evolving cyber threats with insights into the most critical security
                trends shaping the digital landscape.
              </motion.p>

              <motion.div
                className="flex flex-wrap items-center gap-6 text-gray-400"
                variants={fadeUpVariants}
              >
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Michael Chen</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>7 min read</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>December 10, 2024</span>
                </div>
              </motion.div>

              <motion.button
                className="group px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold rounded-full shadow-lg flex items-center gap-2"
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

      {/* Table of Contents */}
      <section className="py-12 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 className="text-2xl font-bold text-white mb-8" variants={fadeUpVariants}>
              Key Security Trends
            </motion.h2>
            <motion.div className="grid md:grid-cols-2 gap-4" variants={staggerContainerVariants}>
              {securityTrends.map((trend, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group"
                  variants={fadeUpVariants}
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${trend.color} rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
                  >
                    {trend.icon}
                  </div>
                  <div>
                    <span className="text-gray-300 font-medium">{trend.title}</span>
                    <div
                      className={`w-full h-1 bg-gradient-to-r ${trend.color} rounded-full mt-2`}
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
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
                alt="Cybersecurity trends and digital protection"
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
                In today's hyper-connected world, cybersecurity is no longer just an IT issue; it's
                a fundamental business risk and a critical responsibility for every CEO. The
                financial and reputational damage from a single breach can be catastrophic. As
                digital transformation accelerates, so does the sophistication of cyber threats.
              </motion.p>

              <motion.p variants={fadeUpVariants}>
                For leaders, staying informed about the evolving threat landscape is paramount to
                building a resilient organization. Here are the key cybersecurity trends of 2024
                that every CEO must understand and address.
              </motion.p>

              <motion.h2
                className="text-3xl font-bold mt-16 mb-8 text-white border-l-4 border-red-500 pl-6"
                variants={fadeUpVariants}
              >
                1. The Double-Edged Sword of AI-Powered Cyber Attacks
              </motion.h2>

              <motion.p variants={fadeUpVariants}>
                Artificial Intelligence (AI) is revolutionizing business, but it's also empowering
                adversaries. In 2024, the use of AI by malicious actors has reached new heights.
                Generative AI is being used to create highly convincing deepfake videos and audio
                for social engineering scams, making it harder than ever for employees to spot
                fraudulent requests.
              </motion.p>

              <motion.div variants={fadeUpVariants}>
                <Card className="my-8 bg-red-500/10 border-red-500/20 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                      For the CEO:
                    </h3>
                    <p className="text-gray-300">
                      It's crucial to invest in AI-powered defense mechanisms that can detect and
                      respond to these sophisticated, AI-driven attacks in real-time. Security
                      awareness training must be updated to educate employees about the nuances of
                      deepfakes and advanced phishing techniques.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.h2
                className="text-3xl font-bold mt-16 mb-8 text-white border-l-4 border-orange-500 pl-6"
                variants={fadeUpVariants}
              >
                2. The Escalation of Geopolitically Motivated Cyber Warfare
              </motion.h2>

              <motion.p variants={fadeUpVariants}>
                Global conflicts and geopolitical tensions are increasingly spilling over into the
                digital realm. State-sponsored hacking groups are targeting critical infrastructure,
                government agencies, and major corporations to disrupt operations, steal sensitive
                data, and spread disinformation.
              </motion.p>

              <motion.div variants={fadeUpVariants}>
                <Card className="my-8 bg-orange-500/10 border-orange-500/20 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-orange-400" />
                      For the CEO:
                    </h3>
                    <p className="text-gray-300">
                      Understand your organization's role in the broader geopolitical landscape. A
                      comprehensive threat intelligence program is essential to identify potential
                      state-sponsored threats. Building a resilient infrastructure that can
                      withstand disruptive attacks and recover quickly is a key strategic
                      imperative.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.h2
                className="text-3xl font-bold mt-16 mb-8 text-white border-l-4 border-yellow-500 pl-6"
                variants={fadeUpVariants}
              >
                3. Ransomware's Continued Reign and the Rise of Double Extortion
              </motion.h2>

              <motion.p variants={fadeUpVariants}>
                Ransomware remains a dominant and highly profitable threat. Attackers are no longer
                content with simply encrypting data; they are increasingly employing double and even
                triple extortion tactics. This involves exfiltrating sensitive data before
                encryption and threatening to leak it publicly if the ransom is not paid.
              </motion.p>

              <motion.div variants={fadeUpVariants}>
                <Card className="my-8 bg-yellow-500/10 border-yellow-500/20 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                      <Lock className="w-5 h-5 text-yellow-400" />
                      For the CEO:
                    </h3>
                    <p className="text-gray-300">
                      A robust backup and disaster recovery plan is non-negotiable. However, the
                      focus must shift to preventing initial access. This involves a
                      defense-in-depth strategy that includes strong access controls, regular
                      vulnerability patching, and advanced endpoint protection.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.h2
                className="text-3xl font-bold mt-16 mb-8 text-white border-l-4 border-blue-500 pl-6"
                variants={fadeUpVariants}
              >
                4. The Human Element: Still the Weakest Link
              </motion.h2>

              <motion.p variants={fadeUpVariants}>
                Despite advanced security technologies, the human element remains a primary vector
                for cyber attacks. Social engineering, phishing, and human error continue to be the
                root cause of a significant number of data breaches. The increasing sophistication
                of these attacks, often powered by AI, makes it even more challenging for employees
                to be the first line of defense.
              </motion.p>

              <motion.div variants={fadeUpVariants}>
                <Card className="my-8 bg-blue-500/10 border-blue-500/20 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                      <Eye className="w-5 h-5 text-blue-400" />
                      For the CEO:
                    </h3>
                    <p className="text-gray-300">
                      Fostering a strong security culture is paramount. This goes beyond annual
                      awareness training. It involves creating an environment where employees feel
                      empowered to report suspicious activity without fear of reprisal. Continuous
                      security education, regular phishing simulations, and clear, concise security
                      policies are essential components of a human-centric security strategy.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.h2
                className="text-3xl font-bold mt-16 mb-8 text-white border-l-4 border-purple-500 pl-6"
                variants={fadeUpVariants}
              >
                5. Securing the Expanding Digital Attack Surface: IoT and Cloud
              </motion.h2>

              <motion.p variants={fadeUpVariants}>
                The proliferation of Internet of Things (IoT) devices and the migration to cloud
                environments have created a vastly expanded and more complex digital attack surface.
                Many IoT devices lack robust security features, making them easy targets for
                attackers looking to gain a foothold in a network.
              </motion.p>

              <motion.div variants={fadeUpVariants}>
                <Card className="my-8 bg-purple-500/10 border-purple-500/20 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-purple-400" />
                      For the CEO:
                    </h3>
                    <p className="text-gray-300">
                      A comprehensive asset management program is crucial to identify and secure all
                      connected devices. Implementing a "zero trust" architecture, where no user or
                      device is trusted by default, can help to mitigate the risks associated with a
                      distributed and interconnected environment.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.h2
                className="text-3xl font-bold mt-16 mb-8 text-white border-l-4 border-gradient-to-b from-red-500 to-orange-500 pl-6"
                variants={fadeUpVariants}
              >
                A Call for Proactive Leadership
              </motion.h2>

              <motion.p variants={fadeUpVariants}>
                The cybersecurity landscape of 2024 is dynamic and fraught with challenges. However,
                by understanding these key trends, CEOs can move from a reactive to a proactive
                security posture. This requires a strategic approach that integrates cybersecurity
                into all aspects of the business, fosters a culture of security awareness, and
                leverages technology to build a resilient and adaptive defense against the
                ever-evolving threats of the digital age.
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
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
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
              Secure Your Business Today
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
              variants={fadeUpVariants}
            >
              Don't wait for a breach to happen. Let's assess your current security posture and
              implement a comprehensive cybersecurity strategy.
            </motion.p>
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold rounded-full shadow-lg flex items-center gap-2 mx-auto"
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span>Get Security Assessment</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
