export const GOOGLE_FONTS_HREF
  = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,300;1,500&family=JetBrains+Mono:wght@400;500&family=Barlow:wght@300;400;500;600&display=swap'

export type ConsentValue = 'accepted' | 'declined' | null

const STORAGE_KEY = 'drki-cookie-consent'

const consent = ref<ConsentValue>(null)
const initialized = ref(false)

function readStoredConsent(): ConsentValue {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'accepted' || value === 'declined' ? value : null
  } catch {
    return null
  }
}

export function useCookieConsent() {
  if (import.meta.client && !initialized.value) {
    initialized.value = true
    consent.value = readStoredConsent()
  }

  function setConsent(value: 'accepted' | 'declined') {
    consent.value = value
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      // localStorage unavailable (private browsing etc.) — consent still
      // applies for this page view via the in-memory ref.
    }
  }

  function resetConsent() {
    consent.value = null
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      // ignore
    }
  }

  if (import.meta.client) {
    useHead({
      link: computed(() =>
        consent.value === 'accepted'
          ? [{ rel: 'stylesheet', href: GOOGLE_FONTS_HREF, key: 'google-fonts' }]
          : [],
      ),
    })
  }

  return { consent, setConsent, resetConsent }
}
