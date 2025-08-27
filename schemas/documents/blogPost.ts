import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'text',
      description: 'Lead-in text for the blog post',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'string',
      description: 'Short summary (~150 characters for SEO)',
      validation: (Rule) => Rule.max(160).warning('Should be around 150 characters for optimal SEO'),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),
        defineField({
          name: 'caption',
          title: 'Caption',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        defineType({
          type: 'object',
          name: 'section',
          title: 'Section',
          fields: [
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
            }),
            defineField({
              name: 'body',
              title: 'Body',
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
            }),
            defineField({
              name: 'bullets',
              title: 'Bullet Points',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            defineField({
              name: 'priceRange',
              title: 'Price Range',
              type: 'string',
            }),
            defineField({
              name: 'sectionPhoto',
              title: 'Section Photo',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                }),
                defineField({
                  name: 'caption',
                  title: 'Caption',
                  type: 'string',
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: 'heading',
            },
            prepare({ title }) {
              return {
                title: title || 'Section',
              }
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'conclusion',
      title: 'Conclusion',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      validation: (Rule) => Rule.max(70).warning('Should be under 70 characters'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'string',
      validation: (Rule) => Rule.max(160).warning('Should be under 160 characters'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'heroImage',
    },
    prepare({ title, author, media }) {
      return {
        title,
        subtitle: author ? `by ${author}` : '',
        media,
      }
    },
  },
})