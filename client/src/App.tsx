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
import { Suspense, lazy } from "react";

// Blog post pages
import AITransformBusiness from "./pages/blog/AITransformBusiness";
import BrandIdentityDigitalAge from "./pages/blog/BrandIdentityDigitalAge";
import CybersecurityTrends2024 from "./pages/blog/CybersecurityTrends2024";
import PracticalAISMEs from "./pages/blog/PracticalAISMEs";

// Lazy load service pages for better performance
const AutomationAI = lazy(() => import("./pages/services/AutomationAI"));
const BrandingMerch = lazy(() => import("./pages/services/BrandingMerch"));
const Cybersecurity = lazy(() => import("./pages/services/Cybersecurity"));
const DataAnalytics = lazy(() => import("./pages/services/DataAnalytics"));
const UIUXDesign = lazy(() => import("./pages/services/UIUXDesign"));
const SoftwareEngineering = lazy(() => import("./pages/services/SoftwareEngineering"));
const SocialMedia = lazy(() => import("./pages/services/SocialMedia"));

// Lazy load project detail pages
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));

// Loading component for suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ThemeProvider>
          <TooltipProvider>
            <Layout>
              <Suspense fallback={<LoadingSpinner />}>
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

                  {/* Portfolio project pages */}
                  <Route path="/portfolio/:slug">
                    {({ slug }) => <ProjectDetail slug={slug} />}
                  </Route>

                  {/* Blog posts */}
                  <Route path="/blog/ai-transform-business" component={AITransformBusiness} />
                  <Route
                    path="/blog/brand-identity-digital-age"
                    component={BrandIdentityDigitalAge}
                  />
                  <Route
                    path="/blog/cybersecurity-trends-2024"
                    component={CybersecurityTrends2024}
                  />
                  <Route path="/blog/practical-ai-smes" component={PracticalAISMEs} />

                  {/* Service pages - now lazy loaded */}
                  <Route path="/services/automation-ai" component={AutomationAI} />
                  <Route path="/services/branding-merch" component={BrandingMerch} />
                  <Route path="/services/cybersecurity" component={Cybersecurity} />
                  <Route path="/services/data-analytics" component={DataAnalytics} />
                  <Route path="/services/ui-ux-design" component={UIUXDesign} />
                  <Route path="/services/software-engineering" component={SoftwareEngineering} />
                  <Route path="/services/social-media" component={SocialMedia} />

                  {/* 404 page */}
                  <Route component={NotFound} />
                </Switch>
              </Suspense>
            </Layout>
            <Toaster />
            <Analytics />
          </TooltipProvider>
        </ThemeProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
