import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Cloud, 
  Brain, 
  Shield, 
  Zap, 
  Monitor, 
  Smartphone,
  Globe,
  Server,
  Cpu,
  Palette,
  GitBranch,
  Lock
} from 'lucide-react';

const TechnologyStack: React.FC = () => {
  const techCategories = [
    {
      title: "Frontend Technologies",
      icon: <Palette className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      technologies: [
        { name: "React 18", description: "Modern UI library with hooks and concurrent features" },
        { name: "TypeScript", description: "Type-safe JavaScript for better development experience" },
        { name: "Next.js", description: "Full-stack React framework with SSR and SSG" },
        { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development" },
        { name: "Framer Motion", description: "Production-ready motion library for React" },
        { name: "Redux Toolkit", description: "State management with simplified Redux logic" }
      ]
    },
    {
      title: "Backend & APIs",
      icon: <Server className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      technologies: [
        { name: "Node.js", description: "JavaScript runtime for server-side development" },
        { name: "Express.js", description: "Fast, unopinionated web framework for Node.js" },
        { name: "Python", description: "Versatile programming language for backend services" },
        { name: "FastAPI", description: "Modern, fast web framework for building APIs" },
        { name: "GraphQL", description: "Query language for APIs with strong typing" },
        { name: "REST APIs", description: "RESTful API design with OpenAPI documentation" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      technologies: [
        { name: "TensorFlow", description: "Open-source ML platform for neural networks" },
        { name: "PyTorch", description: "Deep learning framework with dynamic computation" },
        { name: "OpenAI GPT", description: "Large language models for natural language processing" },
        { name: "Hugging Face", description: "Transformers library for state-of-the-art NLP" },
        { name: "Scikit-learn", description: "Machine learning library for Python" },
        { name: "Pandas & NumPy", description: "Data manipulation and numerical computing" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      technologies: [
        { name: "AWS", description: "Amazon Web Services for scalable cloud infrastructure" },
        { name: "Google Cloud", description: "Google's cloud platform with AI/ML services" },
        { name: "Azure", description: "Microsoft's cloud computing platform" },
        { name: "Docker", description: "Containerization platform for consistent deployments" },
        { name: "Kubernetes", description: "Container orchestration for scalable applications" },
        { name: "Terraform", description: "Infrastructure as Code for cloud resource management" }
      ]
    },
    {
      title: "Databases & Storage",
      icon: <Database className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      technologies: [
        { name: "PostgreSQL", description: "Advanced open-source relational database" },
        { name: "MongoDB", description: "NoSQL document database for flexible data models" },
        { name: "Redis", description: "In-memory data structure store for caching" },
        { name: "AWS S3", description: "Object storage for scalable data management" },
        { name: "Elasticsearch", description: "Search and analytics engine" },
        { name: "Firebase", description: "Google's mobile and web app development platform" }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <GitBranch className="w-8 h-8" />,
      color: "from-gray-600 to-gray-800",
      technologies: [
        { name: "Git & GitHub", description: "Version control and collaboration platform" },
        { name: "CI/CD Pipelines", description: "Automated testing and deployment workflows" },
        { name: "Jenkins", description: "Automation server for continuous integration" },
        { name: "GitHub Actions", description: "Automated software workflows" },
        { name: "Monitoring Tools", description: "Application performance monitoring and logging" },
        { name: "Security Scanning", description: "Automated security vulnerability detection" }
      ]
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
                <Code2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Technology Stack
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the cutting-edge technologies and tools that power our innovative solutions. 
              We leverage the latest advancements in AI, cloud computing, and software development 
              to deliver exceptional results.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Technology Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                <div className="flex items-center space-x-3">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
              </div>

              {/* Technologies List */}
              <div className="p-6">
                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-1">{tech.name}</h4>
                      <p className="text-sm text-gray-600">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Technology Highlights */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Our Tech Stack Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our carefully selected technology stack ensures scalability, security, and performance 
              while enabling rapid development and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Performance",
                description: "Optimized for speed and efficiency"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Security",
                description: "Enterprise-grade security measures"
              },
              {
                icon: <Monitor className="w-8 h-8" />,
                title: "Scalability",
                description: "Built to grow with your business"
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Compatibility",
                description: "Works across all devices and platforms"
              }
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                    <div className="text-white">{highlight.icon}</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">{highlight.description}</p>
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
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our technology expertise can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start a Project
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule a Call
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyStack; 