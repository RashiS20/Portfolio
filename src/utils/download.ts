export function downloadFile(href: string, filename?: string) {
  const a = document.createElement('a')
  a.href = href
  a.rel = 'noreferrer'
  if (filename) a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
}

