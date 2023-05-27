export default {
  name: "whyMVqualityMattressBrand",
  title: "Mattress Brand",
  type: "object",
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
      name: 'cards',
      title: 'Cards',
      type:'whyMVcards'
    }
  ]
};
