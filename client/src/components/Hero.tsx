import { Button } from "@/components/ui/button";
import { OptimizedImage, getOptimizedImageSrc } from "@/components/OptimizedImage";
import { Link } from "wouter";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  const heroImage = getOptimizedImageSrc(
    "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-space text-foreground leading-tight">
              Where <span className="gradient-text">Innovation</span> Begins
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Transforming businesses through cutting-edge AI automation, data analytics, and
              creative branding solutions. From code to culture, we build the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="gradient-bg border-0 text-white px-8 py-4 text-lg hover:opacity-90 transition-opacity">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="px-8 py-4 text-lg">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative slide-up">
            <OptimizedImage
              src={heroImage}
              alt="Modern tech consulting office with collaborative workspace and innovation"
              className="rounded-2xl shadow-2xl w-full h-auto"
              priority={true}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-lg border">
              <div className="text-sm text-muted-foreground">Success Rate</div>
              <div className="text-2xl font-bold text-space text-primary">98%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
