import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/data/content";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-indigo-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-space text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground">Trusted by leading companies worldwide</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <CardContent className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl lg:text-2xl text-foreground mb-8 italic leading-relaxed">
                "{currentTestimonial.content}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold text-foreground">{currentTestimonial.name}</div>
                  <div className="text-muted-foreground">{currentTestimonial.title}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial} 
              className="h-12 w-12 border-white/20 hover:bg-white/10 hover:border-white/40 transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg" 
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial} 
              className="h-12 w-12 border-white/20 hover:bg-white/10 hover:border-white/40 transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
