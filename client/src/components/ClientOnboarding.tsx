import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Users,
  FileText,
  CheckCircle,
  Clock,
  ArrowRight,
  ArrowLeft,
  Download,
  Upload,
  MessageSquare,
  Calendar,
  Target,
  Award,
  Zap,
  Shield,
  Star,
} from "lucide-react";

interface OnboardingStep {
  id: number;
  title: string;
  description: string;
  duration: string;
  status: "pending" | "active" | "completed";
  icon: React.ComponentType<{ className?: string }>;
  details: string[];
  requirements?: string[];
}

interface ClientOnboardingProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ClientOnboarding({ isOpen, onClose }: ClientOnboardingProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const onboardingSteps: OnboardingStep[] = [
    {
      id: 1,
      title: "Initial Consultation",
      description: "Discovery call to understand your needs and objectives",
      duration: "30-45 minutes",
      status: "completed",
      icon: MessageSquare,
      details: [
        "Project requirements discussion",
        "Business goals alignment",
        "Timeline and budget overview",
        "Team introduction and expertise review",
        "Next steps planning"
      ],
      requirements: [
        "Project brief or requirements document",
        "Business objectives and KPIs",
        "Budget range and timeline expectations"
      ]
    },
    {
      id: 2,
      title: "Project Proposal",
      description: "Detailed proposal with scope, timeline, and pricing",
      duration: "2-3 business days",
      status: "active",
      icon: FileText,
      details: [
        "Comprehensive project scope",
        "Detailed timeline with milestones",
        "Pricing breakdown and payment terms",
        "Team allocation and roles",
        "Risk assessment and mitigation"
      ],
      requirements: [
        "Approval of project scope",
        "Budget confirmation",
        "Timeline agreement"
      ]
    },
    {
      id: 3,
      title: "Contract & Agreement",
      description: "Legal documentation and project kickoff preparation",
      duration: "1-2 business days",
      status: "pending",
      icon: Shield,
      details: [
        "Service agreement signing",
        "NDA and confidentiality terms",
        "Payment schedule setup",
        "Project timeline confirmation",
        "Communication protocols establishment"
      ],
      requirements: [
        "Contract review and approval",
        "Initial payment processing",
        "Project kickoff scheduling"
      ]
    },
    {
      id: 4,
      title: "Project Kickoff",
      description: "Team introduction and project initiation",
      duration: "1 day",
      status: "pending",
      icon: Zap,
      details: [
        "Team introduction and roles",
        "Project management tools setup",
        "Communication channels establishment",
        "Initial milestone planning",
        "Risk assessment and mitigation"
      ],
      requirements: [
        "Team access to required tools",
        "Communication preferences setup",
        "Initial milestone confirmation"
      ]
    },
    {
      id: 5,
      title: "Development Phase",
      description: "Active development and regular updates",
      duration: "Project dependent",
      status: "pending",
      icon: Target,
      details: [
        "Regular progress updates",
        "Sprint planning and reviews",
        "Quality assurance testing",
        "Client feedback integration",
        "Milestone delivery"
      ],
      requirements: [
        "Regular feedback and approvals",
        "Access to development environment",
        "Testing and review participation"
      ]
    },
    {
      id: 6,
      title: "Project Delivery",
      description: "Final delivery and handover",
      duration: "1-2 weeks",
      status: "pending",
      icon: Award,
      details: [
        "Final testing and quality assurance",
        "Documentation and training materials",
        "Deployment and go-live support",
        "Knowledge transfer sessions",
        "Post-launch support setup"
      ],
      requirements: [
        "Final approval and sign-off",
        "Deployment environment access",
        "Training session scheduling"
      ]
    }
  ];

  const handleStepComplete = (stepId: number) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
    }
    if (stepId < onboardingSteps.length) {
      setCurrentStep(stepId + 1);
    }
  };

  const handleStepSelect = (stepId: number) => {
    setCurrentStep(stepId);
  };

  const progressPercentage = (completedSteps.length / onboardingSteps.length) * 100;

  const benefits = [
    {
      icon: Clock,
      title: "Fast Onboarding",
      description: "Complete setup in 1-2 weeks"
    },
    {
      icon: Shield,
      title: "Secure Process",
      description: "NDA and confidentiality protection"
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Assigned project manager and team"
    },
    {
      icon: Star,
      title: "Quality Assurance",
      description: "Multiple review checkpoints"
    }
  ];

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
        className="bg-white rounded-lg shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.8, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-6 w-6" />
              <span>Client Onboarding Process</span>
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
              onClick={onClose}
            >
              ✕
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          {/* Progress Overview */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">Onboarding Progress</h3>
              <span className="text-sm text-gray-600">{Math.round(progressPercentage)}% Complete</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Step {currentStep} of {onboardingSteps.length}</span>
              <span>{completedSteps.length} completed</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Steps Overview */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Process Steps</h3>
              <div className="space-y-3">
                {onboardingSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      currentStep === step.id
                        ? "border-blue-500 bg-blue-50"
                        : completedSteps.includes(step.id)
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => handleStepSelect(step.id)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          completedSteps.includes(step.id)
                            ? "bg-green-500 text-white"
                            : currentStep === step.id
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {completedSteps.includes(step.id) ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <span className="text-sm font-semibold">{step.id}</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{step.title}</h4>
                        <p className="text-xs text-gray-600">{step.duration}</p>
                      </div>
                      <Badge
                        variant={
                          completedSteps.includes(step.id)
                            ? "default"
                            : currentStep === step.id
                            ? "secondary"
                            : "outline"
                        }
                        className="text-xs"
                      >
                        {completedSteps.includes(step.id)
                          ? "Completed"
                          : currentStep === step.id
                          ? "Active"
                          : "Pending"}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Step Details */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {onboardingSteps.map((step) => (
                  step.id === currentStep && (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                          <step.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium mb-3">What's Included</h4>
                          <ul className="space-y-2">
                            {step.details.map((detail, index) => (
                              <motion.li
                                key={index}
                                className="flex items-start space-x-2"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{detail}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {step.requirements && (
                          <div>
                            <h4 className="font-medium mb-3">Requirements</h4>
                            <ul className="space-y-2">
                              {step.requirements.map((requirement, index) => (
                                <motion.li
                                  key={index}
                                  className="flex items-start space-x-2"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                >
                                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-sm">{requirement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      <div className="flex justify-between pt-6 border-t">
                        <Button
                          variant="outline"
                          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                          disabled={currentStep === 1}
                        >
                          <ArrowLeft className="h-4 w-4 mr-2" />
                          Previous
                        </Button>
                        
                        {!completedSteps.includes(step.id) && (
                          <Button
                            onClick={() => handleStepComplete(step.id)}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                          >
                            Mark Complete
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        )}
                        
                        {currentStep < onboardingSteps.length && (
                          <Button
                            onClick={() => setCurrentStep(currentStep + 1)}
                            variant="outline"
                          >
                            Next
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        )}
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Why Choose Our Onboarding Process?</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <benefit.icon className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                  <h4 className="font-medium text-sm mb-1">{benefit.title}</h4>
                  <p className="text-xs text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </motion.div>
    </motion.div>
  );
} 