<script setup lang="ts">
import type { Product } from '~/types/Product';


const route = useRoute()

const {data} = useFetch<Product>(`https://dummyjson.com/products/${route.params.id}?select=id,title,price`)

</script>

<template>
    <h1>Product {{ route.params.id }}</h1>
    <p v-if="data">
        <p>{{ data.title }}</p>
        <p>{{ data.price }}</p>
    </p>
    <p v-else>loading..</p>
</template>