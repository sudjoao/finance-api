import { UserRepository } from "../../../application/repositories/userRepository";
import { CreateUserDto, User } from "../../../domain/entities/User";

const users: User[] = [
    { id: 1, email: 'user1@gmail.com' },
    { id: 2, email: 'user1@gmail.com' }
  ];


export class MemoryUserDataSource implements UserRepository {
    create(user: CreateUserDto): Promise<User> {
        const newUser = { id: users.length + 1, email: user.email };
        users.push(newUser);
        return Promise.resolve(newUser);
    }

    findById(id: number): Promise<User | null> {
        return Promise.resolve(users.find(user => user.id == id) || null);
    }

    findByEmail(email: string): Promise<User | null> {
        return Promise.resolve(users.find(user => user.email == email) || null);
    }
}
