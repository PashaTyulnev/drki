<script setup lang="ts">
const { data } = await useFetch('/api/pages/ueber-uns')

usePageSeo({
  title: 'Über uns – DRKI e.V.',
  description: stripToDescription(data.value?.html) || 'Geschichte, Team und Arbeit des Deutsch-Russischen Kulturinstituts e.V. Dresden seit 1993.',
  path: '/ueber-uns',
})
</script>

<template>
  <section class="mx-auto max-w-3xl px-6 py-16">
    <div class="flex flex-wrap items-start justify-between gap-6">
      <h1 class="font-display text-4xl leading-tight text-ink">
        {{ data?.title || 'Über uns' }}
      </h1>
      <NuxtLink
        to="/ueber-uns/satzung"
        class="inline-flex shrink-0 items-center gap-2 rounded-full border border-black/10 px-5 py-2.5 font-label text-xs uppercase tracking-wide text-ink/70 transition hover:border-black/20 hover:text-ink"
      >
        Satzung lesen →
      </NuxtLink>
    </div>

    <div v-if="data?.html" class="legal-prose mt-10 font-sans text-base leading-relaxed text-ink/80" v-html="data.html" />
  </section>
</template>

<style scoped>
.legal-prose :deep(h2) {
  font-family: var(--font-display);
  font-size: 1.375rem;
  color: rgb(var(--color-ink));
  margin-top: 2em;
  margin-bottom: 0.6em;
}
.legal-prose :deep(p) {
  margin-bottom: 1em;
}
.legal-prose :deep(ul) {
  margin: 0 0 1em 1.25em;
  list-style: disc;
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
