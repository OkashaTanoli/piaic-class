// sanity/products.ts
const products = {
    name: 'product',
    type: 'document',
    title: 'Products',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price'
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
    ]
}

export default products