import { parse, type HTMLElement } from 'node-html-parser'

// This WordPress site builds every page with Elementor, which wraps real
// content in many layers of layout <div>s. This pulls just the semantic
// content back out (headings, text, address/bank-style lists) so it can be
// rendered as clean, styleable HTML on our side — reusable for any page
// built the same way (Impressum, Datenschutz, and future page migrations).
export function extractElementorContent(rawHtml: string): { title: string; html: string } {
  const root = parse(rawHtml)
  const widgets = root.querySelectorAll('[data-element_type="widget"]')

  let title = ''
  const parts: string[] = []
  // node-html-parser occasionally double-matches a widget when Elementor's
  // markup is malformed, yielding two distinct-looking nodes with identical
  // text — skip a block whose plain text we've already emitted.
  const seenText = new Set<string>()

  for (const widget of widgets) {
    const widgetType = (widget.getAttribute('data-widget_type') || '').split('.')[0]
    const container = widget.querySelector('.elementor-widget-container')
    if (!container) continue

    const blockText = container.text.trim()
    if (blockText) {
      if (seenText.has(blockText)) continue
      seenText.add(blockText)
    }

    if (widgetType === 'heading' || widgetType === 'page-title') {
      const text = container.text.trim()
      if (!text) continue
      if (!title) {
        title = text
      } else {
        parts.push(`<h2>${text}</h2>`)
      }
      continue
    }

    if (widgetType === 'icon-list') {
      const items = container
        .querySelectorAll('.elementor-icon-list-text')
        .map((el: HTMLElement) => el.text.trim())
        .filter(Boolean)
      if (items.length) {
        parts.push(`<ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>`)
      }
      continue
    }

    if (widgetType === 'text-editor') {
      const html = container.innerHTML.trim()
      if (html) parts.push(html)
      continue
    }

    if (widgetType === 'eael-feature-list') {
      const items = container.querySelectorAll('.eael-feature-list-item').map((li: HTMLElement) => {
        const titleLink = li.querySelector('.eael-feature-list-title a')
        const title = (titleLink?.text || li.querySelector('.eael-feature-list-title')?.text || '').trim()
        const href = titleLink?.getAttribute('href')
        const desc = li.querySelector('.eael-feature-list-content')?.text.trim() || ''
        return { title, href, desc }
      }).filter((i: { title: string }) => i.title)

      if (items.length) {
        const li = items.map((i: { title: string; href?: string; desc: string }) => {
          const heading = i.href ? `<a href="${i.href}">${i.title}</a>` : i.title
          return `<li>${heading}${i.desc ? ` — ${i.desc}` : ''}</li>`
        }).join('')
        parts.push(`<ul>${li}</ul>`)
      }
      continue
    }

    if (widgetType === 'image') {
      const img = container.querySelector('img')
      const src = img?.getAttribute('src')
      if (src) {
        const alt = img?.getAttribute('alt') || ''
        parts.push(`<img src="${src}" alt="${alt}" />`)
      }
      continue
    }

    // spacer, related-post grids, buttons, etc. carry no migratable text
    // content (or pull in a whole separate dynamic query) — skipped.
  }

  return { title, html: parts.join('\n') }
}
