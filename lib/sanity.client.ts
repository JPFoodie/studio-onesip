import { createClient } from 'next-sanity'

export const sanityClient = createClient({
  projectId: '6enao730',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: true,
})