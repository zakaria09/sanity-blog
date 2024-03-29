import { type SchemaTypeDefinition } from 'sanity'
import blog from './schemas/blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog],
}
