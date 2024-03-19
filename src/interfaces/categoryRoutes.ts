import express from "express";
import { CategoryService } from "../application/services/categoryService";
import { CreateCategoryUseCase } from "../domain/usecases/category/createCategoryUseCase";
import { GetCategoryUseCase } from "../domain/usecases/category/getCategoryUseCase";
import { ListCategoryUseCase } from "../domain/usecases/category/listCategoryUseCase";
import { CategoryController } from "../frameworks/controllers/categoryController";
import { PrismaCategoryDataSource } from "../frameworks/datasources/prisma/prismaCategoryDataSource";

const router = express.Router();
const categoryDataSource = new PrismaCategoryDataSource();
const createCategoryUseCase = new CreateCategoryUseCase(categoryDataSource);
const getCategoryUseCase = new GetCategoryUseCase(categoryDataSource);
const listCategoryUseCase = new ListCategoryUseCase(categoryDataSource);
const categoryService = new CategoryService(getCategoryUseCase, createCategoryUseCase, listCategoryUseCase);
const categoryController = new CategoryController(categoryService);

router.post('/', categoryController.createCategory.bind(categoryController));
router.get('/:id', categoryController.getCategoryById.bind(categoryController));
router.get('/', categoryController.listCategories.bind(categoryController));

export { router as categoryRoutes };