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
  Zap,
  CheckCircle,
  ArrowRight,
  Brain,
  TrendingUp,
  Target,
  BarChart3,
  MessageSquare,
  Package,
  Users,
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

export default function PracticalAISMEs() {
  const structuredData = generateArticleStructuredData({
    headline:
      "Beyond the Hype: Practical AI Applications for Small and Medium-Sized Enterprises (SMEs)",
    description:
      "Discover how SMEs can leverage affordable AI tools to operate smarter, faster, and more efficiently without massive budgets.",
    author: {
      name: "Ridwan Olalekan",
    },
    datePublished: "2024-12-12",
    dateModified: "2024-12-12",
    image:
      "/assets/placeholder.svg",
    publisher: {
      name: "InnofyAI",
      logo: {
        url: "https://innofyai.com/logo.png",
      },
    },
    url: "https://innofyai.com/blog/practical-ai-smes",
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
      title: "Building Brand Identity in the Digital Age",
      category: "Design",
      readTime: "6 min read",
      href: "/blog/brand-identity-digital-age",
      icon: <TrendingUp className="w-4 h-4" />,
    },
  ];

  const aiApplications = [
    {
      title: "Marketing Automation",
      icon: <Target className="w-6 h-6" />,
      color: "from-blue-600 to-purple-600",
      description: "Content creation, scheduling, and targeted advertising",
    },
    {
      title: "Customer Service",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "from-green-600 to-blue-600",
      description: "24/7 chatbots and automated support",
    },
    {
      title: "Inventory Management",
      icon: <Package className="w-6 h-6" />,
      color: "from-purple-600 to-pink-600",
      description: "Smart forecasting and automated reordering",
    },
    {
      title: "Data Analytics",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-orange-600 to-red-600",
      description: "Automated reporting and insight discovery",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEO
        title="Beyond the Hype: Practical AI Applications for SMEs - InnofyAI Blog"
        description="Discover how SMEs can leverage affordable AI tools to operate smarter, faster, and more efficiently without massive budgets."
        keywords="AI for SMEs, small business AI, practical AI applications, business automation, AI tools for business, digital transformation"
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
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 mb-6">
                  AI & Automation
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl lg:text-6xl font-bold text-white leading-tight"
                variants={fadeUpVariants}
              >
                Beyond the Hype: Practical AI Applications for Small and Medium-Sized Enterprises
                (SMEs)
              </motion.h1>

              <motion.p
                className="text-xl lg:text-2xl text-gray-300 leading-relaxed"
                variants={fadeUpVariants}
              >
                Discover how SMEs can leverage affordable AI tools to operate smarter, faster, and
                more efficiently without massive budgets.
              </motion.p>

              <motion.div
                className="flex flex-wrap items-center gap-6 text-gray-400"
                variants={fadeUpVariants}
              >
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Ridwan Olalekan</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>5 min read</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>December 12, 2024</span>
                </div>
              </motion.div>

              <motion.button
                className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg flex items-center gap-2"
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

      {/* AI Applications Overview */}
      <section className="py-12 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 className="text-2xl font-bold text-white mb-8" variants={fadeUpVariants}>
              Key AI Applications for SMEs
            </motion.h2>
            <motion.div className="grid md:grid-cols-2 gap-6" variants={staggerContainerVariants}>
              {aiApplications.map((app, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group"
                  variants={fadeUpVariants}
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${app.color} rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform flex-shrink-0`}
                  >
                    {app.icon}
                  </div>
                  <div>
                    <h3 className="text-gray-300 font-bold mb-2">{app.title}</h3>
                    <p className="text-gray-400 text-sm">{app.description}</p>
                    <div
                      className={`w-full h-1 bg-gradient-to-r ${app.color} rounded-full mt-3`}
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
                src="/assets/placeholder.svg"
                alt="Small business team using AI tools"
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
                For small and medium-sized enterprises in Nigeria and across the globe, the term
                "Artificial Intelligence" can often feel like a futuristic buzzword reserved for
                tech giants with bottomless budgets. However, the reality in 2025 is that AI has
                become an accessible and powerful tool that can level the playing field, enabling
                SMEs to operate smarter, faster, and more efficiently.
              </motion.p>

              <motion.p variants={fadeUpVariants}>
                The key to leveraging AI as an SME is not about building complex algorithms from
                scratch; it's about integrating smart, off-the-shelf tools that automate processes,
                provide valuable insights, and free up your most valuable resource: your team's
                time. Here are four key areas where AI can make an immediate and significant impact.
              </motion.p>

              <motion.h2
                className="text-3xl font-bold mt-16 mb-8 text-white border-l-4 border-blue-500 pl-6"
                variants={fadeUpVariants}
              >
                1. Supercharge Your Marketing with Intelligent Automation
              </motion.h2>

              <motion.p variants={fadeUpVariants}>
                Marketing is a critical function for any growing business, but it can be incredibly
                time-consuming. AI-powered marketing tools can automate repetitive tasks and provide
                deep insights into customer behavior, allowing you to create more effective
                campaigns with less effort.
              </motion.p>

              <motion.div variants={fadeUpVariants}>
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <Card className="p-6 bg-blue-500/10 border-blue-500/20 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-3">
                        <Zap className="h-5 w-5 text-blue-400 mr-2" />
                        <h3 className="font-bold text-white">Content Creation & Scheduling</h3>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Platforms like Copy.ai and Jasper use generative AI to help you draft social
                        media posts, blog articles, and email newsletters in minutes.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-6 bg-purple-500/10 border-purple-500/20 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-3">
                        <CheckCircle className="h-5 w-5 text-purple-400 mr-2" />
                        <h3 className="font-bold text-white">Targeted Advertising</h3>
                      </div>
                      <p className="text-gray-300 text-sm">
                        AI algorithms on platforms like Facebook Ads and Google Ads can analyze user
                        data to identify your ideal customers and serve them highly relevant ads.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              <motion.div variants={fadeUpVariants}>
                <Card className="my-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-l-4 border-blue-500 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-400" />
                      Mini Case Study:
                    </h3>
                    <p className="text-gray-300">
                      A boutique fashion retailer in Abuja began using an AI-powered social media
                      tool to generate and schedule its posts. Within three months, they saw a 40%
                      increase in customer engagement and were able to reallocate the five hours per
                      week their manager spent on social media to focus on inventory and customer
                      relations.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.h2
                className="text-3xl font-bold mt-16 mb-8 text-white border-l-4 border-green-500 pl-6"
                variants={fadeUpVariants}
              >
                2. Deliver Exceptional 24/7 Customer Service with AI Chatbots
              </motion.h2>

              <motion.p variants={fadeUpVariants}>
                In today's fast-paced world, customers expect instant responses. AI-powered chatbots
                provide a cost-effective way to offer round-the-clock support, answer frequently
                asked questions, and even qualify leads without human intervention.
              </motion.p>

              <motion.div variants={fadeUpVariants}>
                <div className="space-y-4 my-8">
                  <div className="border-l-4 border-green-500 pl-6 bg-green-500/5 p-4 rounded-r-lg">
                    <h4 className="font-bold text-white mb-2">
                      Website and Social Media Integration
                    </h4>
                    <p className="text-gray-300">
                      Modern chatbot platforms like Tidio and Intercom are incredibly user-friendly
                      and can be easily integrated into your website or social media pages.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6 bg-blue-500/5 p-4 rounded-r-lg">
                    <h4 className="font-bold text-white mb-2">Automated Query Resolution</h4>
                    <p className="text-gray-300">
                      You can "train" these chatbots with information about your products, services,
                      pricing, and policies to instantly resolve common customer queries.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6 bg-purple-500/5 p-4 rounded-r-lg">
                    <h4 className="font-bold text-white mb-2">Lead Generation</h4>
                    <p className="text-gray-300">
                      Chatbots can be programmed to ask qualifying questions and collect contact
                      information from potential customers.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUpVariants}>
                <Card className="my-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-l-4 border-green-500 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-green-400" />
                      Mini Case Study:
                    </h3>
                    <p className="text-gray-300">
                      A Nigerian logistics startup implemented an AI chatbot on its website to
                      handle tracking inquiries and provide shipping quotes. This reduced customer
                      service calls by 60% and allowed their small team to focus on resolving
                      complex delivery issues, significantly improving customer satisfaction.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.h2
                className="text-3xl font-bold mt-16 mb-8 text-white border-l-4 border-purple-500 pl-6"
                variants={fadeUpVariants}
              >
                3. Optimize Your Operations with Smart Inventory Management
              </motion.h2>

              <motion.p variants={fadeUpVariants}>
                For businesses that deal with physical products, managing inventory is a constant
                balancing act. Too much stock ties up capital, while too little leads to lost sales.
                AI can bring a new level of precision to this critical task.
              </motion.p>

              <motion.div variants={fadeUpVariants}>
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <Card className="p-6 bg-blue-500/10 border-blue-500/20 text-center backdrop-blur-sm">
                    <CardContent className="p-0">
                      <h3 className="font-bold text-white mb-2">Demand Forecasting</h3>
                      <p className="text-gray-300 text-sm">
                        AI systems analyze historical sales data, seasonality, and market trends to
                        predict future demand with remarkable accuracy.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-6 bg-purple-500/10 border-purple-500/20 text-center backdrop-blur-sm">
                    <CardContent className="p-0">
                      <h3 className="font-bold text-white mb-2">Automated Reordering</h3>
                      <p className="text-gray-300 text-sm">
                        Systems can automatically generate purchase orders when stock levels fall
                        below certain thresholds.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-6 bg-pink-500/10 border-pink-500/20 text-center backdrop-blur-sm">
                    <CardContent className="p-0">
                      <h3 className="font-bold text-white mb-2">Supplier Management</h3>
                      <p className="text-gray-300 text-sm">
                        AI tools help track supplier performance, manage lead times, and identify
                        reliable partners.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              <motion.h2
                className="text-3xl font-bold mt-16 mb-8 text-white border-l-4 border-orange-500 pl-6"
                variants={fadeUpVariants}
              >
                4. Make Data-Driven Decisions with Simplified Analytics
              </motion.h2>

              <motion.p variants={fadeUpVariants}>
                Many SMEs collect vast amounts of data but lack the time or expertise to analyze it
                effectively. AI-powered business intelligence (BI) tools can democratize data
                analysis, turning complex spreadsheets into clear, actionable insights.
              </motion.p>

              <motion.div variants={fadeUpVariants}>
                <div className="space-y-4 my-8">
                  <div className="border-l-4 border-orange-500 pl-6 bg-orange-500/5 p-4 rounded-r-lg">
                    <h4 className="font-bold text-white mb-2">Automated Reporting</h4>
                    <p className="text-gray-300">
                      Platforms like Microsoft Power BI and Google Looker Studio offer user-friendly
                      interfaces that allow you to connect various data sources and create
                      interactive dashboards.
                    </p>
                  </div>

                  <div className="border-l-4 border-red-500 pl-6 bg-red-500/5 p-4 rounded-r-lg">
                    <h4 className="font-bold text-white mb-2">Insight Discovery</h4>
                    <p className="text-gray-300">
                      These tools use AI to automatically identify trends, patterns, and anomalies
                      in your data that you might otherwise miss.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.h2
                className="text-3xl font-bold mt-16 mb-8 text-white border-l-4 border-gradient-to-b from-blue-500 to-purple-500 pl-6"
                variants={fadeUpVariants}
              >
                Getting Started: A Practical Roadmap
              </motion.h2>

              <motion.p variants={fadeUpVariants}>
                The journey to AI adoption doesn't have to be overwhelming. Start small, focus on
                one area where you're experiencing pain points, and gradually expand. The key is to
                choose tools that integrate well with your existing systems and provide immediate
                value to your team and customers.
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
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
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
              Ready to Transform Your SME with AI?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
              variants={fadeUpVariants}
            >
              Let's identify the right AI tools for your business and create a customized
              implementation strategy that fits your budget and goals.
            </motion.p>
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg flex items-center gap-2 mx-auto"
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span>Start Your AI Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
