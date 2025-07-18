import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { vi } from 'vitest';
import { ThemeProvider } from '@/components/ThemeProvider';
import { TooltipProvider } from '@/components/ui/tooltip';

// Custom render function that includes all necessary providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="system">
      <TooltipProvider>
        {children}
      </TooltipProvider>
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything
export * from '@testing-library/react';

// Override render method
export { customRender as render };

// Test data helpers
export const mockServices = [
  {
    id: 'automation-ai',
    title: 'Automation & AI',
    description: 'Intelligent automation solutions',
    image: '/assets/automation-ai-bg.svg',
    features: ['Feature 1', 'Feature 2'],
    benefits: ['Benefit 1', 'Benefit 2'],
  },
];

export const mockProjects = [
  {
    id: 'project-1',
    title: 'Test Project',
    description: 'Test description',
    image: '/assets/placeholder.svg',
    category: 'automation',
    technologies: ['React', 'Node.js'],
    client: 'Test Client',
    duration: '3 months',
    results: ['Result 1', 'Result 2'],
  },
];

export const mockBlogPosts = [
  {
    id: 'test-post',
    title: 'Test Blog Post',
    excerpt: 'Test excerpt',
    content: 'Test content',
    author: 'Test Author',
    date: '2024-01-01',
    readTime: '5 min read',
    image: '/assets/placeholder.svg',
    tags: ['AI', 'Technology'],
  },
];

// Mock Intersection Observer
export const mockIntersectionObserver = () => {
  const mockIntersectionObserver = vi.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
};

// Mock window.scrollTo
export const mockScrollTo = () => {
  Object.defineProperty(window, 'scrollTo', {
    value: vi.fn(),
    writable: true,
  });
};

// Mock fetch
export const mockFetch = (data: any) => {
  return vi.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(data),
    })
  );
};

// Test user actions
export const userActions = {
  click: async (element: HTMLElement) => {
    element.click();
    await new Promise(resolve => setTimeout(resolve, 0));
  },
  
  type: async (element: HTMLElement, text: string) => {
    element.focus();
    element.textContent = text;
    element.dispatchEvent(new Event('input', { bubbles: true }));
    await new Promise(resolve => setTimeout(resolve, 0));
  },
  
  submit: async (form: HTMLFormElement) => {
    form.dispatchEvent(new Event('submit', { bubbles: true }));
    await new Promise(resolve => setTimeout(resolve, 0));
  },
}; 