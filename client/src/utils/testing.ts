// Testing utilities for forms, interactions, and accessibility

export interface TestResult {
  passed: boolean;
  message: string;
  details?: any;
}

export interface AccessibilityTest {
  name: string;
  test: () => Promise<TestResult>;
}

export interface FormTest {
  name: string;
  test: () => Promise<TestResult>;
}

export interface ResponsiveTest {
  name: string;
  width: number;
  height: number;
  test: () => Promise<TestResult>;
}

// Form validation testing
export const testContactForm = async (): Promise<TestResult[]> => {
  const results: TestResult[] = [];

  // Test form fields exist
  const formFields = ['name', 'email', 'company', 'service', 'budget', 'message'];
  for (const field of formFields) {
    const element = document.querySelector(`[name="${field}"]`) as HTMLInputElement;
    if (element) {
      results.push({
        passed: true,
        message: `Form field "${field}" exists`,
        details: { field, type: element.type }
      });
    } else {
      results.push({
        passed: false,
        message: `Form field "${field}" missing`,
        details: { field }
      });
    }
  }

  // Test form submission
  try {
    const form = document.querySelector('form') as HTMLFormElement;
    if (form) {
      const formData = new FormData(form);
      const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
      
      if (submitButton) {
        results.push({
          passed: true,
          message: 'Submit button exists',
          details: { buttonText: submitButton.textContent }
        });
      } else {
        results.push({
          passed: false,
          message: 'Submit button missing'
        });
      }
    } else {
      results.push({
        passed: false,
        message: 'Contact form not found'
      });
    }
  } catch (error: any) {
    results.push({
      passed: false,
      message: 'Form submission test failed',
      details: { error: error.message }
    });
  }

  return results;
};

// Accessibility testing
export const testAccessibility = async (): Promise<TestResult[]> => {
  const results: TestResult[] = [];

  // Test alt text for images
  const images = document.querySelectorAll('img');
  images.forEach((img, index) => {
    if (img.alt) {
      results.push({
        passed: true,
        message: `Image ${index + 1} has alt text`,
        details: { alt: img.alt }
      });
    } else {
      results.push({
        passed: false,
        message: `Image ${index + 1} missing alt text`,
        details: { src: img.src }
      });
    }
  });

  // Test heading hierarchy
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let previousLevel = 0;
  let hasH1 = false;

  headings.forEach((heading, index) => {
    const level = parseInt(heading.tagName.charAt(1));
    
    if (level === 1) hasH1 = true;
    
    if (level > previousLevel + 1) {
      results.push({
        passed: false,
        message: `Heading hierarchy skipped from h${previousLevel} to h${level}`,
        details: { heading: heading.textContent, level }
      });
    }
    
    previousLevel = level;
  });

  if (!hasH1) {
    results.push({
      passed: false,
      message: 'Page missing h1 heading'
    });
  } else {
    results.push({
      passed: true,
      message: 'Page has h1 heading'
    });
  }

  // Test ARIA labels
  const elementsWithAria = document.querySelectorAll('[aria-label], [aria-labelledby]');
  elementsWithAria.forEach((element, index) => {
    const ariaLabel = element.getAttribute('aria-label');
    const ariaLabelledBy = element.getAttribute('aria-labelledby');
    
    if (ariaLabel || ariaLabelledBy) {
      results.push({
        passed: true,
        message: `Element ${index + 1} has ARIA label`,
        details: { ariaLabel, ariaLabelledBy }
      });
    }
  });

  // Test focus management
  const focusableElements = document.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  if (focusableElements.length > 0) {
    results.push({
      passed: true,
      message: `Found ${focusableElements.length} focusable elements`,
      details: { count: focusableElements.length }
    });
  }

  return results;
};

// Responsive design testing
export const testResponsiveDesign = async (): Promise<TestResult[]> => {
  const results: TestResult[] = [];

  const breakpoints = [
    { name: 'Mobile', width: 375, height: 667 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Desktop', width: 1920, height: 1080 }
  ];

  for (const breakpoint of breakpoints) {
    // Simulate viewport size
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: breakpoint.width,
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: breakpoint.height,
    });

    // Trigger resize event
    window.dispatchEvent(new Event('resize'));

    // Wait for layout to update
    await new Promise(resolve => setTimeout(resolve, 100));

    // Test if content is visible
    const mainContent = document.querySelector('main') || document.querySelector('#root');
    if (mainContent) {
      const rect = mainContent.getBoundingClientRect();
      
      if (rect.width > 0 && rect.height > 0) {
        results.push({
          passed: true,
          message: `Content visible at ${breakpoint.name} (${breakpoint.width}x${breakpoint.height})`,
          details: { breakpoint, dimensions: { width: rect.width, height: rect.height } }
        });
      } else {
        results.push({
          passed: false,
          message: `Content not visible at ${breakpoint.name}`,
          details: { breakpoint }
        });
      }
    }
  }

  return results;
};

// Performance testing
export const testPerformance = async (): Promise<TestResult[]> => {
  const results: TestResult[] = [];

  // Test page load time
  const loadTime = performance.now();
  results.push({
    passed: loadTime < 3000, // 3 seconds threshold
    message: `Page load time: ${loadTime.toFixed(2)}ms`,
    details: { loadTime, threshold: 3000 }
  });

  // Test image loading
  const images = document.querySelectorAll('img');
  const loadedImages = Array.from(images).filter(img => img.complete);
  
  results.push({
    passed: loadedImages.length === images.length,
    message: `Images loaded: ${loadedImages.length}/${images.length}`,
    details: { loaded: loadedImages.length, total: images.length }
  });

  // Test JavaScript errors
  const originalError = console.error;
  const errors: string[] = [];
  
  console.error = (...args) => {
    errors.push(args.join(' '));
    originalError.apply(console, args);
  };

  // Wait a bit for any errors to occur
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  console.error = originalError;

  results.push({
    passed: errors.length === 0,
    message: `JavaScript errors: ${errors.length}`,
    details: { errors }
  });

  return results;
};

// Navigation testing
export const testNavigation = async (): Promise<TestResult[]> => {
  const results: TestResult[] = [];

  // Test navigation links
  const navLinks = document.querySelectorAll('nav a, .navigation a');
  navLinks.forEach((link, index) => {
    const href = link.getAttribute('href');
    if (href) {
      results.push({
        passed: true,
        message: `Navigation link ${index + 1} has href`,
        details: { href, text: link.textContent }
      });
    } else {
      results.push({
        passed: false,
        message: `Navigation link ${index + 1} missing href`,
        details: { text: link.textContent }
      });
    }
  });

  // Test internal links
  const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="#"]');
  results.push({
    passed: internalLinks.length > 0,
    message: `Found ${internalLinks.length} internal links`,
    details: { count: internalLinks.length }
  });

  return results;
};

// Comprehensive test runner
export const runAllTests = async (): Promise<{
  formTests: TestResult[];
  accessibilityTests: TestResult[];
  responsiveTests: TestResult[];
  performanceTests: TestResult[];
  navigationTests: TestResult[];
  summary: {
    total: number;
    passed: number;
    failed: number;
    score: number;
  };
}> => {
  const [
    formTests,
    accessibilityTests,
    responsiveTests,
    performanceTests,
    navigationTests
  ] = await Promise.all([
    testContactForm(),
    testAccessibility(),
    testResponsiveDesign(),
    testPerformance(),
    testNavigation()
  ]);

  const allTests = [
    ...formTests,
    ...accessibilityTests,
    ...responsiveTests,
    ...performanceTests,
    ...navigationTests
  ];

  const passed = allTests.filter(test => test.passed).length;
  const failed = allTests.filter(test => !test.passed).length;
  const total = allTests.length;
  const score = total > 0 ? (passed / total) * 100 : 0;

  return {
    formTests,
    accessibilityTests,
    responsiveTests,
    performanceTests,
    navigationTests,
    summary: {
      total,
      passed,
      failed,
      score
    }
  };
}; 