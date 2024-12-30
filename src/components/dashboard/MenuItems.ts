import { LayoutDashboard, Users, Settings } from 'lucide-vue-next';
import type { Component } from 'vue';

interface MenuItem {
  name: string;
  path: string;
  icon: Component;
}

export const menuItems: MenuItem[] = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: LayoutDashboard
  },
  {
    name: 'Users',
    path: '/dashboard/users',
    icon: Users
  },
  {
    name: 'Settings',
    path: '/dashboard/settings',
    icon: Settings
  }
];