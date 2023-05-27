export default {
  name: 'whyMVbannerSection',
  title: 'Why MV Banner Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type:'string'
    },
    {
      name: 'NonCategoryBannerImage',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'altText',
      title: 'altText',
      type:'string'
    },
    {
      name: 'description',
      title: 'Description',
      type:'blockContent'
    }
  ]
}