import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MessageCircle } from "lucide-react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
        isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
      }`}
    >
      <Link href="/contact">
        <Button
          className="gradient-bg border-0 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 floating-animation"
          size="lg"
        >
          <MessageCircle className="h-5 w-5 mr-2" />
          Let's Talk
        </Button>
      </Link>
    </div>
  );
}
