import { MdReviews as icon } from 'react-icons/md';

export default {
  name: 'testimonials',
  type: 'document',
  title: 'Testimonials',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Sub Title',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'author',
      type: 'string',
      title: 'Author Name',
    },
    {
      name: 'review',
      type: 'string',
      title: 'Rating in Numeric 1 to 5',
    },
  ],
  preview: {
    select: { title: 'title', media: 'icon' },
  },
};
