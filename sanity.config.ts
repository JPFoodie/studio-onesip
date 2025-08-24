import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './schemas'

export default defineConfig({
  name: 'onesip',
  title: 'OneSip Studio',
  
  projectId: '6enao730',
  dataset: 'production',
  apiVersion: '2025-01-01',
  
  plugins: [
    structureTool(),
    visionTool(),
  ],
  
  schema,
})
