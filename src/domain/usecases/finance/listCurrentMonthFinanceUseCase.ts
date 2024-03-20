import { FinanceRepository } from "../../../application/repositories/financeRepository";
import { FinanceWithCategory } from "../../entities/Finance";

export class ListCurrentMonthFinanceUseCase {
    constructor(private financeRepository: FinanceRepository) {}

    async execute(userId: number): Promise<FinanceWithCategory[]> {
        return this.financeRepository.listCurrentMonth(userId);
    }
}