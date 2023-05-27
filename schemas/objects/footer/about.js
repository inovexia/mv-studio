export default {
  name: 'about',
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
      name: 'contact',
      type: 'string',
      title: 'Contact Title',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Contact Addtress',
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone Number',
    },
    {
      name: 'mail',
      type: 'string',
      title: 'Email',
    }
  ],
};
