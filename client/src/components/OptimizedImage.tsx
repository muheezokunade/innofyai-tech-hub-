import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { imageCache, getCacheKey, setRateLimitDetected, isRateLimited, getPlaceholderImage as getCachedPlaceholder } from "../utils/imageCache";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fallbackSrc?: string;
}



export function OptimizedImage({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "100vw",
  fallbackSrc
}: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 2;

  // Determine category based on alt text or src
  const getCategory = () => {
    const lowerAlt = alt.toLowerCase();
    if (lowerAlt.includes('brand') || lowerAlt.includes('logo') || lowerAlt.includes('identity')) return 'branding';
    if (lowerAlt.includes('tech') || lowerAlt.includes('app') || lowerAlt.includes('software')) return 'tech';
    return 'default';
  };

  const category = getCategory();
  const defaultFallback = getCachedPlaceholder(category);

  const handleImageLoad = () => {
    setIsLoading(false);
    setHasError(false);
    setRetryCount(0);
    
    // Cache the successful image
    if (src && !src.startsWith('data:')) {
      const cacheKey = getCacheKey(src);
      imageCache.set(cacheKey, imageSrc);
    }
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
    
    if (retryCount < maxRetries) {
      // Retry with exponential backoff
      setTimeout(() => {
        setRetryCount(prev => prev + 1);
        setImageSrc(`${src}?retry=${retryCount + 1}&t=${Date.now()}`);
        setIsLoading(true);
      }, Math.pow(2, retryCount) * 1000);
    } else {
      // Try fallback image if provided
      if (fallbackSrc && imageSrc !== fallbackSrc) {
        setImageSrc(fallbackSrc);
        setIsLoading(true);
      } else {
        // Use default gradient fallback
        setImageSrc(defaultFallback);
      }
    }
  };

  useEffect(() => {
    setImageSrc(src);
    setIsLoading(true);
    setHasError(false);
    setRetryCount(0);
  }, [src]);

  // Check cache and rate limiting
  useEffect(() => {
    if (src && !src.startsWith('data:')) {
      // Check if we're rate limited
      if (isRateLimited()) {
        setImageSrc(defaultFallback);
        setIsLoading(false);
        setHasError(true);
        return;
      }

      // Check cache first
      const cacheKey = getCacheKey(src);
      const cachedImage = imageCache.get(cacheKey);
      if (cachedImage) {
        setImageSrc(cachedImage);
        setIsLoading(false);
        return;
      }

      // Check for rate limiting with HEAD request
      const checkRateLimit = async () => {
        try {
          const response = await fetch(src, { method: 'HEAD' });
          if (response.status === 429) {
            setRateLimitDetected();
            setImageSrc(defaultFallback);
            setIsLoading(false);
            setHasError(true);
          }
        } catch (error) {
          // Network error, continue with normal loading
        }
      };

      checkRateLimit();
    }
  }, [src, defaultFallback]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
        </motion.div>
      )}
      
      <img
        src={imageSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
      
      {hasError && imageSrc === defaultFallback && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <div className="text-sm mb-2">Image temporarily unavailable</div>
            <div className="text-xs">{alt}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export function getOptimizedImageSrc(originalSrc: string): string {
  // For now, return the original src
  // In production, you could implement image optimization here
  return originalSrc;
}
