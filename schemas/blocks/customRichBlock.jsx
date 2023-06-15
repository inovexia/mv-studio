export default{
  name: 'customRichBlock',
  type: 'object',
  fields: [
    {
      name: "blockContent",
      title: "Seo Description",
      type: "blockContent",
    }
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare({ content }) {
      // Join the block content text values
      const text = content.map((block) => block.children.map((child) => child.text).join('')).join(' ');

      // Convert the text to HTML
      const html = `<div>${text}</div>`;

      return {
        title: 'Block Content',
        subtitle: html, // Render the block content as HTML
      };
    },
  },
}