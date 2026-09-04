<script setup lang="ts">
const { data } = await useFetch('/api/pages/impressum')

usePageSeo({
  title: 'Impressum – DRKI e.V.',
  description: 'Impressum des Deutsch-Russischen Kulturinstituts e.V. Dresden.',
  path: '/impressum',
})
</script>

<template>
  <section class="mx-auto max-w-3xl px-6 py-16">
    <h1 class="font-display text-4xl leading-tight text-ink">
      {{ data?.title || 'Impressum' }}
    </h1>

    <div v-if="data?.html" class="legal-prose mt-10 font-sans text-base leading-relaxed text-ink/80" v-html="data.html" />
  </section>
</template>

<style scoped>
.legal-prose :deep(h2) {
  font-family: var(--font-display);
  font-size: 1.1rem;
  color: rgb(var(--color-ink));
  margin-top: 2em;
  margin-bottom: 0.5em;
}
.legal-prose :deep(p) {
  margin-bottom: 1em;
}
.legal-prose :deep(ul) {
  margin: 0 0 1.5em 0;
  list-style: none;
}
.legal-prose :deep(li) {
  margin-bottom: 0.3em;
}
.legal-prose :deep(a) {
  color: rgb(var(--color-brick));
  text-decoration: underline;
}
</style>
