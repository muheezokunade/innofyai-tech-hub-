import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  MapPin,
  Clock,
  Star,
  Award,
  Target,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  whatsapp: string;
  expertise: string[];
  availability: string;
  avatar: string;
  rating: number;
  projectsCompleted: number;
  responseTime: string;
}

interface SalesTeamProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SalesTeam({ isOpen, onClose }: SalesTeamProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "Muheez Okunade",
      role: "Sales Director",
      email: "muheez@innofyai.com",
      phone: "+234 810 811 4407",
      whatsapp: "+234 810 811 4407",
      expertise: ["Enterprise Solutions", "AI & Automation", "Strategic Partnerships"],
      availability: "Mon-Fri, 9AM-6PM WAT",
      avatar: "/assets/placeholder.svg",
      rating: 4.9,
      projectsCompleted: 45,
      responseTime: "< 2 hours",
    },
    {
      id: "2",
      name: "Fawaz Ibrahim",
      role: "Technical Sales Manager",
      email: "fawaz@innofyai.com",
      phone: "+234 810 811 4407",
      whatsapp: "+234 810 811 4407",
      expertise: ["Cybersecurity", "Data Analytics", "Software Engineering"],
      availability: "Mon-Fri, 8AM-5PM WAT",
      avatar: "/assets/placeholder.svg",
      rating: 4.8,
      projectsCompleted: 38,
      responseTime: "< 1 hour",
    },
    {
      id: "3",
      name: "Islamiyyah Adebayo",
      role: "Creative Sales Specialist",
      email: "islamiyyah@innofyai.com",
      phone: "+234 810 811 4407",
      whatsapp: "+234 810 811 4407",
      expertise: ["UI/UX Design", "Branding", "Social Media"],
      availability: "Mon-Fri, 9AM-6PM WAT",
      avatar: "/assets/placeholder.svg",
      rating: 4.9,
      projectsCompleted: 52,
      responseTime: "< 3 hours",
    },
  ];

  const handleContact = (method: "phone" | "email" | "whatsapp", contact: string) => {
    switch (method) {
      case "phone":
        window.open(`tel:${contact}`, "_self");
        break;
      case "email":
        window.open(`mailto:${contact}`, "_self");
        break;
      case "whatsapp":
        const message = "Hello! I'm interested in learning more about InnofyAI's services.";
        const whatsappUrl = `https://wa.me/${contact.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
        break;
    }
  };

  const stats = [
    { label: "Team Members", value: "3", icon: Users },
    { label: "Avg Response Time", value: "< 2 hours", icon: Clock },
    { label: "Projects Completed", value: "135+", icon: CheckCircle },
    { label: "Client Satisfaction", value: "98%", icon: Star },
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
        className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.8, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-6 w-6" />
              <span>Sales Team</span>
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
          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 bg-gray-50 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Team Members */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Our Sales Team</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  className="border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-lg">{member.name}</h4>
                    <p className="text-blue-600 font-medium">{member.role}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Rating:</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 font-medium">{member.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Projects:</span>
                      <span className="font-medium">{member.projectsCompleted}+</span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Response:</span>
                      <span className="font-medium text-green-600">{member.responseTime}</span>
                    </div>

                    <div className="pt-3">
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.slice(0, 2).map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {member.expertise.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{member.expertise.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="pt-3 space-y-2">
                      <Button
                        size="sm"
                        className="w-full bg-green-600 hover:bg-green-700"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleContact("whatsapp", member.whatsapp);
                        }}
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        WhatsApp
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleContact("email", member.email);
                        }}
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">General Contact Information</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+234 810 811 4407</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@innofyai.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">13, signature estate, Ikota, Lekki</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-gray-600">Monday - Friday: 9AM - 6PM WAT</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-gray-600">Within 2 hours during business hours</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Lead Response</p>
                    <p className="text-gray-600">Immediate acknowledgment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-medium mb-3">Why Choose Our Sales Team?</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Expert technical knowledge</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Fast response times</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Proven track record</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </motion.div>
    </motion.div>
  );
} 