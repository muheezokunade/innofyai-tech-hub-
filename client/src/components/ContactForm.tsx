import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Call the backend API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        // Show success toast
        toast({
          title: "Message sent successfully!",
          description: result.message || "Thank you for contacting us. We'll get back to you within 24 hours.",
          duration: 5000,
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          budget: "",
          message: "",
        });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      // Show error toast
      toast({
        title: "Failed to send message",
        description: error instanceof Error ? error.message : "Please try again later or contact us directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card>
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold text-space text-foreground mb-8">Send us a message</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-foreground">
              Full Name
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={e => handleChange("name", e.target.value)}
              className="mt-2"
              placeholder="Your full name"
              disabled={isSubmitting}
              required
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-foreground">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={e => handleChange("email", e.target.value)}
              className="mt-2"
              placeholder="your@email.com"
              disabled={isSubmitting}
              required
            />
          </div>

          <div>
            <Label htmlFor="company" className="text-foreground">
              Company
            </Label>
            <Input
              id="company"
              value={formData.company}
              onChange={e => handleChange("company", e.target.value)}
              className="mt-2"
              placeholder="Your company name"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <Label htmlFor="service" className="text-foreground">
              Service Interest
            </Label>
            <Select onValueChange={value => handleChange("service", value)} disabled={isSubmitting}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Automation & AI">Automation & AI</SelectItem>
                <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
                <SelectItem value="Software Development">Software Development</SelectItem>
                <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                <SelectItem value="Branding & Merch">Branding & Merch</SelectItem>
                <SelectItem value="Social Media">Social Media</SelectItem>
                <SelectItem value="Data Analytics">Data Analytics</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="budget" className="text-foreground">
              Budget Range
            </Label>
            <Select onValueChange={value => handleChange("budget", value)} disabled={isSubmitting}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Under $1,000">Under $1,000</SelectItem>
                <SelectItem value="$1,000 - $5,000">$1,000 - $5,000</SelectItem>
                <SelectItem value="$5,000 - $10,000">$5,000 - $10,000</SelectItem>
                <SelectItem value="$10,000 - $25,000">$10,000 - $25,000</SelectItem>
                <SelectItem value="$25,000 - $50,000">$25,000 - $50,000</SelectItem>
                <SelectItem value="Over $50,000">Over $50,000</SelectItem>
                <SelectItem value="To be discussed">To be discussed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message" className="text-foreground">
              Message
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={e => handleChange("message", e.target.value)}
              rows={6}
              className="mt-2"
              placeholder="Tell us about your project..."
              disabled={isSubmitting}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full gradient-bg border-0 text-white py-4 text-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending Message...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
