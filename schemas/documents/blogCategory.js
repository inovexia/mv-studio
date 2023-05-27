import { MdDashboard as icon } from 'react-icons/md';
export default {
  name: 'blogCategory',
  type: 'document',
  title: 'Blog Category',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'categoryhandle',
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
