import { defineType } from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      validation: (Rule) => Rule.max(70).warning('Should be under 70 characters'),
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      validation: (Rule) => Rule.max(160).warning('Should be under 160 characters'),
    },
    {
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
    },
  ],
})