// document types
// Shopify documents
import collection from './documents/collection'
import product from './documents/product'
import productVariant from './documents/productVariant'
// Sanity Documents
import siteSettings from './documents/siteSettings'
import headerOfferText from './documents/headerOfferText'
import page from './documents/page'
import homepageData from './documents/homepage/homepageData'
import ctaSection from './documents/ctaSection'
import blog from './documents/blog'
import blogPageContent from './documents/blogPageContent'
import blogCategory from './documents/blogCategory'
import couponPageContent from './documents/coupons/couponPageContent'
import coupons from './documents/coupons/coupons'
import testimonials from './documents/testimonials'
import mattressMatchMakerData from './documents/mattressMatchMaker/mattressMatchMakerData'
import tags from './documents/tags'
import flyerPageContent from './documents/flyerPageContent'
import flyers from './documents/flyers'

// objects
import accordion from './objects/accordion'
import accordionGroup from './objects/accordionGroup'
import callout from './objects/callout'
import inventory from './objects/inventory'
import option from './objects/option'
import priceRange from './objects/priceRange'
import proxyString from './objects/proxyString'
import shopifyCollection from './objects/shopifyCollection'
import shopifyCollectionRule from './objects/shopifyCollectionRule'
import shopifyProduct from './objects/shopifyProduct'
import shopifyProductVariant from './objects/shopifyProductVariant'
// Settings object
import topHeader from './objects/header/topHeader'
import socialicons from './objects/header/socialicons'
import menu from './objects/footer/menu'
import mainmenu from './objects/header/mainMenu'
import megaMenu from './objects/header/megaMenu'
import menuItems from './objects/header/menuItems'
import subMenu from './objects/header/subMenu'
import topFooter from './objects/footer/topFooter'
import about from './objects/footer/about'
import brands from './objects/footer/brands'
import brandType from './objects/footer/brandType'
import stylesTypes from './objects/footer/stylesTypes'
import styleType from './objects/footer/styleType'
import location from './objects/footer/location'
import bottomFooter from './objects/footer/bottomFooter'
import areas from './objects/footer/areas'
import paySafe from './objects/footer/paySafe'
import socialMedia from './objects/footer/socialMedia'
import tabletFooter from './objects/footer/tablet/tabletFooter'
import accordionData from './objects/footer/tablet/accordionData'
import tabletAbout from './objects/footer/tablet/tabletAbout'
import stylesTypesmenu from './objects/footer/tablet/stylesTypesmenu'
import locationmenu from './objects/footer/tablet/locationmenu'
import brandsmenu from './objects/footer/tablet/brandsmenu'
import menues from './objects/footer/tablet/menues'
import styleTypemenu from './objects/footer/tablet/styleTypemenu'
import pageContent from './objects/page/pageContent'
import hero from './objects/page/hero'
import textWithIllustration from './objects/page/textWithIllustration'
import seoData from './objects/seoData'
import whyMVmainData from './objects/page/whyMattressville/whyMVmainData'
import mattressGuideData from './objects/page/mattressFoundation/mattressGuideData'
import mattressFoundation from './objects/page/mattressFoundation/mattressFoundation'
import mattressSizes from './objects/page/mattressBuyingGuide/mattressSizes'
import rightmattress from './objects/page/choosingTheRightMattress/rightmattress'
import contactUsData from './objects/page/contactUs/contactUsData'
import whyMVbannerSection from './objects/page/whyMattressville/whyMVbannerSection'
import whyMViconset from './objects/page/whyMattressville/whyMViconset' 
import whyMVqualityMattressBrand from './objects/page/whyMattressville/whyMVqualityMattressBrand'
import whyMVfaqs from './objects/page/whyMattressville/whyMVfaqs'
import whyreasonablePrices from './objects/page/whyMattressville/whyreasonablePrices'
import whyMVbusinessStrategy from './objects/page/whyMattressville/whyMVbusinessStrategy'
import totalSaving from './objects/page/whyMattressville/totalSaving'
import choosingrightmattress from './objects/page/choosingTheRightMattress/choosingrightmattress'
import infoBlocks from './objects/page/contactUs/infoBlocks'
import whyMVcards from './objects/page/whyMattressville/whyMVcards'
import whyMVretailers from './objects/page/whyMattressville/whyMVretailers'
import whyMVmattressville from './objects/page/whyMattressville/whyMVmattressville'
import whyMVoutletStores from './objects/page/whyMattressville/whyMVoutletStores'
import strategyCards from './objects/page/whyMattressville/strategyCards'
import innerspring from './objects/page/choosingTheRightMattress/innerspring'
import latex from './objects/page/choosingTheRightMattress/latex'
import memoryFoam from './objects/page/choosingTheRightMattress/memoryFoam'
import pocketCoil from './objects/page/choosingTheRightMattress/pocketCoil'
import sleepStyle from './objects/page/choosingTheRightMattress/sleepStyle'
import pros from './objects/page/choosingTheRightMattress/pros'
import cons from './objects/page/choosingTheRightMattress/cons'
import callToAction from './objects/callToAction'
import ctaData from './objects/ctaData'
import blogmainData from './objects/blogs/blogmainData'
import blogSeoData from './objects/blogs/blogSeoData'
import blogSocialIcon from './objects/blogs/blogSocialIcon'
import couponCategories from './objects/coupons/couponCategories'
import testimonialsData from './objects/testimonialsData'
import homeSlider from './objects/page/homepage/homeSlider'
import categorySlider from './objects/page/homepage/categorySlider'
import brandSlider from './objects/page/homepage/brandSlider'
import bannerSidebar from './objects/page/homepage/bannerSidebar'
import salesandDeals from './objects/page/homepage/salesandDeals'
import newsletter from './objects/page/homepage/newsletter'
import trendingEntry from './objects/page/homepage/trendingEntry'
import dealsEntry from './objects/page/homepage/dealsEntry'
import explore from './objects/page/homepage/explore'
import matchMakerSeo from './objects/page/mattressMatchMaker/matchMakerSeo'
import matchMakerToolData from './objects/page/mattressMatchMaker/matchMakerToolData'
import matchMakerQuiz from './objects/page/mattressMatchMaker/matchMakerQuiz'
import selectOption from './objects/page/mattressMatchMaker/selectOption'
import flyercta from './objects/page/flyercta'
import category from './objects/blogs/category'

// block content
import blockContent from './blocks/blockContent'
import customBlock from './blocks/customBlock'
import richText from './blocks/richText'

export const schemaTypes = [
  // document types
  collection,
  product,
  productVariant,
  siteSettings,
  headerOfferText,
  page,
  homepageData,
  ctaSection,
  blog,
  blogPageContent,
  blogCategory,
  couponPageContent,
  coupons,
  testimonials,
  mattressMatchMakerData,
  tags,
  flyerPageContent,
  flyers,

  // objects
  accordion,
  accordionGroup,
  callout,
  inventory,
  option,
  priceRange,
  proxyString,
  shopifyCollection,
  shopifyCollectionRule,
  shopifyProduct,
  shopifyProductVariant,
  // settings objects
  topHeader,
  socialicons,
  mainmenu,
  megaMenu,
  menuItems,
  subMenu,
  topFooter,
  about,
  brands,
  brandType,
  stylesTypes,
  styleType,
  location,
  bottomFooter,
  areas,
  menu,
  paySafe,
  socialMedia,
  tabletFooter,
  accordionData,
  tabletAbout,
  stylesTypesmenu,
  locationmenu,
  brandsmenu,
  menues,
  styleTypemenu,
  callToAction,
  ctaData,
  // Homepage
  homeSlider,
  categorySlider,
  brandSlider,
  bannerSidebar,
  pageContent,
  hero,
  salesandDeals,
  newsletter,
  trendingEntry,
  dealsEntry,
  explore,
  // Pages
  textWithIllustration,
  seoData,
  whyMVmainData,
  mattressFoundation,
  mattressGuideData,
  mattressSizes,
  rightmattress,
  contactUsData,
  whyMVbannerSection,
  whyMViconset,
  whyMVqualityMattressBrand,
  whyMVfaqs,
  whyreasonablePrices,
  whyMVbusinessStrategy,
  totalSaving,
  choosingrightmattress,
  infoBlocks,
  whyMVcards,
  whyMVretailers,
  whyMVmattressville,
  whyMVoutletStores,
  strategyCards,
  innerspring,
  latex,
  memoryFoam,
  pocketCoil,
  sleepStyle,
  pros,
  cons,
  // Blogs
  blogmainData,
  blogSeoData,
  blogSocialIcon,
  category,
  // Coupons
  couponCategories,
  // Testimonials
  testimonialsData,
  // Mattress Match maker
  matchMakerSeo,
  matchMakerToolData,
  matchMakerQuiz,
  selectOption,
  flyercta,
  // block content
  blockContent,
  customBlock,
  richText
]
