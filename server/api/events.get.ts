const WP_EVENTS_API = 'https://drki.de/wp-json/tribe/events/v1/events'

interface TribeEvent {
  id: number
  title: string
  start_date: string
  end_date: string
  cost: string
  url: string
  venue?: { venue?: string; city?: string }
  image?: { url: string } | false
}

interface TribeEventsResponse {
  events: TribeEvent[]
  total: number
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const perPage = Math.min(Number(query.per_page) || 12, 50)

  // The Events Calendar's own REST endpoint — unlike wp/v2/tribe_events (which
  // is ordered by publish date), this returns only upcoming events already
  // sorted chronologically by start_date, ascending.
  const data = await $fetch<TribeEventsResponse>(WP_EVENTS_API, {
    query: { per_page: perPage },
  })

  return data.events.map((e) => ({
    id: e.id,
    title: stripHtml(e.title),
    start: e.start_date,
    end: e.end_date,
    cost: e.cost || null,
    venue: e.venue?.venue || null,
    url: e.url,
    image: e.image ? e.image.url : null,
  }))
})
