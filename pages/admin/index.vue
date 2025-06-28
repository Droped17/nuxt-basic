<script setup lang="ts">
definePageMeta({
    layout: false,
    middleware: 'only-admin'
})
</script>

<template>
    <nav>
        <p>Admin Layout</p>
    </nav>
    <NuxtPage />
</template>