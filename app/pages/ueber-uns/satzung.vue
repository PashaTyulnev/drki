<script setup lang="ts">
const { data } = await useFetch('/api/pages/satzung')
</script>

<template>
  <section class="mx-auto max-w-3xl px-6 py-16">
    <NuxtLink to="/ueber-uns" class="font-label text-xs uppercase tracking-wide text-ink/50 hover:text-ink">
      ← Über uns
    </NuxtLink>

    <h1 class="mt-8 font-display text-4xl leading-tight text-ink">
      {{ data?.title || 'Satzung' }}
    </h1>

    <div v-if="data?.html" class="legal-prose mt-10 font-sans text-base leading-relaxed text-ink/80" v-html="data.html" />
  </section>
</template>

<style scoped>
.legal-prose :deep(h2) {
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: rgb(var(--color-ink));
  margin-top: 2em;
  margin-bottom: 0.6em;
}
.legal-prose :deep(p) {
  margin-bottom: 1em;
}
.legal-prose :deep(a) {
  color: rgb(var(--color-brick));
  text-decoration: underline;
}
.legal-prose :deep(strong) {
  color: rgb(var(--color-ink));
  font-weight: 600;
}
</style>
