// WordPress (and The Events Calendar) both attach a `sizes` map of
// pre-generated thumbnails alongside the full-resolution original. Using the
// full original for a small card thumbnail can be 3-6x more bytes than
// needed — this picks the first available size from a preference list,
// falling back to the original when none of the wanted sizes exist.
export function pickImageSize(
  sizes: Record<string, { source_url?: string; url?: string }> | undefined,
  fallback: string | null,
  preferred: string[],
): string | null {
  if (sizes) {
    for (const name of preferred) {
      const url = sizes[name]?.source_url ?? sizes[name]?.url
      if (url) return url
    }
  }
  return fallback
}
