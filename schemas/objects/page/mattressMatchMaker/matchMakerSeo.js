export default {
  name: 'matchMakerSeo',
  title: 'Match Maker SEO',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'SEO Title',
      type:'string'
    },
    {
      name: 'description',
      title: 'SEO Description',
      type:'blockContent'
    },
    {
      name: 'ogPath',
      title: 'OG Path',
      type:'string'
    }
  ],
  preview: {
    select: { title: 'title' },
  },
}