<script setup lang="ts">
const items = [
  {
    n: '01',
    title: 'Dostojewski-Bibliothek',
    text: 'Über 3.000 russischsprachige Bücher, Zeitschriften und Kulturzeugnisse — für alle Mitglieder frei zugänglich.',
    image: '/images/gallery-institut-innen.jpg',
  },
  {
    n: '02',
    title: 'Kulturveranstaltungen',
    text: 'Lesungen, Konzerte, Filmabende und Diskussionen — das ganze Jahr über im Herzen Dresdens.',
    image: '/images/gallery-denkmal-enthuellung.jpg',
  },
  {
    n: '03',
    title: 'Begegnung & Dialog',
    text: 'Ein Ort für die deutsch-russische Gemeinschaft in Dresden — offen, unabhängig und geprägt von Begegnung, Kultur und menschlichem Miteinander.',
    image: '/images/gallery-fuehrung-saechsisch.jpg',
  },
]
</script>

<template>
  <section id="was-wir-tun" class="border-t border-black/5 bg-white">
    <div class="mx-auto max-w-6xl px-6 py-16">
      <h2 class="max-w-xl font-display text-3xl leading-tight text-ink sm:text-4xl">
        Kultur, Begegnung, Verständigung.
      </h2>

      <div class="mt-12 divide-y divide-black/10 border-t border-black/10">
        <div
          v-for="item in items"
          :key="item.n"
          class="grid items-center gap-6 py-8 sm:grid-cols-[auto_1fr_auto] sm:gap-10"
        >
          <span class="font-label text-sm text-ink/30">{{ item.n }}</span>

          <div>
            <h3 class="font-display text-2xl text-ink">{{ item.title }}</h3>
            <p class="mt-2 max-w-md font-sans text-sm leading-relaxed text-ink/70">{{ item.text }}</p>
          </div>

          <img
            :src="item.image"
            :alt="item.title"
            loading="lazy"
            class="aspect-[4/3] w-full max-w-[220px] shrink-0 justify-self-start rounded-xl object-cover sm:w-40 sm:justify-self-end"
          >
        </div>
      </div>
    </div>
  </section>
</template>
