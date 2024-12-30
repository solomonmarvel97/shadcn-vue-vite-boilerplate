<template>
  <div class="p-4 border-t border-gray-200 dark:border-gray-700">
    <div class="flex items-center">
      <div class="flex-shrink-0">
        <UserCircle class="h-8 w-8 text-gray-400 dark:text-gray-500" />
      </div>
      <div v-if="!isCollapsed" class="ml-3 overflow-hidden">
        <p class="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">
          {{ email }}
        </p>
        <button
          @click="handleLogout"
          class="text-sm text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 flex items-center mt-1"
        >
          <LogOut class="h-4 w-4 mr-1" />
          Sign out
        </button>
      </div>
      <button
        v-else
        @click="handleLogout"
        class="ml-2 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
      >
        <LogOut class="h-5 w-5" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { UserCircle, LogOut } from 'lucide-vue-next';
import { useAuthStore } from '@/stores/auth';

const props = defineProps<{
  isCollapsed: boolean;
}>();

const router = useRouter();
const authStore = useAuthStore();

const email = computed(() => authStore.user?.email || '');

async function handleLogout() {
  await authStore.logout();
  router.push({ name: 'login' });
}
</script>