import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Check, Zap, TrendingUp, Clock, ArrowRight } from "lucide-react";

export default function AutomationAI() {
  return (
    <div className="py-20">
      {/* Hero */}
      <section className="pb-12 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <Link href="/services">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Button>
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary">Tech Solutions</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-space text-foreground leading-tight">
                Automation & <span className="gradient-text">AI Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Streamline operations with intelligent automation solutions that reduce manual tasks by up to 80% and eliminate human error.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="gradient-bg border-0 text-white px-8 py-4 text-lg">
                    Get Custom Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" className="px-8 py-4 text-lg">
                  View Case Studies
                </Button>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="AI automation workflow visualization" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space text-foreground mb-6">
              What We Deliver
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive automation solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover-lift">
              <CardContent className="pt-6">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-4">Custom Workflow Automation</h3>
                <p className="text-muted-foreground">Automate repetitive tasks and complex business processes with intelligent workflows.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover-lift">
              <CardContent className="pt-6">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-4">AI-Powered Decision Making</h3>
                <p className="text-muted-foreground">Leverage machine learning algorithms for intelligent business decisions.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover-lift">
              <CardContent className="pt-6">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-4">Process Optimization</h3>
                <p className="text-muted-foreground">Identify bottlenecks and optimize workflows for maximum efficiency.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover-lift">
              <CardContent className="pt-6">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-4">Real-time Monitoring</h3>
                <p className="text-muted-foreground">24/7 monitoring with intelligent alerts and performance analytics.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-space text-foreground mb-6">The Challenge</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3"></div>
                  <p className="text-muted-foreground">Manual processes consume 40-60% of employee time on repetitive tasks</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3"></div>
                  <p className="text-muted-foreground">Human error costs businesses an average of $62 billion annually</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3"></div>
                  <p className="text-muted-foreground">Lack of real-time insights leads to delayed decision-making</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3"></div>
                  <p className="text-muted-foreground">Disconnected systems create data silos and inefficiencies</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-space text-foreground mb-6">Our Solution</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary mt-1" />
                  <p className="text-muted-foreground">Intelligent automation reduces manual work by up to 80%</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary mt-1" />
                  <p className="text-muted-foreground">AI-driven processes eliminate human error and improve accuracy</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary mt-1" />
                  <p className="text-muted-foreground">Real-time analytics provide instant insights for faster decisions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary mt-1" />
                  <p className="text-muted-foreground">Seamless integration connects all your business systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space text-foreground mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A proven methodology that ensures successful automation implementation
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Analysis & Assessment",
                description: "We analyze your current processes, identify automation opportunities, and assess potential ROI."
              },
              {
                step: "2", 
                title: "Solution Design",
                description: "Our team designs custom automation workflows tailored to your specific business requirements."
              },
              {
                step: "3",
                title: "Implementation & Testing",
                description: "We implement the solution with rigorous testing to ensure optimal performance and reliability."
              },
              {
                step: "4",
                title: "Training & Support",
                description: "Comprehensive training and ongoing support to maximize the value of your automation investment."
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

      {/* Case Study */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge variant="secondary" className="mb-4">Case Study</Badge>
                  <h3 className="text-3xl font-bold text-space text-foreground mb-4">
                    TechMart Automation Success
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Complete automation solution for inventory management, order processing, and customer service, resulting in 45% cost reduction and improved efficiency.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="text-3xl font-bold text-space gradient-text mb-2">65%</div>
                      <div className="text-muted-foreground">Efficiency Increase</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-space gradient-text mb-2">6 months</div>
                      <div className="text-muted-foreground">Implementation Time</div>
                    </div>
                  </div>
                  <Button className="gradient-bg border-0 text-white">
                    Read Full Case Study
                  </Button>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                    alt="TechMart automation dashboard" 
                    className="rounded-xl shadow-lg w-full h-auto" 
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-space text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how our AI automation solutions can transform your operations.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-gray-900 px-8 py-4 text-lg hover:bg-gray-100 transition-colors">
              Get Custom Automation Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}