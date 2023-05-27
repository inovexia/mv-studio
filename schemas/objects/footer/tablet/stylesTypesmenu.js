export default {
  name: 'stylesTypesmenu',
  title: 'Styles Types',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      title: 'Style Type',
      name: 'styleTypemenu',
      type: 'array',
      of: [
        { type: 'styleTypemenu' }
      ]
    },
  ],
};
