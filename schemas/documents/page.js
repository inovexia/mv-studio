import { MdPages as icon } from 'react-icons/md';
export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      title: 'Published At',
      name: 'updatedAt',
      type: 'datetime'
    },
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
      {type:'pageContent'},
        { type: 'hero' },
        { type: 'textWithIllustration' },
        {
          type:'seoData'
        },
        {
          type:'whyMVmainData'
        },
        {
          type:'mattressGuideData'
        },
        {
          type:'mattressSizes'
        },
        {
          type:'rightmattress'
        },
        {
          type:'contactUsData'
        }
      ],
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
