import { UserRepository } from "../../../application/repositories/userRepository";
import { User } from "../../../domain/entities/User";

const users: User[] = [
    { id: 1, phone: '99999999999' },
    { id: 2, phone: '99999999999' }
  ];


export class MemoryUserDataSource implements UserRepository {
    findById(id: Number): Promise<User | null> {
        return Promise.resolve(users.find(user => user.id == id) || null);
    }
}