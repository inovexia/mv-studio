import { MdHome as icon } from 'react-icons/md';
export default {
  title: "Home Page Data",
  name: "homepageData",
  type: "document",
  icon,
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Banner Slider",
      name: "homeSlider",
      type: "array",
      of: [{ type: "homeSlider" }],
    },
    {
      title: "Category Slider",
      name: "categorySlider",
      type: "array",
      of: [{ type: "categorySlider" }],
    },
    {
      title: "Brand Slider",
      name: "heroSlider",
      type: "array",
      of: [{ type: "brandSlider" }],
    },
    {
      title: 'Right Sidebar',
      name: 'rightSidebar',
      type: 'array',
      of: [
        {type:'bannerSidebar'}
      ]
    },
    {
      title: 'Sales & Deals',
      name: 'salesandDeals',
      type: 'array',
      of: [
        {
          type:'salesandDeals'
        }
      ]
    },
    {
      name: 'testimonials',
      title: 'Testimoials Section data',
      type:'testimonialsData'
    },
    {
      name: 'offerData',
      title: 'News Letter Data',
      type:'newsletter'
    },
    {
      name: 'trendingEntry',
      title: 'Trending Products Entry',
      type: 'trendingEntry'
    },
    {
      name: 'dealsEntry',
      title: 'Deals Products Entry',
      type: 'dealsEntry'
    }
  ],
};
