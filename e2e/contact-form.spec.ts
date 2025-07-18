import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('should display contact form with all fields', async ({ page }) => {
    // Check for form fields
    await expect(page.getByLabel(/name/i)).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/phone/i)).toBeVisible();
    await expect(page.getByLabel(/service/i)).toBeVisible();
    await expect(page.getByLabel(/message/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /send message/i })).toBeVisible();
  });

  test('should validate required fields', async ({ page }) => {
    const submitButton = page.getByRole('button', { name: /send message/i });
    
    // Try to submit empty form
    await submitButton.click();
    
    // Should show validation errors
    await expect(page.getByText(/name is required/i)).toBeVisible();
    await expect(page.getByText(/email is required/i)).toBeVisible();
    await expect(page.getByText(/message is required/i)).toBeVisible();
  });

  test('should validate email format', async ({ page }) => {
    const emailInput = page.getByLabel(/email/i);
    
    // Enter invalid email
    await emailInput.fill('invalid-email');
    await emailInput.blur();
    
    // Should show validation error
    await expect(page.getByText(/please enter a valid email/i)).toBeVisible();
  });

  test('should submit form successfully with valid data', async ({ page }) => {
    // Mock the API response
    await page.route('/api/contact', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true }),
      });
    });

    // Fill in form fields
    await page.getByLabel(/name/i).fill('John Doe');
    await page.getByLabel(/email/i).fill('john@example.com');
    await page.getByLabel(/phone/i).fill('+1234567890');
    await page.getByLabel(/service/i).selectOption('automation-ai');
    await page.getByLabel(/message/i).fill('Test message');

    // Submit form
    const submitButton = page.getByRole('button', { name: /send message/i });
    await submitButton.click();

    // Should show success message
    await expect(page.getByText(/message sent successfully/i)).toBeVisible();
  });

  test('should handle form submission error', async ({ page }) => {
    // Mock API error
    await page.route('/api/contact', async route => {
      await route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Server error' }),
      });
    });

    // Fill in form fields
    await page.getByLabel(/name/i).fill('John Doe');
    await page.getByLabel(/email/i).fill('john@example.com');
    await page.getByLabel(/message/i).fill('Test message');

    // Submit form
    const submitButton = page.getByRole('button', { name: /send message/i });
    await submitButton.click();

    // Should show error message
    await expect(page.getByText(/failed to send message/i)).toBeVisible();
  });

  test('should disable submit button during submission', async ({ page }) => {
    // Mock slow API response
    await page.route('/api/contact', async route => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true }),
      });
    });

    // Fill in form fields
    await page.getByLabel(/name/i).fill('John Doe');
    await page.getByLabel(/email/i).fill('john@example.com');
    await page.getByLabel(/message/i).fill('Test message');

    // Submit form
    const submitButton = page.getByRole('button', { name: /send message/i });
    await submitButton.click();

    // Button should be disabled during submission
    await expect(submitButton).toBeDisabled();
  });

  test('should clear form after successful submission', async ({ page }) => {
    // Mock the API response
    await page.route('/api/contact', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true }),
      });
    });

    // Fill in form fields
    await page.getByLabel(/name/i).fill('John Doe');
    await page.getByLabel(/email/i).fill('john@example.com');
    await page.getByLabel(/phone/i).fill('+1234567890');
    await page.getByLabel(/service/i).selectOption('automation-ai');
    await page.getByLabel(/message/i).fill('Test message');

    // Submit form
    const submitButton = page.getByRole('button', { name: /send message/i });
    await submitButton.click();

    // Wait for success message
    await expect(page.getByText(/message sent successfully/i)).toBeVisible();

    // Form should be cleared
    await expect(page.getByLabel(/name/i)).toHaveValue('');
    await expect(page.getByLabel(/email/i)).toHaveValue('');
    await expect(page.getByLabel(/phone/i)).toHaveValue('');
    await expect(page.getByLabel(/message/i)).toHaveValue('');
  });

  test('should handle network errors gracefully', async ({ page }) => {
    // Mock network error
    await page.route('/api/contact', async route => {
      await route.abort();
    });

    // Fill in form fields
    await page.getByLabel(/name/i).fill('John Doe');
    await page.getByLabel(/email/i).fill('john@example.com');
    await page.getByLabel(/message/i).fill('Test message');

    // Submit form
    const submitButton = page.getByRole('button', { name: /send message/i });
    await submitButton.click();

    // Should show error message
    await expect(page.getByText(/failed to send message/i)).toBeVisible();
  });
}); 