import { parse, type HTMLElement } from 'node-html-parser'

// Old published content still has absolute URLs baked in from before the
// domain split (drki.de now serves this Nuxt app; WordPress moved to
// cms.drki.de) — rewrite them so embedded images/links don't 404.
function rewriteStaleDomain(html: string): string {
  return html.replace(/https:\/\/drki\.de\//g, 'https://cms.drki.de/')
}

// Some older pages were never rebuilt in Elementor's container/widget
// structure — their content.rendered is just plain semantic HTML (h2/p/img)
// with Elementor's per-widget <style> blocks interspersed, plus an
// auto-generated "Beiträge" (related posts) block at the end pulled from a
// dynamic query. This strips both down to the real content.
function extractPlainContent(root: HTMLElement): string {
  root.querySelectorAll('style').forEach((el) => el.remove())
  root.querySelectorAll('article').forEach((el) => el.remove())
  root.querySelectorAll('h2, h3, h4').forEach((el) => {
    if (el.text.trim() === 'Beiträge') el.remove()
  })
  return root.innerHTML.trim()
}

// This WordPress site builds every page with Elementor, which wraps real
// content in many layers of layout <div>s. This pulls just the semantic
// content back out (headings, text, address/bank-style lists) so it can be
// rendered as clean, styleable HTML on our side — reusable for any page
// built the same way (Impressum, Datenschutz, and future page migrations).
export function extractElementorContent(rawHtml: string): { title: string; html: string } {
  const root = parse(rawHtml)
  const widgets = root.querySelectorAll('[data-element_type="widget"]')

  if (!widgets.length) {
    return { title: '', html: rewriteStaleDomain(extractPlainContent(root)) }
  }

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

  return { title: rewriteStaleDomain(title), html: rewriteStaleDomain(parts.join('\n')) }
}
