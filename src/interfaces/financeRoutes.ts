import express from "express";
import { FinanceService } from "../application/services/financeService";
import { CreateFinanceUseCase } from "../domain/usecases/finance/createFinanceUseCase";
import { ListCurrentMonthFinanceUseCase } from "../domain/usecases/finance/listCurrentMonthFinanceUseCase";
import { FinanceController } from "../frameworks/controllers/financeController";
import { PrismaFinanceDataSource } from "../frameworks/datasources/prisma/prismaFinanceDataSource";

const router = express.Router();
const financeDataSource = new PrismaFinanceDataSource();
const createFinanceUseCase = new CreateFinanceUseCase(financeDataSource);
const listCurrentMonthFinanceUseCase = new ListCurrentMonthFinanceUseCase(financeDataSource);
const financeService = new FinanceService(createFinanceUseCase, listCurrentMonthFinanceUseCase);
const financeController = new FinanceController(financeService);

router.post('/', financeController.createFinance.bind(financeController));
router.get('/:userId', financeController.listCurrentMonthFinance.bind(financeController));

export { router as financeRoutes };