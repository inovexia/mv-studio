export default {
  name: 'bottomFooter',
  title: 'Bottom Footer',
  type: 'object',
  fields: [
    {
      name: 'logo',
      title: 'Footer Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Menu',
      name: 'menu',
      type: 'array',
      of: [
        { type: 'menu' }
      ]
    },
    {
      name: 'copyright',
      title: 'Copyright Text',
      type:'string'
    },
    {
      name: 'paySafe',
      title: 'Pay Safe',
      type:'paySafe'
    },
    {
      title: 'Social Media',
      name: 'socialMedia',
      type: 'array',
      of: [
        { type: 'socialMedia' }
      ]
    },
  ],
};
