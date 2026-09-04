export const CANONICAL_HOSTS = ['drki.de', 'www.drki.de']

export function isCanonicalHost(host: string | undefined): boolean {
  if (!host) return false
  return CANONICAL_HOSTS.includes(host.split(':')[0].toLowerCase())
}
