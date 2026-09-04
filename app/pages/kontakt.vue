<script setup lang="ts">
usePageSeo({
  title: 'Kontakt – DRKI e.V.',
  description: 'Adresse, Bürozeiten und Spendenkonto des Deutsch-Russischen Kulturinstituts e.V., Zittauer Straße 29, 01099 Dresden.',
  path: '/kontakt',
})
</script>

<template>
  <div>
    <section class="mx-auto max-w-6xl px-6 py-16">
      <h1 class="max-w-xl font-display text-4xl leading-tight text-ink">
        Adresse und Bürozeiten.
      </h1>

      <div class="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 class="font-display text-xl text-ink">Adresse</h2>
          <p class="mt-3 font-sans text-base leading-relaxed text-ink/75">
            Deutsch-Russisches Kulturinstitut e.V.<br >
            Zittauer Straße 29<br >
            01099 Dresden
          </p>

          <p class="mt-6 font-sans text-base leading-relaxed text-ink/75">
            Telefon: <a href="tel:+493518014160" class="text-brick hover:underline">0351 801 41 60</a>
            <span class="block text-sm text-ink/50">
              mit Anrufbeantworter — hinterlassen Sie bitte Ihren Namen und Ihre Telefonnummer, wir
              rufen Sie zurück.
            </span>
          </p>

          <p class="mt-4 font-sans text-base leading-relaxed text-ink/75">
            E-Mail: <a href="mailto:drkidresden@drki.de" class="text-brick hover:underline">drkidresden@drki.de</a>
          </p>

          <p class="mt-4 font-sans text-base leading-relaxed text-ink/75">
            <a href="https://www.drki.de" target="_blank" rel="noopener" class="text-brick hover:underline">www.drki.de</a>
          </p>
        </div>

        <div class="rounded-2xl border border-black/10 p-8">
          <h2 class="font-display text-xl text-ink">Büro- und Sprechzeiten</h2>

          <dl class="mt-5 space-y-5">
            <div>
              <dt class="font-label text-xs uppercase tracking-wide text-brick">Montag</dt>
              <dd class="mt-1.5 font-sans text-sm text-ink/75">13:00–16:00 Uhr — Bibliothek</dd>
              <dd class="mt-0.5 font-sans text-sm text-ink/75">13:00–16:00 Uhr — Servicebüro</dd>
            </div>
            <div>
              <dt class="font-label text-xs uppercase tracking-wide text-brick">Mittwoch</dt>
              <dd class="mt-1.5 font-sans text-sm text-ink/75">11:00–15:00 Uhr — Vorstand</dd>
              <dd class="mt-0.5 font-sans text-sm text-ink/75">14:00–19:00 Uhr — Bibliothek</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <section id="spenden" class="border-t border-black/5 bg-cream">
      <div class="mx-auto max-w-6xl px-6 py-16">
        <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 class="font-display text-3xl leading-tight text-ink sm:text-4xl">
              Danke für Ihre Unterstützung.
            </h2>
            <p class="mt-4 max-w-md font-sans text-base leading-relaxed text-ink/70">
              Das Deutsch-Russische Kulturinstitut e.V. freut sich über Ihre Spende zur Förderung
              seiner gemeinnützigen Kulturarbeit.
            </p>
            <p class="mt-4 max-w-md font-sans text-sm leading-relaxed text-ink/60">
              Auf Wunsch stellen wir gern eine Spendenbescheinigung aus. Bitte teilen Sie uns dafür
              per E-Mail Ihren Namen und Ihre Anschrift mit:
              <a href="mailto:drkidresden@drki.de" class="text-brick hover:underline">drkidresden@drki.de</a>
            </p>
          </div>

          <div class="rounded-3xl bg-white p-8 sm:p-10">
            <p class="font-label text-[11px] uppercase tracking-[0.16em] text-brick">Spendenkonto</p>
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
                <dt class="text-ink/50">Empfänger</dt>
                <dd class="text-right">Deutsch-Russisches Kulturinstitut e.V.</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
