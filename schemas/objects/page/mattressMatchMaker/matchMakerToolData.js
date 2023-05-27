export default {
  name: 'matchMakerToolData',
  title: 'Tool Data',
  type: 'object',
  fields: [
    {
      name: 'toolTitle',
      title: 'Tool Title',
      type:'string'
    },
    {
      name: 'subTitle',
      title: 'Sub Title',
      type:'string'
    },
    {
      name: 'subDesc',
      title: 'Sub Description',
      type:'blockContent'
    },
    {
      name: 'quiz',
      title: 'Quiz',
      type: 'array',
      of: [
        {
          type:'matchMakerQuiz'
        }
      ]
    }
  ]
}