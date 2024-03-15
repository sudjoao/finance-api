import { User } from "../../domain/entities/User";

export interface UserRepository {
    findById(id: Number) : Promise<User | null>;
}