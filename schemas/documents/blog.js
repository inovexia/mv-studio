import { MdChromeReaderMode as icon } from 'react-icons/md';
export default {
  name: 'blog',
  type: 'document',
  title: 'Blogs',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Blog Title',
      type: 'string',
    },
    {
      name: 'handle',
      title: 'Handle',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      }
    },
    {
      title: 'Published At',
      name: 'publishedAt',
      type: 'datetime'
    },
    {
      title: 'Description', 
      name: 'content',
      type: 'blockContent' 
    },
    {
      title: 'Excerpt', 
      name: 'excerpt',
      type: 'blockContent' 
    },
    {
      title: 'SEO Description', 
      name: 'seoDescription',
      type: 'blockContent' 
    },
    {
      title: 'featured Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true
      }
    },

    
     
        {
          name: 'blogcategory',
          title: 'Category',
          type: 'reference',
          to: [
            {
              type:'blogCategory'
            }
          ]
        },
    {
      title: 'Author',
      name: 'author',
      type: 'string'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'string',
        }
      ]
    },

  ],
  preview: {
    select: { title: 'title', media: 'image' },
  },
};
