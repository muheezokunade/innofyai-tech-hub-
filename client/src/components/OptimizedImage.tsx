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
  const [isPreloaded, setIsPreloaded] = useState(false);
  const maxRetries = 3;

  // Determine category based on alt text or src
  const getCategory = () => {
    const lowerAlt = alt.toLowerCase();
    if (lowerAlt.includes('brand') || lowerAlt.includes('logo') || lowerAlt.includes('identity')) return 'branding';
    if (lowerAlt.includes('tech') || lowerAlt.includes('app') || lowerAlt.includes('software')) return 'tech';
    if (lowerAlt.includes('automation') || lowerAlt.includes('ai')) return 'tech';
    if (lowerAlt.includes('security') || lowerAlt.includes('cyber')) return 'tech';
    if (lowerAlt.includes('data') || lowerAlt.includes('analytics')) return 'tech';
    if (lowerAlt.includes('design') || lowerAlt.includes('ui') || lowerAlt.includes('ux')) return 'creative';
    if (lowerAlt.includes('social') || lowerAlt.includes('media')) return 'creative';
    if (lowerAlt.includes('branding') || lowerAlt.includes('merch')) return 'creative';
    return 'default';
  };

  const category = getCategory();
  const defaultFallback = getCachedPlaceholder(category);

  // Preload critical images
  useEffect(() => {
    if (priority && src && !src.startsWith('data:')) {
      const img = new Image();
      img.onload = () => setIsPreloaded(true);
      img.onerror = () => setIsPreloaded(false);
      img.src = src;
    }
  }, [priority, src]);

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
      // Retry with exponential backoff and cache busting
      const retryDelay = Math.pow(2, retryCount) * 1000;
      setTimeout(() => {
        setRetryCount(prev => prev + 1);
        const cacheBuster = `?retry=${retryCount + 1}&t=${Date.now()}`;
        setImageSrc(src.includes('?') ? `${src}&${cacheBuster}` : `${src}${cacheBuster}`);
        setIsLoading(true);
      }, retryDelay);
    } else {
      // Try fallback image if provided
      if (fallbackSrc && imageSrc !== fallbackSrc) {
        setImageSrc(fallbackSrc);
        setIsLoading(true);
        setRetryCount(0);
      } else {
        // Use default gradient fallback
        setImageSrc(defaultFallback);
        setIsLoading(false);
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

      // For local SVG files, assume they'll load successfully
      if (src.startsWith('/assets/') && src.endsWith('.svg')) {
        return; // Let normal loading handle it
      }

      // Check for rate limiting with HEAD request (only for external URLs)
      if (src.startsWith('http')) {
        const checkRateLimit = async () => {
          try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 3000); // 3s timeout
            
            const response = await fetch(src, { 
              method: 'HEAD',
              signal: controller.signal
            });
            clearTimeout(timeoutId);
            
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
        style={{
          // Ensure SVG images scale properly
          ...(imageSrc.endsWith('.svg') && {
            objectFit: 'contain',
            backgroundColor: 'transparent'
          })
        }}
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
