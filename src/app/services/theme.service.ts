import {Injectable, signal, effect} from '@angular/core';

/**
 * ThemeService manages the application's theme state (light/dark/system)
 *
 * This service uses Angular Signals for reactive state management and provides:
 * - Theme toggling between light, dark, and system preference
 * - localStorage persistence to remember user's choice
 * - Automatic system preference detection
 * - Smooth theme transitions by adding/removing CSS classes
 */
@Injectable({
  providedIn: 'root' // This makes the service available app-wide as a singleton
})
export class ThemeService {

  // Signal to hold current theme state - Signals are Angular's new reactive primitive
  private currentTheme = signal<'light' | 'dark' | 'system'>('system');

  // Public getter to access current theme (read-only)
  get theme() {
    return this.currentTheme.asReadonly();
  }

  // Signal to track if dark mode is currently active
  private isDarkMode = signal<boolean>(false);

  // Public getter for dark mode state
  get isDark() {
    return this.isDarkMode.asReadonly();
  }

  constructor() {
    // Initialize theme from localStorage or default to system
    this.initializeTheme();

    // Effect runs whenever currentTheme signal changes
    effect(() => {
      this.applyTheme();
    });

    // Listen for system theme changes
    this.listenToSystemTheme();
  }

  /**
   * Toggles between light, dark, and system themes in sequence
   */
  toggleTheme(): void {
    const themes: Array<'light' | 'dark' | 'system'> = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(this.currentTheme());
    const nextIndex = (currentIndex + 1) % themes.length;

    this.setTheme(themes[nextIndex]);
  }

  /**
   * Sets a specific theme
   */
  setTheme(theme: 'light' | 'dark' | 'system'): void {
    this.currentTheme.set(theme);
    localStorage.setItem('theme', theme);
  }

  /**
   * Gets the appropriate icon for the current theme
   */
  getThemeIcon(): string {
    switch (this.currentTheme()) {
      case 'light':
        return 'light_mode';
      case 'dark':
        return 'dark_mode';
      case 'system':
        return 'brightness_auto';
      default:
        return 'brightness_auto';
    }
  }

  /**
   * Gets a user-friendly label for the current theme
   */
  getThemeLabel(): string {
    switch (this.currentTheme()) {
      case 'light':
        return 'Light Mode';
      case 'dark':
        return 'Dark Mode';
      case 'system':
        return 'System';
      default:
        return 'System';
    }
  }

  private initializeTheme(): void {
    // Check if we have a saved theme preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null;

    if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
      this.currentTheme.set(savedTheme);
    } else {
      // Default to system preference
      this.currentTheme.set('system');
    }
  }

  private applyTheme(): void {
    const theme = this.currentTheme();
    let shouldBeDark = false;

    if (theme === 'dark') {
      shouldBeDark = true;
    } else if (theme === 'system') {
      // Check system preference
      shouldBeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    // If theme === 'light', shouldBeDark remains false

    // Update the isDarkMode signal
    this.isDarkMode.set(shouldBeDark);

    // Apply or remove the 'dark' class to the document element
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Update the color-scheme CSS property for better browser integration
    document.documentElement.style.colorScheme = shouldBeDark ? 'dark' : 'light';
  }

  private listenToSystemTheme(): void {
    // Listen for changes in system theme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    mediaQuery.addEventListener('change', () => {
      // Only react to system changes if we're in system mode
      if (this.currentTheme() === 'system') {
        this.applyTheme();
      }
    });
  }
}
