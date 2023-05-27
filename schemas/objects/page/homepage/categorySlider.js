import { MdSlideshow as icon } from 'react-icons/md';

export default {
  name: 'categorySlider',
  type: 'object',
  title: 'Home Page Category Slider',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Category Title',
    },
    {
      name: 'link',
      type: 'string',
      title: 'Category Link',
    },
    {
      name: 'image',
      title: 'Category Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: { title: 'title', media: 'image' },
  },
};
