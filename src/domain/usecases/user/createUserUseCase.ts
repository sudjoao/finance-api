import { User } from "@prisma/client";
import { UserRepository } from "../../../application/repositories/userRepository";
import { CreateUserDto } from "../../entities/User";

export class CreateUserUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(user: CreateUserDto): Promise<User> {
        const oldUser = await this.userRepository.findByEmail(user.email);
        if (oldUser) {
            throw new Error('User already exists');
        }
        return this.userRepository.create(user);
    }
}