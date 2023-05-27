import { MdSlideshow as icon } from 'react-icons/md';

export default {
  name: 'homeSlider',
  type: 'object',
  title: 'Home Page Banner Slider',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Slider Title',
    },
    {
      name: 'tagline',
      type: 'string',
      title: 'Tagline',
    },
    {
      name: 'link',
      type: 'string',
      title: 'Banner Link',
    },
    {
      name: 'image',
      title: 'Slider Image',
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
