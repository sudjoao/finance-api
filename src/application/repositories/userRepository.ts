import { CreateUserDto, User } from "../../domain/entities/User";

export interface UserRepository {
    create(user: CreateUserDto) : Promise<User>;
    findById(id: number) : Promise<User | null>;
    findByEmail(email: string) : Promise<User | null>;
}