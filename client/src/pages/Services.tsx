import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { services } from "@/data/content";
import { Link } from "wouter";
import { Check } from "lucide-react";

export default function Services() {
  const techServices = services.filter(service => service.category === "tech");
  const creativeServices = services.filter(service => service.category === "creative");

  return (
    <div className="py-20">
      {/* Hero */}
      <section className="pb-12 bg-gradient-to-br from-muted/50 to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-space text-foreground mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From cutting-edge AI solutions to compelling brand experiences, we deliver comprehensive services that transform businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Solutions */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space text-foreground mb-4">Tech Solutions</h2>
            <p className="text-lg text-muted-foreground">Advanced technology services that power modern businesses</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {techServices.map((service) => (
              <Card key={service.id} className="hover-lift overflow-hidden">
                <div className="h-48 bg-muted">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Badge variant="secondary" className="mr-4">{service.category}</Badge>
                    <h3 className="text-2xl font-bold text-space text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-primary" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${service.id === 'automation' ? 'automation-ai' : service.id === 'data' ? 'data-analytics' : service.id === 'design' ? 'ui-ux-design' : service.id === 'branding' ? 'branding-merch' : service.id}`}>
                    <Button className="gradient-bg border-0 text-white">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Creative & Growth */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space text-foreground mb-4">Creative & Growth</h2>
            <p className="text-lg text-muted-foreground">Design and branding services that captivate and convert</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {creativeServices.map((service) => (
              <Card key={service.id} className="hover-lift overflow-hidden">
                <div className="h-48 bg-muted">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Badge variant="secondary" className="mr-4">{service.category}</Badge>
                    <h3 className="text-2xl font-bold text-space text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-secondary" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${service.id === 'automation' ? 'automation-ai' : service.id === 'data' ? 'data-analytics' : service.id === 'design' ? 'ui-ux-design' : service.id === 'branding' ? 'branding-merch' : service.id}`}>
                    <Button className="bg-secondary border-0 text-secondary-foreground hover:bg-secondary/90">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space text-foreground mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Discovery",
                description: "We analyze your requirements, goals, and challenges to create a comprehensive project roadmap."
              },
              {
                step: "2",
                title: "Design",
                description: "Our team creates detailed designs and prototypes, ensuring alignment with your vision and goals."
              },
              {
                step: "3",
                title: "Deploy",
                description: "We implement the solution with rigorous testing and quality assurance for optimal performance."
              },
              {
                step: "4",
                title: "Support",
                description: "Ongoing support and optimization ensure your solution continues to deliver exceptional results."
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
    </div>
  );
}
