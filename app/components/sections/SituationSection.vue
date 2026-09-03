<script setup lang="ts">
const stats = [
  { value: '100%', label: 'der öffentlichen Förderung weggefallen seit 2025' },
  { value: '30+', label: 'Jahr kultureller Brückenarbeit in Dresden' },
  { value: '2026', label: 'Das Jahr, in dem wir Ihre Hilfe am meisten brauchen' },
]
</script>

<template>
  <section class="border-t border-black/5">
    <div class="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16">
      <div>
        <h2 class="font-display text-3xl leading-tight text-ink sm:text-4xl">
          Unsere Förderung ist weggebrochen.
        </h2>
        <p class="mt-5 font-sans text-base leading-relaxed text-ink/70">
          2022 verloren wir alle russischen Fördermittel. 2025 strich die Stadt Dresden die
          kommunale Unterstützung. Was bleibt, sind unsere Mitglieder — und Menschen wie Sie.
        </p>
        <p class="mt-4 font-sans text-base leading-relaxed text-ink/70">
          Gerade jetzt, wo Dialog wichtiger denn je ist, droht dieser einzigartige Ort zu
          verschwinden.
        </p>
      </div>

      <div class="grid grid-cols-1 divide-y divide-black/10 border-y border-black/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        <div v-for="stat in stats" :key="stat.value" class="py-6 first:pt-0 last:pb-0 sm:px-6 sm:py-0 sm:first:pl-0 sm:last:pr-0">
          <p class="font-display text-4xl text-brick">{{ stat.value }}</p>
          <p class="mt-2 font-sans text-sm leading-relaxed text-ink/60">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
