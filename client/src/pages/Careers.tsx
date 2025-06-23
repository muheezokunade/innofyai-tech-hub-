import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { MapPin, Users, Heart, Zap, Code, Palette, Shield, BarChart3, ArrowRight } from "lucide-react";

export default function Careers() {
  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Technology",
      location: "Lagos, Nigeria",
      type: "Full-time",
      description: "Lead development of cutting-edge web applications and automation solutions for our clients.",
      requirements: ["5+ years experience with React/Node.js", "Experience with cloud platforms", "Strong problem-solving skills"],
      icon: Code
    },
    {
      title: "UI/UX Designer",
      department: "Creative",
      location: "Lagos, Nigeria / Remote",
      type: "Full-time",
      description: "Create beautiful, user-centered designs that solve real business problems for our clients.",
      requirements: ["3+ years UI/UX design experience", "Proficiency in Figma/Adobe Creative Suite", "Portfolio showcasing design thinking"],
      icon: Palette
    },
    {
      title: "Cybersecurity Specialist",
      department: "Technology",
      location: "Lagos, Nigeria",
      type: "Full-time",
      description: "Protect our clients' digital assets with advanced security solutions and threat monitoring.",
      requirements: ["Security certifications (CISSP, CEH, etc.)", "Experience with security frameworks", "Incident response experience"],
      icon: Shield
    },
    {
      title: "Data Analytics Consultant",
      department: "Technology",
      location: "Lagos, Nigeria / Hybrid",
      type: "Contract",
      description: "Help clients unlock insights from their data with advanced analytics and visualization.",
      requirements: ["Experience with Python/R and SQL", "Data visualization tools expertise", "Business intelligence background"],
      icon: BarChart3
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs for you and your family."
    },
    {
      icon: Zap,
      title: "Professional Growth",
      description: "Continuous learning opportunities, conferences, and skill development programs."
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with talented, passionate people who care about making an impact."
    },
    {
      icon: MapPin,
      title: "Flexible Work",
      description: "Hybrid and remote work options to support your work-life balance."
    }
  ];

  return (
    <div className="py-20">
      {/* Hero */}
      <section className="pb-12 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">Join Our Team</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-space text-foreground leading-tight mb-6">
              Build the Future with <span className="gradient-text">InnofyAI</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join a team of innovators, creators, and problem-solvers who are transforming businesses across Nigeria and beyond through technology and creativity.
            </p>
            <Link href="#positions">
              <Button className="gradient-bg border-0 text-white px-8 py-4 text-lg">
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space text-foreground mb-6">
              Why Work at InnofyAI?
            </h2>
            <p className="text-xl text-muted-foreground">
              We're building more than just solutions—we're building careers and a community
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-space text-foreground mb-6">Our Mission</h3>
              <p className="text-muted-foreground text-lg mb-6">
                At InnofyAI, we believe technology should empower businesses to reach their full potential. 
                We're on a mission to democratize access to cutting-edge technology solutions across Africa, 
                starting with Nigeria.
              </p>
              <p className="text-muted-foreground text-lg">
                Our team combines deep technical expertise with creative problem-solving to deliver 
                solutions that don't just meet requirements—they exceed expectations and drive real business impact.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Team collaboration at InnofyAI" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="text-center p-6 hover-lift">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-space text-foreground mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space text-foreground mb-6">
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Find your next opportunity to make an impact
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position) => (
              <Card key={position.title} className="overflow-hidden hover-lift">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6 items-center">
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center">
                          <position.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-space text-foreground">{position.title}</h3>
                          <div className="flex items-center space-x-4 text-muted-foreground">
                            <Badge variant="outline">{position.department}</Badge>
                            <span className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {position.location}
                            </span>
                            <span>{position.type}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">{position.description}</p>
                      <div className="space-y-1">
                        <p className="font-semibold text-foreground">Key Requirements:</p>
                        <ul className="text-muted-foreground text-sm space-y-1">
                          {position.requirements.map((req, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2"></span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="lg:col-span-2 flex justify-end">
                      <Link href="/contact">
                        <Button className="gradient-bg border-0 text-white px-6 py-3">
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space text-foreground mb-6">
              Application Process
            </h2>
            <p className="text-xl text-muted-foreground">
              Our streamlined hiring process designed to get to know you better
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Application",
                description: "Submit your application through our contact form with your resume and cover letter."
              },
              {
                step: "2",
                title: "Initial Review",
                description: "Our team reviews your application and reaches out within 5 business days."
              },
              {
                step: "3",
                title: "Interview Process",
                description: "1-2 rounds of interviews including technical assessment and culture fit."
              },
              {
                step: "4",
                title: "Welcome Aboard",
                description: "Receive your offer and join our team of innovators and problem-solvers."
              }
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{phase.step}</span>
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-4">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-space text-white mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Don't see a perfect fit? We're always looking for talented individuals. 
            Send us your resume and let's start a conversation.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-gray-900 px-8 py-4 text-lg hover:bg-gray-100 transition-colors">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}