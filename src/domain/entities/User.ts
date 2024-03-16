export type User = {
    id: number,
    email: string
}

export type CreateUserDto = Omit<User, 'id'>;