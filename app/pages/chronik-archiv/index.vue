<script setup lang="ts">
const sections = [
  { title: 'Vergangene Veranstaltungen', slug: 'vergangene-veranstaltungen' },
  { title: 'Abgeschlossene Projekte', slug: 'konferenzen' },
  { title: 'Publikationen', slug: 'publikationen' },
  { title: 'Gästeliste (Deutsch)', slug: 'gaeste' },
  { title: 'Gästeliste (Russisch)', slug: 'gaesteliste-auf-russisch' },
]
</script>

<template>
  <section class="mx-auto max-w-6xl px-6 py-16">
    <h1 class="max-w-xl font-display text-4xl leading-tight text-ink">
      Chronik &amp; Archiv.
    </h1>
    <p class="mt-4 max-w-md font-sans text-base leading-relaxed text-ink/70">
      30 Jahre Vereinsgeschichte — Veranstaltungen, Projekte und Publikationen im Rückblick.
    </p>

    <div class="mt-12 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2">
      <NuxtLink
        v-for="(section, i) in sections"
        :key="section.slug"
        :to="`/chronik-archiv/${section.slug}`"
        class="group flex items-center justify-between gap-4 bg-white p-6 transition hover:bg-cream"
      >
        <div>
          <span class="font-label text-xs text-ink/30">{{ String(i + 1).padStart(2, '0') }}</span>
          <h2 class="mt-1 font-display text-lg leading-snug text-ink">{{ section.title }}</h2>
        </div>
        <span class="font-label text-xs uppercase tracking-wide text-ink/40 transition group-hover:text-ink">
          →
        </span>
      </NuxtLink>
    </div>
  </section>
</template>
