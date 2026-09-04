<script setup lang="ts">
const navLinks = [
  { label: 'Willkommen', to: '/' },
  { label: 'Aktuelles', to: '/aktuelles' },
  { label: 'Veranstaltungen', to: '/aktuelle-veranstaltungen' },
  { label: 'Projekte', to: '/projekte' },
  { label: 'Bibliothek', to: '/bibliothek' },
  { label: 'Über uns', to: '/ueber-uns' },
  { label: 'Archiv', to: '/chronik-archiv' },
]

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/drkidresden/', icon: 'facebook' },
  { label: 'YouTube', href: 'https://www.youtube.com/@deutsch-russischeskulturin8168', icon: 'youtube' },
  { label: 'Telegram', href: 'https://telegram.me/drki1993', icon: 'telegram' },
]

const mobileOpen = ref(false)
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 24
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <header class="sticky top-0 z-40 px-3 pt-3 sm:px-6">
      <div
        class="mx-auto max-w-6xl rounded-2xl border transition-all duration-300"
        :class="scrolled
          ? 'border-black/10 bg-white/85 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] backdrop-blur-md'
          : 'border-transparent bg-transparent'"
      >
        <div class="flex items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
          <NuxtLink to="/" class="flex shrink-0 items-center">
            <img src="/images/logo-color.png" alt="DRKI e.V." class="h-10 w-auto sm:h-11">
          </NuxtLink>

          <nav class="hidden items-center gap-3 lg:flex xl:gap-6">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="whitespace-nowrap font-label text-xs uppercase tracking-wide text-ink/60 transition hover:text-ink"
              active-class="text-ink"
            >
              {{ link.label }}
            </NuxtLink>
          </nav>

          <div class="flex shrink-0 items-center gap-2.5">
            <div class="hidden items-center gap-2 border-r border-black/10 pr-2.5 lg:flex">
              <a
                v-for="social in socialLinks"
                :key="social.href"
                :href="social.href"
                target="_blank"
                rel="noopener"
                :aria-label="social.label"
                class="text-ink/40 transition hover:text-ink"
              >
                <SocialIcon :icon="social.icon" />
              </a>
            </div>
            <a
              href="#spenden"
              class="hidden whitespace-nowrap rounded-full bg-navy px-5 py-2.5 font-label text-xs uppercase tracking-wide text-white transition hover:bg-navy-dark sm:inline-block"
            >
              Jetzt spenden
            </a>
            <button
              class="grid h-9 w-9 place-items-center rounded-full border border-black/10 lg:hidden"
              aria-label="Menü öffnen"
              @click="mobileOpen = !mobileOpen"
            >
              <span class="sr-only">Menü</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M1 4h16M1 9h16M1 14h16" stroke="#2f2f2f" stroke-width="1.5" stroke-linecap="round" />
              </svg>
            </button>
          </div>
        </div>

        <div v-if="mobileOpen" class="border-t border-black/10 lg:hidden">
          <nav class="flex flex-col gap-1 px-4 py-4">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="rounded-lg px-3 py-2.5 font-label text-xs uppercase tracking-wide text-ink/80 hover:bg-cream"
              @click="mobileOpen = false"
            >
              {{ link.label }}
            </NuxtLink>
            <a href="#spenden" class="mt-2 rounded-full bg-navy px-5 py-2.5 text-center font-label text-xs uppercase tracking-wide text-white">
              Jetzt spenden
            </a>

            <div class="mt-3 flex items-center justify-center gap-5 border-t border-black/10 pt-4">
              <a
                v-for="social in socialLinks"
                :key="social.href"
                :href="social.href"
                target="_blank"
                rel="noopener"
                :aria-label="social.label"
                class="text-ink/40 transition hover:text-ink"
              >
                <SocialIcon :icon="social.icon" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <SiteFooter />
  </div>
</template>
