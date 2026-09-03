<script setup lang="ts">
const testimonials = [
  {
    quote: 'Dieses Institut ist ein einzigartiger Ort in Dresden. Es wäre ein unersetzlicher Verlust für die ganze Stadt.',
    name: 'Anna K., Dresden',
    since: 'Mitglied seit 2019',
  },
  {
    quote: 'Hier treffen sich Menschen, die Brücken bauen wollen — gerade jetzt ist das wichtiger denn je.',
    name: 'Michael T., Dresden',
    since: 'Mitglied seit 2015',
  },
]
</script>

<template>
  <section class="border-t border-black/5 bg-cream">
    <div class="mx-auto max-w-6xl px-6 py-16">
      <div class="grid gap-6 sm:grid-cols-2">
        <figure
          v-for="t in testimonials"
          :key="t.name"
          class="rounded-3xl bg-white p-8"
        >
          <p class="font-label text-[11px] uppercase tracking-[0.18em] text-brick">{{ t.since }}</p>
          <blockquote class="mt-4 font-display text-xl italic leading-snug text-ink">
            „{{ t.quote }}“
          </blockquote>
          <figcaption class="mt-5 font-label text-sm text-ink/60">— {{ t.name }}</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
