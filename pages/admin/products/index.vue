<script setup lang="ts">
import { NuxtLink } from '#components'

interface Products {
    id: number
    title: string
    price: number
}

/* $fetch not good */
// const data = await $fetch<{products: Products[]}>('https://dummyjson.com/products?select=id,title,price')

/* Good */
// const { data, status } = useAsyncData<{products: Products[]}>(async() => {
//     const data = await $fetch<{products: Products[]}>('https://dummyjson.com/products?select=id,title,price')
//     return data
// })

/* Better */
const {data, status} = useFetch<{products: Products[]}>('https://dummyjson.com/products?select=id,title,price')

</script>

<template>
    <div class="p-4">
        <h1>All Products</h1>
        <p>Status {{ status }}</p>
        <ul class="flex flex-col gap-2.5">
            <li v-for="item in data?.products" :key="item.id" class="cursor-pointer border border-gray-200 rounded-lg p-2">
                <NuxtLink :to="`/admin/products/${item.id}`">
                    {{ item.title }} {{ item.price }}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>