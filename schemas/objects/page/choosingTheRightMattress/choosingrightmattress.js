export default {
  name: 'choosingrightmattress',
  title: 'Choosing Right Mattress',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type:'blockContent'
    },
    {
      name: 'paragraph1',
      title: 'Paragraph 1',
      type:'blockContent'
    },
    {
      name: 'paragraph2',
      title: 'Paragraph 2',
      type:'blockContent'
    },
    {
      name: 'innerspring',
      title: 'Inner Spring',
      type:'innerspring'
    },
    {
      name: 'latex',
      type: 'latex',
      title:'Latex'
    },
    {
      name: 'memoryFoam',
      title: 'Memory Foam',
      type:'memoryFoam'
    },
    {
      name: 'pocketCoil',
      title: 'Pocket Coil',
      type:'pocketCoil'
    },
    {
      name: 'sleepStyle',
      title: 'Sleep Style',
      type:'sleepStyle'
    }
  ],
  preview: {
    prepare() {
      return {
        title: "Choosing Right Mattress",
      };
    },
  },
}