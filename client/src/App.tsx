import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Layout } from "@/components/Layout";
import { Analytics } from "@/components/Analytics";

import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import AITransformBusiness from "@/pages/blog/AITransformBusiness";
import CybersecurityTrends2024 from "@/pages/blog/CybersecurityTrends2024";
import BrandIdentityDigitalAge from "@/pages/blog/BrandIdentityDigitalAge";
import PracticalAISMEs from "@/pages/blog/PracticalAISMEs";
import AutomationAI from "@/pages/services/AutomationAI";
import Cybersecurity from "@/pages/services/Cybersecurity";
import DataAnalytics from "@/pages/services/DataAnalytics";
import UIUXDesign from "@/pages/services/UIUXDesign";
import BrandingMerch from "@/pages/services/BrandingMerch";
import Careers from "@/pages/Careers";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/ai-transform-business" component={AITransformBusiness} />
        <Route path="/blog/cybersecurity-trends-2024" component={CybersecurityTrends2024} />
        <Route path="/blog/brand-identity-digital-age" component={BrandIdentityDigitalAge} />
        <Route path="/blog/practical-ai-smes" component={PracticalAISMEs} />
        <Route path="/services/automation-ai" component={AutomationAI} />
        <Route path="/services/cybersecurity" component={Cybersecurity} />
        <Route path="/services/data-analytics" component={DataAnalytics} />
        <Route path="/services/ui-ux-design" component={UIUXDesign} />
        <Route path="/services/branding-merch" component={BrandingMerch} />
        <Route path="/careers" component={Careers} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="light" storageKey="innofyai-theme">
          <TooltipProvider>
            <Toaster />
            <Analytics />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
