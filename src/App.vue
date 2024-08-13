<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import TestTabs from '@/components/tabs/TestTabs.vue'
import TestDropdownMenu from '@/components/dropdown/TestDropdownMenu.vue'

const value = ref<'tabs' | 'dropdown' | ''>('')
</script>

<template>
  <div class="flex flex-col items-center space-x-3 py-6">
    <div v-if="!value" class="flex justify-center space-x-3">
      <Button @click="value = 'tabs'">Tabs</Button>
      <Button @click="value = 'dropdown'">DropdownMenu</Button>
    </div>
    <Button v-else variant="link" @click="value = ''">Back</Button>
    <TestTabs v-if="value === 'tabs'" />
    <TestDropdownMenu v-if="value === 'dropdown'" />
  </div>
</template>

<style scoped></style>
