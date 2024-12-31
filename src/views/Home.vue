<template>
  <div
    class="min-h-screen bg-gray-50 flex flex-col items-center justify-center"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-8">Welcome to Vue Auth</h1>
      <div class="space-x-4">
        <router-link
          v-if="!authStore.isAuthenticated"
          to="/login"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <LogIn class="h-4 w-4 mr-2" />
          Sign In
        </router-link>
        <router-link
          v-if="!authStore.isAuthenticated"
          to="/register"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
        >
          <UserPlus class="h-4 w-4 mr-2" />
          Register
        </router-link>
        <router-link
          v-if="authStore.isAuthenticated"
          :to="authStore.user?.role === 'admin' ? '/admin' : '/dashboard'"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <LayoutDashboard class="h-4 w-4 mr-2" />
          Go to Dashboard
        </router-link>

        <Button
          variant="outline"
          @click="
            () => {
              toast('Event has been created', {
                description: 'Sunday, December 03, 2023 at 9:00 AM',
                action: {
                  label: 'Undo',
                  onClick: () => console.log('Undo'),
                },
              });
            }
          "
        >
          Add to calendar
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { LogIn, UserPlus, LayoutDashboard } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { toast } from "vue-sonner";

import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();

function showToast() {
  toast({
    title: "Scheduled: Catch up",
    description: "Friday, February 10, 2023 at 5:57 PM",
  });
}
</script>
