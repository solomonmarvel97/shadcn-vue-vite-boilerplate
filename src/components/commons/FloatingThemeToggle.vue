<template>
  <div class="fixed bottom-4 right-4 z-50">
    <button
      @click="themeStore.toggleTheme()"
      class="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200 dark:border-gray-700"
      :title="themeStore.theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'"
    >
      <Sun v-if="themeStore.theme === 'dark'" class="h-5 w-5 text-gray-600 dark:text-gray-400" />
      <Moon v-else class="h-5 w-5 text-gray-600 dark:text-gray-400" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next';
import { useThemeStore } from '@/stores/theme';

const themeStore = useThemeStore();
</script>