import { defineType } from 'sanity'

export default defineType({
  name: 'sake',
  title: 'Sake',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'externalId',
      title: 'OneSip Product ID',
      type: 'string',
    },
    {
      name: 'brewery',
      title: 'Brewery',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'brewery',
      media: 'image',
    },
  },
})