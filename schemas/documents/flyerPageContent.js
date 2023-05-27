import { MdCardTravel as icon } from 'react-icons/md';
export default {
  name: 'flyerPageContent',
  type: 'document',
  title: 'Flyer Page Data',
  icon,
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Content',
      type: 'blockContent',
    },
    
    {
      title: 'Banner Image',
      name: 'bannerimage',
      type: 'image',
      options: {
        hotspot: true 
      }
    },
    {
      name: 'gtaflyerbtnText',
      type: 'string',
      title:'GTA Flyer Button Text'
    },
    {
      name: 'gtaflyerbtnLink',
      type: 'string',
      title:'GTA Flyer Button Link'
    },
    {
      name: 'canadaflyerbtnText',
      type: 'string',
      title:'Canada Flyer Button Text'
    },
    {
      name: 'canadaflyerbtnLink',
      type: 'string',
      title:'Canada Flyer Button Link'
    },
    {
      name: 'cta',
      title: 'Flyer CTA Content',
      type: 'array',
      of: [
        {type:'flyercta'}
      ]
    }
  ],
  preview: {
    select: { title: 'title', media: 'bannerimage' },
  },
};
