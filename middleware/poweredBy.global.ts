export default defineNuxtRouteMiddleware((to, from) => {
    if (import.meta.server) {
        const header = useResponseHeader('Heade');
        header.value = "Nuxt 3"
    }
})