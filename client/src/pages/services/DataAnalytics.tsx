import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Check, BarChart3, TrendingUp, Database, Brain, ArrowRight } from "lucide-react";

export default function DataAnalytics() {
  return (
    <div className="py-20">
      {/* Hero */}
      <section className="pb-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
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
                Data <span className="gradient-text">Analytics</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Transform your data into actionable insights with advanced analytics and business intelligence solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="gradient-bg border-0 text-white px-8 py-4 text-lg">
                    Get Analytics Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" className="px-8 py-4 text-lg">
                  View Dashboards
                </Button>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Data analytics dashboard visualization" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space text-foreground mb-6">
              Comprehensive Analytics Solutions
            </h2>
            <p className="text-xl text-muted-foreground">
              Turn raw data into strategic business intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover-lift">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-4">Predictive Analytics</h3>
                <p className="text-muted-foreground">Forecast trends and anticipate future outcomes with machine learning models.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover-lift">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-4">Real-time Dashboards</h3>
                <p className="text-muted-foreground">Interactive dashboards that provide instant insights into your business metrics.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover-lift">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-4">Custom Reporting</h3>
                <p className="text-muted-foreground">Automated reports tailored to your specific business requirements and KPIs.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover-lift">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-4">Data Visualization</h3>
                <p className="text-muted-foreground">Transform complex data into clear, actionable visual insights and charts.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Challenges */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-space text-foreground mb-6">Data Challenges</h2>
              <div className="space-y-6">
                <Card className="p-6 bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <h3 className="font-bold text-foreground">Data Silos</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">73% of enterprise data goes unused for analytics due to disconnected systems.</p>
                </Card>
                
                <Card className="p-6 bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <h3 className="font-bold text-foreground">Poor Data Quality</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">Companies lose an average of $15 million annually due to poor data quality.</p>
                </Card>
                
                <Card className="p-6 bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <h3 className="font-bold text-foreground">Lack of Insights</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">Only 32% of businesses can turn data into actionable insights efficiently.</p>
                </Card>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-space text-foreground mb-6">Our Analytics Approach</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Data Integration</h4>
                    <p className="text-muted-foreground text-sm">Connect all your data sources into a unified analytics platform.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Data Cleansing & Validation</h4>
                    <p className="text-muted-foreground text-sm">Ensure data accuracy and consistency across all sources.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Advanced Analytics</h4>
                    <p className="text-muted-foreground text-sm">Apply machine learning and statistical models for deeper insights.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Actionable Recommendations</h4>
                    <p className="text-muted-foreground text-sm">Provide clear, data-driven recommendations for business decisions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Types */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space text-foreground mb-6">
              Types of <span className="gradient-text">Analytics</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              From descriptive to prescriptive analytics
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                type: "Descriptive",
                description: "What happened? Historical data analysis and trend identification.",
                color: "bg-blue-500"
              },
              {
                type: "Diagnostic", 
                description: "Why did it happen? Root cause analysis and correlation discovery.",
                color: "bg-indigo-500"
              },
              {
                type: "Predictive",
                description: "What will happen? Future trend forecasting and risk assessment.",
                color: "bg-purple-500"
              },
              {
                type: "Prescriptive",
                description: "What should we do? Optimization recommendations and action plans.",
                color: "bg-pink-500"
              }
            ].map((analytics, index) => (
              <div key={analytics.type} className="text-center">
                <div className={`w-16 h-16 ${analytics.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-4">{analytics.type}</h3>
                <p className="text-muted-foreground">{analytics.description}</p>
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
                    RetailMax Analytics Platform
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Comprehensive analytics solution that increased sales forecasting accuracy by 85% and reduced inventory costs by 30%.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="text-3xl font-bold text-space gradient-text mb-2">85%</div>
                      <div className="text-muted-foreground">Forecast Accuracy</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-space gradient-text mb-2">30%</div>
                      <div className="text-muted-foreground">Cost Reduction</div>
                    </div>
                  </div>
                  <Button className="gradient-bg border-0 text-white">
                    View Analytics Case Study
                  </Button>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                    alt="RetailMax analytics dashboard" 
                    className="rounded-xl shadow-lg w-full h-auto" 
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-space text-white mb-6">
            Unlock Your Data's Potential
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Transform your business decisions with powerful data analytics and intelligence.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-blue-600 px-8 py-4 text-lg hover:bg-gray-100 transition-colors">
              Get Analytics Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}