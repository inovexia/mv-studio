export default {
  name: 'stylesTypes',
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
      name: 'styleType',
      type: 'array',
      of: [
        { type: 'styleType' }
      ]
    },
  ],
};
