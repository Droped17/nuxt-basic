import { SignJWT } from "jose"

export default defineEventHandler(async(e) => {
    const config = useRuntimeConfig()
    const token = await new SignJWT({isAdmin: true}).setProtectedHeader({
        alg: 'HS256'
    }).setIssuedAt().setExpirationTime('2h').sign(new TextEncoder().encode(config.apiSecret))
    setCookie(e,'token', token, {
        httpOnly: true
    })
    sendRedirect(e, '/admin')
})