import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import {
  Calendar,
  Clock,
  Zap,
  Target,
  CheckCircle,
  X,
  ArrowRight,
  ArrowLeft,
  TrendingUp,
  Users,
  Code,
  Palette,
  Shield,
  BarChart3,
  MessageSquare,
  Settings,
} from "lucide-react";

interface Service {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  baseTime: number; // in weeks
  complexity: {
    simple: number;
    moderate: number;
    complex: number;
  };
  description: string;
}

interface TimelinePhase {
  name: string;
  duration: number;
  description: string;
  tasks: string[];
}

interface ProjectTimelineEstimatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectTimelineEstimator({ isOpen, onClose }: ProjectTimelineEstimatorProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [complexity, setComplexity] = useState(2); // 1-3 scale
  const [teamSize, setTeamSize] = useState(2); // 1-4 scale
  const [budget, setBudget] = useState(3); // 1-5 scale

  const services: Service[] = [
    {
      id: "automation-ai",
      name: "Automation & AI",
      icon: Zap,
      baseTime: 4,
      complexity: { simple: 1, moderate: 1.5, complex: 2.5 },
      description: "AI-powered automation solutions and intelligent systems"
    },
    {
      id: "cybersecurity",
      name: "Cybersecurity",
      icon: Shield,
      baseTime: 6,
      complexity: { simple: 1.2, moderate: 1.8, complex: 2.8 },
      description: "Security assessments, implementations, and monitoring"
    },
    {
      id: "data-analytics",
      name: "Data Analytics",
      icon: BarChart3,
      baseTime: 3,
      complexity: { simple: 1, moderate: 1.4, complex: 2.2 },
      description: "Data analysis, visualization, and insights"
    },
    {
      id: "ui-ux-design",
      name: "UI/UX Design",
      icon: Palette,
      baseTime: 3,
      complexity: { simple: 1, moderate: 1.3, complex: 2 },
      description: "User interface and experience design"
    },
    {
      id: "software-engineering",
      name: "Software Engineering",
      icon: Code,
      baseTime: 8,
      complexity: { simple: 1.5, moderate: 2.2, complex: 3.5 },
      description: "Custom software development and applications"
    },
    {
      id: "branding-merch",
      name: "Branding & Merch",
      icon: Target,
      baseTime: 2,
      complexity: { simple: 1, moderate: 1.2, complex: 1.8 },
      description: "Brand identity and merchandise design"
    },
    {
      id: "social-media",
      name: "Social Media",
      icon: MessageSquare,
      baseTime: 2,
      complexity: { simple: 1, moderate: 1.1, complex: 1.5 },
      description: "Social media strategy and content creation"
    }
  ];

  const complexityLabels = ["Simple", "Moderate", "Complex"];
  const teamSizeLabels = ["1-2 people", "3-4 people", "5-6 people", "7+ people"];
  const budgetLabels = ["$5K-$15K", "$15K-$50K", "$50K-$100K", "$100K-$250K", "$250K+"];

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const calculateTimeline = () => {
    if (selectedServices.length === 0) return { totalWeeks: 0, phases: [] };

    let totalWeeks = 0;
    const phases: TimelinePhase[] = [];

    selectedServices.forEach(serviceId => {
      const service = services.find(s => s.id === serviceId);
      if (service) {
        const complexityMultiplier = complexity === 1 ? service.complexity.simple :
                                    complexity === 2 ? service.complexity.moderate :
                                    service.complexity.complex;
        
        const teamMultiplier = teamSize === 1 ? 1.2 : teamSize === 2 ? 1 : teamSize === 3 ? 0.8 : 0.7;
        
        const serviceWeeks = Math.ceil(service.baseTime * complexityMultiplier * teamMultiplier);
        totalWeeks += serviceWeeks;

        phases.push({
          name: service.name,
          duration: serviceWeeks,
          description: service.description,
          tasks: generateTasks(service.name, serviceWeeks)
        });
      }
    });

    // Add project management and coordination time
    const managementWeeks = Math.ceil(totalWeeks * 0.1);
    totalWeeks += managementWeeks;

    phases.push({
      name: "Project Management",
      duration: managementWeeks,
      description: "Coordination, communication, and quality assurance",
      tasks: [
        "Project planning and coordination",
        "Regular client communication",
        "Quality assurance and testing",
        "Documentation and handover"
      ]
    });

    return { totalWeeks, phases };
  };

  const generateTasks = (serviceName: string, weeks: number): string[] => {
    const taskTemplates: { [key: string]: string[] } = {
      "Automation & AI": [
        "Requirements analysis and planning",
        "AI model development and training",
        "Integration and testing",
        "Deployment and optimization"
      ],
      "Cybersecurity": [
        "Security assessment and audit",
        "Vulnerability analysis",
        "Security implementation",
        "Monitoring and maintenance"
      ],
      "Data Analytics": [
        "Data collection and cleaning",
        "Analysis and modeling",
        "Visualization creation",
        "Insights and reporting"
      ],
      "UI/UX Design": [
        "User research and analysis",
        "Wireframing and prototyping",
        "Design system creation",
        "User testing and iteration"
      ],
      "Software Engineering": [
        "Requirements gathering",
        "Architecture design",
        "Development and coding",
        "Testing and deployment"
      ],
      "Branding & Merch": [
        "Brand strategy development",
        "Visual identity creation",
        "Asset production",
        "Implementation and guidelines"
      ],
      "Social Media": [
        "Strategy development",
        "Content creation",
        "Campaign execution",
        "Analytics and optimization"
      ]
    };

    return taskTemplates[serviceName] || [
      "Planning and analysis",
      "Development and implementation",
      "Testing and quality assurance",
      "Deployment and handover"
    ];
  };

  const { totalWeeks, phases } = calculateTimeline();

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.8, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-6 w-6" />
              <span>Project Timeline Estimator</span>
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-lg font-semibold mb-4">Select Services</h3>
                  <p className="text-gray-600 mb-6">Choose the services you need for your project</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <motion.div
                        key={service.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-all ${
                          selectedServices.includes(service.id)
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => handleServiceToggle(service.id)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <service.icon className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{service.name}</h4>
                            <p className="text-sm text-gray-600">{service.description}</p>
                          </div>
                          {selectedServices.includes(service.id) && (
                            <CheckCircle className="h-5 w-5 text-blue-600" />
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button
                    onClick={() => setCurrentStep(2)}
                    disabled={selectedServices.length === 0}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Next
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-lg font-semibold mb-4">Project Parameters</h3>
                  <p className="text-gray-600 mb-6">Adjust these parameters to refine your timeline estimate</p>
                  
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="font-medium">Project Complexity</label>
                        <span className="text-sm text-gray-600">{complexityLabels[complexity - 1]}</span>
                      </div>
                      <Slider
                        value={[complexity]}
                        onValueChange={(value) => setComplexity(value[0])}
                        max={3}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Simple</span>
                        <span>Moderate</span>
                        <span>Complex</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="font-medium">Team Size</label>
                        <span className="text-sm text-gray-600">{teamSizeLabels[teamSize - 1]}</span>
                      </div>
                      <Slider
                        value={[teamSize]}
                        onValueChange={(value) => setTeamSize(value[0])}
                        max={4}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="font-medium">Budget Range</label>
                        <span className="text-sm text-gray-600">{budgetLabels[budget - 1]}</span>
                      </div>
                      <Slider
                        value={[budget]}
                        onValueChange={(value) => setBudget(value[0])}
                        max={5}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(1)}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back
                  </Button>
                  <Button
                    onClick={() => setCurrentStep(3)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Calculate Timeline
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Your Project Timeline</h3>
                  <p className="text-gray-600">Estimated timeline based on your selections</p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{totalWeeks} weeks</div>
                    <div className="text-gray-600">Total estimated duration</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Timeline Breakdown</h4>
                  {phases.map((phase, index) => (
                    <motion.div
                      key={phase.name}
                      className="border rounded-lg p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="font-medium">{phase.name}</h5>
                        <Badge variant="secondary">{phase.duration} weeks</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{phase.description}</p>
                      <div className="space-y-1">
                        {phase.tasks.map((task, taskIndex) => (
                          <div key={taskIndex} className="flex items-center space-x-2 text-sm">
                            <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                            <span>{task}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-medium text-yellow-800 mb-2">Important Notes</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Timeline estimates are based on typical project complexity</li>
                    <li>• Actual duration may vary based on specific requirements</li>
                    <li>• We'll provide a detailed timeline during project planning</li>
                    <li>• Rush delivery options available for additional cost</li>
                  </ul>
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(2)}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back
                  </Button>
                  <Button
                    onClick={onClose}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Get Started
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </motion.div>
    </motion.div>
  );
} 