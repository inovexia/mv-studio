export default {
  name: 'infoBlocks',
  type: 'object',
  title: 'Info Blocks',
  fields: [
    {
      name: 'icon',
      title: 'Icon',
      type:'string'
    },
    {
      name: 'title',
      title: 'Title',
      type:'string'
    },
    {
      name: 'content',
      title: 'Content',
      type:'blockContent'
    }
  ],
  preview: {
    select: { title: 'title'},
  },
}