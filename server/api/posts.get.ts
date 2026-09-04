const WP_API_BASE = 'https://cms.drki.de/wp-json/wp/v2'

interface WpPost {
  id: number
  slug: string
  date: string
  link: string
  title: { rendered: string }
  excerpt: { rendered: string }
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
      media_details?: { sizes?: Record<string, { source_url: string }> }
    }>
  }
}


export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const perPage = Math.min(Number(query.per_page) || 6, 20)

  const posts = await $fetch<WpPost[]>(`${WP_API_BASE}/posts`, {
    query: { per_page: perPage, lang: 'de', _embed: true },
  })

  return posts.map((post) => {
    const media = post._embedded?.['wp:featuredmedia']?.[0]
    return {
      id: post.id,
      slug: post.slug,
      date: post.date,
      title: stripHtml(post.title.rendered),
      excerpt: stripHtml(post.excerpt.rendered),
      link: post.link,
      // Card thumbnails are ~350px wide — WordPress's "medium" (600px) size
      // covers that at retina density without shipping the full original.
      image: pickImageSize(media?.media_details?.sizes, media?.source_url ?? null, ['medium', 'medium_large']),
    }
  })
})
