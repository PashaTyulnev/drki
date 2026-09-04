export const SITE_URL = 'https://drki.de'
export const SITE_NAME = 'DRKI e.V. – Deutsch-Russisches Kulturinstitut Dresden'
const DEFAULT_IMAGE = `${SITE_URL}/images/dresden-skyline.jpg`

function absoluteUrl(path: string) {
  return path.startsWith('http') ? path : `${SITE_URL}${path}`
}

export function usePageSeo(options: {
  title: string
  description: string
  path: string
  image?: string
  noindex?: boolean
}) {
  const url = absoluteUrl(options.path)
  const image = absoluteUrl(options.image || DEFAULT_IMAGE)

  useSeoMeta({
    title: options.title,
    description: options.description,
    ogTitle: options.title,
    ogDescription: options.description,
    ogUrl: url,
    ogImage: image,
    ogType: 'website',
    ogSiteName: SITE_NAME,
    ogLocale: 'de_DE',
    twitterCard: 'summary_large_image',
    twitterTitle: options.title,
    twitterDescription: options.description,
    twitterImage: image,
    robots: options.noindex ? 'noindex, follow' : 'index, follow',
  })

  useHead({
    link: [{ rel: 'canonical', href: url }],
  })
}

export function stripToDescription(html: string | undefined, maxLength = 160): string {
  if (!html) return ''
  const text = html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim()
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength).replace(/\s+\S*$/, '')}…`
}
