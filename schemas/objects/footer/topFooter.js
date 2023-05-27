export default {
  name: 'topFooter',
  title: 'Top Footer',
  type: 'object',
  fields: [
    {
      name: 'footerbadge',
      title: 'Footer Badge',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'badgeAltText',
      type: 'string',
      title: 'Badge Alt Text',
    },
    {
      name: 'about',
      type: 'about',
      title: 'About',
    },
    {
      name: 'brands',
      type: 'brands',
      title: 'Brands',
    },
    {
      name: 'stylesTypes',
      type: 'stylesTypes',
      title: 'Styles Types',
    },
    {
      name: 'location',
      type: 'location',
      title: 'Location',
    }
  ],
};
