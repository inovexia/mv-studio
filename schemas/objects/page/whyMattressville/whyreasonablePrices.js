export default {
  name: 'whyreasonablePrices',
  title: 'Why Reasonable Prices',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type:'string'
    },
    {
      name: 'description',
      title: 'Description',
      type:'blockContent'
    },
    {
      name: 'retailers',
      title: 'Retailers',
      type:'whyMVretailers'
    },
    {
      name: 'mattressVille',
      title: 'Mattressville',
      type:'whyMVmattressville'
    },
    {
      name: 'outletStores',
      title: 'Outlet Stores',
      type:'whyMVoutletStores'
    }
  ]
}