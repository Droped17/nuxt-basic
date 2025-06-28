import { Product } from "~/types/Product"

const products: Product[] = [
    {id: 1, title: 'product1', price: 3000},
    {id: 2, title: 'product2', price: 1000}
]

export default defineEventHandler(async() => {
    return products
})