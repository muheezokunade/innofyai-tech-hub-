import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Check, Palette, Heart, Package, Star, ArrowRight } from "lucide-react";

export default function BrandingMerch() {
  return (
    <div className="py-20">
      {/* Hero */}
      <section className="pb-12 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
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
                Branding & <span className="gradient-text">Merchandise</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Build powerful brand identities that resonate with your audience and create lasting
                impressions through cohesive design.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="gradient-bg border-0 text-white px-8 py-4 text-lg">
                    Start Brand Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" className="px-8 py-4 text-lg">
                  View Brand Portfolio
                </Button>
              </div>
            </div>

            <div>
              <img
                src="/assets/placeholder.svg"
                alt="Brand identity design elements and merchandise"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Branding Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space text-foreground mb-6">
              Complete Brand Solutions
            </h2>
            <p className="text-xl text-muted-foreground">
              From concept to creation, we build brands that matter
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover-lift">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-4">
                  Logo & Identity Design
                </h3>
                <p className="text-muted-foreground">
                  Memorable logos and comprehensive visual identity systems.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover-lift">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-4">
                  Brand Guidelines & Assets
                </h3>
                <p className="text-muted-foreground">
                  Comprehensive brand standards and asset libraries for consistency.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover-lift">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-4">
                  Custom Merchandise
                </h3>
                <p className="text-muted-foreground">
                  High-quality branded merchandise that amplifies your brand presence.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover-lift">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-4">
                  Brand Strategy Consulting
                </h3>
                <p className="text-muted-foreground">
                  Strategic guidance for brand positioning and market differentiation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Brand Development Process */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space text-foreground mb-6">
              Brand Development <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A strategic approach to building memorable brands
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {[
              {
                step: "1",
                title: "Discovery",
                description:
                  "Brand audit, market research, and competitor analysis to understand your landscape.",
                color: "bg-orange-500",
              },
              {
                step: "2",
                title: "Strategy",
                description:
                  "Define brand positioning, personality, values, and unique value proposition.",
                color: "bg-red-500",
              },
              {
                step: "3",
                title: "Design",
                description:
                  "Create visual identity including logo, typography, colors, and style elements.",
                color: "bg-pink-500",
              },
              {
                step: "4",
                title: "Implementation",
                description: "Develop brand guidelines and apply identity across all touchpoints.",
                color: "bg-purple-500",
              },
              {
                step: "5",
                title: "Evolution",
                description:
                  "Monitor brand performance and evolve strategy based on market feedback.",
                color: "bg-indigo-500",
              },
            ].map(phase => (
              <div key={phase.step} className="text-center">
                <div
                  className={`w-16 h-16 ${phase.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <span className="text-white font-bold text-xl">{phase.step}</span>
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-4">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Merchandise Gallery */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space text-foreground mb-6">
              Custom <span className="gradient-text">Merchandise</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Extend your brand with high-quality promotional products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "Apparel",
                items: ["T-shirts", "Hoodies", "Polo shirts", "Caps"],
                image:
                  "/assets/placeholder.svg",
              },
              {
                category: "Office & Tech",
                items: ["Notebooks", "Pens", "USB drives", "Mouse pads"],
                image:
                  "/assets/placeholder.svg",
              },
              {
                category: "Drinkware",
                items: ["Mugs", "Water bottles", "Tumblers", "Travel cups"],
                image:
                  "/assets/placeholder.svg",
              },
              {
                category: "Custom Items",
                items: ["Stickers", "Keychains", "Bags", "Awards"],
                image:
                  "/assets/placeholder.svg",
              },
            ].map(category => (
              <Card key={category.category} className="overflow-hidden hover-lift">
                <div className="h-48 bg-muted">
                  <img
                    src={category.image}
                    alt={category.category}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-space text-foreground mb-3">
                    {category.category}
                  </h3>
                  <ul className="space-y-1">
                    {category.items.map(item => (
                      <li key={item} className="text-muted-foreground text-sm flex items-center">
                        <Check className="w-3 h-3 text-secondary mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Impact */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-space text-foreground mb-6">
                Brand Challenges
              </h2>
              <div className="space-y-6">
                <Card className="p-6 bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <h3 className="font-bold text-foreground">Brand Recognition</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    77% of consumers make purchases based on brand name recognition.
                  </p>
                </Card>

                <Card className="p-6 bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <h3 className="font-bold text-foreground">Brand Consistency</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Consistent branding can increase revenue by up to 23%.
                  </p>
                </Card>

                <Card className="p-6 bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <h3 className="font-bold text-foreground">Customer Loyalty</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Strong brands create 5x more customer loyalty than competitors.
                  </p>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-space text-foreground mb-6">
                Our Brand Approach
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Authentic Storytelling</h4>
                    <p className="text-muted-foreground text-sm">
                      Craft compelling narratives that resonate with your target audience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Visual Consistency</h4>
                    <p className="text-muted-foreground text-sm">
                      Maintain cohesive visual identity across all brand touchpoints.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Market Differentiation</h4>
                    <p className="text-muted-foreground text-sm">
                      Position your brand uniquely in the competitive landscape.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Scalable Systems</h4>
                    <p className="text-muted-foreground text-sm">
                      Build brand frameworks that grow with your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge variant="secondary" className="mb-4">
                    Case Study
                  </Badge>
                  <h3 className="text-3xl font-bold text-space text-foreground mb-4">
                    Osinachi Humanity Impact Initiative
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Complete brand identity for humanitarian impact initiative, including logo,
                    website, and marketing materials leading to 320% funding increase.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="text-3xl font-bold text-space gradient-text mb-2">+320%</div>
                      <div className="text-muted-foreground">Funding Increase</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-space gradient-text mb-2">
                        3 months
                      </div>
                      <div className="text-muted-foreground">Brand Development</div>
                    </div>
                  </div>
                  <Button className="bg-secondary border-0 text-secondary-foreground hover:bg-secondary/90">
                    View Brand Case Study
                  </Button>
                </div>
                <div>
                  <img
                    src="/assets/placeholder.svg"
                    alt="Osinachi Humanity Impact Initiative brand identity elements"
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-space text-white mb-6">
            Ready to Build Your Brand?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create a brand identity that makes a lasting impression on your audience.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-orange-600 px-8 py-4 text-lg hover:bg-gray-100 transition-colors">
              Start Brand Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
