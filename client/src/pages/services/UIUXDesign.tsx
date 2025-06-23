import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Check, Palette, Users, Smartphone, Monitor, ArrowRight } from "lucide-react";

export default function UIUXDesign() {
  return (
    <div className="py-20">
      {/* Hero */}
      <section className="pb-12 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <Link href="/services">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Button>
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary">Creative & Growth</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-space text-foreground leading-tight">
                UI/UX <span className="gradient-text">Design</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Create exceptional user experiences with intuitive interfaces that delight users and drive engagement.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="gradient-bg border-0 text-white px-8 py-4 text-lg">
                    Start Design Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" className="px-8 py-4 text-lg">
                  View Design Portfolio
                </Button>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="UI/UX design process and wireframes" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space text-foreground mb-6">
              Design Excellence
            </h2>
            <p className="text-xl text-muted-foreground">
              User-centered design that drives results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover-lift">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-4">User Research & Testing</h3>
                <p className="text-muted-foreground">Deep user insights through research, interviews, and usability testing.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover-lift">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-4">Interface Design & Prototyping</h3>
                <p className="text-muted-foreground">Beautiful, functional interfaces with interactive prototypes for validation.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover-lift">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Monitor className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-4">Usability Optimization</h3>
                <p className="text-muted-foreground">Continuous improvement through analytics and user feedback integration.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover-lift">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-4">Mobile-First Approach</h3>
                <p className="text-muted-foreground">Responsive designs optimized for all devices and screen sizes.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space text-foreground mb-6">
              Our Design <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A systematic approach to creating exceptional user experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {[
              {
                step: "1",
                title: "Research",
                description: "User interviews, market analysis, and competitive research to understand your audience.",
                color: "bg-purple-500"
              },
              {
                step: "2", 
                title: "Strategy",
                description: "Define user personas, journey maps, and information architecture.",
                color: "bg-pink-500"
              },
              {
                step: "3",
                title: "Design",
                description: "Create wireframes, mockups, and high-fidelity designs with your brand identity.",
                color: "bg-indigo-500"
              },
              {
                step: "4",
                title: "Prototype",
                description: "Build interactive prototypes for user testing and stakeholder validation.",
                color: "bg-blue-500"
              },
              {
                step: "5",
                title: "Test & Iterate",
                description: "Continuous testing and refinement based on user feedback and analytics.",
                color: "bg-cyan-500"
              }
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className={`w-16 h-16 ${phase.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-white font-bold text-xl">{phase.step}</span>
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-4">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-space text-foreground mb-6">Design Challenges</h2>
              <div className="space-y-6">
                <Card className="p-6 bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <h3 className="font-bold text-foreground">Poor User Experience</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">88% of users won't return to a website after a bad user experience.</p>
                </Card>
                
                <Card className="p-6 bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <h3 className="font-bold text-foreground">Mobile Optimization</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">60% of web traffic comes from mobile devices, requiring mobile-first design.</p>
                </Card>
                
                <Card className="p-6 bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <h3 className="font-bold text-foreground">Conversion Rates</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">Good UX design can increase conversion rates by up to 400%.</p>
                </Card>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-space text-foreground mb-6">Our Design Principles</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">User-Centered Design</h4>
                    <p className="text-muted-foreground text-sm">Every design decision is based on user needs and behaviors.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Accessibility First</h4>
                    <p className="text-muted-foreground text-sm">Designs that work for everyone, including users with disabilities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Performance Optimization</h4>
                    <p className="text-muted-foreground text-sm">Fast-loading, efficient designs that enhance user satisfaction.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Scalable Design Systems</h4>
                    <p className="text-muted-foreground text-sm">Consistent, maintainable design frameworks for growth.</p>
                  </div>
                </div>
              </div>
            </div>
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
                    FoodHub Mobile App
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Intuitive mobile app design for restaurant chain with seamless ordering experience, increasing mobile orders by 250%.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="text-3xl font-bold text-space gradient-text mb-2">+250%</div>
                      <div className="text-muted-foreground">Mobile Orders</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-space gradient-text mb-2">5 months</div>
                      <div className="text-muted-foreground">Design Timeline</div>
                    </div>
                  </div>
                  <Button className="bg-secondary border-0 text-secondary-foreground hover:bg-secondary/90">
                    View Design Case Study
                  </Button>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                    alt="FoodHub mobile app interface" 
                    className="rounded-xl shadow-lg w-full h-auto" 
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-space text-white mb-6">
            Ready to Enhance User Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create intuitive, beautiful designs that your users will love.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-purple-600 px-8 py-4 text-lg hover:bg-gray-100 transition-colors">
              Start Design Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}