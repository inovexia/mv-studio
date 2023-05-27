export default {
  name: 'megaMenu',
  title: 'Mega Menu',
  type: 'object',
  fields: [
    {
      name: 'columnLabel',
      type: 'string',
      title: 'Column Label',
    },
    {
      title: 'Mega Menu Items',
      name: 'menuItems',
      type: 'array',
      of: [
        { type: 'menuItems' }
      ]
    },
  ],
};
