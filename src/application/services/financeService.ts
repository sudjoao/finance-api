import { Finance, CreateFinanceDto, FinanceWithCategory } from "../../domain/entities/Finance";
import { CreateFinanceUseCase } from "../../domain/usecases/finance/createFinanceUseCase";
import { ListCurrentMonthFinanceUseCase } from "../../domain/usecases/finance/listCurrentMonthFinanceUseCase";

export class FinanceService {
    constructor(private createFinanceUseCase: CreateFinanceUseCase, private listCurrentMonthFinanceUseCase: ListCurrentMonthFinanceUseCase) {}

    async create(finance: CreateFinanceDto): Promise<Finance> {
        return this.createFinanceUseCase.execute(finance);
    }

    async listCurrentMonth(userId: number): Promise<FinanceWithCategory[]> {
        return this.listCurrentMonthFinanceUseCase.execute(userId);
    }
}