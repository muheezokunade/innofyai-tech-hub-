import { Hero } from "@/components/Hero";
import { ServiceTabs } from "@/components/ServiceTabs";
import { CaseStudyGrid } from "@/components/CaseStudyGrid";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Zap, CheckCircle, Rocket, ArrowRight } from "lucide-react";
import { generateOrganizationStructuredData } from "@/lib/structuredData";

export default function Home() {
  const structuredData = generateOrganizationStructuredData({
    name: "InnofyAI",
    url: "https://innofyai.com",
    logo: "https://innofyai.com/logo.png",
    description: "Leading tech consulting platform offering automation, AI, cybersecurity, and creative branding solutions.",
    address: {
      addressLocality: "Lagos",
      addressCountry: "Nigeria"
    },
    contactPoint: {
      contactType: "customer service",
      email: "hello@innofyai.com"
    },
    sameAs: [
      "https://twitter.com/innofyai",
      "https://linkedin.com/company/innofyai"
    ]
  });

  return (
    <div>
      <SEO 
        title="InnofyAI - Tech Excellence & Creative Innovation"
        description="Transform your business with cutting-edge AI automation, cybersecurity, branding, and creative solutions. Expert tech consulting from Lagos, Nigeria."
        keywords="AI automation, cybersecurity, branding, UI/UX design, data analytics, tech consulting, Nigeria, Lagos, business transformation"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630"
        structuredData={structuredData}
      />
      
      <Hero />
      
      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center slide-up">
              <div className="text-4xl lg:text-5xl font-bold text-space gradient-text mb-2">150+</div>
              <div className="text-muted-foreground font-medium">Projects Completed</div>
            </div>
            <div className="text-center slide-up">
              <div className="text-4xl lg:text-5xl font-bold text-space gradient-text mb-2">98%</div>
              <div className="text-muted-foreground font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center slide-up">
              <div className="text-4xl lg:text-5xl font-bold text-space gradient-text mb-2">5+</div>
              <div className="text-muted-foreground font-medium">Years Experience</div>
            </div>
            <div className="text-center slide-up">
              <div className="text-4xl lg:text-5xl font-bold text-space gradient-text mb-2">24/7</div>
              <div className="text-muted-foreground font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space text-foreground mb-4">
              Why Choose InnofyAI?
            </h2>
            <p className="text-xl text-muted-foreground">
              We bridge the gap between technology and creativity
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover-lift">
              <CardContent className="pt-6">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-4">Lightning Fast</h3>
                <p className="text-muted-foreground">Accelerate your business with our automation solutions and rapid deployment strategies.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover-lift">
              <CardContent className="pt-6">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-4">Proven Results</h3>
                <p className="text-muted-foreground">98% success rate with measurable ROI improvements for our clients across all industries.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover-lift">
              <CardContent className="pt-6">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-4">Expert Team</h3>
                <p className="text-muted-foreground">Industry-leading experts in AI, automation, design, and brand strategy working for your success.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ServiceTabs />
      <CaseStudyGrid />
      <TestimonialCarousel />

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-space text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how our innovative solutions can drive your success.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-gray-900 px-8 py-4 text-lg hover:bg-gray-100 transition-colors">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
