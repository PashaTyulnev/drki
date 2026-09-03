<script setup lang="ts">
defineProps<{ title: string; image?: string }>()
</script>

<template>
  <section class="mx-auto max-w-3xl px-6 py-24">
    <p class="font-label text-[11px] uppercase tracking-[0.18em] text-muted">Seite im Aufbau</p>
    <h1 class="mt-3 font-display text-4xl text-ink">{{ title }}</h1>
    <p class="mt-4 font-sans text-base leading-relaxed text-ink/70">
      Diese Seite wird im Rahmen des Relaunchs mit Inhalten aus dem WordPress-Backend befüllt.
    </p>

    <img
      v-if="image"
      :src="image"
      :alt="title"
      class="mt-10 aspect-[16/10] w-full rounded-2xl object-cover"
    >
  </section>
</template>
