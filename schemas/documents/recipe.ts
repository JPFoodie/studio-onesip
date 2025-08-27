import { defineType } from 'sanity'

export default defineType({
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'intro',
      title: 'Intro (optional)',
      type: 'portableBlocks',
      description: 'Short article-style intro: tips, background, pairing highlights, etc.',
    },
    {
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'heroVideo',
      title: 'Hero Video',
      type: 'videoEmbed',
    },
    {
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'instructions',
      title: 'Instructions',
      type: 'portableBlocks',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'imageWithCaption' }],
    },
    {
      name: 'servings',
      title: 'Servings',
      type: 'number',
    },
    {
      name: 'recipeYield',
      title: 'Recipe Yield',
      type: 'string',
    },
    {
      name: 'prepTime',
      title: 'Prep Time',
      type: 'string',
      description: 'ISO8601 format (e.g., PT15M for 15 minutes)',
    },
    {
      name: 'cookTime',
      title: 'Cook Time',
      type: 'string',
      description: 'ISO8601 format (e.g., PT30M for 30 minutes)',
    },
    {
      name: 'totalTime',
      title: 'Total Time',
      type: 'string',
      description: 'ISO8601 format (e.g., PT45M for 45 minutes)',
    },
    {
      name: 'cuisine',
      title: 'Cuisine',
      type: 'string',
    },
    {
      name: 'pairingSake',
      title: 'Pairing Sake',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'sake' }],
        },
      ],
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tag' }],
        },
      ],
    },
    {
      name: 'datePublished',
      title: 'Date Published',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'lastModified',
      title: 'Last Modified',
      type: 'datetime',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      author: 'author.name',
    },
    prepare({ title, media, author }) {
      return {
        title,
        media,
        subtitle: author ? `by ${author}` : '',
      }
    },
  },
})