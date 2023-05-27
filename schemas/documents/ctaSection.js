import { MdAdsClick as icon } from 'react-icons/md';
export default {
  name: 'ctaSection',
  title: 'Call To Action',
  type: 'document',
  icon,
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: 'ctaContent',
      title: 'CTA Content',
    type: 'array',
    validation: Rule => Rule.required().max(2).error('You can add maximum 2 items'),
      of: [
        {type:'ctaData'}
      ]
    }
  ],
  preview: {
    prepare() {
      return {
        title: "CTA Content",
      };
    },
  },
}