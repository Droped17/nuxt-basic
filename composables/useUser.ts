export interface User {
    id: number
    name: string
    email: string
}

export const useUser = () => {
    const user = useState<User | null>('user', () => null)
    const setUser = (newUser: User) => {
        user.value = newUser
    }
    const onLogin = async(formData: {email: string, password: string}) => {
    try {
        await $fetch('/api/login', {
            method: 'POST',
            // $fetch don't need stringify
            body: formData
        })
        await getUser()
        alert('Login Success!')
    } catch (error) {
        alert('Login Failed!')
    }
    }

    const logout = async() => {
        try {
            await $fetch('/api/logout', {
                method: 'POST'
            })
            user.value = null
            alert('Logout Successfully!')
        } catch (error) {
            alert('Logout Failed!')
        }
    }


    const getUser = async() => {
        const fetch = useRequestFetch()
        try {
            const {data} = await fetch('/api/me')
            user.value = data
        } catch (error) {
            user.value = null
        }
    }

    return {
        user,
        setUser,
        onLogin,
        getUser,
        logout
    }
}
