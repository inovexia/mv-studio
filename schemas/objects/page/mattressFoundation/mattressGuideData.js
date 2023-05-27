export default {
  name:'mattressGuideData',
  title: 'Mattress Foundation Data',
  type: 'object',
  fields: [
    {
      name: 'mattressFoundation',
      title: 'Mattress Foundation',
      type:'mattressFoundation'
    }
  ],
  preview: {
    prepare() {
      return {
        title: "Mattress Foundation Data",
      };
    },
  },
}