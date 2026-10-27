// GitHub Pages SPA support: serve the app shell for known client-side routes (200, not 404)
import { cpSync, mkdirSync, copyFileSync, writeFileSync } from 'node:fs'
const routes = ['staff', 'create', ...['f1', 'f2', 'f3', 'f4', 'f5'].map((id) => `reorder/${id}`)]
for (const r of routes) {
  mkdirSync(`out/${r}`, { recursive: true })
  copyFileSync('out/index.html', `out/${r}/index.html`)
}
copyFileSync('out/index.html', 'out/404.html') // fallback for any other path
writeFileSync('out/.nojekyll', '')
