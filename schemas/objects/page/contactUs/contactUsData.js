export default {
  name: 'contactUsData',
  title: 'Contact Us Data',
  type: 'object',
  fields: [
    {
    name: 'pageTitle',
    title: 'Page Title',
    type:'string'
    },
    {
      name: 'infoBlocks',
      title: 'Info Blocks',
      type: 'array',
      of: [
        {
          type:'infoBlocks'
        }
      ]
    }
  ]
}