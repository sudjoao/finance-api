import { Request, Response } from "express";
import { CategoryService } from "../../application/services/categoryService";

export class CategoryController {
    constructor(private categoryService: CategoryService) {}

    async createCategory(req: Request, res: Response) {
        const category = req.body;
        const createdCategory = await this.categoryService.createCategory(category);
        res.status(201).json(createdCategory);
    }

    async getCategoryById(req: Request, res: Response) {
        const categoryId = parseInt(req.params.id);
        const category = await this.categoryService.getCategoryById(categoryId);
        if (category) {
            res.status(200).json(category);
        } else {
            res.status(404).json({ message: "Category not found" });
        }
    }

    async listCategories(req: Request, res: Response) {
        const categories = await this.categoryService.listCategories();
        res.status(200).json(categories);
    }
}