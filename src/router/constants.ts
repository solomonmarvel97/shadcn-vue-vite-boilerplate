// Define route constants to avoid typos and enable easier maintenance
export const ROUTES = {
  HOME: 'home',
  ONBOARDING: 'onboarding',
  SAMPLE_DASHBOARD: 'sample-dashboard',
  LOGIN: 'login',
  REGISTER: 'register',
  DASHBOARD: 'dashboard',
  ADMIN_DASHBOARD: 'admin-dashboard',
  ERROR: 'error'
} as const;

export const AUTH_ROUTES = [ROUTES.LOGIN, ROUTES.REGISTER];
export const PUBLIC_ROUTES = [ROUTES.HOME];
export const PROTECTED_ROUTES = [ROUTES.DASHBOARD, ROUTES.ADMIN_DASHBOARD];