import { defineType } from 'sanity'

export default defineType({
  name: 'portableBlocks',
  title: 'Content',
  type: 'array',
  of: [
    {
      type: 'block',
    },
    {
      type: 'imageWithCaption',
    },
    {
      type: 'videoEmbed',
    },
  ],
})