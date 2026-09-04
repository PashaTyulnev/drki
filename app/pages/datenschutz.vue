<script setup lang="ts">
const { data } = await useFetch('/api/pages/datenschutz')
const { consent, resetConsent } = useCookieConsent()

usePageSeo({
  title: 'Datenschutz – DRKI e.V.',
  description: 'Datenschutzerklärung des Deutsch-Russischen Kulturinstituts e.V. Dresden.',
  path: '/datenschutz',
  noindex: true,
})
</script>

<template>
  <section class="mx-auto max-w-3xl px-6 py-16">
    <h1 class="font-display text-4xl leading-tight text-ink">
      {{ data?.title || 'Datenschutzerklärung' }}
    </h1>

    <ClientOnly>
      <div class="mt-8 rounded-2xl border border-black/10 bg-cream p-6">
        <p class="font-label text-[11px] uppercase tracking-[0.16em] text-brick">Cookie-Einstellungen</p>
        <p class="mt-2 font-sans text-sm leading-relaxed text-ink/70">
          Wir setzen selbst keine Tracking-Cookies. Einzig Ihre Entscheidung zu Google Fonts
          speichern wir lokal in Ihrem Browser (kein Cookie, kein Tracking).
          Aktueller Stand:
          <strong class="text-ink">{{ consent === 'accepted' ? 'akzeptiert' : consent === 'declined' ? 'abgelehnt' : 'noch nicht entschieden' }}</strong>.
        </p>
        <button
          type="button"
          class="mt-4 rounded-full border border-black/15 px-5 py-2.5 font-label text-xs uppercase tracking-wide text-ink/70 transition hover:border-black/30 hover:text-ink"
          @click="resetConsent"
        >
          Einstellung ändern
        </button>
      </div>
    </ClientOnly>

    <div v-if="data?.html" class="legal-prose mt-10 font-sans text-base leading-relaxed text-ink/80" v-html="data.html" />
  </section>
</template>

<style scoped>
.legal-prose :deep(h2) {
  font-family: var(--font-display);
  font-size: 1.375rem;
  color: rgb(var(--color-ink));
  margin-top: 2.5em;
  margin-bottom: 0.75em;
}
.legal-prose :deep(h2:first-child) {
  margin-top: 0;
}
.legal-prose :deep(h3) {
  font-family: var(--font-display);
  font-size: 1.1rem;
  color: rgb(var(--color-ink));
  margin-top: 1.75em;
  margin-bottom: 0.5em;
}
.legal-prose :deep(p) {
  margin-bottom: 1em;
}
.legal-prose :deep(ul) {
  margin: 0 0 1em 1.25em;
  list-style: disc;
}
.legal-prose :deep(ul.index) {
  list-style: none;
  margin-left: 0;
  columns: 2;
  gap: 1.5rem;
}
.legal-prose :deep(li) {
  margin-bottom: 0.4em;
}
.legal-prose :deep(a) {
  color: rgb(var(--color-brick));
  text-decoration: underline;
  word-break: break-word;
}
.legal-prose :deep(strong) {
  color: rgb(var(--color-ink));
  font-weight: 600;
}
.legal-prose :deep(.seal) {
  margin-top: 2.5em;
}
.legal-prose :deep(.seal img) {
  height: 96px;
  width: auto;
  opacity: 0.7;
}
</style>
