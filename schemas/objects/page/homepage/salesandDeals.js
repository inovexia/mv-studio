import { MdViewModule as icon } from 'react-icons/md';

export default {
  name: 'salesandDeals',
  title: 'Sales and Deals',
  type: 'object',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'poster',
      title: 'Feature Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'url',
      type: 'string',
      title: 'URL',
    },
  ],
  preview: {
    select: { title: 'title', media: 'poster' },
  },
};
