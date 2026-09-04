<script setup lang="ts">
const { data: posts, pending, error } = await useFetch('/api/posts', {
  query: { per_page: 9 },
})

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' })
}

usePageSeo({
  title: 'Aktuelles – DRKI e.V.',
  description: 'Berichte von Veranstaltungen, Vorträgen und Begegnungen im Deutsch-Russischen Kulturinstitut Dresden.',
  path: '/aktuelles',
})
</script>

<template>
  <section class="mx-auto max-w-6xl px-6 py-16">
    <h1 class="max-w-xl font-display text-4xl leading-tight text-ink">
      Was im Institut passiert.
    </h1>
    <p class="mt-4 max-w-md font-sans text-base leading-relaxed text-ink/70">
      Berichte von Veranstaltungen, Vorträgen und Begegnungen — direkt aus unserem WordPress-Redaktionssystem.
    </p>

    <p v-if="pending" class="mt-12 font-sans text-sm text-ink/50">Beiträge werden geladen …</p>
    <p v-else-if="error" class="mt-12 font-sans text-sm text-brick">
      Die Beiträge konnten gerade nicht geladen werden.
    </p>

    <div v-else class="mt-12 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
      <NuxtLink
        v-for="post in posts"
        :key="post.id"
        :to="`/aktuelles/${post.slug}`"
        class="group flex flex-col bg-white p-6 transition hover:bg-cream"
      >
        <div class="aspect-[16/10] w-full overflow-hidden rounded-xl bg-cream">
          <img
            :src="post.image || '/images/post-fallback.svg'"
            :alt="post.title"
            loading="lazy"
            class="h-full w-full object-contain transition duration-500 group-hover:scale-105"
          >
        </div>

        <p class="mt-4 font-label text-[11px] uppercase tracking-[0.16em] text-brick">
          {{ formatDate(post.date) }}
        </p>
        <h2 class="mt-2 font-display text-xl leading-snug text-ink">
          {{ post.title }}
        </h2>
        <p class="mt-2 line-clamp-3 font-sans text-sm leading-relaxed text-ink/65">
          {{ post.excerpt }}
        </p>
        <span class="mt-4 font-label text-xs uppercase tracking-wide text-ink/50 group-hover:text-ink">
          Weiterlesen →
        </span>
      </NuxtLink>
    </div>
  </section>
</template>
