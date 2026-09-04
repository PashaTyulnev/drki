<script setup lang="ts">
const PROJECTS = [
  { title: 'Dostojewski in Dresden', slug: 'dostojewski-in-dresden' },
  { title: 'Russische Spuren in Dresden', slug: 'russische-spuren-in-dresden' },
  { title: 'Sächsische Spuren im russischsprachigen Ausland', slug: 'saechsische-spuren-im-russischsprachigem-ausland' },
  { title: 'Musikalisch-theatralischer Kinder- und Jugendklub', slug: 'musikalisch-theatralischer-kinder-und-jugendklub' },
  { title: 'INA Chor', slug: 'ina-chor' },
  { title: 'Garnisonsfriedhof', slug: 'garnisonsfriedhof' },
  { title: 'Städtepartnerschaft Dresden / St. Petersburg', slug: 'staedtepartnerschaft-dresden-st-petersburg' },
  { title: 'Brücken Bauen', slug: 'bruecken-bauen' },
]

const navLinks = [
  { label: 'Willkommen', to: '/' },
  { label: 'Aktuelles', to: '/aktuelles' },
  { label: 'Veranstaltungen', to: '/aktuelle-veranstaltungen' },
  {
    label: 'Projekte',
    to: '/projekte',
    children: PROJECTS.map((p) => ({ label: p.title, to: `/projekte/${p.slug}` })),
  },
  { label: 'Bibliothek', to: '/bibliothek' },
  { label: 'Über uns', to: '/ueber-uns' },
  { label: 'Archiv', to: '/chronik-archiv' },
  { label: 'Mitgliedschaft', to: '/mitgliedschaft' },
  { label: 'Kontakt', to: '/kontakt' },
]

const mobileOpenSections = ref<Set<string>>(new Set())
function toggleMobileSection(label: string) {
  if (mobileOpenSections.value.has(label)) mobileOpenSections.value.delete(label)
  else mobileOpenSections.value.add(label)
}

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/drkidresden/', icon: 'facebook' },
  { label: 'YouTube', href: 'https://www.youtube.com/@deutsch-russischeskulturin8168', icon: 'youtube' },
  { label: 'Telegram', href: 'https://telegram.me/drki1993', icon: 'telegram' },
]

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Deutsch-Russisches Kulturinstitut e.V.',
        alternateName: 'DRKI e.V.',
        url: SITE_URL,
        logo: `${SITE_URL}/images/logo-color.png`,
        image: `${SITE_URL}/images/dresden-skyline.jpg`,
        description: 'Das Deutsch-Russische Kulturinstitut fördert seit 1993 den Dialog zwischen den deutsch- und russischsprachigen Kulturräumen durch Bibliothek, Veranstaltungen, Ausstellungen und Konzerte.',
        foundingDate: '1993',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Zittauer Straße 29',
          postalCode: '01099',
          addressLocality: 'Dresden',
          addressCountry: 'DE',
        },
        telephone: '+49-351-8014160',
        email: 'drkidresden@drki.de',
        sameAs: socialLinks.map((s) => s.href),
      }),
    },
  ],
})

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
            <div v-for="link in navLinks" :key="link.to" class="group relative">
              <NuxtLink
                :to="link.to"
                class="flex items-center gap-1 whitespace-nowrap font-label text-xs uppercase tracking-wide text-ink/60 transition hover:text-ink"
                active-class="text-ink"
              >
                {{ link.label }}
                <svg
                  v-if="link.children"
                  width="8" height="8" viewBox="0 0 8 8" fill="none" class="mt-px opacity-50"
                >
                  <path d="M1 2.5 4 5.5 7 2.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </NuxtLink>

              <div
                v-if="link.children"
                class="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 translate-y-1 rounded-2xl border border-black/10 bg-white p-2 opacity-0 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.25)] transition-all duration-150 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-2 group-focus-within:opacity-100"
              >
                <NuxtLink
                  v-for="child in link.children"
                  :key="child.to"
                  :to="child.to"
                  class="block rounded-xl px-3.5 py-2.5 font-sans text-sm leading-snug text-ink/75 transition hover:bg-cream hover:text-ink"
                >
                  {{ child.label }}
                </NuxtLink>
              </div>
            </div>
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
            <template v-for="link in navLinks" :key="link.to">
              <div v-if="link.children">
                <button
                  type="button"
                  class="flex w-full items-center justify-between rounded-lg px-3 py-2.5 font-label text-xs uppercase tracking-wide text-ink/80 hover:bg-cream"
                  @click="toggleMobileSection(link.label)"
                >
                  {{ link.label }}
                  <svg
                    width="10" height="10" viewBox="0 0 10 10" fill="none"
                    class="shrink-0 transition-transform"
                    :class="mobileOpenSections.has(link.label) ? 'rotate-180' : ''"
                  >
                    <path d="M1.5 3 5 7 8.5 3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
                <div v-if="mobileOpenSections.has(link.label)" class="ml-3 mt-1 flex flex-col gap-0.5 border-l border-black/10 pl-3">
                  <NuxtLink
                    :to="link.to"
                    class="rounded-lg px-3 py-2 font-sans text-xs text-ink/60 hover:bg-cream"
                    @click="mobileOpen = false"
                  >
                    Übersicht
                  </NuxtLink>
                  <NuxtLink
                    v-for="child in link.children"
                    :key="child.to"
                    :to="child.to"
                    class="rounded-lg px-3 py-2 font-sans text-xs leading-snug text-ink/70 hover:bg-cream"
                    @click="mobileOpen = false"
                  >
                    {{ child.label }}
                  </NuxtLink>
                </div>
              </div>
              <NuxtLink
                v-else
                :to="link.to"
                class="rounded-lg px-3 py-2.5 font-label text-xs uppercase tracking-wide text-ink/80 hover:bg-cream"
                @click="mobileOpen = false"
              >
                {{ link.label }}
              </NuxtLink>
            </template>
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
