export default {
  name: "blogmainData",
  title: "Main Data",
  type: "object",
  fields: [
    {
      name: "blogBannerImage",
      title: "Blog Banner Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "blogBannerAlt",
      title: "Banner Image ALT text",
      type: "string",
    },
    {
      name: 'blogdescription',
      title: 'Blog Page Description',
      type:'blockContent'
    }
  ]
};
