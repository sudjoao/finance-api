export type User = {
    id: number,
    email: string,
    password: string,
}

export type CreateUserDto = Omit<User, 'id'>;

export type NoPasswordUser = Omit<User, 'password'>;

export function serializeUser(user: User): NoPasswordUser {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }