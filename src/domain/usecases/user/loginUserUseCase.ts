import { User } from "@prisma/client";
import { UserRepository } from "../../../application/repositories/userRepository";
import { PasswordEncryptor } from "../../../frameworks/config/passwordEncryptor";

export class LoginUserUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(email: string, password: string): Promise<User> {
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new Error('Usuário não encontrado');
        }
        const match = await PasswordEncryptor.comparePasswords(password, user.password);
        if (!match) {
            throw new Error('Senha incorreta');
        }
        return user;
    }
}