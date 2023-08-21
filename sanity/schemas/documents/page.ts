import {DocumentDefinition} from 'sanity'

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fieldsets: [
    {
      name: 'components',
      title: 'Page Components',
    },
  ],
  fields: [
    // Make metadata fields og:title etc

    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'modules',
      title: 'Modules',
      type: 'array',
      fieldset: 'components',
      of: [
        {
          type: 'heroSection',
        },
        {
          title: 'Reusable Section',
          type: 'reference',
          to: [{type: 'reusableSection'}],
        },
      ],
    },
  ],
} as DocumentDefinition
