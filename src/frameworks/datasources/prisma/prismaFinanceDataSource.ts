import { FinanceRepository } from "../../../application/repositories/financeRepository";
import { Finance, CreateFinanceDto, FinanceWithCategory } from "../../../domain/entities/Finance";
import { PrismaClient } from "@prisma/client";
export class PrismaFinanceDataSource implements FinanceRepository {
    create(finance: CreateFinanceDto): Promise<Finance> {
        const prisma = new PrismaClient()
        try {
            const createdFinance = prisma.finance.create({
                data: finance
            });
            prisma.$disconnect();
            return createdFinance;
        } catch (error) {
            prisma.$disconnect();
            throw error;
        }
    }
    listCurrentMonth(userId: number): Promise<FinanceWithCategory[]> {
        const prisma = new PrismaClient()
        try {
            const finances = prisma.finance.findMany({
                where: {
                    userId: userId
                },
                include: {
                    category: true
                }
            });
            prisma.$disconnect();
            return finances;
        } catch (error) {
            prisma.$disconnect();
            throw error;
        }
    }
}