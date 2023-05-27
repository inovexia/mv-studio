import { MdCardTravel as icon } from 'react-icons/md';
export default {
  name: 'flyers',
  type: 'document',
  title: 'Flyers',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Flyer Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
    },
    {
      title: 'Published At',
      name: 'publishedAt',
      type: 'datetime'
    },
    {
      name: 'description',
      title: 'Content',
      type: 'blockContent',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'blockContent',
    },
    {
      title: 'Flyer Image',
      name: 'flyerimage',
      type: 'image',
      options: {
        hotspot: true 
      }
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to:[{type:'tags'}]
        }
      ]
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [
        {
          type: 'category'
        }
      ]
    },
  ],
  preview: {
    select: { title: 'title', media: 'flyerimage' },
  },
};
