import { MdConfirmationNumber as icon } from 'react-icons/md';
export default {
  name: 'coupons',
  type: 'document',
  title: 'Coupons',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Coupon Title',
      type: 'string',
    },
    {
      name: 'couponlink',
      title: 'Coupon Link',
      type: 'string',
    },
    {
      name: 'couponExpiry',
      title: 'Coupon Expirey Date',
      type:'datetime'
    },
    {
      name: 'description',
      title: 'Content',
      type: 'blockContent',
    },
    {
      title: 'Featured Image',
      name: 'featureimage',
      type: 'image',
      options: {
        hotspot: true 
      }
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'string',
        }
      ]
    },
  ],
  preview: {
    select: { title: 'title', media: 'featureimage' },
  },
}
