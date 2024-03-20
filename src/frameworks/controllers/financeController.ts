import { FinanceService } from "../../application/services/financeService";
import { Request, Response } from "express";

export class FinanceController {
    constructor(private financeService: FinanceService) {}

    async createFinance(req: Request, res: Response) {
        const finance = req.body;
        const createdFinance = await this.financeService.create(finance);
        res.status(201).json(createdFinance);
    }

    async listCurrentMonthFinance(req: Request, res: Response) {
        const userId = parseInt(req.params.userId);
        const finances = await this.financeService.listCurrentMonth(userId);
        res.status(200).json(finances);
    }
}