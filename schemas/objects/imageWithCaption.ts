import { defineType } from 'sanity'

export default defineType({
  name: 'imageWithCaption',
  title: 'Image with Caption',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
    {
      name: 'credit',
      title: 'Credit',
      type: 'string',
    },
  ],
  preview: {
    select: {
      media: 'image',
      title: 'alt',
      subtitle: 'caption',
    },
  },
})