import { useEffect } from "react";

// Google Analytics 4 Configuration
const GA_TRACKING_ID = "G-XXXXXXXXXX"; // Replace with your actual GA4 ID

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export function Analytics() {
  useEffect(() => {
    // Load Google Analytics script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });

    return () => {
      // Cleanup
      document.head.removeChild(script);
    };
  }, []);

  return null;
}

// Page view tracking hook
export function usePageView() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", GA_TRACKING_ID, {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  });
}

// Event tracking function
export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

// Custom event tracking for common actions
export const trackEvents = {
  contactFormSubmit: () => trackEvent("form_submit", "engagement", "contact_form"),
  serviceView: (service: string) => trackEvent("page_view", "service", service),
  blogView: (article: string) => trackEvent("page_view", "blog", article),
  ctaClick: (cta: string) => trackEvent("click", "cta", cta),
  download: (file: string) => trackEvent("download", "resource", file),
};
