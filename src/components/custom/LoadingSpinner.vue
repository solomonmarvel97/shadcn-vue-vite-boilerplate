<template>
  <Transition
    enter="transition-opacity duration-200"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="transition-opacity duration-200"
    leave-from="opacity-100"
    leave-to="opacity-0"
  >
    <div
      v-if="loading"
      class="fixed bottom-4 left-4 z-50"
    >
      <div class="animate-spin rounded-full h-6 w-6 border-2 border-indigo-600 border-t-transparent" />
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  loading: boolean;
}>();
</script>