const WP_API_BASE = 'https://cms.drki.de/wp-json/wp/v2'

interface WpPost {
  id: number
  slug: string
  date: string
  title: { rendered: string }
  excerpt: { rendered: string }
  content: { rendered: string }
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
      media_details?: { sizes?: Record<string, { source_url: string }> }
    }>
  }
}

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')

  const posts = await $fetch<WpPost[]>(`${WP_API_BASE}/posts`, {
    query: { slug, lang: 'de', _embed: true },
  })

  if (!posts.length) {
    throw createError({ statusCode: 404, statusMessage: 'Beitrag nicht gefunden' })
  }

  const post = posts[0]
  const media = post._embedded?.['wp:featuredmedia']?.[0]

  return {
    id: post.id,
    slug: post.slug,
    date: post.date,
    title: stripHtml(post.title.rendered),
    excerpt: stripHtml(post.excerpt.rendered),
    html: post.content.rendered,
    // Hero image is full-bleed at ~768px — "large"/"medium_large" match
    // that without shipping the full original.
    image: pickImageSize(media?.media_details?.sizes, media?.source_url ?? null, ['large', 'medium_large']),
    imageAlt: media?.alt_text || '',
  }
})
