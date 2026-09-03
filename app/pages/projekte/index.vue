<script setup lang="ts">
const projects = [
  { title: 'Dostojewski in Dresden', slug: 'dostojewski-in-dresden' },
  { title: 'Russische Spuren in Dresden', slug: 'russische-spuren-in-dresden' },
  { title: 'Sächsische Spuren im russischsprachigen Ausland', slug: 'saechsische-spuren-im-russischsprachigem-ausland' },
  { title: 'Musikalisch-theatralischer Kinder- und Jugendklub', slug: 'musikalisch-theatralischer-kinder-und-jugendklub' },
  { title: 'INA Chor', slug: 'ina-chor' },
  { title: 'Garnisonsfriedhof', slug: 'garnisonsfriedhof' },
  { title: 'Städtepartnerschaft Dresden / St. Petersburg', slug: 'staedtepartnerschaft-dresden-st-petersburg' },
  { title: 'Brücken Bauen', slug: 'bruecken-bauen' },
]
</script>

<template>
  <section class="mx-auto max-w-6xl px-6 py-16">
    <h1 class="max-w-xl font-display text-4xl leading-tight text-ink">
      Wofür wir uns einsetzen.
    </h1>
    <p class="mt-4 max-w-md font-sans text-base leading-relaxed text-ink/70">
      Von Dostojewski-Gedenken bis Städtepartnerschaft — die Arbeit des Instituts in acht
      Projekten.
    </p>

    <div class="mt-12 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2">
      <NuxtLink
        v-for="(project, i) in projects"
        :key="project.slug"
        :to="`/projekte/${project.slug}`"
        class="group flex items-center justify-between gap-4 bg-white p-6 transition hover:bg-cream"
      >
        <div>
          <span class="font-label text-xs text-ink/30">{{ String(i + 1).padStart(2, '0') }}</span>
          <h2 class="mt-1 font-display text-lg leading-snug text-ink">{{ project.title }}</h2>
        </div>
        <span class="font-label text-xs uppercase tracking-wide text-ink/40 transition group-hover:text-ink">
          →
        </span>
      </NuxtLink>
    </div>
  </section>
</template>
