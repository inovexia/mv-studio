import {shopifyAssets} from 'sanity-plugin-shopify-assets'
import {defineConfig, isDev} from 'sanity'
//import { deskTool } from 'sanity/desk'
import {deskTool, type DefaultDocumentNodeResolver} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {shopifyDocumentActions} from './plugins/shopifyDocumentActions'
import {schemaTypes} from './schemas'
import {structure} from './desk'
import { SHOPIFY_STORE_ID } from './constants'
import { codeInput } from '@sanity/code-input'
import { SanityDocument } from 'sanity'
import Iframe from 'sanity-plugin-iframe-pane'

const devOnlyPlugins = [visionTool()]


// // Customize this function to show the correct URL based on the current document
// function getPreviewUrl(doc: SanityDocument) {
//   return Object.values(doc?.handle as Record<string, unknown> ?? {}).pop()
//     ? `https://mvstaging.gatsbyjs.io/blog/${Object.values(doc?.handle as Record<string, unknown> ?? {}).pop()}`
//     : window.location.host
// }
// const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
//   // Only show preview pane on `movie` schema type documents
//   switch (schemaType) {
//     case `blog`:
//       return S.document().views([
//         S.view.form(),
//         S.view
//           .component(Iframe)
//           .options({
//             url: (doc: SanityDocument) => getPreviewUrl(doc),
//           })
//           .title('Preview'),
//       ])
//     default:
//       return S.document().views([S.view.form()])
//   }
// }




export default defineConfig({
  name: 'default',
  title: 'Mattressville',
  projectId: 'ofe75d0p',
  dataset: 'production',
  plugins: [
    codeInput(),
    deskTool({ structure }),
    shopifyDocumentActions(),
    shopifyAssets({
      shopifyDomain: SHOPIFY_STORE_ID,
    }),
    ...(isDev ? devOnlyPlugins : []),
  ],

   // Preview code
   document: {
    // prev is the result from previous plugins and thus can be composed
    productionUrl: async (prev, context) => {
      // context includes the client and other details
      const { getClient, dataset, document } = context
      // console.log(document.handle)
      const client = getClient({ apiVersion: '2023-02-07' })
      if (document && document._type === 'blog') {
        // const slug = await client.fetch(
        //   `*[_type == 'blog' && _id == $postId][0].slug.current`,
        //   { postId: document._id }
        // )
        const slug = Object.values(document.handle as Record<string, unknown> ?? {}).pop();
        if (slug) {
          const params = new URLSearchParams()
        params.set('preview', 'true')
        params.set('dataset', dataset)
        return `https://mvstaging.gatsbyjs.io/blog/${slug}?${params}`
        }
        return prev
      }

      
    },
  },
  schema: {
    types: schemaTypes,
  },

 
})
