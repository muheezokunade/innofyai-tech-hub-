import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ContactForm } from '../ContactForm';
import { ThemeProvider } from '../ThemeProvider';

// Mock the toast hook
const mockToast = vi.fn();
vi.mock('@/hooks/use-toast', () => ({
  useToast: () => ({ toast: mockToast })
}));

// Mock fetch
const mockFetch = vi.fn();
global.fetch = mockFetch;

describe('ContactForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ success: true, message: 'Message sent successfully' }),
    });
  });

  it('renders all form fields', () => {
    render(
      <ThemeProvider>
        <ContactForm />
      </ThemeProvider>
    );

    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/company/i)).toBeInTheDocument();
    expect(screen.getByText(/service interest/i)).toBeInTheDocument();
    expect(screen.getAllByText(/budget range/i)).toHaveLength(2);
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('submits form successfully with valid data', async () => {
    render(
      <ThemeProvider>
        <ContactForm />
      </ThemeProvider>
    );

    // Fill in required fields
    fireEvent.change(screen.getByLabelText(/full name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Test message' },
    });

    // Submit form
    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);

    // Wait for submission
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'John Doe',
          email: 'john@example.com',
          company: '',
          service: '',
          budget: '',
          message: 'Test message',
        }),
      });
    });

    // Check success toast
    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith({
        title: 'Message sent successfully!',
        description: 'Message sent successfully',
        duration: 5000,
      });
    });
  });

  it('handles form submission error', async () => {
    mockFetch.mockRejectedValue(new Error('Network error'));

    render(
      <ThemeProvider>
        <ContactForm />
      </ThemeProvider>
    );

    // Fill in required fields
    fireEvent.change(screen.getByLabelText(/full name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Test message' },
    });

    // Submit form
    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);

    // Check error toast
    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith({
        title: 'Failed to send message',
        description: 'Network error',
        variant: 'destructive',
        duration: 5000,
      });
    });
  });

  it('handles server error response', async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      json: () => Promise.resolve({ success: false, message: 'Server error' }),
    });

    render(
      <ThemeProvider>
        <ContactForm />
      </ThemeProvider>
    );

    // Fill in required fields
    fireEvent.change(screen.getByLabelText(/full name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Test message' },
    });

    // Submit form
    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);

    // Check error toast
    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith({
        title: 'Failed to send message',
        description: 'Server error',
        variant: 'destructive',
        duration: 5000,
      });
    });
  });

  it('disables submit button during form submission', async () => {
    mockFetch.mockImplementation(() => new Promise(resolve => setTimeout(resolve, 100)));

    render(
      <ThemeProvider>
        <ContactForm />
      </ThemeProvider>
    );

    // Fill in required fields
    fireEvent.change(screen.getByLabelText(/full name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Test message' },
    });

    // Submit form
    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);

    // Check that button shows loading state
    expect(screen.getByText(/sending message/i)).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });

  it('resets form after successful submission', async () => {
    render(
      <ThemeProvider>
        <ContactForm />
      </ThemeProvider>
    );

    // Fill in form fields
    fireEvent.change(screen.getByLabelText(/full name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/company/i), {
      target: { value: 'Test Company' },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Test message' },
    });

    // Submit form
    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);

    // Wait for form reset
    await waitFor(() => {
      expect(screen.getByLabelText(/full name/i)).toHaveValue('');
      expect(screen.getByLabelText(/email address/i)).toHaveValue('');
      expect(screen.getByLabelText(/company/i)).toHaveValue('');
      expect(screen.getByLabelText(/message/i)).toHaveValue('');
    });
  });
}); 