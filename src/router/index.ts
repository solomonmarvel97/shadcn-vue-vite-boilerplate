import { createRouter, createWebHistory } from 'vue-router';
import { authGuard } from './guards';
import { ROUTES } from './constants';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: ROUTES.HOME,
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/onboarding',
      name: ROUTES.ONBOARDING,
      component: () => import('@/views/Onboarding.vue')
    },
    {
      path: '/sample-dashboard',
      name: ROUTES.SAMPLE_DASHBOARD,
      component: () => import('@/views/SampleDashboard.vue')
    },
    {
      path: '/login',
      name: ROUTES.LOGIN,
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/register',
      name: ROUTES.REGISTER,
      component: () => import('@/views/Register.vue')
    },
    {
      path: '/dashboard',
      name: ROUTES.DASHBOARD,
      component: () => import('@/views/Dashboard.vue'),
      meta: { requiresAuth: true,  }
    },
    {
      path: '/admin',
      name: ROUTES.ADMIN_DASHBOARD,
      component: () => import('@/views/AdminDashboard.vue'),
      meta: { requiresAuth: true, requiresAdmin: true }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFound.vue')
    }
  ]
});

// Global navigation guard
router.beforeEach(authGuard);

export default router;