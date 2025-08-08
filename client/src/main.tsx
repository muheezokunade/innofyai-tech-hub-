import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Register service worker for caching and offline functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
        
        // Listen for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content available - show non-blocking toast with reload
                showUpdateToast(() => {
                  if (registration.waiting) {
                    registration.waiting.postMessage({ type: 'SKIP_WAITING' });
                  }
                  // After skipping waiting, reload to take control
                  setTimeout(() => window.location.reload(), 100);
                });
              }
            });
          }
        });

        // If the service worker is waiting (e.g., after refresh), prompt once
        if (registration.waiting && navigator.serviceWorker.controller) {
          showUpdateToast(() => {
            registration.waiting?.postMessage({ type: 'SKIP_WAITING' });
            setTimeout(() => window.location.reload(), 100);
          });
        }

        // Ensure new SW controls clients ASAP
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          // Claim clients when controller changes
          registration.active?.postMessage({ type: 'CLIENTS_CLAIM' });
        });
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

function showUpdateToast(onReload: () => void) {
  // Lazy import to avoid coupling; fallback to alert if fails
  import('./hooks/use-toast').then(({ toast }) => {
    toast({
      title: 'Update available',
      description: 'A newer version is ready. Reload to update.',
      action: {
        altText: 'Reload',
        onClick: onReload as any,
      } as any,
    } as any);
  }).catch(() => {
    // Silent fallback
    console.info('Update available. Reloading...');
    onReload();
  });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

