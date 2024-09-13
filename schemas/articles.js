export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'publicationDate',
      title: 'Publication Date',
      type: 'datetime',
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'text',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'text',
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'heading',
              title: 'Heading',
              type: 'string',
            },
            {
              name: 'content',
              title: 'Content',
              type: 'text',
            },
            {
              name: 'list',
              title: 'List',
              type: 'array',
              of: [{type: 'string'}],
              options: {
                layout: 'tags',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'conclusion',
      title: 'Conclusion',
      type: 'text',
    },
    {
      name: 'references',
      title: 'References',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'string',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
            },
          ],
        },
      ],
    },
    {
      name: 'relatedArticles',
      title: 'Related Articles',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'slug',
              title: 'Slug',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'imageUrl',
      title: 'Image URL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
