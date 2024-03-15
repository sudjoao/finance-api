import express from 'express';
import { UserController } from '../frameworks/controllers/userController';
import { UserService } from '../application/services/userService';
import { GetUserUseCase } from '../domain/usecases/user/getUserUseCase';
import { PrismaUserDataSource } from '../frameworks/datasources/prisma/prismaUserDataSource';
import { MemoryUserDataSource } from '../frameworks/datasources/memory/memoryUserDataSource';

const router = express.Router();
// const userDataSource = new PrismaUserDataSource();
const userDataSource = new MemoryUserDataSource();
const getUserUseCase = new GetUserUseCase(userDataSource);
const userService = new UserService(getUserUseCase);
const userController = new UserController(userService);

router.get('/:id', userController.getUser.bind(userController));

export { router as userRoutes };