import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Check, Shield, Eye, AlertTriangle, Lock, ArrowRight } from "lucide-react";

export default function Cybersecurity() {
  return (
    <div className="py-20">
      {/* Hero */}
      <section className="pb-12 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">
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
                Advanced <span className="gradient-text">Cybersecurity</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Protect your digital assets with comprehensive security solutions designed to prevent, detect, and respond to cyber threats.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="gradient-bg border-0 text-white px-8 py-4 text-lg">
                    Security Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" className="px-8 py-4 text-lg">
                  View Security Report
                </Button>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Cybersecurity monitoring dashboard" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Security Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space text-foreground mb-6">
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-muted-foreground">
              Multi-layered protection for your digital infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover-lift">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertTriangle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-4">Advanced Threat Detection</h3>
                <p className="text-muted-foreground">AI-powered threat intelligence to identify and neutralize sophisticated attacks.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover-lift">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-4">24/7 Security Monitoring</h3>
                <p className="text-muted-foreground">Round-the-clock surveillance of your digital assets and infrastructure.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover-lift">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-4">Incident Response Planning</h3>
                <p className="text-muted-foreground">Comprehensive response strategies to minimize damage and recovery time.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover-lift">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-4">Compliance Management</h3>
                <p className="text-muted-foreground">Ensure adherence to industry standards and regulatory requirements.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-space text-foreground mb-6">Current Threat Landscape</h2>
              <div className="space-y-6">
                <Card className="p-6 bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <h3 className="font-bold text-foreground">Ransomware Attacks</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">Average cost of $4.35 million per breach, with attacks increasing 41% year-over-year.</p>
                </Card>
                
                <Card className="p-6 bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <h3 className="font-bold text-foreground">AI-Powered Attacks</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">Sophisticated phishing and social engineering using deepfakes and machine learning.</p>
                </Card>
                
                <Card className="p-6 bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <h3 className="font-bold text-foreground">Supply Chain Vulnerabilities</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">62% of companies experienced a supply chain attack in the past year.</p>
                </Card>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-space text-foreground mb-6">Our Defense Strategy</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Zero Trust Architecture</h4>
                    <p className="text-muted-foreground text-sm">Never trust, always verify - comprehensive access controls for all users and devices.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">AI-Driven Threat Detection</h4>
                    <p className="text-muted-foreground text-sm">Machine learning algorithms that adapt to emerging threats in real-time.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Multi-Factor Authentication</h4>
                    <p className="text-muted-foreground text-sm">Layered authentication systems to prevent unauthorized access.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Regular Security Audits</h4>
                    <p className="text-muted-foreground text-sm">Continuous assessment and improvement of security posture.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space text-foreground mb-6">
              Our Security <span className="gradient-text">Implementation</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A systematic approach to securing your digital infrastructure
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Security Assessment",
                description: "Comprehensive evaluation of your current security posture and vulnerability identification."
              },
              {
                step: "2", 
                title: "Risk Analysis",
                description: "Detailed analysis of potential threats and their impact on your business operations."
              },
              {
                step: "3",
                title: "Solution Deployment",
                description: "Implementation of multi-layered security solutions tailored to your specific needs."
              },
              {
                step: "4",
                title: "Continuous Monitoring",
                description: "24/7 monitoring and regular updates to maintain optimal security protection."
              }
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
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
                    MedSecure Protection
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Advanced cybersecurity infrastructure protecting sensitive patient data with zero security breaches and HIPAA compliance.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="text-3xl font-bold text-space gradient-text mb-2">100%</div>
                      <div className="text-muted-foreground">Security Compliance</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-space gradient-text mb-2">4 months</div>
                      <div className="text-muted-foreground">Implementation Time</div>
                    </div>
                  </div>
                  <Button className="gradient-bg border-0 text-white">
                    Read Security Case Study
                  </Button>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                    alt="MedSecure security dashboard" 
                    className="rounded-xl shadow-lg w-full h-auto" 
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 dark:bg-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-space text-white mb-6">
            Secure Your Business Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Don't wait for a breach. Protect your digital assets with our comprehensive cybersecurity solutions.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-red-600 px-8 py-4 text-lg hover:bg-gray-100 transition-colors">
              Get Security Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}