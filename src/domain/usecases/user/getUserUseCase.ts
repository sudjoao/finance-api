import { UserRepository } from "../../../application/repositories/userRepository";
import { User } from "../../entities/User";

export class GetUserUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(userId: Number): Promise<User | null> {
        return this.userRepository.findById(userId);
    }
}