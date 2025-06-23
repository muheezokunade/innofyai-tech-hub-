import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ExternalLink } from "lucide-react";

interface RelatedLink {
  title: string;
  description: string;
  href: string;
  category: string;
}

interface InternalLinksProps {
  currentPage: string;
  links?: RelatedLink[];
}

export function InternalLinks({ currentPage, links }: InternalLinksProps) {
  // Default related links based on current page
  const getDefaultLinks = (): RelatedLink[] => {
    const linkMap: Record<string, RelatedLink[]> = {
      home: [
        {
          title: "Our Services",
          description: "Explore our comprehensive tech solutions",
          href: "/services",
          category: "Services"
        },
        {
          title: "Portfolio",
          description: "See our successful projects and case studies",
          href: "/portfolio",
          category: "Work"
        },
        {
          title: "About Us",
          description: "Learn about our team and mission",
          href: "/about",
          category: "Company"
        }
      ],
      services: [
        {
          title: "Automation & AI",
          description: "Intelligent workflow automation solutions",
          href: "/services/automation-ai",
          category: "Tech"
        },
        {
          title: "Cybersecurity",
          description: "Advanced threat protection and security",
          href: "/services/cybersecurity",
          category: "Security"
        },
        {
          title: "UI/UX Design",
          description: "User-centered design and experience",
          href: "/services/ui-ux-design",
          category: "Design"
        }
      ],
      blog: [
        {
          title: "AI Business Transformation",
          description: "How AI is reshaping business operations",
          href: "/blog/ai-transform-business",
          category: "AI"
        },
        {
          title: "Cybersecurity Trends 2024",
          description: "Stay ahead of evolving cyber threats",
          href: "/blog/cybersecurity-trends-2024",
          category: "Security"
        },
        {
          title: "Brand Identity in Digital Age",
          description: "Building lasting customer connections",
          href: "/blog/brand-identity-digital-age",
          category: "Branding"
        }
      ]
    };

    return linkMap[currentPage] || linkMap.home;
  };

  const relatedLinks = links || getDefaultLinks();

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-space text-foreground mb-4">
            Related Resources
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore more content and services that might interest you
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedLinks.map((link, index) => (
            <Card key={index} className="hover-lift transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {link.category}
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {link.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4">
                  {link.description}
                </p>
                <Link href={link.href}>
                  <span className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                    Learn more
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 