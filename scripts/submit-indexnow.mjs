// Submits every URL in our live sitemap to IndexNow (propagates to Bing, Yandex, Seznam, etc.)
// Usage: node scripts/submit-indexnow.mjs
//
// Re-run this any time content changes on already-indexed pages — IndexNow is a
// push notification, not a replacement for the sitemap (pages are still crawled normally too).
//
// Pulls the URL list from the live sitemap.xml rather than duplicating it here, so it
// stays in sync automatically when pages/competitors are added.

import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const HOST = 'truleado.com'
const KEY_FILE = '51ab880985d44a1b9bb4ea9031ede6db.txt'
const KEY = readFileSync(join(__dirname, '..', 'public', KEY_FILE), 'utf-8').trim()
const KEY_LOCATION = `https://${HOST}/${KEY_FILE}`

async function getUrlsFromSitemap() {
  const res = await fetch(`https://${HOST}/sitemap.xml`)
  if (!res.ok) throw new Error(`Failed to fetch sitemap.xml: ${res.status}`)
  const xml = await res.text()
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1])
  if (urls.length === 0) throw new Error('No URLs found in sitemap.xml')
  return urls
}

async function main() {
  const urls = await getUrlsFromSitemap()

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: urls,
    }),
  })

  console.log(`Submitted ${urls.length} URLs — status ${res.status} ${res.statusText}`)
  if (res.status >= 300) {
    console.error(await res.text())
    process.exitCode = 1
  }
}

main().catch(err => {
  console.error(err)
  process.exitCode = 1
})
