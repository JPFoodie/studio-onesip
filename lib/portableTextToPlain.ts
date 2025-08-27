export const blocksToPlain = (blocks: any[] = []): string => {
  return blocks
    .filter((b) => b?._type === 'block')
    .map((b) => (b.children || []).map((c: any) => c.text).join(''))
    .join('\n')
}

export const metaDescriptionFromSummaryOrIntro = (summary?: string, intro?: any[], max = 160) => {
  const s = (summary || '').trim()
  if (s) return s.slice(0, max)
  const introText = blocksToPlain(intro || []).replace(/\s+/g, ' ').trim()
  return introText.slice(0, max)
}