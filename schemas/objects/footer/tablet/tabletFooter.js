export default {
  name: 'tabletFooter',
  title: 'Top Footer',
  type: 'object',
  fields: [
    {
      name: 'accordionData',
      type: 'accordionData',
      title: 'Tablet Footer Accordion',
    },
    {
      name: 'paySafe',
      title: 'Pay Safe',
      type:'paySafe'
    },
    {
      name: 'copyright',
      type: 'string',
      title: 'Copyright Text',
    },
    {
      name: 'socialMedia',
      title: 'Social media',
      type: 'array',
      of: [
        { type: 'socialMedia' }
      ]
    }
  ],
};
