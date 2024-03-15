import { UserRepository } from "../../../application/repositories/userRepository";
import { User } from "../../../domain/entities/User";

export class PrismaUserDataSource implements UserRepository {
    findById(id: Number): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
}