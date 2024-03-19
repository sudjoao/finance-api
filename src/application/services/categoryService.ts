import { Category, CreateCategoryDto } from "../../domain/entities/Category";
import { CreateCategoryUseCase } from "../../domain/usecases/category/createCategoryUseCase";
import { GetCategoryUseCase } from "../../domain/usecases/category/getCategoryUseCase";
import { ListCategoryUseCase } from "../../domain/usecases/category/listCategoryUseCase";

export class CategoryService {
    constructor(private getCategoryUseCase: GetCategoryUseCase,
        private createCategoryUseCase: CreateCategoryUseCase,
        private listCategoryUseCase: ListCategoryUseCase){}

    async createCategory(category: CreateCategoryDto): Promise<Category> {
        return this.createCategoryUseCase.execute(category);
    }

    async getCategoryById(categoryId: number): Promise<Category | null> {
        return this.getCategoryUseCase.execute(categoryId);
    }

    async listCategories(): Promise<Category[]> {
        return this.listCategoryUseCase.execute();
    }
}