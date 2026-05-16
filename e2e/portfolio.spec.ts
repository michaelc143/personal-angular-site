import { test, expect } from '@playwright/test';

test.describe('Portfolio E2E Tests', () => {
  
  test('should load the home page and display the hybrid hero copy', async ({ page }) => {
    await page.goto('/');
    
    // Check for the updated professional title
    const title = page.locator('mat-card-title h1');
    await expect(title).toContainText('Michael Corbishley');
    
    // Check for the consultant-focused subtitle and architect title
    const subtitle = page.locator('.subtitle');
    await expect(subtitle).toContainText('Software Development Consultant');
    await expect(subtitle).toContainText('Enterprise SaaS Architect');
    
    // Check for "Consultant" and "SAP/Oracle" in the bio
    const bio = page.locator('.bio-text');
    await expect(bio).toContainText('Software Development Consultant');
    await expect(bio).toContainText('SAP and Oracle');
  });

  test('should navigate to projects page and verify enterprise content', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to projects
    await page.getByRole('link', { name: 'View My Work' }).click();
    await expect(page).toHaveURL(/.*projects/);
    
    // Check for the renamed enterprise project
    const projectTitle = page.locator('mat-card-title').filter({ hasText: 'Enterprise-Scale Architecture Kit' });
    await expect(projectTitle).toBeVisible();
    
    // Check for impact-oriented tags (matching actual casing)
    const tags = page.locator('.tag');
    await expect(tags).toContainText(['Architecture', 'Spring Boot']);
  });

  test('should toggle dark mode and maintain accessibility', async ({ page }) => {
    await page.goto('/');
    
    const body = page.locator('body');
    const toggle = page.locator('app-app-dark-mode-toggle button');
    
    // Initial state check (assuming light mode default)
    // The component might have a delay or logic, so we wait for the class
    
    await toggle.click();
    await expect(body).toHaveClass(/dark-mode/);
    
    // Verify visibility of key elements in dark mode
    const title = page.locator('mat-card-title h1');
    await expect(title).toBeVisible();
    await expect(title).toHaveCSS('color', 'rgb(97, 218, 251)'); // --primary-color in dark mode (#61dafb)
  });

  test('should be responsive on mobile viewports', async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Verify mobile profile pic is visible and desktop one is hidden
    const mobilePic = page.locator('.profile-pic--mobile');
    const desktopPic = page.locator('.profile-pic--desktop');
    
    await expect(mobilePic).toBeVisible();
    await expect(desktopPic).not.toBeVisible();
    
    // Verify CTA links stack or center
    const ctaLinks = page.locator('.cta-links');
    await expect(ctaLinks).toHaveCSS('justify-content', 'center');
  });

});
