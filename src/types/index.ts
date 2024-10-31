import { InferOutput, boolean, number, object, string, array } from 'valibot'
export const draftProductSchema = object({
    name: string(),
    price: number()
})

export const ProductSchema = object({
    id: number(),
    name: string(),
    price: number(),
    availability: boolean()
})
export const ProductsSchema = array(ProductSchema)
export type Product = InferOutput<typeof ProductSchema>