<script setup lang="ts">
usePageSeo({
  title: 'Über uns – DRKI e.V.',
  description: 'Geschichte, Team und Arbeit des Deutsch-Russischen Kulturinstituts e.V. Dresden seit 1993.',
  path: '/ueber-uns',
})

const sections = [
  {
    n: '01',
    title: 'Geschichte',
    image: '/images/dresden-skyline.jpg',
    paragraphs: [
      'Unser gemeinnütziger Verein entstand aus einem Leseklub bei der Gesellschaft Sachsen-Osteuropa und wurde im Mai 1993 als Deutsch-Russisches Kulturinstitut e.V. gegründet. Seitdem setzen wir uns mit all unseren Kräften dafür ein, den Dialog zwischen den deutsch- und russischsprachigen Kulturräumen zu fördern – bis heute.',
      'Das DRKI realisiert verschiedenste Projekte und Veranstaltungen wie Lesungen, Konzerte, Ausstellungen, wissenschaftliche Symposien oder Theateraufführungen mit namhaften deutsch- und russischsprachigen Gästen und bereichert somit das kulturelle Angebot im Freistaat Sachsen. Seit 2009 ist das Russische Zentrum ein fester Bestandteil des DRKI. Das Zentrum unterstützt die Förderung der russischen Sprache und das Interesse an der russischen Kultur. In unserem Vereinshaus beherbergen wir die drittgrößte russischsprachige Bibliothek in Deutschland, die Dostojewskij-Bibliothek. Unser Servicezentrum bietet den Staatsbürgern der Russischen Föderation in Dresden und Umgebung Beratungen und Unterstützung in Pass-, Renten- und sonstigen Fragen.',
    ],
  },
  {
    n: '02',
    title: 'Wir organisieren',
    image: '/images/gallery-denkmal-enthuellung.jpg',
    list: ['Lesungen', 'Konzerte', 'Ausstellungen', 'Symposien', 'Theateraufführungen'],
  },
  {
    n: '03',
    title: 'Meilenstein, Strategie, Vision',
    image: '/images/gallery-fuehrung-saechsisch.jpg',
    paragraphs: [
      'Unser Verein realisiert verschiedenste Projekte und Veranstaltungen wie Lesungen, Konzerte, Ausstellungen, wissenschaftliche Symposien oder Theateraufführungen mit namhaften deutsch- und russischsprachigen Gästen und bereichert somit das kulturelle Angebot im Freistaat Sachsen. Seit 2009 ist das Russische Zentrum ein fester Bestandteil des DRKI. Das Zentrum unterstützt die Förderung der russischen Sprache und das Interesse an der russischen Kultur. In unserem Vereinshaus beherbergen wir die drittgrößte russischsprachige Bibliothek in Deutschland, die Dostojewskij-Bibliothek. Unser Servicezentrum bietet den Staatsbürgern der Russischen Föderation in Dresden und Umgebung Beratungen und Unterstützung in Pass-, Renten- und sonstigen Fragen.',
    ],
  },
  {
    n: '04',
    title: 'Team',
    image: '/images/gallery-institut-innen.jpg',
    paragraphs: [
      'Ein guter Freund ist – so sagt das Sprichwort – mehr wert als alles Geld der Welt. Diese weisen Worte zum Maßstab genommen, ist unser Verein wahrhaftig reich gesegnet, denn von Anfang an konnten wir uns auf einen zuverlässigen Kreis von ehrenamtlichen Helfern stützen. Sie sind es, die unseren Verein mit Leben erfüllen. Ob in der Bibliothek, im Servicebüro, als Helfer bei der Organisation und Durchführung von Veranstaltungen oder bei Arbeiten am und im Haus – sie sind da, wenn sie gebraucht werden. Sie sind im wahrsten Sinne die Seele des DRKI.',
    ],
  },
]
</script>

<template>
  <section class="mx-auto max-w-6xl px-6 py-16">
    <div class="flex flex-wrap items-start justify-between gap-6">
      <h1 class="font-display text-4xl leading-tight text-ink">Über uns</h1>
      <NuxtLink
        to="/ueber-uns/satzung"
        class="inline-flex shrink-0 items-center gap-2 rounded-full border border-black/10 px-5 py-2.5 font-label text-xs uppercase tracking-wide text-ink/70 transition hover:border-black/20 hover:text-ink"
      >
        Satzung lesen →
      </NuxtLink>
    </div>

    <div class="mt-12 divide-y divide-black/10 border-t border-black/10">
      <div
        v-for="section in sections"
        :key="section.n"
        class="grid items-start gap-8 py-12 lg:grid-cols-[auto_1fr_260px] lg:gap-12"
      >
        <span class="font-label text-sm text-ink/30">{{ section.n }}</span>

        <div>
          <h2 class="font-display text-2xl text-ink">{{ section.title }}</h2>

          <template v-if="section.paragraphs">
            <p
              v-for="(p, i) in section.paragraphs"
              :key="i"
              class="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-ink/70"
            >
              {{ p }}
            </p>
          </template>

          <ul v-if="section.list" class="mt-4 flex flex-wrap gap-2">
            <li
              v-for="item in section.list"
              :key="item"
              class="rounded-full border border-black/10 px-3.5 py-1.5 font-label text-xs uppercase tracking-wide text-ink/70"
            >
              {{ item }}
            </li>
          </ul>
        </div>

        <img
          :src="section.image"
          :alt="section.title"
          loading="lazy"
          class="aspect-[4/3] w-full max-w-[320px] justify-self-start rounded-xl object-cover lg:justify-self-end"
        >
      </div>

      <div class="grid items-start gap-8 py-12 lg:grid-cols-[auto_1fr_260px] lg:gap-12">
        <span class="font-label text-sm text-ink/30">05</span>

        <div>
          <h2 class="font-display text-2xl text-ink">Spendenaufruf</h2>
          <p class="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-ink/70">
            Für unsere Arbeit sind wir auf Spenden angewiesen. Wenn Sie unser Engagement
            unterstützen möchten, würden wir uns über eine Spende freuen.
          </p>

          <div class="mt-5 inline-block rounded-xl border border-black/10 px-5 py-4">
            <p class="font-label text-[11px] uppercase tracking-[0.16em] text-brick">Unsere Kontoverbindung</p>
            <dl class="mt-3 space-y-1.5 font-sans text-sm text-ink/80">
              <div class="flex gap-2"><dt class="text-ink/50">IBAN:</dt><dd>DE26 8505 0300 3120 0768 04</dd></div>
              <div class="flex gap-2"><dt class="text-ink/50">BIC/SWIFT:</dt><dd>OSDDDE81XXX</dd></div>
              <div class="flex gap-2"><dt class="text-ink/50">Verwendungszweck:</dt><dd>SPENDE</dd></div>
            </dl>
          </div>
        </div>

        <img
          src="/images/gallery-denkmal-portrait.jpg"
          alt="Spendenaufruf"
          loading="lazy"
          class="aspect-[4/3] w-full max-w-[320px] justify-self-start rounded-xl object-cover object-top lg:justify-self-end"
        >
      </div>
    </div>
  </section>
</template>
