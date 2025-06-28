import { jwtVerify } from "jose"

export default defineEventHandler(async(e) => {
    const config = useRuntimeConfig()
    const token = getCookie(e, 'token')
    if (!token) {
        throw createError({
            message: 'Error',
            status: 401
        })
    } 
    try {
        const {payload} = await jwtVerify(token, new TextEncoder().encode(config.apiSecret))
        const user = users.find((u) => u.id === payload.userId)
        if (!user) {
                    throw createError({
            message: 'Error',
            status: 401
        })
        }
        return {data: {id:user.id, name: user.name, email: user.email}}
    } catch (error) {
        throw createError({
            message: 'Error',
            status: 401
        })
    }
})