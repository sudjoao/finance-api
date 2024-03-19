import { Category } from "../../entities/Category";
import { CategoryRepository } from "../../../application/repositories/categoryRepository";

export class ListCategoryUseCase {
    constructor(private categoryRepository: CategoryRepository) {}
    async execute(): Promise<Category[]> {
        return this.categoryRepository.findAll();
    }
}