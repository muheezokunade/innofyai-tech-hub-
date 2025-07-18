// Comprehensive image preloading system
class ImagePreloader {
  private preloadedImages = new Set<string>();
  private failedImages = new Set<string>();
  private loadingPromises = new Map<string, Promise<void>>();

  // Preload a single image
  async preloadImage(src: string): Promise<void> {
    // Skip if already preloaded or failed
    if (this.preloadedImages.has(src) || this.failedImages.has(src)) {
      return;
    }

    // Skip if already loading
    if (this.loadingPromises.has(src)) {
      return this.loadingPromises.get(src);
    }

    const loadPromise = new Promise<void>((resolve, reject) => {
      const img = new Image();
      
      img.onload = () => {
        this.preloadedImages.add(src);
        this.loadingPromises.delete(src);
        resolve();
      };
      
      img.onerror = () => {
        this.failedImages.add(src);
        this.loadingPromises.delete(src);
        console.warn(`Failed to preload image: ${src}`);
        reject(new Error(`Failed to load image: ${src}`));
      };

      // Set crossOrigin for external images
      if (src.startsWith('http')) {
        img.crossOrigin = 'anonymous';
      }

      img.src = src;
    });

    this.loadingPromises.set(src, loadPromise);
    return loadPromise;
  }

  // Preload multiple images
  async preloadImages(sources: string[]): Promise<void> {
    const promises = sources.map(src => this.preloadImage(src));
    await Promise.allSettled(promises);
  }

  // Preload critical images for the application
  async preloadCriticalImages(): Promise<void> {
    const criticalImages = [
      // Service background images
      '/assets/automation-ai-bg.svg',
      '/assets/cybersecurity-bg.svg',
      '/assets/data-analytics-bg.svg',
      '/assets/ui-ux-design-bg.svg',
      '/assets/branding-merch-bg.svg',
      '/assets/software-engineering-bg.svg',
      '/assets/social-media-bg.svg',
      
      // Service icons
      '/assets/automation-ai.svg',
      '/assets/cybersecurity.svg',
      '/assets/data-analytics.svg',
      '/assets/ui-ux-design.svg',
      '/assets/branding-merch.svg',
      
      // Case study images
      '/assets/commerza-automation.svg',
      '/assets/spicepop-ecommerce.svg',
      '/assets/growwise-financial.svg',
      '/assets/osinachi-renewable.svg',
      
      // Hero and general assets
      '/assets/tech-hero-bg.svg',
      '/assets/placeholder.svg'
    ];

    console.log('Preloading critical images...');
    await this.preloadImages(criticalImages);
    console.log('Critical images preloaded successfully');
  }

  // Check if an image is preloaded
  isPreloaded(src: string): boolean {
    return this.preloadedImages.has(src);
  }

  // Check if an image failed to load
  hasFailed(src: string): boolean {
    return this.failedImages.has(src);
  }

  // Get preload status for debugging
  getStatus(): { preloaded: string[], failed: string[], loading: string[] } {
    return {
      preloaded: Array.from(this.preloadedImages),
      failed: Array.from(this.failedImages),
      loading: Array.from(this.loadingPromises.keys())
    };
  }

  // Clear all cached data
  clear(): void {
    this.preloadedImages.clear();
    this.failedImages.clear();
    this.loadingPromises.clear();
  }
}

// Create singleton instance
export const imagePreloader = new ImagePreloader();

// Auto-preload critical images when the module is imported
if (typeof window !== 'undefined') {
  // Preload critical images after a short delay to not block initial render
  setTimeout(() => {
    imagePreloader.preloadCriticalImages().catch(console.error);
  }, 100);
} 