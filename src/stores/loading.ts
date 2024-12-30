import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLoadingStore = defineStore('loading', () => {
  const isLoading = ref(false);
  let loadingTimeout: NodeJS.Timeout | null = null;

  function startLoading() {
    if (loadingTimeout) {
      clearTimeout(loadingTimeout);
    }
    isLoading.value = true;
  }

  function stopLoading() {
    // Add a small delay before stopping to prevent flickering
    loadingTimeout = setTimeout(() => {
      isLoading.value = false;
    }, 300);
  }

  return {
    isLoading,
    startLoading,
    stopLoading
  };
});