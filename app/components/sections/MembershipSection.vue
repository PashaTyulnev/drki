<script setup lang="ts">
const benefits = [
  { title: 'Bibliothek', text: 'Zugang zur Dostojewski-Bibliothek' },
  { title: 'Veranstaltungen', text: 'Einladungen zu allen Veranstaltungen' },
  { title: 'Ermäßigung', text: 'Ermäßigungen auf Kurse & Events' },
  { title: 'Mitsprache', text: 'Mitsprache bei der Vereinsarbeit' },
]
</script>

<template>
  <section class="border-t border-black/5 bg-white">
    <div class="mx-auto max-w-6xl px-6 py-16">
      <h2 class="max-w-lg font-display text-3xl leading-tight text-ink sm:text-4xl">
        Werden Sie Teil unserer Gemeinschaft.
      </h2>
      <p class="mt-4 max-w-md font-sans text-base leading-relaxed text-ink/70">
        Ab 20 € im Jahr. Jedes neue Mitglied stärkt uns — symbolisch und finanziell.
      </p>

      <div class="mt-10 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2 sm:max-w-2xl">
        <div v-for="benefit in benefits" :key="benefit.title" class="bg-white p-6">
          <p class="font-label text-[11px] uppercase tracking-[0.16em] text-brick">{{ benefit.title }}</p>
          <p class="mt-2 font-sans text-sm text-ink/75">{{ benefit.text }}</p>
        </div>
      </div>

      <NuxtLink
        to="/mitgliedschaft"
        class="mt-10 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-label text-xs uppercase tracking-wide text-white transition hover:bg-navy-dark"
      >
        Jetzt Mitglied werden – ab 20 €/Jahr
      </NuxtLink>
    </div>
  </section>
</template>
