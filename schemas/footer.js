export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.email().error('Please enter a valid email address'),
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'resume',
      title: 'Resume File',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    },
  ],
}
