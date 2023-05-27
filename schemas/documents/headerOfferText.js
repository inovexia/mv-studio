import { MdLocalOffer as icon } from 'react-icons/md';

export default {
  name: 'headerOfferText',
  type: 'document',
  title: 'Header Offer Text',
  icon,
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'blockContent',
    },
  ],
};
