import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { AUTH_ROUTES, PUBLIC_ROUTES, ROUTES } from './constants';
import { useAuthStore } from '@/stores/auth';
import { useLoadingStore } from '@/stores/loading';

export async function authGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const authStore = useAuthStore();
  const loadingStore = useLoadingStore();

  try {
    const isAuthRoute = AUTH_ROUTES.includes(to.name as keyof typeof ROUTES);
    const isPublicRoute = PUBLIC_ROUTES.includes(to.name as keyof typeof ROUTES);

    // Allow public routes regardless of auth state
    if (isPublicRoute) {
      return next();
    }

    if (authStore.isAuthenticated) {
      // Prevent authenticated users from accessing auth routes
      if (isAuthRoute) {
        return next({ 
          name: authStore.user?.role === 'admin' ? ROUTES.ADMIN_DASHBOARD : ROUTES.DASHBOARD,
          replace: true
        });
      }

      // Check admin access
      if (to.meta.requiresAdmin && authStore.user?.role !== 'admin') {
        return next({ 
          name: ROUTES.DASHBOARD,
          replace: true
        });
      }

      // Allow access to protected routes
      return next();
    } else {
      // Redirect unauthenticated users to login except for auth routes
      if (!isAuthRoute) {
        return next({
          name: ROUTES.LOGIN,
          query: { redirect: to.fullPath },
          replace: true
        });
      }
      
      return next();
    }
  } catch (error) {
    console.error('Navigation guard error:', error);
    return next({ 
      name: ROUTES.ERROR,
      replace: true
    });
  }
}