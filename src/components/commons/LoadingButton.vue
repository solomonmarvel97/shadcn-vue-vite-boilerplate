<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-vue-next";

defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: "default",
  },
  size: {
    type: String,
    default: "default",
  },
});
</script>

<template>
  <Button
    :disabled="loading || disabled"
    :variant="variant"
    :size="size"
    :class="['relative', loading && 'cursor-not-allowed']"
  >
    <Loader
      v-if="loading"
      class="absolute inset-0 m-auto h-4 w-4 animate-spin"
    />
    <span :class="{ 'opacity-0': loading }">
      <slot />
    </span>
  </Button>
</template>

<style scoped>
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
