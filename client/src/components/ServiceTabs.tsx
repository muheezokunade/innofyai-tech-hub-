import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services } from "@/data/content";
import { Link } from "wouter";
import { Check } from "lucide-react";

export function ServiceTabs() {
  const [activeTab, setActiveTab] = useState("automation");
  const activeService = services.find(service => service.id === activeTab);

  const tabButtons = [
    { id: "automation", label: "Automation & AI" },
    { id: "cybersecurity", label: "Cybersecurity" },
    { id: "data", label: "Data Analytics" },
    { id: "software-engineering", label: "Web & Mobile" },
    { id: "design", label: "UI/UX Design" },
    { id: "branding-social", label: "Branding & Social" },
    { id: "research-data", label: "Research & Data" },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-space text-foreground mb-4">What We Create</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From intelligent automation to stunning brand experiences, we deliver comprehensive
            solutions that transform businesses.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabButtons.map(tab => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              variant={activeTab === tab.id ? "default" : "outline"}
              className={`px-6 py-3 ${
                activeTab === tab.id ? "gradient-bg border-0 text-white" : ""
              }`}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Service Content */}
        {activeService && (
          <Card className="p-8 scale-in">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  {activeService.category === "tech" ? "Tech Solutions" : "Creative & Growth"}
                </Badge>
                <h3 className="text-2xl font-bold text-space text-foreground mb-4">
                  {activeService.title}
                </h3>
                <p className="text-muted-foreground mb-6">{activeService.description}</p>
                <ul className="space-y-3">
                  {activeService.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${activeService.id === "automation" ? "automation-ai" : activeService.id === "data" ? "data-analytics" : activeService.id === "design" ? "ui-ux-design" : activeService.id === "branding-social" ? "branding-merch" : activeService.id === "software-engineering" ? "software-engineering" : activeService.id === "research-data" ? "research-data" : activeService.id}`}
                >
                  <Button className="gradient-bg border-0 text-white mt-6">Learn More</Button>
                </Link>
              </div>
              <div>
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
}
