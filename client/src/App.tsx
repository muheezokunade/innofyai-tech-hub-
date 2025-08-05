import React, { Suspense, lazy, useState } from "react";
import { Route, Switch } from "wouter";
import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { ThemeProvider } from "./components/ThemeProvider";
import { Layout } from "./components/Layout";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { AppointmentBooking } from "./components/AppointmentBooking";
import { AppointmentProvider } from "./contexts/AppointmentContext";
import TestingPanel from "./components/TestingPanel";

// Lazy load main pages for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/not-found"));

// Lazy load service pages
const AutomationAI = lazy(() => import("./pages/services/AutomationAI"));
const Cybersecurity = lazy(() => import("./pages/services/Cybersecurity"));
const DataAnalytics = lazy(() => import("./pages/services/DataAnalytics"));
const SoftwareEngineering = lazy(() => import("./pages/services/SoftwareEngineering"));
const UIUXDesign = lazy(() => import("./pages/services/UIUXDesign"));
const BrandingMerch = lazy(() => import("./pages/services/BrandingMerch"));
const SocialMedia = lazy(() => import("./pages/services/SocialMedia"));
const ResearchData = lazy(() => import("./pages/services/ResearchData"));

// Lazy load project detail pages
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));

// Lazy load blog pages
const AITransformBusiness = lazy(() => import("./pages/blog/AITransformBusiness"));
const BrandIdentityDigitalAge = lazy(() => import("./pages/blog/BrandIdentityDigitalAge"));
const CybersecurityTrends2024 = lazy(() => import("./pages/blog/CybersecurityTrends2024"));
const PracticalAISMEs = lazy(() => import("./pages/blog/PracticalAISMEs"));

function App() {
  const [isTestingPanelVisible, setIsTestingPanelVisible] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ThemeProvider>
          <AppointmentProvider>
            <Layout>
              <Suspense fallback={<LoadingSpinner />}>
                <Switch>
                  {/* Main pages */}
                  <Route path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/services" component={Services} />
                  <Route path="/portfolio" component={Portfolio} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/blog" component={Blog} />
                  <Route path="/privacy" component={Privacy} />
                  <Route path="/terms" component={Terms} />

                  {/* Service pages */}
                  <Route path="/services/automation-ai" component={AutomationAI} />
                  <Route path="/services/cybersecurity" component={Cybersecurity} />
                  <Route path="/services/data-analytics" component={DataAnalytics} />
                  <Route path="/services/software-engineering" component={SoftwareEngineering} />
                  <Route path="/services/ui-ux-design" component={UIUXDesign} />
                  <Route path="/services/branding-merch" component={BrandingMerch} />
                  <Route path="/services/social-media" component={SocialMedia} />
                  <Route path="/services/research-data" component={ResearchData} />

                  {/* Project detail pages */}
                  <Route path="/portfolio/:id">
                    {({ id }) => <ProjectDetail slug={id} />}
                  </Route>

                  {/* Blog pages */}
                  <Route path="/blog/ai-transform-business" component={AITransformBusiness} />
                  <Route path="/blog/brand-identity-digital-age" component={BrandIdentityDigitalAge} />
                  <Route path="/blog/cybersecurity-trends-2024" component={CybersecurityTrends2024} />
                  <Route path="/blog/practical-ai-smes" component={PracticalAISMEs} />

                  {/* 404 page */}
                  <Route component={NotFound} />
                </Switch>
              </Suspense>

              {/* Testing Panel - Only show in development */}
              {process.env.NODE_ENV === 'development' && (
                <TestingPanel
                  isVisible={isTestingPanelVisible}
                  onToggle={() => setIsTestingPanelVisible(!isTestingPanelVisible)}
                />
              )}
            </Layout>
          </AppointmentProvider>
        </ThemeProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
