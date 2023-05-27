import { MdCardTravel as icon } from "react-icons/md";
export default {
  name: "blogPageContent",
  type: "document",
  title: "Blog Page Data",
  icon,
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
   
    {
      name: "mainData",
      title: "Blog Main Data",
      type: "blogmainData",
      
    },
    {
      name: "seoData",
      title: "Blog Seo Data",
      type: "blogSeoData",
      
    },
    {
      name: "iconData",
      title: "Social Icon Data",
      type: "blogSocialIcon",
    }
  ],
  preview: {
    select: { title: "title"},
  },
};
