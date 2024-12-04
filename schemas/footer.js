export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
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
