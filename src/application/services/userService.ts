import { CreateUserDto, User } from "../../domain/entities/User";
import { CreateUserUseCase } from "../../domain/usecases/user/createUserUseCase";
import { GetUserUseCase } from "../../domain/usecases/user/getUserUseCase";

export class UserService {
    constructor(private getUserUseCase: GetUserUseCase, private createUserUseCase: CreateUserUseCase){}

    async createUser(user: CreateUserDto): Promise<User> {
        return this.createUserUseCase.execute(user);
    }

    async getUserById(userId: number): Promise<User | null> {
        return this.getUserUseCase.execute(userId);
    }
}