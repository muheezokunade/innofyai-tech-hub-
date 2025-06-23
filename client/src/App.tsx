import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Layout } from "@/components/Layout";

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
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="innofyai-theme">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
