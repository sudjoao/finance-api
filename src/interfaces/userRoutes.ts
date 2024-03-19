import express from 'express';
import { UserController } from '../frameworks/controllers/userController';
import { UserService } from '../application/services/userService';
import { GetUserUseCase } from '../domain/usecases/user/getUserUseCase';
import { PrismaUserDataSource } from '../frameworks/datasources/prisma/prismaUserDataSource';
import { CreateUserUseCase } from '../domain/usecases/user/createUserUseCase';
import { LoginUserUseCase } from '../domain/usecases/user/loginUserUseCase';

const router = express.Router();
const userDataSource = new PrismaUserDataSource();
const createUserUseCase = new CreateUserUseCase(userDataSource);
const getUserUseCase = new GetUserUseCase(userDataSource);
const loginUserUseCase = new LoginUserUseCase(userDataSource);
const userService = new UserService(getUserUseCase, createUserUseCase, loginUserUseCase);
const userController = new UserController(userService);

router.post('/', userController.createUser.bind(userController));
router.get('/:id', userController.getUser.bind(userController));
router.post('/login', userController.login.bind(userController));

export { router as userRoutes };