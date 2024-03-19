import { PrismaClient } from "@prisma/client";
import { CategoryRepository } from "../../../application/repositories/categoryRepository";
import { CreateCategoryDto, Category } from "../../../domain/entities/Category";

export class PrismaCategoryDataSource implements CategoryRepository {
    create(category: CreateCategoryDto): Promise<Category> {
        const prisma = new PrismaClient()
        try {
            const newCategory = prisma.category.create({
                data: {
                    name: category.name,
                    description: category.description
                }
            })
            prisma.$disconnect();
            return newCategory;
        } catch (error) {
            prisma.$disconnect();
            throw error;
        }
    }
    findById(id: number): Promise<Category | null> {
        const prisma = new PrismaClient()
        try {
            const category = prisma.category.findUnique({
                where: {
                    id: id
                }
            })
            prisma.$disconnect();
            return category;
        } catch (error) {
            prisma.$disconnect();
            throw error;
        }
    }
    findAll(): Promise<Category[]> {
        const prisma = new PrismaClient()
        try {
            const categories = prisma.category.findMany();
            prisma.$disconnect();
            return categories;
        } catch (error) {
            prisma.$disconnect();
            throw error;
        }
    }

}