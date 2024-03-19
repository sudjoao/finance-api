import { CreateCategoryDto, Category } from "../../domain/entities/Category";

export interface CategoryRepository {
    create(category: CreateCategoryDto) : Promise<Category>;
    findById(id: number) : Promise<Category | null>;
    findAll() : Promise<Category[]>;
}