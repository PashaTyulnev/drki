<script setup lang="ts">
defineProps<{ icon: 'facebook' | 'youtube' | 'telegram' }>()
</script>

<template>
  <svg v-if="icon === 'facebook'" width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M15 8.5h2V5h-2c-2.21 0-4 1.79-4 4v2H9v3.5h2V19h3v-4.5h2.5l.5-3.5h-3V9c0-.28.22-.5.5-.5Z" fill="currentColor" />
  </svg>
  <svg v-else-if="icon === 'youtube'" width="16" height="16" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="6" width="18" height="12" rx="3.5" stroke="currentColor" stroke-width="1.5" />
    <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" />
  </svg>
  <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M20.5 4.5 3.8 11.1c-1.1.44-1.1 1.06-.2 1.33l4.28 1.34 1.65 5.06c.2.55.36.77.73.77.33 0 .48-.15.66-.33l1.6-1.56 3.32 2.45c.6.34 1.05.16 1.2-.56l2.2-10.5c.24-1.05-.4-1.5-1.05-1.1Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" />
  </svg>
</template>
