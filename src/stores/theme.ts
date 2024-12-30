import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  const theme = ref(localStorage.getItem('theme') || 'light');

  function setTheme(newTheme: 'light' | 'dark') {
    theme.value = newTheme;
    localStorage.setItem('theme', newTheme);
    updateThemeClass();
  }

  function toggleTheme() {
    setTheme(theme.value === 'light' ? 'dark' : 'light');
  }

  function updateThemeClass() {
    if (theme.value === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  // Initialize theme
  updateThemeClass();

  // Watch for system theme changes
  watch(
    () => window?.matchMedia('(prefers-color-scheme: dark)').matches,
    (isDark) => {
      if (!localStorage.getItem('theme')) {
        setTheme(isDark ? 'dark' : 'light');
      }
    },
    { immediate: true }
  );

  return {
    theme,
    setTheme,
    toggleTheme
  };
});