import { safeParse } from "valibot"
import { draftProductSchema } from "../types";


type productData = {
    [k: string]: FormDataEntryValue;
}
export async function addProduct(data: productData) {
    try {
        const result = safeParse(draftProductSchema, {
            name: data.name,
            price: +data.price
        })
        if (result.success) {

        } else {
            throw new Error('datos no validos')
        }
    } catch (error) {
        console.log(error)
    }
}