export default {
  name: 'selectOption',
  title: 'Options',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Option Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'label',
      title: 'Label',
      type:'string'
    },
    {
      name: 'desc',
      title: 'Description',
      type:'string'
    },
    {
      name: 'tagValue',
      title: 'Tag Value',
      type:'string'
    },
    {
      name: 'alt',
      title: 'Alt Text',
      type:'string'
    }
  ]
}