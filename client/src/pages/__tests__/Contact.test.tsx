import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@/test/utils';
import Contact from '../Contact';

// Mock the contact form submission
const mockFetch = vi.fn();
global.fetch = mockFetch;

describe('Contact Page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ success: true }),
    });
  });

  it('renders contact form with all required fields', () => {
    render(<Contact />);

    // Check for form elements
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/service/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('validates required fields on form submission', async () => {
    render(<Contact />);

    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);

    // Wait for validation errors
    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/message is required/i)).toBeInTheDocument();
    });
  });

  it('validates email format', async () => {
    render(<Contact />);

    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.blur(emailInput);

    await waitFor(() => {
      expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument();
    });
  });

  it('submits form successfully with valid data', async () => {
    render(<Contact />);

    // Fill in form fields
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/phone/i), {
      target: { value: '+1234567890' },
    });
    fireEvent.change(screen.getByLabelText(/service/i), {
      target: { value: 'automation-ai' },
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
          phone: '+1234567890',
          service: 'automation-ai',
          message: 'Test message',
        }),
      });
    });
  });

  it('handles form submission error', async () => {
    mockFetch.mockRejectedValue(new Error('Network error'));

    render(<Contact />);

    // Fill in form fields
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Test message' },
    });

    // Submit form
    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);

    // Wait for error message
    await waitFor(() => {
      expect(screen.getByText(/failed to send message/i)).toBeInTheDocument();
    });
  });

  it('shows success message after successful submission', async () => {
    render(<Contact />);

    // Fill in form fields
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Test message' },
    });

    // Submit form
    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);

    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument();
    });
  });

  it('disables submit button during form submission', async () => {
    mockFetch.mockImplementation(() => new Promise(resolve => setTimeout(resolve, 100)));

    render(<Contact />);

    // Fill in form fields
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Test message' },
    });

    // Submit form
    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);

    // Check that button is disabled during submission
    expect(submitButton).toBeDisabled();
  });
}); 