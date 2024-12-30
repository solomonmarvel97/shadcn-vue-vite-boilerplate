# OnboardingWizard.vue
<template>
  <div class="max-w-2xl mx-auto p-6">
    <Card class="w-full">
      <CardHeader>
        <CardTitle>{{ currentPage.title }}</CardTitle>
        <CardDescription>{{ currentPage.description }}</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-8">
          <div class="flex items-center">
            <div v-for="(page, index) in pages" :key="index" class="flex items-center">
              <div
                :class="[
                  'w-8 h-8 rounded-full flex items-center justify-center',
                  currentPageIndex >= index
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                ]"
              >
                {{ index + 1 }}
              </div>
              <div
                v-if="index < pages.length - 1"
                :class="[
                  'h-1 w-12',
                  currentPageIndex > index ? 'bg-primary' : 'bg-muted'
                ]"
              />
            </div>
          </div>
        </div>

        <form @submit.prevent="handleSubmit">
          <component
            :is="currentPage.component"
            v-model:formData="formData[currentPage.id]"
          />

          <div class="flex justify-between mt-6">
            <Button
              type="button"
              variant="outline"
              @click="previousPage"
              :disabled="currentPageIndex === 0"
            >
              Previous
            </Button>
            <Button
              v-if="currentPageIndex === pages.length - 1"
              type="submit"
              :disabled="loading"
            >
              {{ loading ? 'Submitting...' : 'Submit' }}
            </Button>
            <Button
              v-else
              type="button"
              @click="nextPage"
              :disabled="!isCurrentPageValid"
            >
              Next
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import axios from 'axios'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

// Define the structure for a wizard page
interface WizardPage {
  id: string
  title: string
  description: string
  component: any
  validationFn?: (data: any) => boolean
}

// Import your page components
import PersonalInfoPage from '@/components/custom/wizard-pages/PersonalInfoPage.vue'
import WorkInfoPage from '@/components/custom/wizard-pages/WorkInfoPage.vue'
import PreferencesPage from '@/components/custom/wizard-pages/PreferencesPage.vue'

// Define your pages array
const pages: WizardPage[] = [
  {
    id: 'personal',
    title: 'Personal Information',
    description: 'Please provide your basic information',
    component: PersonalInfoPage,
    validationFn: (data) => data?.firstName && data?.lastName,
  },
  {
    id: 'work',
    title: 'Work Information',
    description: 'Tell us about your work',
    component: WorkInfoPage,
    validationFn: (data) => data?.company && data?.position,
  },
  {
    id: 'preferences',
    title: 'Preferences',
    description: 'Set your preferences',
    component: PreferencesPage,
    validationFn: (data) => true, // Add your validation logic
  },
]

const currentPageIndex = ref(0)
const formData = ref<Record<string, any>>({})
const loading = ref(false)

const currentPage = computed(() => pages[currentPageIndex.value])

const isCurrentPageValid = computed(() => {
  const page = currentPage.value
  if (!page.validationFn) return true
  return page.validationFn(formData.value[page.id])
})

const nextPage = () => {
  if (currentPageIndex.value < pages.length - 1) {
    currentPageIndex.value++
  }
}

const previousPage = () => {
  if (currentPageIndex.value > 0) {
    currentPageIndex.value--
  }
}

const handleSubmit = async () => {
  try {
    loading.value = true
    // Make your API request here
    console.log(JSON.stringify(formData.value))
    // const response = await axios.post('/api/onboarding', formData.value)
    // console.log('Submission successful:', response.data)
    // Handle success (e.g., show success message, redirect)
  } catch (error) {
    console.error('Submission failed:', error)
    // Handle error (e.g., show error message)
  } finally {
    loading.value = false
  }
}
</script>