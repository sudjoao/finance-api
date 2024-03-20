import { Finance, CreateFinanceDto, FinanceWithCategory } from "../../domain/entities/Finance";

export interface FinanceRepository {
    create(finance: CreateFinanceDto): Promise<Finance>;
    listCurrentMonth(userId: number): Promise<FinanceWithCategory[]>;
}