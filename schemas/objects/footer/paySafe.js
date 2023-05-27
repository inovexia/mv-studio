export default {
  name: 'paySafe',
  title: 'Pay Safe',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'gPay',
      title: 'Google Pay',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'shopPay',
      title: 'Shop Pay',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'payBright',
      title: 'Pay Bright',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'visa',
      title: 'Visa',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'masterCard',
      title: 'MasterCard',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'payPal',
      title: 'payPal',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
