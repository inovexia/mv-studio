export default {
  name: 'topHeader',
  title: 'Top Header',
  type: 'object',
  fields: [
    {
      name: 'siteUrl',
      type: 'string',
      title: 'Site URL',
    },
    {
      name: 'siteLogo',
      title: 'Site Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Alt Text',
      name: 'altText',
      type: 'string',
    },
    {
      title: 'Search icon',
      name: 'searchIcon',
      type: 'string',
    },
    {
      title: 'User icon',
      name: 'userIcon',
      type: 'string',
    },
    {
      title: 'Cart icon',
      name: 'cartIcon',
      type: 'string',
    },
    {
      title: 'Search Placeholder',
      name: 'searchPlaceholder',
      type: 'string',
    },
    {
      title: 'My Account Label',
      name: 'myAccountLabel',
      type: 'string',
    },
    {
      title: 'Cart Label',
      name: 'cartLabel',
      type: 'string',
    }
  ],
};
