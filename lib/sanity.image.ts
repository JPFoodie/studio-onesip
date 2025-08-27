import createImageUrlBuilder from '@sanity/image-url'
import { sanityClient } from './sanity.client'

export const urlFor = (src: any) => createImageUrlBuilder(sanityClient).image(src)