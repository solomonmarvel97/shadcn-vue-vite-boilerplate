<template>
  <button
    @click="themeStore.toggleTheme()"
    class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
    :title="themeStore.theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'"
  >
    <Sun v-if="themeStore.theme === 'dark'" class="h-5 w-5 text-gray-600 dark:text-gray-400" />
    <Moon v-else class="h-5 w-5 text-gray-600 dark:text-gray-400" />
  </button>
</template>

<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next';
import { useThemeStore } from '@/stores/theme';

const themeStore = useThemeStore();
</script>