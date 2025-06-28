<script setup lang="ts">
const error = useError()
</script>

<template>
    <div>
        <h1>Error</h1>
        <p>{{ error?.statusCode }}</p>
        <pre>{{ error?.message }}</pre>
    </div>
</template>