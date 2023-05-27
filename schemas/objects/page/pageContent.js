export default {
  name: 'pageContent',
  title: 'Page Content',
  type: 'object',
  fields: [
    {
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'content',
      title: 'Content',
      type:'blockContent'
    },
    {
      name: 'seoDesc',
      title: 'Seo Description',
      type:'blockContent'
    }
    
    
  ],
  preview: {
    prepare() {
      return {
        title: "Content",
      };
    },
  },
}