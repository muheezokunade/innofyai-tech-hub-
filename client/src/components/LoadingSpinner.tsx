import React from 'react';

export const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="relative" role="status" aria-label="Loading">
      {/* Outer ring */}
      <div className="w-12 h-12 border-4 border-blue-600/20 rounded-full animate-spin">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
      </div>
      
      {/* Inner dot */}
      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
    </div>
    
    {/* Loading text */}
    <div className="ml-4 text-blue-400 font-medium">Loading...</div>
  </div>
);

// Lightweight page loading spinner
export const PageSpinner: React.FC = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-2 border-blue-600/20 border-t-blue-600 rounded-full animate-spin" role="status" aria-label="Loading"></div>
  </div>
);

// Inline loading spinner
export const InlineSpinner: React.FC = () => (
  <div className="inline-block w-4 h-4 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" role="status" aria-label="Loading"></div>
); 