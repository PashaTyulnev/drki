<script setup lang="ts">
const benefits = [
  { title: 'Bibliothek', text: 'Voller Zugang zur Dostojewskij-Bibliothek mit über 26.000 russischsprachigen Büchern und Medien.' },
  { title: 'Veranstaltungen', text: 'Einladungen zu allen Lesungen, Konzerten und Ausstellungen im Institut.' },
  { title: 'Ermäßigung', text: 'Vergünstigte Teilnahme an Kursen, Vorträgen und Veranstaltungen.' },
  { title: 'Mitsprache', text: 'Stimmrecht und Mitsprache bei der Vereinsarbeit auf der Mitgliederversammlung.' },
]

usePageSeo({
  title: 'Mitgliedschaft – DRKI e.V.',
  description: 'Mitglied im Deutsch-Russischen Kulturinstitut werden: ab 20 € im Jahr, mit Zugang zur Bibliothek, Veranstaltungen und Mitspracherecht.',
  path: '/mitgliedschaft',
})
</script>

<template>
  <div>
    <section class="mx-auto max-w-6xl px-6 py-16">
      <h1 class="max-w-xl font-display text-4xl leading-tight text-ink">
        Werden Sie Mitglied.
      </h1>
      <p class="mt-4 max-w-md font-sans text-base leading-relaxed text-ink/70">
        Das DRKI lebt von seinen Mitgliedern. Mit Ihrer Mitgliedschaft stärken Sie den
        deutsch-russischen Dialog in Dresden — symbolisch und finanziell.
      </p>

      <div class="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 class="font-display text-xl text-ink">Ihre Vorteile</h2>
          <div class="mt-5 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2">
            <div v-for="benefit in benefits" :key="benefit.title" class="bg-white p-6">
              <p class="font-label text-[11px] uppercase tracking-[0.16em] text-brick">{{ benefit.title }}</p>
              <p class="mt-2 font-sans text-sm leading-relaxed text-ink/75">{{ benefit.text }}</p>
            </div>
          </div>
        </div>

        <div class="rounded-2xl border border-black/10 p-8">
          <h2 class="font-display text-xl text-ink">So werden Sie Mitglied</h2>
          <p class="mt-3 font-sans text-base leading-relaxed text-ink/75">
            Der Mitgliedsbeitrag beträgt ab 20 € im Jahr. Schreiben Sie uns einfach eine
            E-Mail mit Ihrem Namen und Ihrer Anschrift — wir schicken Ihnen die
            Beitrittserklärung zu.
          </p>

          <a
            href="mailto:drkidresden@drki.de?subject=Mitgliedschaft%20im%20DRKI%20e.V."
            class="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 font-label text-xs uppercase tracking-wide text-white transition hover:bg-navy-dark"
          >
            drkidresden@drki.de
          </a>

          <p class="mt-4 font-sans text-sm text-ink/60">
            Oder rufen Sie uns an: <a href="tel:+493518014160" class="text-brick hover:underline">0351 801 41 60</a>
          </p>

          <div class="mt-8 border-t border-black/10 pt-6">
            <p class="font-label text-[11px] uppercase tracking-[0.16em] text-brick">Beitragskonto</p>
            <dl class="mt-4 space-y-3 font-sans text-sm text-ink/80">
              <div class="flex justify-between gap-4">
                <dt class="text-ink/50">IBAN</dt>
                <dd>DE26 8505 0300 3120 0768 04</dd>
              </div>
              <div class="flex justify-between gap-4">
                <dt class="text-ink/50">BIC</dt>
                <dd>OSDDDE81XXX</dd>
              </div>
              <div class="flex justify-between gap-4">
                <dt class="text-ink/50">Verwendungszweck</dt>
                <dd class="text-right">Mitgliedsbeitrag</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
