export default defineEventHandler((e) => {
    deleteCookie(e, 'token')
    sendRedirect(e, '/')
})