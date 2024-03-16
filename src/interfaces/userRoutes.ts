import express from 'express';
import { UserController } from '../frameworks/controllers/userController';
import { UserService } from '../application/services/userService';
import { GetUserUseCase } from '../domain/usecases/user/getUserUseCase';
import { PrismaUserDataSource } from '../frameworks/datasources/prisma/prismaUserDataSource';
import { MemoryUserDataSource } from '../frameworks/datasources/memory/memoryUserDataSource';
import { CreateUserUseCase } from '../domain/usecases/user/createUserUseCase';

const router = express.Router();
const userDataSource = new PrismaUserDataSource();
// const userDataSource = new MemoryUserDataSource();
const createUserUseCase = new CreateUserUseCase(userDataSource);
const getUserUseCase = new GetUserUseCase(userDataSource);
const userService = new UserService(getUserUseCase, createUserUseCase);
const userController = new UserController(userService);

router.post('/', userController.createUser.bind(userController));
router.get('/:id', userController.getUser.bind(userController));

export { router as userRoutes };