export interface User {
    id: number
    name: string
    email: string
    password: string
}

export const users: User[] = [
    {id: 1, name: "John", email: 'jogn@gmail.com', password: "asdasdasdD#3"},
    {id: 2, name: "Jane", email: 'jane@gmail.com', password: "asdasdasdD#3"}
]