import { MdBed as icon } from 'react-icons/md';
export default {
  name: 'mattressMatchMakerData',
  title: 'Mattress Match Maker',
  type: 'document',
  icon,
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: 'seo',
      title: 'SEO',
      type:'matchMakerSeo'
    },
    {
      name: 'toolData',
      title: 'Tool Data',
      type:'matchMakerToolData'
    }
  ],
  preview: {
    prepare() {
      return {
        title: "Mattress Match Maker Data",
      };
    },
  },
}