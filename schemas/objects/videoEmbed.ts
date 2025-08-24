import { defineType } from 'sanity'

export default defineType({
  name: 'videoEmbed',
  title: 'Video Embed',
  type: 'object',
  fields: [
    {
      name: 'kind',
      title: 'Video Type',
      type: 'string',
      options: {
        list: [
          { title: 'URL', value: 'url' },
          { title: 'File', value: 'file' },
        ],
        layout: 'radio',
      },
      initialValue: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      title: 'Video URL',
      type: 'url',
      hidden: ({ parent }) => parent?.kind !== 'url',
    },
    {
      name: 'file',
      title: 'Video File',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      hidden: ({ parent }) => parent?.kind !== 'file',
    },
    {
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
    {
      name: 'transcript',
      title: 'Transcript',
      type: 'text',
    },
  ],
  preview: {
    select: {
      media: 'poster',
      title: 'caption',
      subtitle: 'kind',
    },
    prepare({ media, title, subtitle }) {
      return {
        media,
        title: title || 'Video',
        subtitle: subtitle === 'url' ? 'URL Video' : 'File Video',
      }
    },
  },
})