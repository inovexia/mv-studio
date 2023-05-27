export default {
  name: 'brandsmenu',
  title: 'Brands',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      title: 'Brand Type',
      name: 'brandType',
      type: 'array',
      of: [
        { type: 'brandType' }
      ]
    },
  ],
};
