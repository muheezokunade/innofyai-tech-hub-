import { Route, Switch } from "wouter";
import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/not-found";
import { ThemeProvider } from "./components/ThemeProvider";
import { Analytics } from "./components/Analytics";

// Blog post pages
import AITransformBusiness from "./pages/blog/AITransformBusiness";
import BrandIdentityDigitalAge from "./pages/blog/BrandIdentityDigitalAge";
import CybersecurityTrends2024 from "./pages/blog/CybersecurityTrends2024";
import PracticalAISMEs from "./pages/blog/PracticalAISMEs";

// Service pages
import AutomationAI from "./pages/services/AutomationAI";
import BrandingMerch from "./pages/services/BrandingMerch";
import Cybersecurity from "./pages/services/Cybersecurity";
import DataAnalytics from "./pages/services/DataAnalytics";
import UIUXDesign from "./pages/services/UIUXDesign";

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="light" storageKey="innofyai-theme">
          <TooltipProvider>
            <Toaster />
            <Analytics />
            <Layout>
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
                <Route path="/careers" component={Careers} />
                <Route path="/privacy" component={Privacy} />
                <Route path="/terms" component={Terms} />
                
                {/* Blog post routes */}
                <Route path="/blog/ai-transform-business" component={AITransformBusiness} />
                <Route path="/blog/brand-identity-digital-age" component={BrandIdentityDigitalAge} />
                <Route path="/blog/cybersecurity-trends-2024" component={CybersecurityTrends2024} />
                <Route path="/blog/practical-ai-smes" component={PracticalAISMEs} />
                
                {/* Service routes */}
                <Route path="/services/automation-ai" component={AutomationAI} />
                <Route path="/services/branding-merch" component={BrandingMerch} />
                <Route path="/services/cybersecurity" component={Cybersecurity} />
                <Route path="/services/data-analytics" component={DataAnalytics} />
                <Route path="/services/ui-ux-design" component={UIUXDesign} />
                
                <Route component={NotFound} />
              </Switch>
            </Layout>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
