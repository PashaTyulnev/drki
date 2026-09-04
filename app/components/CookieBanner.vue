<script setup lang="ts">
const { consent, setConsent } = useCookieConsent()
</script>

<template>
  <ClientOnly>
    <Transition name="fade-up">
      <div
        v-if="consent === null"
        class="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 backdrop-blur-md sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-md sm:rounded-2xl sm:border sm:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)]"
        role="dialog"
        aria-label="Cookie-Hinweis"
      >
        <div class="px-5 py-5 sm:px-6">
          <p class="font-display text-base leading-snug text-ink">Cookies &amp; externe Inhalte</p>
          <p class="mt-2 font-sans text-sm leading-relaxed text-ink/70">
            Mit Ihrer Zustimmung laden wir Schriftarten von Google Fonts nach — dabei wird Ihre
            IP-Adresse an Google übertragen. Ohne Zustimmung verwenden wir eine Systemschrift.
            Mehr dazu in unserer
            <NuxtLink to="/datenschutz" class="text-brick underline hover:no-underline">Datenschutzerklärung</NuxtLink>.
          </p>
          <div class="mt-4 flex flex-wrap gap-2.5">
            <button
              type="button"
              class="rounded-full bg-navy px-5 py-2.5 font-label text-xs uppercase tracking-wide text-white transition hover:bg-navy-dark"
              @click="setConsent('accepted')"
            >
              Akzeptieren
            </button>
            <button
              type="button"
              class="rounded-full border border-black/15 px-5 py-2.5 font-label text-xs uppercase tracking-wide text-ink/70 transition hover:border-black/30 hover:text-ink"
              @click="setConsent('declined')"
            >
              Ablehnen
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </ClientOnly>
</template>

<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
</style>
