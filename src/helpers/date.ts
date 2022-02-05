export const formatDate = (str: string | undefined, withTime = false) => {
  if (!str) {
    return 'N/A'
  }
  const date = new Date(str)
  const day = date.getDate()
  const month = date.toLocaleString('default', { month: 'long' })
  const year = date.getFullYear()
  const time = date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })

  return `${month} ${day}, ${year} — ${time}`
}
