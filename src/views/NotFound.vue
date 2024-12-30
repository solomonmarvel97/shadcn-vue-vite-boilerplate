<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
      <p class="text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
      <router-link
        to="/"
        class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
      >
        <Home class="h-4 w-4 mr-2" />
        Return Home
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Home } from 'lucide-vue-next';
</script>