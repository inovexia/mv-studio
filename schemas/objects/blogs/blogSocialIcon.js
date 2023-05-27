export default {
    name: "blogSocialIcon",
    title: "Social Icon Data",
    type: "object",
    fields: [
      {
        name: "socialMedia",
        title: "Social Media",
        type: "array",
        of: [
          {
            type: "socialicons",
          },
        ],
      },
    ],
  }