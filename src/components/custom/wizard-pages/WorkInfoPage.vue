# WorkInfoPage.vue
<template>
  <div class="space-y-4">
    <div class="space-y-2">
      <Label for="company">Company</Label>
      <Input
        id="company"
        v-model="localFormData.company"
        placeholder="Enter your company name"
      />
    </div>
    <div class="space-y-2">
      <Label for="position">Position</Label>
      <Input
        id="position"
        v-model="localFormData.position"
        placeholder="Enter your position"
      />
    </div>
    <div class="space-y-2">
      <Label for="experience">Years of Experience</Label>
      <Input
        id="experience"
        type="number"
        v-model="localFormData.experience"
        placeholder="Enter years of experience"
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