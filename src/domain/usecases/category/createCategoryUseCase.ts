import { CategoryRepository } from "../../../application/repositories/categoryRepository";
import { Category, CreateCategoryDto } from "../../entities/Category";

export class CreateCategoryUseCase {
    constructor(private categoryRepository: CategoryRepository) {}
    async execute(category: CreateCategoryDto): Promise<Category> {
        return this.categoryRepository.create(category);
    }
}