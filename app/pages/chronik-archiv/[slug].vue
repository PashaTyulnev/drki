<script setup lang="ts">
const route = useRoute()
const { data, error } = await useFetch(`/api/pages/${route.params.slug}`)

usePageSeo({
  title: data.value?.title ? `${data.value.title} – Chronik & Archiv – DRKI e.V.` : 'Chronik & Archiv – DRKI e.V.',
  description: stripToDescription(data.value?.html) || '30 Jahre Vereinsgeschichte des Deutsch-Russischen Kulturinstituts e.V. Dresden.',
  path: `/chronik-archiv/${route.params.slug}`,
  noindex: !!error.value,
})
</script>

<template>
  <section class="mx-auto max-w-3xl px-6 py-16">
    <NuxtLink to="/chronik-archiv" class="font-label text-xs uppercase tracking-wide text-ink/50 hover:text-ink">
      ← Chronik &amp; Archiv
    </NuxtLink>

    <p v-if="error" class="mt-8 font-sans text-sm text-brick">
      Dieser Bereich konnte nicht geladen werden.
    </p>

    <template v-else>
      <h1 class="mt-8 font-display text-4xl leading-tight text-ink">
        {{ data?.title }}
      </h1>

      <div v-if="data?.html" class="legal-prose mt-10 font-sans text-base leading-relaxed text-ink/80" v-html="data.html" />

      <p v-else class="mt-8 font-sans text-sm text-ink/50">
        Dieser Bereich listet in WordPress eine laufend aktualisierte Auswahl an Beiträgen — die
        Übersicht dafür ist noch nicht auf die neue Seite übertragen.
      </p>

      <a
        v-if="data?.sourceUrl"
        :href="data.sourceUrl"
        target="_blank"
        rel="noopener"
        class="mt-10 inline-flex items-center gap-2 font-label text-xs uppercase tracking-wide text-ink/50 underline decoration-ink/20 underline-offset-4 hover:text-ink"
      >
        Vollständige Übersicht auf drki.de ansehen →
      </a>
    </template>
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
.legal-prose :deep(ul) {
  margin: 0 0 1em 1.25em;
  list-style: disc;
}
.legal-prose :deep(li) {
  margin-bottom: 0.5em;
}
.legal-prose :deep(a) {
  color: rgb(var(--color-brick));
  text-decoration: underline;
}
</style>
