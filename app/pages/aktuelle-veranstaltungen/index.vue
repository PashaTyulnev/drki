<script setup lang="ts">
const { data: events, pending, error } = await useFetch('/api/events', {
  query: { per_page: 12 },
})

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
</script>

<template>
  <section class="mx-auto max-w-6xl px-6 py-16">
    <h1 class="max-w-xl font-display text-4xl leading-tight text-ink">
      Was als Nächstes ansteht.
    </h1>
    <p class="mt-4 max-w-md font-sans text-base leading-relaxed text-ink/70">
      Lesungen, Konzerte und Begegnungen im Institut — chronologisch nach Termin, nicht nach
      Veröffentlichungsdatum.
    </p>

    <p v-if="pending" class="mt-12 font-sans text-sm text-ink/50">Veranstaltungen werden geladen …</p>
    <p v-else-if="error" class="mt-12 font-sans text-sm text-brick">
      Die Veranstaltungen konnten gerade nicht geladen werden.
    </p>
    <p v-else-if="!events?.length" class="mt-12 font-sans text-sm text-ink/50">
      Aktuell sind keine Veranstaltungen angekündigt.
    </p>

    <div v-else class="mt-12 divide-y divide-black/10 border-t border-black/10">
      <NuxtLink
        v-for="ev in events"
        :key="ev.id"
        :to="`/aktuelle-veranstaltungen/${ev.id}`"
        class="group grid items-center gap-6 py-8 sm:grid-cols-[140px_1fr_auto]"
      >
        <div class="aspect-[4/3] w-full overflow-hidden rounded-xl bg-cream">
          <img
            :src="ev.image || '/images/post-fallback.svg'"
            :alt="ev.title"
            loading="lazy"
            class="h-full w-full object-contain transition duration-500 group-hover:scale-105"
          >
        </div>

        <div>
          <p class="font-label text-[11px] uppercase tracking-[0.16em] text-brick">
            {{ formatDate(ev.start) }} · {{ formatTime(ev.start) }} Uhr
          </p>
          <h2 class="mt-2 font-display text-xl leading-snug text-ink">
            {{ ev.title }}
          </h2>
          <p v-if="ev.venue" class="mt-1 font-sans text-sm text-ink/60">{{ ev.venue }}</p>
        </div>

        <div class="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-2">
          <span v-if="ev.cost" class="font-label text-xs uppercase tracking-wide text-ink/60">{{ ev.cost }}</span>
          <span class="font-label text-xs uppercase tracking-wide text-ink/50 group-hover:text-ink">
            Details →
          </span>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
