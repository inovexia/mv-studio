export default {
  name: 'mainmenu',
  title: 'Main Menu',
  type: 'object',
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label',
    },
    {
      name: 'link',
      type: 'string',
      title: 'Link',
    },
    {
      title: 'Mega Menu',
      name: 'megaMenu',
      type: 'array',
      of: [
        { type: 'megaMenu' }
      ]
    },
    {
      title: 'Sub Menu',
      name: 'subMenu',
      type: 'array',
      of: [
        { type: 'subMenu' }
      ]
    },
    {
      name: 'useIcon',
      title: 'Menu Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
