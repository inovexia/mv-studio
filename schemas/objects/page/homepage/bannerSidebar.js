export default {
  name: 'bannerSidebar',
  title: 'Banner Sidebar',
  type:'object',
  fields: [
    {
      name: 'title',
      title: 'Item Title',
      type:'string'
    },
    {
      name: 'itemlink',
      title: 'Item Link',
      type:'string'
    },
    {
      name: 'itemimageSmall',
      title: 'Item Image Small',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'itemimageLarge',
      title: 'Item Image Large',
      type: 'image',
      options: {
        hotspot: true,
      },
    }
  ],
  preview: {
    select: { title: 'title', media: 'itemimageSmall' },
  },
}