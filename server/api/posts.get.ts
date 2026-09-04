const WP_API_BASE = 'https://cms.drki.de/wp-json/wp/v2'

interface WpPost {
  id: number
  slug: string
  date: string
  link: string
  title: { rendered: string }
  excerpt: { rendered: string }
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string; alt_text: string }>
  }
}


export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const perPage = Math.min(Number(query.per_page) || 6, 20)

  const posts = await $fetch<WpPost[]>(`${WP_API_BASE}/posts`, {
    query: { per_page: perPage, lang: 'de', _embed: true },
  })

  return posts.map((post) => ({
    id: post.id,
    slug: post.slug,
    date: post.date,
    title: stripHtml(post.title.rendered),
    excerpt: stripHtml(post.excerpt.rendered),
    link: post.link,
    image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? null,
  }))
})
