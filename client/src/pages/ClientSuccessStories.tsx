import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { 
  Star, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Target,
  CheckCircle,
  ArrowRight,
  Quote,
  Award,
  Zap,
  Shield,
  BarChart3,
  Palette,
  Code,
  ShoppingCart
} from 'lucide-react';

const ClientSuccessStories: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');

  const successStories = [
    {
      id: 1,
      client: "SpicePop Foods",
      industry: "E-commerce",
      logo: "🌶️",
      challenge: "Traditional restaurant struggling with online ordering and delivery management",
      solution: "Custom e-commerce platform with integrated delivery system",
      results: [
        "300% increase in online orders",
        "85% reduction in order processing time",
        "40% increase in customer retention",
        "₦15M additional revenue in first year"
      ],
      testimonial: "InnofyAI transformed our business completely. The new platform streamlined our operations and opened up new revenue streams we never thought possible.",
      author: "Sarah Johnson",
      position: "CEO, SpicePop Foods",
      rating: 5,
      duration: "8 weeks",
      team: "6 developers",
      technologies: ["React", "Node.js", "MongoDB", "Payment Gateway"]
    },
    {
      id: 2,
      client: "GrowWise Financial",
      industry: "Fintech",
      logo: "💰",
      challenge: "Manual financial reporting processes causing delays and errors",
      solution: "Automated financial analytics dashboard with AI-powered insights",
      results: [
        "90% reduction in reporting time",
        "99.9% accuracy in financial data",
        "50% increase in client satisfaction",
        "₦25M cost savings annually"
      ],
      testimonial: "The automation solutions from InnofyAI have revolutionized our operations. We can now focus on strategic decisions instead of manual data processing.",
      author: "Michael Chen",
      position: "CTO, GrowWise Financial",
      rating: 5,
      duration: "12 weeks",
      team: "8 developers",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"]
    },
    {
      id: 3,
      client: "Osinachi Renewable Energy",
      industry: "Energy",
      logo: "⚡",
      challenge: "Complex energy management system requiring real-time monitoring",
      solution: "IoT-powered energy management platform with predictive analytics",
      results: [
        "35% improvement in energy efficiency",
        "Real-time monitoring of 1000+ devices",
        "Predictive maintenance reducing downtime by 60%",
        "₦40M in operational cost savings"
      ],
      testimonial: "InnofyAI's expertise in IoT and data analytics helped us build a world-class energy management system that's scalable and efficient.",
      author: "Dr. Aisha Osinachi",
      position: "Managing Director, Osinachi Renewable",
      rating: 5,
      duration: "16 weeks",
      team: "10 developers",
      technologies: ["IoT", "Python", "React", "AWS", "Machine Learning"]
    },
    {
      id: 4,
      client: "TechFlow Solutions",
      industry: "Technology",
      logo: "🚀",
      challenge: "Startup needing rapid MVP development and market validation",
      solution: "Agile development of scalable SaaS platform",
      results: [
        "MVP delivered in 4 weeks",
        "1000+ beta users in first month",
        "Successful seed funding round",
        "Market validation achieved"
      ],
      testimonial: "InnofyAI's agile approach and technical expertise helped us get to market faster than we ever imagined. They're true partners in our success.",
      author: "David Okonkwo",
      position: "Founder, TechFlow Solutions",
      rating: 5,
      duration: "4 weeks",
      team: "4 developers",
      technologies: ["React", "Node.js", "Firebase", "Stripe"]
    },
    {
      id: 5,
      client: "HealthFirst Clinic",
      industry: "Healthcare",
      logo: "🏥",
      challenge: "Paper-based patient management system causing inefficiencies",
      solution: "Comprehensive healthcare management system with patient portal",
      results: [
        "70% reduction in administrative workload",
        "Improved patient satisfaction by 85%",
        "Enhanced data security and compliance",
        "Streamlined appointment scheduling"
      ],
      testimonial: "The healthcare management system from InnofyAI has transformed how we serve our patients. It's secure, efficient, and user-friendly.",
      author: "Dr. Fatima Hassan",
      position: "Medical Director, HealthFirst Clinic",
      rating: 5,
      duration: "10 weeks",
      team: "7 developers",
      technologies: ["React", "Node.js", "PostgreSQL", "HIPAA Compliance"]
    },
    {
      id: 6,
      client: "EduTech Academy",
      industry: "Education",
      logo: "📚",
      challenge: "Traditional learning platform not meeting modern educational needs",
      solution: "Interactive e-learning platform with AI-powered personalization",
      results: [
        "200% increase in student engagement",
        "Personalized learning paths for 10,000+ students",
        "95% student satisfaction rate",
        "Scalable platform for future growth"
      ],
      testimonial: "InnofyAI created an innovative learning platform that adapts to each student's needs. The results have been phenomenal.",
      author: "Prof. James Adebayo",
      position: "Director, EduTech Academy",
      rating: 5,
      duration: "14 weeks",
      team: "9 developers",
      technologies: ["React", "Python", "AI/ML", "Video Streaming"]
    }
  ];

  const industries = [
    { name: 'all', label: 'All Industries', icon: <Target className="w-4 h-4" /> },
    { name: 'e-commerce', label: 'E-commerce', icon: <ShoppingCart className="w-4 h-4" /> },
    { name: 'fintech', label: 'Fintech', icon: <DollarSign className="w-4 h-4" /> },
    { name: 'energy', label: 'Energy', icon: <Zap className="w-4 h-4" /> },
    { name: 'technology', label: 'Technology', icon: <Code className="w-4 h-4" /> },
    { name: 'healthcare', label: 'Healthcare', icon: <Shield className="w-4 h-4" /> },
    { name: 'education', label: 'Education', icon: <Users className="w-4 h-4" /> }
  ];

  const filteredStories = selectedIndustry === 'all' 
    ? successStories 
    : successStories.filter(story => story.industry.toLowerCase() === selectedIndustry);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEO
        title="Client Success Stories - InnofyAI"
        description="Discover how InnofyAI has helped businesses across industries achieve remarkable results through innovative technology solutions."
        keywords="client success stories, InnofyAI, technology solutions, business transformation, success stories"
      />
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
                <Award className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries achieve 
              remarkable results through innovative technology solutions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Industry Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Filter by Industry
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {industries.map((industry, index) => (
            <motion.button
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedIndustry(industry.name)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedIndustry === industry.name
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {industry.icon}
              <span>{industry.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {filteredStories.map((story, index) => (
            <motion.div
              key={story.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Story Header */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{story.logo}</div>
                    <div>
                      <h3 className="text-xl font-bold">{story.client}</h3>
                      <p className="text-blue-100 capitalize">{story.industry}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Duration: {story.duration}</span>
                  <span>Team: {story.team}</span>
                </div>
              </div>

              {/* Story Content */}
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-600 text-sm">{story.challenge}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                  <p className="text-gray-600 text-sm">{story.solution}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                  <ul className="space-y-2">
                    {story.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {story.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start">
                    <Quote className="w-6 h-6 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 text-sm italic mb-3">
                        "{story.testimonial}"
                      </p>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">
                          {story.author}
                        </p>
                        <p className="text-gray-600 text-xs">{story.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Success Metrics */}
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
              Our Success Metrics
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The numbers speak for themselves. Here's what we've achieved 
              for our clients across all industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                value: "500+",
                label: "Projects Completed",
                description: "Successfully delivered across industries"
              },
              {
                value: "98%",
                label: "Client Satisfaction",
                description: "Based on post-project surveys"
              },
              {
                value: "₦2.5B+",
                label: "Revenue Generated",
                description: "Additional revenue for our clients"
              },
              {
                value: "24/7",
                label: "Support Available",
                description: "Ongoing support and maintenance"
              }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-xl"
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the hundreds of businesses that have transformed their operations 
              and achieved remarkable results with InnofyAI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule a Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClientSuccessStories; 