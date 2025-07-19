import { Button } from "@/components/ui/button";
import { OptimizedImage, getOptimizedImageSrc } from "@/components/OptimizedImage";
import { Link } from "wouter";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  const heroImage = getOptimizedImageSrc(
    "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/hero-background.jpg')`
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/70 to-indigo-900/80"></div>
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
              <a href="https://calendar.app.google/nfuUe1XygjEJxMGd7" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="px-8 py-4 text-lg">
                  <Play className="mr-2 h-5 w-5" />
                  Book Discovery Call
                </Button>
              </a>
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
            <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-2xl border border-white/20">
              <div className="text-sm text-white/80 font-medium">Success Rate</div>
              <div className="text-2xl font-bold text-white">98%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
