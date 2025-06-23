import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card>
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold text-space text-foreground mb-8">Send us a message</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="firstName" className="text-foreground">First Name</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                className="mt-2"
                placeholder="Your first name"
              />
            </div>
            <div>
              <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                className="mt-2"
                placeholder="Your last name"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="email" className="text-foreground">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="mt-2"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <Label htmlFor="company" className="text-foreground">Company</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => handleChange("company", e.target.value)}
              className="mt-2"
              placeholder="Your company name"
            />
          </div>
          
          <div>
            <Label htmlFor="service" className="text-foreground">Service Interest</Label>
            <Select onValueChange={(value) => handleChange("service", value)}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="automation">Automation & AI</SelectItem>
                <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                <SelectItem value="development">Software Development</SelectItem>
                <SelectItem value="design">UI/UX Design</SelectItem>
                <SelectItem value="branding">Branding & Merch</SelectItem>
                <SelectItem value="iot">IoT Solutions</SelectItem>
                <SelectItem value="data">Data Analytics</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="message" className="text-foreground">Message</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              rows={6}
              className="mt-2"
              placeholder="Tell us about your project..."
            />
          </div>
          
          <Button type="submit" className="w-full gradient-bg border-0 text-white py-4 text-lg">
            <Send className="mr-2 h-5 w-5" />
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
