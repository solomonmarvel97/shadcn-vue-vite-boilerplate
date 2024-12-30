<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
    <SideMenu />
    
    <!-- Main content -->
    <main :class="['lg:pl-64 pt-16 lg:pt-0 transition-all duration-300']">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div class="px-4 py-5 sm:p-6">
            <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">Welcome to your dashboard!</h1>
            <p class="mt-2 text-gray-600 dark:text-gray-300">This is your personal dashboard where you can manage your account and settings.</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import SideMenu from '@/components/dashboard/SideMenu.vue';

const router = useRouter();
const authStore = useAuthStore();

onMounted(() => {
  if (!authStore.isAuthenticated) {
    router.push({ name: 'login' });
  }
});
</script>