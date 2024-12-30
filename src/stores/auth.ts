import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useLoadingStore } from './loading';

interface User {
  id: string;
  email: string;
  role: 'user' | 'admin';
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  const isAuthenticated = ref(false);
  const loadingStore = useLoadingStore();

  // Initialize auth state from localStorage if available
  const initializeAuth = () => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      user.value = JSON.parse(savedUser);
      isAuthenticated.value = true;
    }
  };

  async function login(email: string, password: string) {
    try {
      loadingStore.startLoading();
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      const newUser = {
        id: '1',
        email,
        role: email.includes('admin') ? 'admin' : 'user'
      };
      user.value = newUser;
      isAuthenticated.value = true;
      localStorage.setItem('user', JSON.stringify(newUser));
    } finally {
      loadingStore.stopLoading();
    }
  }

  async function logout() {
    try {
      loadingStore.startLoading();
      await new Promise(resolve => setTimeout(resolve, 500));
      user.value = null;
      isAuthenticated.value = false;
      localStorage.removeItem('user');
    } finally {
      loadingStore.stopLoading();
    }
  }

  async function register(email: string, password: string) {
    try {
      loadingStore.startLoading();
      await new Promise(resolve => setTimeout(resolve, 1000));
      const newUser = {
        id: '1',
        email,
        role: 'user'
      };
      user.value = newUser;
      isAuthenticated.value = true;
      localStorage.setItem('user', JSON.stringify(newUser));
    } finally {
      loadingStore.stopLoading();
    }
  }

  // Initialize auth state when store is created
  initializeAuth();

  return {
    user,
    isAuthenticated,
    login,
    logout,
    register
  };
});