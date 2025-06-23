import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Twitter, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="py-20">
      {/* Hero */}
      <section className="pb-12 bg-gradient-to-br from-muted/50 to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-space text-foreground mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business? Get in touch with our team to discuss your project and discover how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-space text-foreground mb-8">Get in touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-foreground">Office</h3>
                    <p className="text-muted-foreground">Lagos, Nigeria</p>
                    <p className="text-muted-foreground">Available for global projects</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">hello@innofyai.com</p>
                    <p className="text-muted-foreground">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">+234 (0) 123 456 789</p>
                    <p className="text-muted-foreground">Mon-Fri: 9AM-6PM WAT</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-foreground">Response Time</h3>
                    <p className="text-muted-foreground">Average: 2-4 hours</p>
                    <p className="text-muted-foreground">Mon-Fri: 9AM-6PM WAT</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-foreground mb-4">Follow us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
