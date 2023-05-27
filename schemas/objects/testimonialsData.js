export default {
  name: 'testimonialsData',
  title: 'Testimonial',
  type: 'object',
  fields: [
    {
      name: 'mobtitle1',
      title: 'Mob Title 1',
      type:'string'
    },
    {
      name: 'mobtitle2',
      title: 'Mob Title 2',
      type:'string'
    },
    {
      name: 'title',
      title: 'Title',
      type:'string'
    },
    {
      name: 'bgImage',
      title: 'BG Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bgAltText',
      title: 'Bg Image Alt Text',
      type:'string'
    }
  ]
}