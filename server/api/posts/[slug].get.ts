const WP_API_BASE = 'https://cms.drki.de/wp-json/wp/v2'

interface WpPost {
  id: number
  slug: string
  date: string
  title: { rendered: string }
  excerpt: { rendered: string }
  content: { rendered: string }
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string; alt_text: string }>
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

  return {
    id: post.id,
    slug: post.slug,
    date: post.date,
    title: stripHtml(post.title.rendered),
    excerpt: stripHtml(post.excerpt.rendered),
    html: post.content.rendered,
    image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? null,
    imageAlt: post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || '',
  }
})
