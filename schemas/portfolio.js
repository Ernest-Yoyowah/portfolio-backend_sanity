export default {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'imgUrl',
      title: 'Image URL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'challenges',
      title: 'Challenges',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'situation',
              title: 'Situation',
              type: 'text',
            },
            {
              name: 'task',
              title: 'Task',
              type: 'text',
            },
            {
              name: 'action',
              title: 'Action',
              type: 'text',
            },
            {
              name: 'result',
              title: 'Result',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'keyAchievements',
      title: 'Key Achievements',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
  ],
}
