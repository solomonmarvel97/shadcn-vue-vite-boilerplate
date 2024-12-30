# PreferencesPage.vue
<template>
  <div class="space-y-4">
    <div class="space-y-2">
      <Label>Communication Preferences</Label>
      <div class="space-y-2">
        <div class="flex items-center space-x-2">
          <Checkbox
            id="emailUpdates"
            v-model="localFormData.emailUpdates"
          />
          <Label for="emailUpdates">Receive email updates</Label>
        </div>
        <div class="flex items-center space-x-2">
          <Checkbox
            id="newsletter"
            v-model="localFormData.newsletter"
          />
          <Label for="newsletter">Subscribe to newsletter</Label>
        </div>
      </div>
    </div>
    <div class="space-y-2">
      <Label for="theme">Theme Preference</Label>
      <Select v-model="localFormData.theme">
        <SelectTrigger>
          <SelectValue placeholder="Select a theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const props = defineProps<{
  formData: Record<string, any>
}>()

const emit = defineEmits(['update:formData'])

const localFormData = ref(props.formData || {})

watch(localFormData, (newValue) => {
  emit('update:formData', newValue)
}, { deep: true })
</script>