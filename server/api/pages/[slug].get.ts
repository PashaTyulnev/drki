const WP_API_BASE = 'http://cdn.drki.de/wp-json/wp/v2'

interface WpPage {
  id: number
  link: string
  content: { rendered: string }
}

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')

  const pages = await $fetch<WpPage[]>(`${WP_API_BASE}/pages`, {
    query: { slug, lang: 'de' },
  })

  if (!pages.length) {
    throw createError({ statusCode: 404, statusMessage: 'Seite nicht gefunden' })
  }

  const { title, html } = extractElementorContent(pages[0].content.rendered)
  return { title, html, sourceUrl: pages[0].link }
})
