import React, { useState, useEffect } from 'react';
import { imagePreloader } from '../utils/imagePreloader';

export const ImageDebugger: React.FC = () => {
  const [status, setStatus] = useState(imagePreloader.getStatus());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(imagePreloader.getStatus());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-mono"
      >
        {isVisible ? 'Hide' : 'Show'} Image Debug
      </button>

      {/* Debug panel */}
      {isVisible && (
        <div className="fixed bottom-16 right-4 z-50 bg-black/90 text-white p-4 rounded-lg max-w-md max-h-96 overflow-auto text-xs font-mono">
          <h3 className="font-bold mb-2">Image Loading Status</h3>
          
          <div className="mb-2">
            <span className="text-green-400">✓ Preloaded: {status.preloaded.length}</span>
          </div>
          
          <div className="mb-2">
            <span className="text-red-400">✗ Failed: {status.failed.length}</span>
          </div>
          
          <div className="mb-2">
            <span className="text-yellow-400">⟳ Loading: {status.loading.length}</span>
          </div>

          {status.failed.length > 0 && (
            <div className="mt-3">
              <h4 className="font-bold text-red-400 mb-1">Failed Images:</h4>
              <ul className="space-y-1">
                {status.failed.map((src, index) => (
                  <li key={index} className="text-red-300 break-all">
                    {src}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {status.loading.length > 0 && (
            <div className="mt-3">
              <h4 className="font-bold text-yellow-400 mb-1">Loading Images:</h4>
              <ul className="space-y-1">
                {status.loading.map((src, index) => (
                  <li key={index} className="text-yellow-300 break-all">
                    {src}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
}; 