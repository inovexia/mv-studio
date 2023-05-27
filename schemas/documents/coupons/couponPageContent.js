import { MdConfirmationNumber as icon } from 'react-icons/md';
export default {
  name: 'couponPageContent',
  type: 'document',
  title: 'Coupon Page Data',
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
      name: 'ogPath',
      title: 'ogPath',
      type: 'string',
    },
    
    {
      title: 'Coupon Banner Image',
      name: 'couponBannerImage',
      type: 'image',
      options: {
        hotspot: true 
      }
    },
    {
      name: 'couponBannerAlt',
      type: 'string',
      title:'Banner Image ALT Text'
    },
    {
      name: 'entryDesc',
      type: 'blockContent',
      title:'Entry Description'
    },
    {
      name: 'couponCategories',
      title: 'Coupon Category',
      type: 'array',
      of: [
        {type:'couponCategories'}
      ]
      
    },
    {
      name: 'condition',
      type: 'blockContent',
      title:'Condition'
    },
  ],
  preview: {
    select: { title: 'title', media: 'couponBannerImage' },
  },
};
