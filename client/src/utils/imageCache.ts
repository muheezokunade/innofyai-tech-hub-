// Simple in-memory cache for images to reduce repeated requests
class ImageCache {
  private cache = new Map<string, { data: string; timestamp: number }>();
  private readonly maxAge = 5 * 60 * 1000; // 5 minutes
  private readonly maxSize = 50; // Maximum number of cached images

  set(key: string, data: string): void {
    // Clean up old entries if cache is full
    if (this.cache.size >= this.maxSize) {
      const oldestKey = this.cache.keys().next().value;
      if (oldestKey) {
        this.cache.delete(oldestKey);
      }
    }

    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }

  get(key: string): string | null {
    const entry = this.cache.get(key);
    if (!entry) return null;

    // Check if entry is still valid
    if (Date.now() - entry.timestamp > this.maxAge) {
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  has(key: string): boolean {
    return this.cache.has(key);
  }

  clear(): void {
    this.cache.clear();
  }

  // Clean up expired entries
  cleanup(): void {
    const now = Date.now();
    const keysToDelete: string[] = [];
    
    this.cache.forEach((entry, key) => {
      if (now - entry.timestamp > this.maxAge) {
        keysToDelete.push(key);
      }
    });
    
    keysToDelete.forEach(key => {
      this.cache.delete(key);
    });
  }
}

export const imageCache = new ImageCache();

// Clean up cache periodically
setInterval(() => {
  imageCache.cleanup();
}, 60000); // Every minute

// Generate a cache key for an image URL
export function getCacheKey(url: string): string {
  return url.split('?')[0]; // Remove query parameters for caching
}

// Check if we should skip external images due to rate limiting
let rateLimitDetected = false;
let rateLimitResetTime = 0;

export function setRateLimitDetected(): void {
  rateLimitDetected = true;
  rateLimitResetTime = Date.now() + 60000; // Reset after 1 minute
}

export function isRateLimited(): boolean {
  if (rateLimitDetected && Date.now() > rateLimitResetTime) {
    rateLimitDetected = false;
    return false;
  }
  return rateLimitDetected;
}

// Get a placeholder image based on category
export function getPlaceholderImage(category: string = "default"): string {
  const placeholders = {
    tech: `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%231e293b;stop-opacity:1" /><stop offset="50%" style="stop-color:%234c1d95;stop-opacity:0.8" /><stop offset="100%" style="stop-color:%231e293b;stop-opacity:1" /></linearGradient></defs><rect width="800" height="400" fill="url(%23grad)"/><text x="400" y="180" font-family="Arial" font-size="20" fill="white" text-anchor="middle">Tech Consulting</text><text x="400" y="220" font-family="Arial" font-size="16" fill="white" text-anchor="middle">InnofyAI</text></svg>`,
    branding: `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23f59e0b;stop-opacity:1" /><stop offset="50%" style="stop-color:%23dc2626;stop-opacity:0.8" /><stop offset="100%" style="stop-color:%23f59e0b;stop-opacity:1" /></linearGradient></defs><rect width="800" height="400" fill="url(%23grad)"/><text x="400" y="180" font-family="Arial" font-size="20" fill="white" text-anchor="middle">Brand Identity</text><text x="400" y="220" font-family="Arial" font-size="16" fill="white" text-anchor="middle">InnofyAI</text></svg>`,
    default: `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%231e293b;stop-opacity:1" /><stop offset="50%" style="stop-color:%234c1d95;stop-opacity:0.8" /><stop offset="100%" style="stop-color:%231e293b;stop-opacity:1" /></linearGradient></defs><rect width="800" height="400" fill="url(%23grad)"/><text x="400" y="180" font-family="Arial" font-size="20" fill="white" text-anchor="middle">InnofyAI</text><text x="400" y="220" font-family="Arial" font-size="16" fill="white" text-anchor="middle">Tech Excellence</text></svg>`
  };
  
  return placeholders[category as keyof typeof placeholders] || placeholders.default;
} 