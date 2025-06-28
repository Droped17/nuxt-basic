import { Product } from "~/types/Product"
import {z} from 'zod'

const products: Product[] = [
    {id: 1, title: 'product1', price: 3000},
    {id: 2, title: 'product2', price: 1000}
]

export default defineEventHandler(async(e) => {
    const data = await readBody(e)
    try {
        const parsed = await z.object({
            title: z.string(),
            price: z.number()
        }).parseAsync(data)
        return {
            data: parsed
        }
    } catch (error) {
        throw createError({
            status: 400,
            message: 'Invalid request'
        })
    }
})