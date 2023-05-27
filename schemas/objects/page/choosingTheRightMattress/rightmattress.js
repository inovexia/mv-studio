export default {
  name: 'rightmattress',
  title: 'Right Mattresses',
  type: 'object',
  fields: [
    {
      name: 'rightmattress',
      title:'Choosing Right Mattresseds',
      type:'choosingrightmattress'
    }
  ],
  preview: {
    prepare() {
      return {
        title: "Choosing Right Mattress Data",
      };
    },
  },
}