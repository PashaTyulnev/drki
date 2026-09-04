const WP_EVENTS_API = 'https://cms.drki.de/wp-json/tribe/events/v1/events'
const WP_POSTS_API = 'https://cms.drki.de/wp-json/wp/v2/posts'

const PROJECT_SLUGS = [
  'dostojewski-in-dresden',
  'russische-spuren-in-dresden',
  'saechsische-spuren-im-russischsprachigem-ausland',
  'musikalisch-theatralischer-kinder-und-jugendklub',
  'ina-chor',
  'garnisonsfriedhof',
  'staedtepartnerschaft-dresden-st-petersburg',
  'bruecken-bauen',
]

const CHRONIK_SLUGS = [
  'vergangene-veranstaltungen',
  'konferenzen',
  'publikationen',
  'gaeste',
  'gaesteliste-auf-russisch',
]

const STATIC_ROUTES: Array<{ path: string; priority: string; changefreq: string }> = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/ueber-uns', priority: '0.8', changefreq: 'monthly' },
  { path: '/ueber-uns/satzung', priority: '0.3', changefreq: 'yearly' },
  { path: '/projekte', priority: '0.8', changefreq: 'monthly' },
  { path: '/bibliothek', priority: '0.7', changefreq: 'monthly' },
  { path: '/aktuelles', priority: '0.8', changefreq: 'daily' },
  { path: '/aktuelle-veranstaltungen', priority: '0.9', changefreq: 'daily' },
  { path: '/chronik-archiv', priority: '0.5', changefreq: 'monthly' },
  { path: '/mitgliedschaft', priority: '0.7', changefreq: 'yearly' },
  { path: '/kontakt', priority: '0.6', changefreq: 'yearly' },
  { path: '/impressum', priority: '0.2', changefreq: 'yearly' },
]

function url(path: string, priority: string, changefreq: string) {
  return `  <url>\n    <loc>https://drki.de${path}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
}

export default defineEventHandler(async (event) => {
  setResponseHeader(event, 'Content-Type', 'application/xml; charset=utf-8')

  const entries = STATIC_ROUTES.map((r) => url(r.path, r.priority, r.changefreq))

  for (const slug of PROJECT_SLUGS) {
    entries.push(url(`/projekte/${slug}`, '0.6', 'monthly'))
  }
  for (const slug of CHRONIK_SLUGS) {
    entries.push(url(`/chronik-archiv/${slug}`, '0.4', 'monthly'))
  }

  try {
    const data = await $fetch<{ events: Array<{ id: number }> }>(WP_EVENTS_API, {
      query: { per_page: 50 },
    })
    for (const e of data.events) {
      entries.push(url(`/aktuelle-veranstaltungen/${e.id}`, '0.7', 'weekly'))
    }
  } catch {
    // WordPress backend unreachable — ship the sitemap without event pages
    // rather than failing the whole request.
  }

  try {
    const posts = await $fetch<Array<{ slug: string }>>(WP_POSTS_API, {
      query: { per_page: 50, lang: 'de', _fields: 'slug' },
    })
    for (const p of posts) {
      entries.push(url(`/aktuelles/${p.slug}`, '0.5', 'monthly'))
    }
  } catch {
    // WordPress backend unreachable — ship the sitemap without post pages
    // rather than failing the whole request.
  }

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`
})
