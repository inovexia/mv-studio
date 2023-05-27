export default {
  name: 'matchMakerQuiz',
  title: 'Quiz',
  type: 'object',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type:'string'
    },
    {
      name: 'layout',
      title: 'Layout',
      type:'string'
    },
    {
      name: 'optionLayout',
      title: 'Option Layout',
      type:'string'
    },
    {
      name: 'options',
      title: 'Options',
      type: 'array',
      of: [
        {
          type:'selectOption'
        }
      ]
    }
  ],
  preview: {
    select: { title: 'question' },
  },
}