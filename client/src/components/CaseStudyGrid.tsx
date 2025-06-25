import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/data/content";
import { ArrowRight } from "lucide-react";

export function CaseStudyGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "automation", label: "Automation" },
    { id: "branding", label: "Branding" },
    { id: "security", label: "Security" },
    { id: "design", label: "Design" },
  ];

  const filteredStudies =
    activeFilter === "all"
      ? caseStudies
      : caseStudies.filter(study => study.category === activeFilter);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-space text-foreground mb-4">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've transformed businesses across industries with our innovative solutions.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`px-6 py-3 ${
                activeFilter === filter.id ? "gradient-bg border-0 text-white" : ""
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {filteredStudies.map(study => (
            <Card key={study.id} className="hover-lift cursor-pointer overflow-hidden">
              <div className="relative h-48 bg-muted">
                <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">{study.metric}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">{study.industry}</Badge>
                  <span className="text-sm text-muted-foreground">{study.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-3">{study.title}</h3>
                <p className="text-muted-foreground mb-4">{study.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{study.metricLabel}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
