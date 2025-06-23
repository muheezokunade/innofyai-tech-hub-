import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/data/content";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "automation", label: "Automation" },
    { id: "branding", label: "Branding" },
    { id: "security", label: "Security" },
    { id: "design", label: "Design" }
  ];

  const filteredStudies = activeFilter === "all" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

  return (
    <div className="py-20">
      {/* Hero */}
      <section className="pb-12 bg-gradient-to-br from-muted/50 to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-space text-foreground mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our successful projects and see how we've transformed businesses across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Filters & Grid */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={`px-6 py-3 ${
                  activeFilter === filter.id 
                    ? "gradient-bg border-0 text-white" 
                    : ""
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <Card key={study.id} className="hover-lift cursor-pointer overflow-hidden">
                <div className="relative h-48 bg-muted">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {study.metric}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{study.industry}</Badge>
                    <span className="text-sm text-muted-foreground">{study.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-space text-foreground mb-3">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {study.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{study.metricLabel}</span>
                    <Button variant="ghost" size="sm">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-space text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-white/90">
              Our portfolio speaks for itself with measurable success metrics
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-space text-white mb-2">150+</div>
              <div className="text-white/80 font-medium">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-space text-white mb-2">98%</div>
              <div className="text-white/80 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-space text-white mb-2">2.5x</div>
              <div className="text-white/80 font-medium">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-space text-white mb-2">24/7</div>
              <div className="text-white/80 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
