import { test, expect } from '@playwright/test';

test.describe('Navigation and Basic Functionality', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/');
    
    // Check that the page loads
    await expect(page).toHaveTitle(/InnofyAI/);
    
    // Check for main navigation elements
    await expect(page.getByRole('link', { name: /home/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /about/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /services/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /portfolio/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /blog/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /contact/i })).toBeVisible();
  });

  test('should navigate to About page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /about/i }).click();
    
    await expect(page).toHaveURL(/.*about/);
    await expect(page.getByRole('heading', { name: /about us/i })).toBeVisible();
  });

  test('should navigate to Services page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /services/i }).click();
    
    await expect(page).toHaveURL(/.*services/);
    await expect(page.getByRole('heading', { name: /our services/i })).toBeVisible();
  });

  test('should navigate to Portfolio page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /portfolio/i }).click();
    
    await expect(page).toHaveURL(/.*portfolio/);
    await expect(page.getByRole('heading', { name: /our portfolio/i })).toBeVisible();
  });

  test('should navigate to Blog page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /blog/i }).click();
    
    await expect(page).toHaveURL(/.*blog/);
    await expect(page.getByRole('heading', { name: /latest insights/i })).toBeVisible();
  });

  test('should navigate to Contact page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /contact/i }).click();
    
    await expect(page).toHaveURL(/.*contact/);
    await expect(page.getByRole('heading', { name: /get in touch/i })).toBeVisible();
  });

  test('should have working mobile menu', async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });
    
    await page.goto('/');
    
    // Mobile menu should be hidden initially
    await expect(page.getByRole('button', { name: /menu/i })).toBeVisible();
    
    // Click menu button
    await page.getByRole('button', { name: /menu/i }).click();
    
    // Menu should be visible
    await expect(page.getByRole('navigation')).toBeVisible();
  });

  test('should have working theme toggle', async ({ page }) => {
    await page.goto('/');
    
    // Find theme toggle button
    const themeToggle = page.getByRole('button', { name: /toggle theme/i });
    await expect(themeToggle).toBeVisible();
    
    // Click theme toggle
    await themeToggle.click();
    
    // Check that theme class changes
    await expect(page.locator('html')).toHaveClass(/dark/);
  });

  test('should have working CTA buttons', async ({ page }) => {
    await page.goto('/');
    
    // Check for CTA buttons
    const ctaButtons = page.getByRole('link', { name: /get started/i });
    await expect(ctaButtons.first()).toBeVisible();
    
    // Click CTA button
    await ctaButtons.first().click();
    
    // Should navigate to contact page
    await expect(page).toHaveURL(/.*contact/);
  });

  test('should handle 404 page correctly', async ({ page }) => {
    await page.goto('/non-existent-page');
    
    // Should show 404 page
    await expect(page.getByRole('heading', { name: /page not found/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /go back home/i })).toBeVisible();
  });
}); 