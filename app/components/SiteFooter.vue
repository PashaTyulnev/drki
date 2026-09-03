<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-offblack text-white/80">
    <div class="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <img src="/images/logo-white.png" alt="DRKI e.V." class="h-12 w-auto">
        <p class="mt-4 font-sans text-sm leading-relaxed text-white/60">
          Deutsch-Russisches Kulturinstitut Dresden — Dialog durch Kultur seit 1993.
        </p>
      </div>

      <div>
        <p class="font-label text-[11px] uppercase tracking-[0.18em] text-white/40">Servicebüro</p>
        <ul class="mt-3 space-y-1.5 font-sans text-sm text-white/70">
          <li>0351 801 41 60</li>
          <li><a href="mailto:drkidresden@drki.de" class="hover:text-white">drkidresden@drki.de</a></li>
          <li>Mo: 13:00–16:00 Uhr</li>
          <li>Mi: 11:00–19:00 Uhr</li>
        </ul>
      </div>

      <div>
        <p class="font-label text-[11px] uppercase tracking-[0.18em] text-white/40">Bankverbindung</p>
        <ul class="mt-3 space-y-1.5 font-sans text-sm text-white/70">
          <li>IBAN: DE26 8505 0300 3120 0768 04</li>
          <li>BIC/SWIFT: OSDDDE81XXX</li>
        </ul>
      </div>

      <div>
        <p class="font-label text-[11px] uppercase tracking-[0.18em] text-white/40">Rechtliches</p>
        <ul class="mt-3 space-y-1.5 font-sans text-sm text-white/70">
          <li><NuxtLink to="/kontakt" class="hover:text-white">Kontakt</NuxtLink></li>
          <li><NuxtLink to="/datenschutz" class="hover:text-white">Datenschutz</NuxtLink></li>
          <li><NuxtLink to="/impressum" class="hover:text-white">Impressum</NuxtLink></li>
        </ul>
      </div>
    </div>

    <div class="border-t border-white/10 px-6 py-6 text-center font-sans text-xs text-white/40">
      © {{ year }} DRKI e.V.
    </div>
  </footer>
</template>
