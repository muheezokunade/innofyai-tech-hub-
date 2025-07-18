import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@/test/utils';
import { OptimizedImage } from '../OptimizedImage';

// Mock the image cache utility
vi.mock('@/utils/imageCache', () => ({
  imageCache: new Map(),
  getCacheKey: vi.fn((src) => `cache-${src}`),
  setRateLimitDetected: vi.fn(),
  isRateLimited: vi.fn(() => false),
  getPlaceholderImage: vi.fn(() => '/assets/placeholder.svg'),
}));

// Mock the image preloader
vi.mock('@/utils/imagePreloader', () => ({
  imagePreloader: {
    preloadImage: vi.fn(() => Promise.resolve()),
  },
}));

describe('OptimizedImage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders image with correct src and alt', () => {
    render(
      <OptimizedImage
        src="/test-image.jpg"
        alt="Test image"
      />
    );

    const img = screen.getByAltText('Test image');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/test-image.jpg');
  });

  it('applies correct CSS classes for different image types', () => {
    const { rerender } = render(
      <OptimizedImage
        src="/test.svg"
        alt="SVG image"
      />
    );

    let img = screen.getByAltText('SVG image');
    expect(img).toHaveClass('object-contain');

    rerender(
      <OptimizedImage
        src="/test.jpg"
        alt="JPG image"
      />
    );

    img = screen.getByAltText('JPG image');
    expect(img).toHaveClass('object-cover');
  });

  it('handles loading state correctly', async () => {
    render(
      <OptimizedImage
        src="/test-image.jpg"
        alt="Test image"
      />
    );

    const img = screen.getByAltText('Test image');
    
    // Initially should have loading opacity
    expect(img).toHaveClass('opacity-0');
    
    // Simulate image load
    img.dispatchEvent(new Event('load'));
    
    await waitFor(() => {
      expect(img).toHaveClass('opacity-100');
    });
  });

  it('handles error state gracefully', async () => {
    render(
      <OptimizedImage
        src="/invalid-image.jpg"
        alt="Invalid image"
      />
    );

    const img = screen.getByAltText('Invalid image');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/invalid-image.jpg');
  });

  it('applies priority loading when specified', () => {
    render(
      <OptimizedImage
        src="/test-image.jpg"
        alt="Priority image"
        priority={true}
      />
    );

    const img = screen.getByAltText('Priority image');
    expect(img).toHaveAttribute('loading', 'eager');
  });

  it('applies lazy loading by default', () => {
    render(
      <OptimizedImage
        src="/test-image.jpg"
        alt="Lazy image"
      />
    );

    const img = screen.getByAltText('Lazy image');
    expect(img).toHaveAttribute('loading', 'lazy');
  });

  it('applies custom className to container', () => {
    render(
      <OptimizedImage
        src="/test-image.jpg"
        alt="Test image"
        className="custom-class"
      />
    );

    const container = screen.getByAltText('Test image').parentElement;
    expect(container).toHaveClass('custom-class');
  });
}); 