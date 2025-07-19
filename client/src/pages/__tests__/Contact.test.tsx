import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Contact from '../Contact';
import { ThemeProvider } from '@/components/ThemeProvider';

// Mock the ContactForm component
vi.mock('@/components/ContactForm', () => ({
  ContactForm: () => <div data-testid="contact-form">Contact Form Component</div>
}));

// Mock the SEO component
vi.mock('@/components/SEO', () => ({
  default: ({ title, description }: { title: string; description: string }) => (
    <div data-testid="seo">
      <title>{title}</title>
      <meta name="description" content={description} />
    </div>
  )
}));

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }: any) => <h3 {...props}>{children}</h3>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  }
}));

// Mock the animations
vi.mock('@/lib/animations', () => ({
  scrollRevealVariants: {},
  staggerContainerVariants: {},
  fadeUpVariants: {},
  buttonHoverVariants: {},
  cardHoverVariants: {},
}));

// Mock the structured data
vi.mock('@/lib/structuredData', () => ({
  generateOrganizationStructuredData: () => ({})
}));

describe('Contact Page', () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <Contact />
      </ThemeProvider>
    );
  });

  it('renders contact page with correct title and description', () => {
    // Check for the h1 element containing the title
    const titleElement = screen.getByRole('heading', { level: 1 });
    expect(titleElement).toHaveTextContent("Let's");
    expect(titleElement).toHaveTextContent("Connect");
    expect(screen.getByText(/Ready to transform your business/)).toBeInTheDocument();
  });

  it('displays contact form component', () => {
    expect(screen.getByTestId('contact-form')).toBeInTheDocument();
  });

  it('shows contact information sections', () => {
    expect(screen.getByText('Office')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Phone')).toBeInTheDocument();
    expect(screen.getAllByText('Response Time')).toHaveLength(2);
  });

  it('displays contact details correctly', () => {
    expect(screen.getByText('13, signature estate, Ikota, Lekki')).toBeInTheDocument();
    expect(screen.getByText('info@innofyai.com')).toBeInTheDocument();
    expect(screen.getByText('+234 810 811 4407')).toBeInTheDocument();
  });

  it('shows social media links', () => {
    expect(screen.getByText('Follow us')).toBeInTheDocument();
    // Check for social media links by their aria-labels
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument();
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument();
    expect(screen.getByLabelText('TikTok')).toBeInTheDocument();
  });

  it('displays statistics section', () => {
    expect(screen.getByText('24h')).toBeInTheDocument();
    expect(screen.getByText('98%')).toBeInTheDocument();
    expect(screen.getByText('15+')).toBeInTheDocument();
    expect(screen.getByText('20+')).toBeInTheDocument();
  });

  it('shows correct section headings', () => {
    expect(screen.getByText('Start Your Project')).toBeInTheDocument();
    expect(screen.getByText('Get in touch')).toBeInTheDocument();
  });
}); 