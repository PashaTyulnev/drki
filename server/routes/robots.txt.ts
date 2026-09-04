export default defineEventHandler((event) => {
  setResponseHeader(event, 'Content-Type', 'text/plain; charset=utf-8')

  const host = getRequestHost(event)
  if (!isCanonicalHost(host)) {
    return 'User-agent: *\nDisallow: /\n'
  }

  return 'User-agent: *\nDisallow:\n\nSitemap: https://drki.de/sitemap.xml\n'
})
