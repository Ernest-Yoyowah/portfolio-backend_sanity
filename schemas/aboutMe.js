export default {
  name: 'aboutme',
  title: 'AboutMe',
  type: 'document',
  fields: [
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'paragraphs',
          title: 'Paragraphs',
          type: 'array',
          of: [{type: 'string'}],
        },
      ],
    },
    {
      name: 'experiences',
      title: 'Experiences',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'company',
              title: 'Company',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'additionalInfo',
      title: 'Additional Information',
      type: 'object',
      fields: [
        {
          name: 'education',
          title: 'Education',
          type: 'string',
        },
        {
          name: 'hobbies',
          title: 'Hobbies',
          type: 'string',
        },
      ],
    },
  ],
}
