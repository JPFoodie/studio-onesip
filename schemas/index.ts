import { type SchemaTypeDefinition } from 'sanity'

// Objects
import portableBlocks from './objects/portableBlocks'
import imageWithCaption from './objects/imageWithCaption'
import videoEmbed from './objects/videoEmbed'
import seo from './objects/seo'

// Documents
import author from './documents/author'
import tag from './documents/tag'
import sake from './documents/sake'
import recipe from './documents/recipe'
import blogPost from './documents/blogPost'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Objects
    portableBlocks,
    imageWithCaption,
    videoEmbed,
    seo,
    // Documents
    author,
    tag,
    sake,
    recipe,
    blogPost,
  ],
}

export default schema