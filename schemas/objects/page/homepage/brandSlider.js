import { MdSlideshow as icon } from 'react-icons/md';

export default {
  name: 'brandSlider',
  type: 'object',
  title: 'Brand Slider',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Brand Title',
    },
    {
      name: 'link',
      type: 'string',
      title: 'Brand Link',
    },
    {
      name: 'image',
      title: 'Brand Logo',
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
