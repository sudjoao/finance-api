import { User } from "../../domain/entities/User";
import { GetUserUseCase } from "../../domain/usecases/user/getUserUseCase";

export class UserService {
    constructor(private getUserUseCase: GetUserUseCase){}

    async getUserById(userId: Number): Promise<User | null> {
        return this.getUserUseCase.execute(userId);
    }
}