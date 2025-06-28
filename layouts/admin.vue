<script setup lang="ts">
useSeoMeta({
    title: 'Admin'
})
</script>

<template>
    <nav>
        <NuxtLink to="/">Admin</NuxtLink>
    </nav>
    <main>
        <slot></slot>
    </main>
</template>