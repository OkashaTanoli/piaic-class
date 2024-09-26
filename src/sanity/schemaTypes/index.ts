import { type SchemaTypeDefinition } from 'sanity'
import products from '../schema/products'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products],
}
