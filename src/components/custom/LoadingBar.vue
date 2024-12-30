<template>
  <div
    class="fixed top-0 left-0 right-0 h-1 z-50 transition-all duration-300"
    :class="loading ? 'opacity-100' : 'opacity-0'"
  >
    <div
      class="h-full bg-indigo-600 transition-all duration-300"
      :style="{ width: `${progress}%` }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  loading: boolean;
}>();

const progress = ref(0);
let progressInterval: NodeJS.Timeout | null = null;

watch(() => props.loading, (newValue) => {
  if (newValue) {
    progress.value = 0;
    progressInterval = setInterval(() => {
      if (progress.value < 90) {
        progress.value += Math.random() * 10;
      }
    }, 200);
  } else {
    if (progressInterval) {
      clearInterval(progressInterval);
      progressInterval = null;
    }
    progress.value = 100;
    // Reset after animation
    setTimeout(() => {
      progress.value = 0;
    }, 300);
  }
}, { immediate: true });
</script>