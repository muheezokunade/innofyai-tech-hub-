import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { 
  Brain, 
  Zap, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  Star,
  ArrowRight,
  Code,
  Palette,
  MessageSquare,
  FileText,
  Image,
  Video,
  Music,
  Cpu,
  Shield,
  BarChart3,
  Users,
  Clock,
  Award,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Lock
} from 'lucide-react';

const GenerativeAI: React.FC = () => {
  const [activeTab, setActiveTab] = useState('text');

  const aiSolutions = [
    {
      category: "Text Generation",
      icon: <FileText className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      description: "Advanced text generation for content creation and communication",
      features: [
        "AI-powered content writing",
        "Multi-language text generation",
        "Brand voice customization",
        "SEO-optimized content",
        "Automated report generation",
        "Real-time translation"
      ],
      useCases: [
        "Marketing copy and campaigns",
        "Technical documentation",
        "Customer support responses",
        "Social media content",
        "Email automation",
        "Blog and article writing"
      ]
    },
    {
      category: "Image Generation",
      icon: <Image className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      description: "Create stunning visuals with AI-powered image generation",
      features: [
        "High-resolution image creation",
        "Style transfer and customization",
        "Brand-consistent visuals",
        "Product visualization",
        "Marketing asset generation",
        "Real-time image editing"
      ],
      useCases: [
        "Product photography",
        "Marketing materials",
        "Social media graphics",
        "Website visuals",
        "Presentation assets",
        "Brand identity elements"
      ]
    },
    {
      category: "Video Generation",
      icon: <Video className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      description: "Transform ideas into compelling video content with AI",
      features: [
        "AI video creation from text",
        "Automated video editing",
        "Voice-over generation",
        "Motion graphics creation",
        "Video personalization",
        "Multi-format output"
      ],
      useCases: [
        "Product demonstrations",
        "Training videos",
        "Marketing campaigns",
        "Social media content",
        "Educational materials",
        "Event highlights"
      ]
    },
    {
      category: "Audio Generation",
      icon: <Music className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      description: "Generate high-quality audio content and voice synthesis",
      features: [
        "Natural voice synthesis",
        "Music composition",
        "Sound effect generation",
        "Multi-language voice support",
        "Emotion-aware speech",
        "Audio personalization"
      ],
      useCases: [
        "Voice-over production",
        "Podcast creation",
        "Audio books",
        "Background music",
        "Sound effects",
        "Interactive voice responses"
      ]
    },
    {
      category: "Code Generation",
      icon: <Code className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      description: "Accelerate development with AI-powered code generation",
      features: [
        "Intelligent code completion",
        "Bug detection and fixes",
        "Code optimization",
        "Documentation generation",
        "Multi-language support",
        "Security analysis"
      ],
      useCases: [
        "Web application development",
        "API development",
        "Database optimization",
        "Testing automation",
        "Code refactoring",
        "Legacy system modernization"
      ]
    },
    {
      category: "Data Analysis",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      description: "Transform data into actionable insights with AI analytics",
      features: [
        "Predictive analytics",
        "Pattern recognition",
        "Automated reporting",
        "Real-time insights",
        "Data visualization",
        "Anomaly detection"
      ],
      useCases: [
        "Business intelligence",
        "Market analysis",
        "Customer behavior insights",
        "Performance optimization",
        "Risk assessment",
        "Forecasting models"
      ]
    }
  ];

  const aiCapabilities = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Advanced AI Models",
      description: "State-of-the-art GPT, DALL-E, and custom models"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Processing",
      description: "Lightning-fast generation and optimization"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security and data protection"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-language Support",
      description: "Generate content in 50+ languages"
    }
  ];

  const aiMetrics = [
    {
      value: "99.9%",
      label: "Accuracy Rate",
      description: "High-quality AI-generated content"
    },
    {
      value: "<2s",
      label: "Generation Speed",
      description: "Lightning-fast content creation"
    },
    {
      value: "50+",
      label: "Languages Supported",
      description: "Global content generation"
    },
    {
      value: "24/7",
      label: "AI Availability",
      description: "Always-on AI services"
    }
  ];

  const implementationSteps = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Evaluate your needs and create a customized AI strategy",
      duration: "1-2 days"
    },
    {
      step: "02",
      title: "Model Selection",
      description: "Choose the perfect AI models for your use case",
      duration: "2-3 days"
    },
    {
      step: "03",
      title: "Integration Setup",
      description: "Seamlessly integrate AI into your existing systems",
      duration: "1-2 weeks"
    },
    {
      step: "04",
      title: "Training & Optimization",
      description: "Train models on your data and optimize performance",
      duration: "2-3 weeks"
    },
    {
      step: "05",
      title: "Deployment & Launch",
      description: "Go live with your AI-powered solutions",
      duration: "1 week"
    },
    {
      step: "06",
      title: "Ongoing Support",
      description: "Continuous monitoring, updates, and optimization",
      duration: "Ongoing"
    }
  ];

  const successStories = [
    {
      client: "TechFlow Media",
      industry: "Content Creation",
      result: "500% increase in content production",
      testimonial: "InnofyAI's generative AI transformed our content creation process completely."
    },
    {
      client: "Global Retail Corp",
      industry: "E-commerce",
      result: "300% improvement in product descriptions",
      testimonial: "The AI-generated content significantly boosted our conversion rates."
    },
    {
      client: "Innovate Labs",
      industry: "Software Development",
      result: "70% faster code development",
      testimonial: "AI-powered code generation accelerated our development cycles dramatically."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <SEO
        title="Generative AI Optimization Engine"
        description="#1 Ranked Generative AI Solution. Transform your business with our advanced AI engine that makes artificial intelligence accessible, powerful, and easy to implement. Text, image, video, audio, and code generation."
        keywords="generative AI, AI text generation, AI image generation, AI video generation, AI code generation, artificial intelligence, machine learning, AI automation, AI solutions, top AI platform"
        url="/generative-ai"
        type="product"
        tags={["generative AI", "artificial intelligence", "AI automation", "machine learning", "text generation", "image generation", "video generation", "code generation"]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Generative AI Optimization Engine",
          "description": "#1 Ranked Generative AI Solution for text, image, video, audio, and code generation",
          "brand": {
            "@type": "Brand",
            "name": "InnofyAI"
          },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "USD",
            "price": "0"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "150"
          }
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Generative AI Optimization Engine
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              #1 Ranked Generative AI Solution. Transform your business with our advanced AI engine 
              that makes artificial intelligence accessible, powerful, and easy to implement.
            </p>
            <div className="flex justify-center mt-6">
              <div className="flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-semibold">Top-Ranked Generative AI Platform</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* AI Metrics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Industry-Leading AI Performance
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our generative AI engine delivers exceptional results that set new industry standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {aiMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {metric.value}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {metric.label}
              </h3>
              <p className="text-gray-600 text-sm">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* AI Solutions */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive AI Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From text to video, code to audio - our AI engine handles every type of content generation 
              with unmatched quality and speed.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {aiSolutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Solution Header */}
                <div className={`bg-gradient-to-r ${solution.color} p-6 text-white`}>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-full">
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{solution.category}</h3>
                      <p className="text-blue-100">{solution.description}</p>
                    </div>
                  </div>
                </div>

                {/* Solution Content */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Zap className="w-4 h-4 mr-2 text-blue-500" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Target className="w-4 h-4 mr-2 text-green-500" />
                        Use Cases
                      </h4>
                      <ul className="space-y-2">
                        {solution.useCases.map((useCase, useCaseIndex) => (
                          <li key={useCaseIndex} className="flex items-start">
                            <ArrowRight className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* AI Capabilities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Our AI Engine?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Built for enterprise-grade performance with simplicity in mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aiCapabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-xl shadow-lg"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                  <div className="text-white">{capability.icon}</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {capability.title}
              </h3>
              <p className="text-gray-600">{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Implementation Process */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Easy Implementation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get your AI solution up and running in weeks, not months. 
              Our streamlined process makes AI implementation simple and efficient.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {implementationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-blue-600">{step.step}</div>
                  <div className="text-sm text-gray-500">{step.duration}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how businesses are achieving remarkable results with our AI engine.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{story.client}</h3>
                <p className="text-gray-600 text-sm">{story.industry}</p>
              </div>
              <div className="mb-4">
                <div className="text-2xl font-bold text-green-600">{story.result}</div>
              </div>
              <p className="text-gray-700 text-sm italic">"{story.testimonial}"</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the AI revolution with the #1 ranked generative AI platform. 
              Start transforming your business today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GenerativeAI; 