# DashboardLayout.vue
<template>
  <div class="flex min-h-screen">
    <!-- Mobile Menu Button -->
    <Button
      variant="ghost"
      size="icon"
      class="absolute left-4 top-3 z-40 lg:hidden"
      @click="isSidebarOpen = !isSidebarOpen"
    >
      <Menu v-if="!isSidebarOpen" class="h-6 w-6" />
      <X v-else class="h-6 w-6" />
    </Button>

    <!-- Sidebar Backdrop -->
    <div
      v-if="isSidebarOpen"
      class="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden"
      @click="isSidebarOpen = false"
    />

    <!-- Sidebar -->
    <div
      :class="[
        'fixed inset-y-0 z-30 w-[250px] border-r bg-white flex flex-col transition-transform duration-300 lg:static',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      ]"
    >
      <!-- Organization Selector -->
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="ghost" class="w-full justify-between px-4 py-6 h-auto hover:bg-transparent">
            <div class="flex items-center gap-3">
              <div class="bg-neutral-900 text-white p-1.5 rounded-lg">
                <Component :is="AppWindow" class="h-4 w-4" />
              </div>
              <div class="flex flex-col items-start">
                <span class="text-sm font-medium">Evil Corp.</span>
                <span class="text-xs text-muted-foreground">Free</span>
              </div>
            </div>
            <ChevronDown class="h-4 w-4 text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-[230px]">
          <DropdownMenuItem>
            <div class="flex items-center gap-3">
              <div class="bg-neutral-900 text-white p-1.5 rounded-lg">
                <Component :is="AppWindow" class="h-4 w-4" />
              </div>
              <div class="flex flex-col items-start">
                <span class="text-sm font-medium">Evil Corp.</span>
                <span class="text-xs text-muted-foreground">Free</span>
              </div>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <!-- Navigation -->
      <div class="flex-1 overflow-auto">
        <!-- Platform Section -->
        <div class="px-2 py-2">
          <h3 class="mb-1 ml-3 text-xs font-medium text-muted-foreground">Platform</h3>
          <div class="space-y-1">
            <Collapsible>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" class="w-full justify-between px-3 hover:bg-accent">
                  <div class="flex items-center">
                    <LayoutDashboard class="mr-3 h-4 w-4" />
                    <span class="text-sm">Playground</span>
                  </div>
                  <ChevronRight class="h-4 w-4 transition-transform ui-expanded:rotate-90" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent class="px-4 py-2 space-y-1">
                <Button variant="ghost" class="w-full justify-start text-sm hover:bg-accent">
                  Overview
                </Button>
                <Button variant="ghost" class="w-full justify-start text-sm hover:bg-accent">
                  Examples
                </Button>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" class="w-full justify-between px-3 hover:bg-accent">
                  <div class="flex items-center">
                    <Boxes class="mr-3 h-4 w-4" />
                    <span class="text-sm">Models</span>
                  </div>
                  <ChevronRight class="h-4 w-4 transition-transform ui-expanded:rotate-90" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent class="px-4 py-2 space-y-1">
                <Button variant="ghost" class="w-full justify-start text-sm hover:bg-accent">
                  GPT-4
                </Button>
                <Button variant="ghost" class="w-full justify-start text-sm hover:bg-accent">
                  Claude
                </Button>
              </CollapsibleContent>
            </Collapsible>

            <Button variant="ghost" class="w-full justify-start px-3 hover:bg-accent">
              <FileText class="mr-3 h-4 w-4" />
              <span class="text-sm">Documentation</span>
            </Button>
            <Button variant="ghost" class="w-full justify-start px-3 hover:bg-accent">
              <Settings class="mr-3 h-4 w-4" />
              <span class="text-sm">Settings</span>
            </Button>
          </div>
        </div>

        <!-- Projects Section -->
        <div class="px-2 py-2">
          <h3 class="mb-1 ml-3 text-xs font-medium text-muted-foreground">Projects</h3>
          <div class="space-y-1">
            <Collapsible>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" class="w-full justify-between px-3 hover:bg-accent">
                  <div class="flex items-center">
                    <Code2 class="mr-3 h-4 w-4" />
                    <span class="text-sm">Design Engineering</span>
                  </div>
                  <ChevronRight class="h-4 w-4 transition-transform ui-expanded:rotate-90" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent class="px-4 py-2 space-y-1">
                <Button variant="ghost" class="w-full justify-start text-sm hover:bg-accent">
                  Frontend
                </Button>
                <Button variant="ghost" class="w-full justify-start text-sm hover:bg-accent">
                  Backend
                </Button>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" class="w-full justify-between px-3 hover:bg-accent">
                  <div class="flex items-center">
                    <BarChart class="mr-3 h-4 w-4" />
                    <span class="text-sm">Sales & Marketing</span>
                  </div>
                  <ChevronRight class="h-4 w-4 transition-transform ui-expanded:rotate-90" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent class="px-4 py-2 space-y-1">
                <Button variant="ghost" class="w-full justify-start text-sm hover:bg-accent">
                  Analytics
                </Button>
                <Button variant="ghost" class="w-full justify-start text-sm hover:bg-accent">
                  Campaigns
                </Button>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>

      <!-- User Profile -->
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="ghost" class="w-full justify-start p-3 hover:bg-accent">
            <div class="flex items-center gap-3">
              <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 font-semibold">
                CN
              </div>
              <div class="flex flex-col items-start">
                <span class="text-sm font-medium">shadcn</span>
                <span class="text-xs text-muted-foreground">m@example.com</span>
              </div>
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" class="w-[230px]">
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>

    <!-- Main Content -->
    <div class="flex-1 bg-background">
      <!-- Top Navigation -->
      <div class="border-b">
        <div class="flex h-14 items-center px-4 lg:px-6">
          <div class="w-4 lg:w-0"></div>
          <nav class="flex items-center gap-2 text-sm font-medium">
            <Button variant="ghost" class="text-muted-foreground hover:text-foreground">
              Building Your Application
            </Button>
            <span class="text-muted-foreground">/</span>
            <Button variant="ghost">Data Fetching</Button>
          </nav>
        </div>
      </div>

      <!-- Page Content -->
      <main class="flex-1 p-4 lg:p-6">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { 
  LayoutDashboard, 
  Boxes, 
  FileText, 
  Settings, 
  Code2, 
  BarChart,
  ChevronDown,
  ChevronRight,
  AppWindow,
  Menu,
  X
} from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

const isSidebarOpen = ref(false)
</script>

<style>
/* Add this if you want to prevent body scrolling when mobile menu is open */
.overflow-hidden {
  overflow: hidden;
}
</style>