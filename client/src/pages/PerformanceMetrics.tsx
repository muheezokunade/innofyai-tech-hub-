import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Zap, 
  Clock, 
  TrendingUp, 
  Monitor, 
  Activity,
  Gauge,
  Smartphone,
  Globe,
  Server,
  Database,
  Cpu,
  Wifi,
  Target,
  CheckCircle,
  AlertTriangle,
  Settings
} from 'lucide-react';

const PerformanceMetrics: React.FC = () => {
  const performanceMetrics = [
    {
      category: "Page Load Performance",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      metrics: [
        { name: "First Contentful Paint (FCP)", target: "<1.5s", current: "0.8s", status: "excellent" },
        { name: "Largest Contentful Paint (LCP)", target: "<2.5s", current: "1.2s", status: "excellent" },
        { name: "First Input Delay (FID)", target: "<100ms", current: "45ms", status: "excellent" },
        { name: "Cumulative Layout Shift (CLS)", target: "<0.1", current: "0.05", status: "excellent" }
      ]
    },
    {
      category: "Application Performance",
      icon: <Activity className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      metrics: [
        { name: "API Response Time", target: "<200ms", current: "120ms", status: "excellent" },
        { name: "Database Query Time", target: "<50ms", current: "25ms", status: "excellent" },
        { name: "Server Response Time", target: "<500ms", current: "280ms", status: "excellent" },
        { name: "Time to Interactive", target: "<3s", current: "1.8s", status: "excellent" }
      ]
    },
    {
      category: "System Performance",
      icon: <Server className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      metrics: [
        { name: "CPU Utilization", target: "<70%", current: "45%", status: "excellent" },
        { name: "Memory Usage", target: "<80%", current: "62%", status: "excellent" },
        { name: "Disk I/O", target: "<1000ms", current: "450ms", status: "excellent" },
        { name: "Network Latency", target: "<50ms", current: "28ms", status: "excellent" }
      ]
    },
    {
      category: "User Experience",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      metrics: [
        { name: "User Satisfaction Score", target: ">90%", current: "96%", status: "excellent" },
        { name: "Error Rate", target: "<0.1%", current: "0.02%", status: "excellent" },
        { name: "Availability (Uptime)", target: ">99.9%", current: "99.98%", status: "excellent" },
        { name: "Conversion Rate", target: ">5%", current: "8.2%", status: "excellent" }
      ]
    }
  ];

  const optimizationStrategies = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Code Optimization",
      description: "Advanced code optimization techniques for maximum performance",
      strategies: [
        "Code splitting and lazy loading",
        "Tree shaking and dead code elimination",
        "Minification and compression",
        "Caching strategies implementation"
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Optimization",
      description: "Database performance tuning and query optimization",
      strategies: [
        "Index optimization and query tuning",
        "Connection pooling and caching",
        "Database sharding and partitioning",
        "Read replicas for load balancing"
      ]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "CDN & Caching",
      description: "Global content delivery and intelligent caching systems",
      strategies: [
        "Global CDN deployment",
        "Browser and server-side caching",
        "Image optimization and compression",
        "Static asset optimization"
      ]
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Optimization",
      description: "Mobile-first optimization for all devices and networks",
      strategies: [
        "Responsive design optimization",
        "Progressive Web App (PWA) features",
        "Mobile-specific performance tuning",
        "Offline functionality and caching"
      ]
    }
  ];

  const monitoringTools = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Real-time Monitoring",
      description: "24/7 performance monitoring with instant alerts"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics Dashboard",
      description: "Comprehensive performance analytics and reporting"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Proactive Alerts",
      description: "Early warning system for performance issues"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Auto-scaling",
      description: "Automatic resource scaling based on demand"
    }
  ];

  const performanceBenchmarks = [
    {
      metric: "Page Load Speed",
      score: "98/100",
      description: "Google PageSpeed Insights score",
      color: "text-green-600"
    },
    {
      metric: "Core Web Vitals",
      score: "100/100",
      description: "Perfect Core Web Vitals score",
      color: "text-green-600"
    },
    {
      metric: "Mobile Performance",
      score: "96/100",
      description: "Mobile optimization score",
      color: "text-green-600"
    },
    {
      metric: "Accessibility",
      score: "100/100",
      description: "WCAG 2.1 AA compliance",
      color: "text-green-600"
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent':
        return 'text-green-600 bg-green-100';
      case 'good':
        return 'text-yellow-600 bg-yellow-100';
      case 'poor':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent':
        return <CheckCircle className="w-4 h-4" />;
      case 'good':
        return <AlertTriangle className="w-4 h-4" />;
      case 'poor':
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
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
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Performance Metrics
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain exceptional performance standards across all our applications. 
              Our comprehensive monitoring and optimization ensure optimal user experience.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Performance Benchmarks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Performance Benchmarks
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our applications consistently achieve top performance scores across all major metrics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {performanceBenchmarks.map((benchmark, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {benchmark.score}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benchmark.metric}
              </h3>
              <p className="text-gray-600 text-sm">
                {benchmark.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Performance Metrics by Category */}
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
              Comprehensive Performance Metrics
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We track and optimize performance across all critical areas to ensure 
              exceptional user experience and system reliability.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {performanceMetrics.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-full">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{category.category}</h3>
                  </div>
                </div>

                {/* Metrics Table */}
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Metric</th>
                          <th className="text-center py-3 px-4 font-semibold text-gray-900">Target</th>
                          <th className="text-center py-3 px-4 font-semibold text-gray-900">Current</th>
                          <th className="text-center py-3 px-4 font-semibold text-gray-900">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.metrics.map((metric, metricIndex) => (
                          <tr key={metricIndex} className="border-b border-gray-100">
                            <td className="py-3 px-4 text-gray-900 font-medium">
                              {metric.name}
                            </td>
                            <td className="py-3 px-4 text-center text-gray-600">
                              {metric.target}
                            </td>
                            <td className="py-3 px-4 text-center font-semibold text-blue-600">
                              {metric.current}
                            </td>
                            <td className="py-3 px-4 text-center">
                              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(metric.status)}`}>
                                {getStatusIcon(metric.status)}
                                <span className="ml-1 capitalize">{metric.status}</span>
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Optimization Strategies */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Performance Optimization Strategies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We employ advanced optimization techniques across all layers of our applications 
            to ensure maximum performance and efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {optimizationStrategies.map((strategy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-4">
                  <div className="text-white">{strategy.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{strategy.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{strategy.description}</p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Key Strategies:</h4>
                <ul className="space-y-1">
                  {strategy.strategies.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Monitoring & Tools */}
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
              Performance Monitoring & Tools
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive monitoring system ensures optimal performance 
              and proactive issue resolution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {monitoringTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                    <div className="text-white">{tool.icon}</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {tool.title}
                </h3>
                <p className="text-gray-600">{tool.description}</p>
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
              Performance That Drives Results
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Experience the difference that optimized performance makes. 
              Let's build something fast, reliable, and scalable together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Performance Audit
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Live Metrics
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics; 