import { Suspense, lazy } from "react";
import { Route, Switch } from "wouter";
import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import { Layout } from "./components/Layout";
import { ThemeProvider } from "./components/ThemeProvider";
import { Analytics } from "./components/Analytics";
import { LoadingSpinner } from "./components/LoadingSpinner";

// Lazy load main pages for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const Careers = lazy(() => import("./pages/Careers"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const GDPRCompliance = lazy(() => import("./pages/GDPRCompliance"));
const DataProtection = lazy(() => import("./pages/DataProtection"));
const TechnologyStack = lazy(() => import("./pages/TechnologyStack"));
const DevelopmentProcess = lazy(() => import("./pages/DevelopmentProcess"));
const QualityAssurance = lazy(() => import("./pages/QualityAssurance"));
const SecurityStandards = lazy(() => import("./pages/SecurityStandards"));
const PerformanceMetrics = lazy(() => import("./pages/PerformanceMetrics"));
const Lagos = lazy(() => import("./pages/Lagos"));
const EcommerceSolutions = lazy(() => import("./pages/EcommerceSolutions"));
const ServiceComparison = lazy(() => import("./pages/ServiceComparison"));
const ClientSuccessStories = lazy(() => import("./pages/ClientSuccessStories"));
const IndustrySolutions = lazy(() => import("./pages/IndustrySolutions"));
const GenerativeAI = lazy(() => import("./pages/GenerativeAI"));
const NotFound = lazy(() => import("./pages/not-found"));

// Lazy load blog post pages for better performance
const AITransformBusiness = lazy(() => import("./pages/blog/AITransformBusiness"));
const BrandIdentityDigitalAge = lazy(() => import("./pages/blog/BrandIdentityDigitalAge"));
const CybersecurityTrends2024 = lazy(() => import("./pages/blog/CybersecurityTrends2024"));
const PracticalAISMEs = lazy(() => import("./pages/blog/PracticalAISMEs"));

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

// Loading component for suspense fallback - using imported component

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
                  <Route path="/cookie-policy" component={CookiePolicy} />
                  <Route path="/gdpr-compliance" component={GDPRCompliance} />
                  <Route path="/data-protection" component={DataProtection} />
                  <Route path="/technology-stack" component={TechnologyStack} />
                  <Route path="/development-process" component={DevelopmentProcess} />
                  <Route path="/quality-assurance" component={QualityAssurance} />
                  <Route path="/security-standards" component={SecurityStandards} />
                  <Route path="/performance-metrics" component={PerformanceMetrics} />
                  <Route path="/lagos" component={Lagos} />
                  <Route path="/ecommerce-solutions" component={EcommerceSolutions} />
                  <Route path="/service-comparison" component={ServiceComparison} />
                  <Route path="/client-success-stories" component={ClientSuccessStories} />
                  <Route path="/industry-solutions" component={IndustrySolutions} />
                  <Route path="/generative-ai" component={GenerativeAI} />

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
