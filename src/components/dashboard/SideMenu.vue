<template>
  <div>
    <!-- Desktop collapse button -->
    <button
      @click="isCollapsed = !isCollapsed"
      class="hidden lg:flex fixed top-4 left-4 z-20 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <Menu v-if="isCollapsed" class="h-6 w-6" />
      <PanelLeftClose v-else class="h-6 w-6" />
    </button>

    <!-- Mobile menu button -->
    <button
      @click="isOpen = !isOpen"
      class="lg:hidden fixed top-4 left-4 z-20 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <Menu v-if="!isOpen" class="h-6 w-6" />
      <X v-else class="h-6 w-6" />
    </button>

    <!-- Backdrop -->
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-gray-600 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 transition-opacity lg:hidden z-10"
      @click="isOpen = false"
    />

    <!-- Sidebar -->
    <aside
      :class="[
        'fixed inset-y-0 left-0 z-20 bg-white dark:bg-gray-900 transform transition-all duration-300 ease-in-out',
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        isCollapsed ? 'lg:w-20' : 'lg:w-64',
        'w-64'
      ]"
    >
      <div class="h-full flex flex-col">
        <!-- Logo -->
        <div class="flex items-center h-16 px-4 bg-indigo-600 dark:bg-indigo-700">
          <LayoutDashboard class="h-8 w-8 text-white" />
          <span 
            v-if="!isCollapsed" 
            class="ml-2 text-xl font-semibold text-white whitespace-nowrap"
          >
            Dashboard
          </span>
        </div>

        <!-- Navigation -->
        <nav class="flex-1 px-4 py-4 space-y-1">
          <router-link
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="flex items-center px-2 py-2 text-gray-600 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 group"
            :class="{ 'bg-gray-100 dark:bg-gray-800': $route.path === item.path }"
          >
            <component :is="item.icon" class="h-5 w-5" :class="isCollapsed ? '' : 'mr-3'" />
            <span 
              v-if="!isCollapsed"
              class="whitespace-nowrap"
            >
              {{ item.name }}
            </span>
            <span
              v-else
              class="fixed left-20 scale-0 rounded bg-gray-900 dark:bg-gray-700 px-2 py-1 text-xs text-white group-hover:scale-100"
            >
              {{ item.name }}
            </span>
          </router-link>
        </nav>

        <!-- User Profile -->
        <UserProfile :is-collapsed="isCollapsed" />
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Menu, X, PanelLeftClose, LayoutDashboard } from 'lucide-vue-next';
import UserProfile from './UserProfile.vue';
import { menuItems } from './MenuItems';

const isCollapsed = ref(false);
const isOpen = ref(false);
</script>