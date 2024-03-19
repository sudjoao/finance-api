import { CategoryRepository } from "../../../application/repositories/categoryRepository";
import { Category } from "../../entities/Category";

export class GetCategoryUseCase {
    constructor(private categoryRepository: CategoryRepository) {}
    async execute(id: number): Promise<Category | null> {
        return this.categoryRepository.findById(id);
    }
}