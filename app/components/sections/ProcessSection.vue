<script setup lang="ts">
const steps = [
  {
    n: '01',
    title: 'Spenden oder Mitglied werden',
    text: 'Einmalig per Überweisung oder als Mitglied ab 20 € im Jahr — jeder Beitrag hilft direkt.',
  },
  {
    n: '02',
    title: 'Vor Ort erleben',
    text: 'Besuchen Sie die Bibliothek, eine Lesung oder ein Konzert im Institut in Dresden.',
  },
  {
    n: '03',
    title: 'Weitererzählen',
    text: 'Erzählen Sie Freunden und Kollegen von uns — Reichweite kostet nichts und hilft enorm.',
  },
]
</script>

<template>
  <section class="relative overflow-hidden bg-offblack">
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.05]"
      style="background-image: repeating-linear-gradient(-45deg, #fff 0, #fff 1px, transparent 1px, transparent 14px);"
    />

    <div class="relative mx-auto max-w-6xl px-6 py-20">
      <h2 class="font-display text-3xl leading-tight text-white sm:text-4xl">
        Drei Schritte. <span class="font-light italic text-white/60">Große Wirkung.</span>
      </h2>

      <div class="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
        <div v-for="step in steps" :key="step.n" class="bg-offblack p-8">
          <span class="font-label text-sm text-white/30">{{ step.n }}</span>
          <h3 class="mt-4 font-display text-xl text-white">{{ step.title }}</h3>
          <p class="mt-2 font-sans text-sm leading-relaxed text-white/60">{{ step.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
