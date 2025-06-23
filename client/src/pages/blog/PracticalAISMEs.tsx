import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Share2, Clock, User, Zap, CheckCircle } from "lucide-react";

export default function PracticalAISMEs() {
  return (
    <div className="py-20">
      {/* Hero */}
      <section className="pb-12 bg-gradient-to-br from-muted/50 to-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
          
          <div className="space-y-6">
            <Badge variant="secondary">AI & Automation</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-space text-foreground leading-tight">
              Beyond the Hype: Practical AI Applications for Small and Medium-Sized Enterprises (SMEs)
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover how SMEs can leverage affordable AI tools to operate smarter, faster, and more efficiently without massive budgets.
            </p>
            
            <div className="flex items-center space-x-6 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Alex Johnson</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
              </div>
              <span>December 12, 2024</span>
            </div>
            
            <Button className="gradient-bg border-0 text-white">
              <Share2 className="mr-2 h-4 w-4" />
              Share Article
            </Button>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
              alt="Small business team using AI tools" 
              className="w-full h-64 object-cover rounded-xl mb-8"
            />
            
            <div className="text-foreground space-y-6">
              <p className="text-lg">
                For small and medium-sized enterprises in Nigeria and across the globe, the term "Artificial Intelligence" can often feel like a futuristic buzzword reserved for tech giants with bottomless budgets. However, the reality in 2025 is that AI has become an accessible and powerful tool that can level the playing field, enabling SMEs to operate smarter, faster, and more efficiently.
              </p>
              
              <p>
                The key to leveraging AI as an SME is not about building complex algorithms from scratch; it's about integrating smart, off-the-shelf tools that automate processes, provide valuable insights, and free up your most valuable resource: your team's time. Here are four key areas where AI can make an immediate and significant impact.
              </p>

              <h2 className="text-3xl font-bold text-space mt-12 mb-6">1. Supercharge Your Marketing with Intelligent Automation</h2>
              
              <p>
                Marketing is a critical function for any growing business, but it can be incredibly time-consuming. AI-powered marketing tools can automate repetitive tasks and provide deep insights into customer behavior, allowing you to create more effective campaigns with less effort.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="p-6 bg-primary/10 border-primary/20">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-3">
                      <Zap className="h-5 w-5 text-primary mr-2" />
                      <h3 className="font-bold text-foreground">Content Creation & Scheduling</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Platforms like Copy.ai and Jasper use generative AI to help you draft social media posts, blog articles, and email newsletters in minutes.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="p-6 bg-secondary/10 border-secondary/20">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-3">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                      <h3 className="font-bold text-foreground">Targeted Advertising</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      AI algorithms on platforms like Facebook Ads and Google Ads can analyze user data to identify your ideal customers and serve them highly relevant ads.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="my-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-l-4 border-primary">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">Mini Case Study:</h3>
                  <p className="text-muted-foreground">
                    A boutique fashion retailer in Abuja began using an AI-powered social media tool to generate and schedule its posts. Within three months, they saw a 40% increase in customer engagement and were able to reallocate the five hours per week their manager spent on social media to focus on inventory and customer relations.
                  </p>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-bold text-space mt-12 mb-6">2. Deliver Exceptional 24/7 Customer Service with AI Chatbots</h2>
              
              <p>
                In today's fast-paced world, customers expect instant responses. AI-powered chatbots provide a cost-effective way to offer round-the-clock support, answer frequently asked questions, and even qualify leads without human intervention.
              </p>
              
              <div className="space-y-4 my-8">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-foreground mb-2">Website and Social Media Integration</h4>
                  <p className="text-muted-foreground">
                    Modern chatbot platforms like Tidio and Intercom are incredibly user-friendly and can be easily integrated into your website or social media pages.
                  </p>
                </div>
                
                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="font-bold text-foreground mb-2">Automated Query Resolution</h4>
                  <p className="text-muted-foreground">
                    You can "train" these chatbots with information about your products, services, pricing, and policies to instantly resolve common customer queries.
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-6">
                  <h4 className="font-bold text-foreground mb-2">Lead Generation</h4>
                  <p className="text-muted-foreground">
                    Chatbots can be programmed to ask qualifying questions and collect contact information from potential customers.
                  </p>
                </div>
              </div>
              
              <Card className="my-8 bg-gradient-to-r from-secondary/5 to-accent/5 border-l-4 border-secondary">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">Mini Case Study:</h3>
                  <p className="text-muted-foreground">
                    A Nigerian logistics startup implemented an AI chatbot on its website to handle tracking inquiries and provide shipping quotes. This reduced customer service calls by 60% and allowed their small team to focus on resolving complex delivery issues, significantly improving customer satisfaction.
                  </p>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-bold text-space mt-12 mb-6">3. Optimize Your Operations with Smart Inventory Management</h2>
              
              <p>
                For businesses that deal with physical products, managing inventory is a constant balancing act. Too much stock ties up capital, while too little leads to lost sales. AI can bring a new level of precision to this critical task.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <Card className="p-6 bg-primary/10 border-primary/20 text-center">
                  <CardContent className="p-0">
                    <h3 className="font-bold text-foreground mb-2">Demand Forecasting</h3>
                    <p className="text-muted-foreground text-sm">
                      AI systems analyze historical sales data, seasonality, and market trends to predict future demand with remarkable accuracy.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="p-6 bg-secondary/10 border-secondary/20 text-center">
                  <CardContent className="p-0">
                    <h3 className="font-bold text-foreground mb-2">Automated Reordering</h3>
                    <p className="text-muted-foreground text-sm">
                      Systems can automatically generate purchase orders when stock levels fall below certain thresholds.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="p-6 bg-accent/10 border-accent/20 text-center">
                  <CardContent className="p-0">
                    <h3 className="font-bold text-foreground mb-2">Supplier Management</h3>
                    <p className="text-muted-foreground text-sm">
                      AI tools help track supplier performance, manage lead times, and identify reliable partners.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-3xl font-bold text-space mt-12 mb-6">4. Make Data-Driven Decisions with Simplified Analytics</h2>
              
              <p>
                Many SMEs collect vast amounts of data but lack the time or expertise to analyze it effectively. AI-powered business intelligence (BI) tools can democratize data analysis, turning complex spreadsheets into clear, actionable insights.
              </p>
              
              <div className="space-y-4 my-8">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-foreground mb-2">Automated Reporting</h4>
                  <p className="text-muted-foreground">
                    Platforms like Microsoft Power BI and Google Looker Studio offer user-friendly interfaces that allow you to connect various data sources and create interactive dashboards.
                  </p>
                </div>
                
                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="font-bold text-foreground mb-2">Insight Discovery</h4>
                  <p className="text-muted-foreground">
                    These tools use AI to automatically identify trends, patterns, and anomalies in your data that you might otherwise miss.
                  </p>
                </div>
              </div>
              
              <Card className="my-8 bg-gradient-to-r from-accent/5 to-primary/5 border-l-4 border-accent">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">Mini Case Study:</h3>
                  <p className="text-muted-foreground">
                    An online grocery delivery service in Lagos started using a BI tool to analyze its sales data. The AI-driven insights revealed a high demand for specific local food items on weekends. By adjusting their inventory and marketing to capitalize on this trend, they increased their weekend sales by 35%.
                  </p>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-bold text-space mt-12 mb-6">Getting Started with AI: A Practical Approach</h2>
              
              <p>
                Adopting AI doesn't have to be an overwhelming or expensive endeavor. Start small by identifying the most significant bottleneck or time-consuming task in your business. Research affordable, user-friendly tools in that area and take advantage of free trials to see what works best for you.
              </p>
              
              <p>
                The future of business is intelligent and automated. By embracing these practical AI applications, SMEs can not only survive but thrive, competing effectively in an increasingly digital world. The time to move beyond the hype and into action is now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-space text-foreground mb-12 text-center">
            Related Articles
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="hover-lift cursor-pointer">
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-3">AI & Automation</Badge>
                <h3 className="text-xl font-bold text-space text-foreground mb-3">
                  5 Ways AI Can Transform Your Business Operations
                </h3>
                <p className="text-muted-foreground text-sm">8 min read</p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift cursor-pointer">
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-3">Security</Badge>
                <h3 className="text-xl font-bold text-space text-foreground mb-3">
                  2024 Cybersecurity Trends Every CEO Should Know
                </h3>
                <p className="text-muted-foreground text-sm">7 min read</p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift cursor-pointer">
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-3">Design</Badge>
                <h3 className="text-xl font-bold text-space text-foreground mb-3">
                  Building Brand Identity in the Digital Age
                </h3>
                <p className="text-muted-foreground text-sm">6 min read</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}