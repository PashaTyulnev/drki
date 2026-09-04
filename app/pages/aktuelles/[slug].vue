<script setup lang="ts">
const route = useRoute()
const { data: post, error } = await useFetch(`/api/posts/${route.params.slug}`)

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' })
}

usePageSeo({
  title: post.value?.title ? `${post.value.title} – Aktuelles – DRKI e.V.` : 'Beitrag – DRKI e.V.',
  description: post.value?.excerpt || 'Ein Beitrag aus dem Deutsch-Russischen Kulturinstitut Dresden.',
  path: `/aktuelles/${route.params.slug}`,
  image: post.value?.image || undefined,
  noindex: !!error.value,
})

if (post.value) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.value.title,
          datePublished: post.value.date,
          image: post.value.image ? [post.value.image] : undefined,
          author: {
            '@type': 'Organization',
            name: 'Deutsch-Russisches Kulturinstitut e.V.',
            url: SITE_URL,
          },
          publisher: {
            '@type': 'Organization',
            name: 'Deutsch-Russisches Kulturinstitut e.V.',
            logo: {
              '@type': 'ImageObject',
              url: `${SITE_URL}/images/logo-color.png`,
            },
          },
          mainEntityOfPage: `${SITE_URL}/aktuelles/${route.params.slug}`,
        }),
      },
    ],
  })
}
</script>

<template>
  <section class="mx-auto max-w-3xl px-6 py-16">
    <NuxtLink to="/aktuelles" class="font-label text-xs uppercase tracking-wide text-ink/50 hover:text-ink">
      ← Alle Beiträge
    </NuxtLink>

    <p v-if="error" class="mt-8 font-sans text-sm text-brick">
      Dieser Beitrag konnte nicht geladen werden.
    </p>

    <template v-else-if="post">
      <div class="mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-cream">
        <img
          :src="post.image || '/images/post-fallback.svg'"
          :alt="post.imageAlt || post.title"
          class="h-full w-full object-contain"
        >
      </div>

      <p class="mt-8 font-label text-xs uppercase tracking-wide text-brick">
        {{ formatDate(post.date) }}
      </p>

      <h1 class="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
        {{ post.title }}
      </h1>

      <div class="post-prose mt-8 max-w-none font-sans text-base leading-relaxed text-ink/80" v-html="post.html" />
    </template>
  </section>
</template>

<style scoped>
.post-prose :deep(p) {
  margin-bottom: 1em;
}
.post-prose :deep(strong) {
  color: rgb(var(--color-ink));
  font-weight: 600;
}
.post-prose :deep(a) {
  color: rgb(var(--color-brick));
  text-decoration: underline;
}
.post-prose :deep(img) {
  margin: 1.5em 0;
  width: 100%;
  border-radius: 1rem;
}
</style>
