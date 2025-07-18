// Image preloading utility for critical images
class ImagePreloader {
  private preloadedImages = new Set<string>();
  private preloadQueue: string[] = [];
  private isProcessing = false;

  // Preload a single image
  preloadImage(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.preloadedImages.has(src)) {
        resolve();
        return;
      }

      const img = new Image();
      
      img.onload = () => {
        this.preloadedImages.add(src);
        resolve();
      };
      
      img.onerror = () => {
        // Don't reject, just resolve to avoid blocking
        console.warn(`Failed to preload image: ${src}`);
        resolve();
      };

      img.src = src;
    });
  }

  // Preload multiple images
  async preloadImages(sources: string[]): Promise<void> {
    const promises = sources.map(src => this.preloadImage(src));
    await Promise.allSettled(promises);
  }

  // Add images to preload queue
  queuePreload(sources: string[]): void {
    this.preloadQueue.push(...sources);
    this.processQueue();
  }

  // Process the preload queue
  private async processQueue(): Promise<void> {
    if (this.isProcessing || this.preloadQueue.length === 0) {
      return;
    }

    this.isProcessing = true;
    
    while (this.preloadQueue.length > 0) {
      const batch = this.preloadQueue.splice(0, 5); // Process 5 at a time
      await this.preloadImages(batch);
      
      // Small delay to prevent blocking
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    this.isProcessing = false;
  }

  // Check if image is preloaded
  isPreloaded(src: string): boolean {
    return this.preloadedImages.has(src);
  }

  // Clear preloaded images (useful for memory management)
  clear(): void {
    this.preloadedImages.clear();
  }

  // Get preload status
  getStatus(): { preloaded: number; queued: number } {
    return {
      preloaded: this.preloadedImages.size,
      queued: this.preloadQueue.length
    };
  }
}

// Critical images that should be preloaded immediately
const CRITICAL_IMAGES = [
  '/assets/automation-ai-bg.svg',
  '/assets/cybersecurity-bg.svg',
  '/assets/data-analytics-bg.svg',
  '/assets/ui-ux-design-bg.svg',
  '/assets/branding-merch-bg.svg',
  '/assets/software-engineering-bg.svg',
  '/assets/social-media-bg.svg',
  '/assets/commerza-automation.svg',
  '/assets/spicepop-ecommerce.svg',
  '/assets/growwise-financial.svg',
  '/assets/osinachi-renewable.svg',
  '/assets/placeholder.svg'
];

// Create singleton instance
export const imagePreloader = new ImagePreloader();

// Initialize preloading of critical images
export function initializeImagePreloading(): void {
  // Preload critical images immediately
  imagePreloader.preloadImages(CRITICAL_IMAGES);
  
  // Also queue them for background processing
  imagePreloader.queuePreload(CRITICAL_IMAGES);
}

// Preload images for a specific route/page
export function preloadRouteImages(images: string[]): void {
  imagePreloader.queuePreload(images);
}

// Preload images for a component
export function preloadComponentImages(images: string[]): void {
  imagePreloader.queuePreload(images);
}

// Hook for React components to preload images
export function useImagePreloader(images: string[], dependencies: any[] = []): void {
  // This would be used in React components with useEffect
  // For now, just preload the images directly
  if (images.length > 0) {
    preloadComponentImages(images);
  }
} 