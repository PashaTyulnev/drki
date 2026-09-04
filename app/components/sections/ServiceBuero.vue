<script setup lang="ts">
const services = [
  'Beantragung der Reisepässe der Russischen Föderation',
  'Ausstellung von Lebensbescheinigungen',
  'Beantragung einer Rente der Russischen Föderation',
]

const documents = [
  {
    title: 'Dienstleistungen des Servicebüros',
    hint: 'Übersicht (PDF)',
    href: 'https://drki.de/wp-content/uploads/2026/03/L2026Dienstleistungen-des-Servicebueros.pdf',
  },
  {
    title: 'Список документов',
    hint: 'Für ОЗП und Akt der persönlichen Vorsprache (PDF)',
    href: 'https://drki.de/wp-content/uploads/2026/03/L2026%D0%94%D0%BB%D1%8F-%D0%BE%D1%84%D0%BE%D1%80%D0%BC%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F-%D0%9E%D0%97%D0%9F-%D0%B8-%D0%90%D0%BA%D1%82%D0%B0-%D0%BE-%D0%BB%D0%B8%D1%87%D0%BD%D0%BE%D0%B9-%D1%8F%D0%B2%D0%BA%D0%B5-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D0%BE-%D0%BF%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B0%D0%B2%D0%B8%D1%82%D1%8C-%D1%81%D0%BB%D0%B5%D0%B4%D1%83%D1%8E%D1%89%D1%83%D1%8E-%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8E-%D0%B8-%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B.pdf',
  },
]
</script>

<template>
  <section class="border-t border-black/5 bg-white">
    <div class="mx-auto max-w-6xl px-6 py-16">
      <div class="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 class="font-display text-3xl leading-tight text-ink sm:text-4xl">
            Servicebüro für russische Bürger
          </h2>

          <p class="mt-5 font-sans text-base leading-relaxed text-ink/70">
            Im DRKI e.V. arbeitet ein Servicebüro zur Unterstützung und Vorbereitung
            konsularischer Unterlagen für russische Staatsangehörige. Insbesondere wird
            Rentnerinnen und Rentnern Hilfe zur Überwindung von bürokratischen Hindernissen
            mit russischen Behörden erwiesen.
          </p>

          <div class="mt-6 flex items-baseline gap-3 border-t border-black/10 pt-6">
            <p class="font-display text-3xl text-brick">50.000+</p>
            <p class="font-sans text-sm leading-relaxed text-ink/60">
              schriftlich bearbeitete Anfragen im Servicebüro — über einen Zeitraum von mehr
              als 15 Jahren.
            </p>
          </div>

          <p class="mt-6 font-label text-[11px] uppercase tracking-[0.16em] text-ink/40">
            Dazu zählen
          </p>
          <ul class="mt-3 space-y-2 font-sans text-sm leading-relaxed text-ink/75">
            <li v-for="service in services" :key="service" class="flex gap-2.5">
              <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-brick" />
              {{ service }}
            </li>
          </ul>
        </div>

        <div class="rounded-2xl border border-black/10 p-8">
          <p class="font-label text-[11px] uppercase tracking-[0.16em] text-brick">Kontakt &amp; Öffnungszeiten</p>
          <p class="mt-4 font-sans text-sm leading-relaxed text-ink/75">
            Deutsch-Russisches Kulturinstitut e.V.<br >
            Zittauer Straße 29, 01099 Dresden
          </p>
          <dl class="mt-4 space-y-1.5 font-sans text-sm text-ink/75">
            <div class="flex gap-2">
              <dt class="text-ink/50">Öffnungszeiten:</dt>
              <dd>Mo. 13:00–16:00 Uhr</dd>
            </div>
            <div class="flex gap-2">
              <dt class="text-ink/50">Telefon:</dt>
              <dd><a href="tel:+493518047974" class="text-brick hover:underline">0351 8047974</a></dd>
            </div>
            <div class="flex gap-2">
              <dt class="text-ink/50">E-Mail:</dt>
              <dd><a href="mailto:drkidresden@drki.de" class="text-brick hover:underline">drkidresden@drki.de</a></dd>
            </div>
          </dl>

          <div class="mt-6 space-y-3 border-t border-black/10 pt-6">
            <a
              v-for="doc in documents"
              :key="doc.href"
              :href="doc.href"
              target="_blank"
              rel="noopener"
              class="group flex items-center justify-between gap-4 rounded-xl border border-black/10 px-4 py-3 transition hover:border-black/20 hover:bg-cream"
            >
              <span>
                <span class="block font-sans text-sm text-ink">{{ doc.title }}</span>
                <span class="block font-label text-[11px] uppercase tracking-wide text-ink/40">{{ doc.hint }}</span>
              </span>
              <span class="shrink-0 font-label text-xs uppercase tracking-wide text-ink/40 transition group-hover:text-ink">↓</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
