export default {
  name: 'whyMVmainData',
  title: 'Why MV Main Data',
  type: 'object',
  fields: [
    {
      name: 'bannerSection',
      title:'Banner Section',
      type:'whyMVbannerSection'
    },
    {
      name: 'iconset',
      title:'Icon Set',
      type:'whyMViconset'
    },
    {
      name: 'qualityMattressBrand',
      title:'Quantity Mattress Brand',
      type:'whyMVqualityMattressBrand'
    },
    {
      name: 'faq',
      title:'FAQ',
      type:'whyMVfaqs'
    },
    {
      name: 'reasonablePrices',
      title:'Reasonable Prices',
      type:'whyreasonablePrices'
    },
    {
      name: 'businessStrategy',
      title: 'Business Strategy',
      type:'whyMVbusinessStrategy'
    },
    {
      name: 'totalSaving',
      title: 'Total Saving',
      type:'totalSaving'
    }
  ],
  preview: {
    prepare() {
      return {
        title: "Why MV Main Data",
      };
    },
  },
}