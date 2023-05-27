import { MdDashboard as icon } from 'react-icons/md';
export default {
  name: 'category',
  type: 'document',
  title: 'Categories',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'cathandle',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      title: 'Category Image',
      name: 'categoryimage',
      type: 'image',
      options: {
        hotspot: true
      }
    },

  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title,
      };
    },
  },
};
