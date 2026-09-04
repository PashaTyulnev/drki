const WP_EVENTS_API = 'https://cms.drki.de/wp-json/tribe/events/v1/events'

interface TribeEventDetail {
  id: number
  title: string
  description: string
  start_date: string
  end_date: string
  cost: string
  url: string
  venue?: { venue?: string; address?: string; city?: string }
  organizer?: Array<{ organizer?: string }>
  image?: { url: string } | false
}

// The API wraps the real content in tribe-events-schedule / price / venue /
// "add to calendar" widget markup. Only the wp-block-paragraph tags hold
// actual editorial content, so we pull just those out.
function extractDescription(html: string): string {
  const paragraphs = [...html.matchAll(/<p class="wp-block-paragraph">([\s\S]*?)<\/p>/g)]
    .map((m) => m[1].trim())
    .filter((p) => p.length > 0 && p !== '&nbsp;')

  return paragraphs.map((p) => `<p>${p}</p>`).join('\n')
}

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  const e = await $fetch<TribeEventDetail>(`${WP_EVENTS_API}/${id}`)

  return {
    id: e.id,
    title: stripHtml(e.title),
    description: extractDescription(e.description),
    start: e.start_date,
    end: e.end_date,
    cost: e.cost || null,
    venue: e.venue?.venue || null,
    organizer: e.organizer?.[0]?.organizer || null,
    image: e.image ? e.image.url : null,
    sourceUrl: e.url,
  }
})
