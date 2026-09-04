<script setup lang="ts">
const route = useRoute()
const { data: ev, pending, error } = await useFetch(`/api/events/${route.params.id}`)

function formatDate(iso: string) {
  return new Date(iso.replace(' ', 'T')).toLocaleDateString('de-DE', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

function formatTime(iso: string) {
  return new Date(iso.replace(' ', 'T')).toLocaleTimeString('de-DE', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

usePageSeo({
  title: ev.value?.title ? `${ev.value.title} – DRKI e.V.` : 'Veranstaltung – DRKI e.V.',
  description: stripToDescription(ev.value?.description) || 'Veranstaltung im Deutsch-Russischen Kulturinstitut Dresden.',
  path: `/aktuelle-veranstaltungen/${route.params.id}`,
  image: ev.value?.image || undefined,
  noindex: !!error.value,
})

if (ev.value) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Event',
          name: ev.value.title,
          startDate: ev.value.start.replace(' ', 'T'),
          endDate: ev.value.end.replace(' ', 'T'),
          eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
          eventStatus: 'https://schema.org/EventScheduled',
          location: {
            '@type': 'Place',
            name: ev.value.venue || 'Deutsch-Russisches Kulturinstitut e.V.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Zittauer Straße 29',
              postalCode: '01099',
              addressLocality: 'Dresden',
              addressCountry: 'DE',
            },
          },
          image: ev.value.image ? [ev.value.image] : undefined,
          description: stripToDescription(ev.value.description, 500),
          organizer: {
            '@type': 'Organization',
            name: ev.value.organizer || 'Deutsch-Russisches Kulturinstitut e.V.',
            url: SITE_URL,
          },
        }),
      },
    ],
  })
}
</script>

<template>
  <section class="mx-auto max-w-3xl px-6 py-16">
    <NuxtLink to="/aktuelle-veranstaltungen" class="font-label text-xs uppercase tracking-wide text-ink/50 hover:text-ink">
      ← Alle Veranstaltungen
    </NuxtLink>

    <p v-if="pending" class="mt-8 font-sans text-sm text-ink/50">Veranstaltung wird geladen …</p>
    <p v-else-if="error" class="mt-8 font-sans text-sm text-brick">
      Diese Veranstaltung konnte nicht geladen werden.
    </p>

    <template v-else-if="ev">
      <div class="mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-cream">
        <img
          :src="ev.image || '/images/post-fallback.svg'"
          :alt="ev.title"
          class="h-full w-full object-contain"
        >
      </div>

      <p class="mt-8 font-label text-xs uppercase tracking-wide text-brick">
        {{ formatDate(ev.start) }} · {{ formatTime(ev.start) }}–{{ formatTime(ev.end) }} Uhr
      </p>

      <h1 class="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
        {{ ev.title }}
      </h1>

      <div class="mt-4 flex flex-wrap gap-x-6 gap-y-1 font-sans text-sm text-ink/60">
        <span v-if="ev.venue">📍 {{ ev.venue }}</span>
        <span v-if="ev.organizer">Veranstalter: {{ ev.organizer }}</span>
        <span v-if="ev.cost">Eintritt: {{ ev.cost }}</span>
      </div>

      <div
        v-if="ev.description"
        class="prose-events mt-8 max-w-none font-sans text-base leading-relaxed text-ink/80"
        v-html="ev.description"
      />
      <p v-else class="mt-8 font-sans text-sm text-ink/50">
        Zu dieser Veranstaltung liegt noch keine ausführliche Beschreibung vor.
      </p>
    </template>
  </section>
</template>

<style scoped>
.prose-events :deep(p) {
  margin-bottom: 1em;
}
.prose-events :deep(strong) {
  color: rgb(var(--color-ink));
  font-weight: 600;
}
.prose-events :deep(a) {
  color: rgb(var(--color-brick));
  text-decoration: underline;
}
</style>
