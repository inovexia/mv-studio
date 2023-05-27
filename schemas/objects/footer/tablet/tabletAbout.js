export default {
  name: 'tabletAbout',
  title: 'Footer About',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'desc',
      type: 'blockContent',
      title: 'About Description',
    },
    {
      name: 'mail',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'menues',
      title: 'Menu',
      type: 'array',
      of: [
        { type: 'menues' }
      ]
    }
  ],
};
