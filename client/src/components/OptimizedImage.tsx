import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { imageCache, getCacheKey, setRateLimitDetected, isRateLimited, getPlaceholderImage as getCachedPlaceholder } from "../utils/imageCache";
import { imagePreloader } from "../utils/imagePreloader";

const KNOWN_OPTIMIZATION_HOSTS = new Set<string>([
  'images.pexels.com',
  'i.postimg.cc',
  'asoapparel.com',
]);

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fallbackSrc?: string;
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpeg' | 'png';
  optimizeExternal?: boolean; // new: only append params for external hosts when true
}

export function OptimizedImage({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "100vw",
  fallbackSrc,
  width,
  height,
  quality = 85,
  format = 'webp',
  optimizeExternal = false,
}: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [isPreloaded, setIsPreloaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
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

  // Optimize image URL with parameters
  const getOptimizedUrl = useCallback((url: string) => {
    if (!url || url.startsWith('data:') || url.startsWith('/assets/')) {
      return url;
    }

    // External images: only add params if opted-in AND host is known to support them
    if (url.startsWith('http')) {
      try {
        const urlObj = new URL(url);
        const host = urlObj.hostname.toLowerCase();

        if (!optimizeExternal || !KNOWN_OPTIMIZATION_HOSTS.has(host)) {
          return url; // do not append params for unknown hosts
        }

        if (format && !urlObj.searchParams.has('format')) {
          urlObj.searchParams.set('format', format);
        }
        if (quality && !urlObj.searchParams.has('q')) {
          urlObj.searchParams.set('q', quality.toString());
        }
        if (width && !urlObj.searchParams.has('w')) {
          urlObj.searchParams.set('w', width.toString());
        }
        if (height && !urlObj.searchParams.has('h')) {
          urlObj.searchParams.set('h', height.toString());
        }
        return urlObj.toString();
      } catch {
        return url;
      }
    }
    
    return url;
  }, [format, quality, width, height, optimizeExternal]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px 0px', // Start loading 50px before the image comes into view
        threshold: 0.1
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
      observerRef.current = observer;
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [priority]);

  // Preload critical images
  useEffect(() => {
    if (priority && src && !src.startsWith('data:')) {
      const optimizedSrc = getOptimizedUrl(src);
      imagePreloader.preloadImage(optimizedSrc)
        .then(() => setIsPreloaded(true))
        .catch(() => setIsPreloaded(false));
    }
  }, [priority, src, getOptimizedUrl]);

  const handleImageLoad = useCallback(() => {
    setIsLoading(false);
    setHasError(false);
    setRetryCount(0);
    setIsLoaded(true);
    
    // Cache the successful image
    if (src && !src.startsWith('data:')) {
      const cacheKey = getCacheKey(src);
      imageCache.set(cacheKey, imageSrc);
    }
  }, [src, imageSrc]);

  const handleImageError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
    
    if (retryCount < maxRetries) {
      // Retry with exponential backoff and cache busting
      const retryDelay = Math.pow(2, retryCount) * 1000;
      setTimeout(() => {
        setRetryCount(prev => prev + 1);
        const cacheBuster = `retry=${retryCount + 1}&t=${Date.now()}`;
        const separator = src.includes('?') ? '&' : '?';
        const newSrc = `${src}${separator}${cacheBuster}`;
        setImageSrc(getOptimizedUrl(newSrc));
        setIsLoading(true);
      }, retryDelay);
    } else {
      // Try fallback image if provided
      if (fallbackSrc && imageSrc !== fallbackSrc) {
        setImageSrc(getOptimizedUrl(fallbackSrc));
        setIsLoading(true);
        setRetryCount(0);
      } else {
        // Use default gradient fallback
        setImageSrc(defaultFallback);
        setIsLoading(false);
      }
    }
  }, [src, imageSrc, retryCount, fallbackSrc, defaultFallback, getOptimizedUrl]);

  useEffect(() => {
    const optimizedSrc = getOptimizedUrl(src);
    setImageSrc(optimizedSrc);
    setIsLoading(true);
    setHasError(false);
    setRetryCount(0);
    setIsLoaded(false);
  }, [src, getOptimizedUrl]);

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
        setIsLoaded(true);
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

  // Only render the image when it's in view or priority
  if (!isInView) {
    return (
      <div 
        ref={imageRef}
        className={`${className} bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-pulse`}
        style={{ minHeight: height || '200px' }}
      />
    );
  }

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
        ref={imageRef}
        src={imageSrc}
        alt={alt}
        className={`w-full h-full transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${imageSrc.endsWith('.svg') ? 'object-contain' : 'object-cover'}`}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        width={width}
        height={height}
        onLoad={handleImageLoad}
        onError={handleImageError}
        style={{
          // Ensure SVG images scale properly and maintain aspect ratio
          ...(imageSrc.endsWith('.svg') && {
            backgroundColor: 'transparent',
            minHeight: '100%',
            minWidth: '100%'
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

export function getOptimizedImageSrc(originalSrc: string, options?: {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpeg' | 'png';
  optimizeExternal?: boolean;
}): string {
  if (!originalSrc || originalSrc.startsWith('data:') || originalSrc.startsWith('/assets/')) {
    return originalSrc;
  }

  if (originalSrc.startsWith('http')) {
    try {
      const urlObj = new URL(originalSrc);
      const host = urlObj.hostname.toLowerCase();

      if (!options?.optimizeExternal || !KNOWN_OPTIMIZATION_HOSTS.has(host)) {
        return originalSrc;
      }

      if (options?.format && !urlObj.searchParams.has('format')) {
        urlObj.searchParams.set('format', options.format);
      }
      if (options?.quality && !urlObj.searchParams.has('q')) {
        urlObj.searchParams.set('q', options.quality.toString());
      }
      if (options?.width && !urlObj.searchParams.has('w')) {
        urlObj.searchParams.set('w', options.width.toString());
      }
      if (options?.height && !urlObj.searchParams.has('h')) {
        urlObj.searchParams.set('h', options.height.toString());
      }
      return urlObj.toString();
    } catch {
      return originalSrc;
    }
  }
  
  return originalSrc;
}
