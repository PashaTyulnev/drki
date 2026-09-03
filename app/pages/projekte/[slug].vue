<script setup lang="ts">
const route = useRoute()
const { data, error } = await useFetch(`/api/pages/${route.params.slug}`)
</script>

<template>
  <section class="mx-auto max-w-3xl px-6 py-16">
    <NuxtLink to="/projekte" class="font-label text-xs uppercase tracking-wide text-ink/50 hover:text-ink">
      ← Alle Projekte
    </NuxtLink>

    <p v-if="error" class="mt-8 font-sans text-sm text-brick">
      Dieses Projekt konnte nicht geladen werden.
    </p>

    <template v-else>
      <h1 class="mt-8 font-display text-4xl leading-tight text-ink">
        {{ data?.title }}
      </h1>

      <div v-if="data?.html" class="legal-prose mt-10 font-sans text-base leading-relaxed text-ink/80" v-html="data.html" />
    </template>
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
.legal-prose :deep(img) {
  margin: 1.5em 0;
  width: 100%;
  border-radius: 1rem;
}
</style>
