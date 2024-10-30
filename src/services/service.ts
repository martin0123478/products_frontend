import { safeParse } from "valibot"
import { draftProductSchema } from "../types";
import axios from "axios";


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
            const url = `${import.meta.env.VITE_API_URL}/api/products`
            const { data } = await axios.post(url, {
                name: result.output.name,
                price: result.output.price
            })
        } else {
            throw new Error('datos no validos')
        }
    } catch (error) {
        console.log(error)
    }
}