import {z} from 'zod'

interface FormData {
    name: string
    email: string
    password: string
}

export default defineEventHandler<{body: FormData}, Promise<{data: any}>>(async(e) => {
    const body = await readBody(e)
    const data = await z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(8)
    }).parseAsync(body)

    users.push({...data, id: users.length + 1})
    return {data: {email: data.email}}
})