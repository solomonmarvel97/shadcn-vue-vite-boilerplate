<template>
    <div class="space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <div class="space-y-2">
          <Label for="firstName">First Name</Label>
          <Input
            id="firstName"
            v-model="localFormData.firstName"
            placeholder="Enter your first name"
          />
        </div>
        <div class="space-y-2">
          <Label for="lastName">Last Name</Label>
          <Input
            id="lastName"
            v-model="localFormData.lastName"
            placeholder="Enter your last name"
          />
        </div>
      </div>
      <div class="space-y-2">
        <Label for="email">Email</Label>
        <Input
          id="email"
          type="email"
          v-model="localFormData.email"
          placeholder="Enter your email"
        />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch } from 'vue'
  import { Label } from '@/components/ui/label'
  import { Input } from '@/components/ui/input'
  
  const props = defineProps<{
    formData: Record<string, any>
  }>()
  
  const emit = defineEmits(['update:formData'])
  
  const localFormData = ref(props.formData || {})
  
  watch(localFormData, (newValue) => {
    emit('update:formData', newValue)
  }, { deep: true })
  </script>