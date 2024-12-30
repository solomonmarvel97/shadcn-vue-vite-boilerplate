<template>
  <div :class="themeStore.theme">
    <LoadingBar :loading="loadingStore.isLoading" />
    <LoadingSpinner :loading="loadingStore.isLoading" />
    <router-view v-slot="{ Component }">
      <Transition
        name="fade"
        mode="out-in"
      >
        <component :is="Component" />
      </Transition>
    </router-view>
    <FloatingThemeToggle />
  </div>
</template>

<script setup lang="ts">
import LoadingBar from '@/components/custom/LoadingBar.vue';
import LoadingSpinner from '@/components/custom/LoadingSpinner.vue';
import FloatingThemeToggle from '@/components/commons/FloatingThemeToggle.vue';
import { useLoadingStore } from '@/stores/loading';
import { useThemeStore } from '@/stores/theme';

const loadingStore = useLoadingStore();
const themeStore = useThemeStore();
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>