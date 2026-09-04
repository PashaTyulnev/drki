export default defineEventHandler((event) => {
  const host = getRequestHost(event)
  if (!isCanonicalHost(host)) {
    setResponseHeader(event, 'X-Robots-Tag', 'noindex, nofollow')
  }
})
