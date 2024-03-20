import { FinanceRepository } from "../../../application/repositories/financeRepository";
import { Finance, CreateFinanceDto } from "../../entities/Finance";

export class CreateFinanceUseCase {
    constructor(private financeRepository: FinanceRepository) {}

    async execute(finance: CreateFinanceDto): Promise<Finance> {
        return this.financeRepository.create(finance);
    }
}