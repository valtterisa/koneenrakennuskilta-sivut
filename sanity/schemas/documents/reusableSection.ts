import {DocumentDefinition} from 'sanity'

export default {
  title: 'Reusable Section',
  name: 'reusableSection',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      description: 'This name is only shown in the Sanity Studio',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      description: 'You can only add one object per reusable section',
      of: [{type: 'heroSection'}],
      validation: (Rule) => Rule.length(1),
    },
  ],
} as DocumentDefinition
