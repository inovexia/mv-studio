export default {
  name: 'location',
  title: 'Location',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      title: 'Areas',
      name: 'areas',
      type: 'array',
      of: [
        { type: 'areas' }
      ]
    },
  ],
};
