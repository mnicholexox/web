/**
 * Application constants and configuration
 * 
 * Centralized location for constants, feature flags, and configuration values.
 */

// Route paths
export const ROUTES = {
  HOME: '/',
  SPONSOR_A_CHILD: '/sponsor-a-child',
  MAKE_A_DONATION: '/make-a-donation',
  FAQ: '/faq',
  UPDATES: '/updates',
  LOGIN: '/login',
  VOLUNTEER: '/volunteer',
  PRIVACY: '/privacy',
  TERMS: '/terms',
  // Add more routes as pages are created
  // ABOUT: '/about',
  // CONTACT: '/contact',
} as const;

/**
 * The Angel Tree app (sponsor portal + coordinator dashboard), hosted on Lovable.
 * The site's Login button and /login both send people here.
 */
export const APP_URL = 'https://angel-tree-progress-hub.lovable.app';

// Add more constants as needed
// export const FEATURE_FLAGS = { ... } as const;
// export const API_ENDPOINTS = { ... } as const;

