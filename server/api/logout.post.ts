export default defineEventHandler((e) => {
    deleteCookie(e, 'token')
    return {data: {}}
})