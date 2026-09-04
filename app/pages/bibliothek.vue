<script setup lang="ts">
const rubriken = [
  'Werksammlungen', 'Klassik', 'Moderne Literatur', 'Poesie', 'Fantastik',
  'Kriminalromane', 'Kinderliteratur', 'Nachschlagewerke', 'Wörterbücher',
  'Lehrbücher', 'Geschichte', 'Zeitschriften',
]

usePageSeo({
  title: 'Bibliothek – DRKI e.V.',
  description: 'Die Dostojewskij-Bibliothek des DRKI: die drittgrößte russischsprachige Bibliothek Deutschlands, mit zwölf Rubriken von Klassik bis Kinderliteratur.',
  path: '/bibliothek',
})
</script>

<template>
  <div>
    <section class="mx-auto max-w-3xl px-6 py-16">
      <div class="flex flex-wrap items-start justify-between gap-6">
        <h1 class="font-display text-4xl leading-tight text-ink">Bibliothek</h1>
        <a
          href="https://drki.de/dosto-bib/"
          target="_blank"
          rel="noopener"
          class="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy px-6 py-3 font-label text-xs uppercase tracking-wide text-white transition hover:bg-navy-dark"
        >
          Zum Katalog →
        </a>
      </div>

      <img
        src="/images/gallery-institut-innen.jpg"
        alt="Bibliothek im Deutsch-Russischen Kulturinstitut"
        class="mt-8 aspect-[16/9] w-full rounded-2xl object-cover"
      >

      <p class="mt-8 font-sans text-base leading-relaxed text-ink/75">
        In unserem Hause beherbergen wir eine frei zugängliche russischsprachige Bibliothek, die
        den Namen von Fjodor Dostojewskij trägt, mit einem Medienbestand von ca. 25.000
        Exemplaren. Sie ist nach Berlin und München die drittgrößte russischsprachige Bibliothek
        in Deutschland. Taufvater unserer Bibliothek war der bekannte Slavist Prof. Dr. Ludolf
        Müller. Seit dem Bestehen des Leseclubs 1993 wuchs unsere Bibliothek immer mehr und kann
        eine umfassende und beachtliche Sammlung an russischsprachigen Medieneinheiten vorweisen.
      </p>

      <p class="mt-4 font-sans text-sm text-ink/60">
        Die Bibliothek ist in das offizielle Register „Bibliotheken in Dresden“ aufgenommen.
      </p>

      <h2 class="mt-12 font-display text-xl text-ink">Die Bibliothek verfügt über</h2>
      <ul class="mt-4 space-y-2 font-sans text-sm leading-relaxed text-ink/75">
        <li>— einen Lesesaal für russische und klassische Weltliteratur, moderne, populär-wissenschaftliche, Lehr- und Nachschlageliteratur</li>
        <li>— einen Lesesaal für Zeitungen, Zeitschriften, wissenschaftliche Ausgaben und Lehrbücher, Enzyklopädie- und Nachschlageliteratur</li>
        <li>— eine Literaturstube für vierteljährliche Lesertreffen</li>
        <li>— eine spezielle Abteilung für besonders wertvolle Exemplare bzw. handsignierte Bücher von Tschingis Aitmatow, Daniil Granin, Bella Achmadulina, Anatoli Pristawkin, Jewgeni Jewtuschenko, Dina Rubina und vielen anderen Autoren</li>
        <li>— deutsche Übersetzungen russischer Bücher</li>
      </ul>

      <h2 class="mt-12 font-display text-xl text-ink">Rubriken</h2>
      <div class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="r in rubriken"
          :key="r"
          class="rounded-full border border-black/10 px-3.5 py-1.5 font-label text-xs uppercase tracking-wide text-ink/70"
        >
          {{ r }}
        </span>
      </div>
      <p class="mt-4 font-sans text-sm leading-relaxed text-ink/70">
        Die Werksammlung von F. M. Dostojewskij und Literaturwerke über den Schriftsteller nehmen
        in der Bibliothek einen besonderen Platz ein. Die allgemeinen Nutzungsbedingungen der
        Bibliothek sind im Lesesaal ausgehängt und für alle Besucher bindend.
      </p>

      <h2 class="mt-12 font-display text-xl text-ink">Quellen</h2>
      <p class="mt-4 font-sans text-sm leading-relaxed text-ink/70">
        Herkunft des Bücherbestandes: Geschenke und teilweise Einkauf. Besonderer Dank gebührt
        hier unseren Hauptsponsoren:
      </p>
      <ul class="mt-4 space-y-4 font-sans text-sm leading-relaxed text-ink/70">
        <li>
          <strong class="text-ink">Das Moskauer Komitee für Telekommunikation und Massenmedien</strong> —
          es nimmt regelmäßig an der Leipziger Büchermesse teil und hat bereits mehr als 2.000
          Exemplare wertvoller Ausgaben an die Bibliothek übergeben.
        </li>
        <li>
          <strong class="text-ink">„Der Kurier der Zarin“</strong>, Anja Baier, Berlin —
          Versandbuchhandel für russische und osteuropäische Literatur.
        </li>
        <li>
          <strong class="text-ink">Die Dresdner Stiftung für Kunst und Kultur der Stadtsparkasse</strong>
        </li>
      </ul>
    </section>

    <section class="border-t border-black/5 bg-cream">
      <div class="mx-auto max-w-3xl px-6 py-16">
        <h2 class="font-display text-xl text-ink">Öffnungszeiten</h2>
        <p class="mt-3 font-sans text-sm text-ink/70">
          Zittauer Str. 29, 01099 Dresden<br >
          <a href="tel:+493518047589" class="text-brick hover:underline">0351 8047589</a>
        </p>
        <dl class="mt-4 space-y-1 font-sans text-sm text-ink/75">
          <div class="flex gap-3"><dt class="w-24 text-ink/50">Montag</dt><dd>13:00–16:00 Uhr</dd></div>
          <div class="flex gap-3"><dt class="w-24 text-ink/50">Mittwoch</dt><dd>14:00–19:00 Uhr</dd></div>
          <div class="flex gap-3"><dt class="w-24 text-ink/50">Samstag</dt><dd>nach Vereinbarung</dd></div>
        </dl>
      </div>
    </section>
  </div>
</template>
