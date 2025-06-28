import {z} from 'zod'
import { SignJWT } from 'jose'

export default defineEventHandler(async(e) => {
    const config = useRuntimeConfig()
    const body = await readBody(e)
    const data = await z.object({
        email: z.string().email(),
        password: z.string().min(8)
    }).parseAsync(body)

    const user = users.find((u) => u.email === data.email && u.password === data.password)
    if (!user) {
       throw createError({
        message: 'Invalid email or password',
        status: 401
       }) 
    }

    const token = await new SignJWT({userId: user.id}).setProtectedHeader({alg: 'HS256'}).setIssuedAt().setExpirationTime('12h').sign(new TextEncoder().encode(config.apiSecret))

    setCookie(e, 'token', token, {
        httpOnly: true
    })

    return {data: {name: user.name, email: user.email}}

})