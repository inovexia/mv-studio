export default {
  name: "blogSeoData",
  title: "Seo Data",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Seo Title",
      type: "string",
    },
    {
      name: "description",
      title: "Seo Description",
      type: "blockContent",
    },
    {
      name: "ogImage",
      title: "OGImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
