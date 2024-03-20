import { Category } from "./Category";

export type Finance = {
    id: number;
    name: string;
    value: number;
    createdAt: Date;
    categoryId: number;
    userId: number;
};

export type CreateFinanceDto = Omit<Finance, 'id'>;

export type FinanceWithCategory = Finance & { category: Category };