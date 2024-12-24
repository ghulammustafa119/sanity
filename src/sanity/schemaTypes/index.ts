import { type SchemaTypeDefinition } from 'sanity'
import { postTypes } from './postTypes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postTypes],
}
