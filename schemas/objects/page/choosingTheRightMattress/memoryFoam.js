export default {
  name: 'memoryFoam',
  title: 'Memory Foam',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type:'string'
    },
    {
      name: 'desc',
      title: 'Description',
      type:'blockContent'
    },
    {
      title: 'Pros',
      name: 'pros',
      type: 'array',
      of: [
        {
          type:'pros'
        }
      ]
    },
    {
      name: 'cons',
      title: 'Cons',
      type: 'array',
      of: [
        {
          type:'cons'
        }
      ]
    }
  ]
}